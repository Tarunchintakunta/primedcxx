'use client';

import { useEffect, useState } from 'react';
import { NAV, SIGN_UP } from '../../lib/nav.mjs';

function Soon() {
  return <span className="mm__soon mono">SOON</span>;
}

export default function SiteNav() {
  const [open, setOpen] = useState(null);      // desktop mega-menu index
  const [mobile, setMobile] = useState(false); // mobile overlay
  const [acc, setAcc] = useState(0);           // mobile accordion index
  const [solid, setSolid] = useState(false);

  // Solidify the bar once the hero is behind us.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is up.
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobile]);

  // Escape closes whatever is open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setOpen(null);
      setMobile(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`bar${solid ? ' bar--solid' : ''}${open !== null ? ' bar--open' : ''}`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="bar__row">
        <a className="bar__logo" href="/" aria-label="PRIME DCX home">
          <span className="lg-prime">PRIME</span>
          <span className="lg-div"></span>
          <span className="lg-dcx">DCX</span>
        </a>

        <nav className="bar__nav mono" aria-label="Primary">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`bar__top${open === i ? ' is-open' : ''}`}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              aria-expanded={open === i}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="bar__act mono">
          <a className="bar__cta" href={SIGN_UP}>START TRADING</a>
          <button
            className={`bar__burger${mobile ? ' is-open' : ''}`}
            onClick={() => setMobile(v => !v)}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
          >
            <span></span><span></span>
          </button>
        </div>
      </div>

      {/* ── desktop mega-menu ─────────────────────────────────────── */}
      {NAV.map((item, i) => (
        <div
          key={item.label}
          className={`mm${open === i ? ' is-open' : ''}`}
          onMouseEnter={() => setOpen(i)}
          hidden={open !== i}
        >
          <div className="mm__inner">
            <div className="mm__lead">
              <p className="mm__kicker mono">{item.label}</p>
              <p className="mm__blurb">{item.blurb}</p>
              <a className="mm__all mono" href={item.href}>
                View all &rarr;
              </a>
            </div>
            <div className="mm__cols">
              {item.cols.map(col => (
                <div className="mm__col" key={col.title}>
                  <h4 className="mm__title mono">{col.title}</h4>
                  {col.links.map(l => (
                    <a
                      key={l.href + l.label}
                      href={l.href}
                      className={`mm__link${l.soon ? ' is-soon' : ''}`}
                    >
                      <span>{l.label}</span>
                      {l.soon && <Soon />}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* ── mobile overlay ────────────────────────────────────────── */}
      <div className={`mnav${mobile ? ' is-open' : ''}`} aria-hidden={!mobile}>
        <div className="mnav__scroll">
          {NAV.map((item, i) => (
            <div className={`mnav__sec${acc === i ? ' is-open' : ''}`} key={item.label}>
              <button
                className="mnav__head mono"
                onClick={() => setAcc(acc === i ? -1 : i)}
                aria-expanded={acc === i}
              >
                {item.label}
                <span className="mnav__chev" aria-hidden="true"></span>
              </button>
              <div className="mnav__body">
                {item.cols.map(col => (
                  <div key={col.title}>
                    <h4 className="mm__title mono">{col.title}</h4>
                    {col.links.map(l => (
                      <a
                        key={l.href + l.label}
                        href={l.href}
                        className={`mnav__link${l.soon ? ' is-soon' : ''}`}
                        onClick={() => setMobile(false)}
                      >
                        <span>{l.label}</span>
                        {l.soon && <Soon />}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mnav__act">
            <a className="btn btn--fill" href={SIGN_UP}>Start Trading</a>
          </div>
        </div>
      </div>
    </header>
  );
}
