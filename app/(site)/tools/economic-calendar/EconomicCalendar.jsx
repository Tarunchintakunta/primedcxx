'use client';

import { useEffect, useState } from 'react';

function cell(value) {
  const text = value == null ? '' : String(value).trim();
  return text || '—';
}

function formatTime(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(date);
}

export default function EconomicCalendar() {
  const [state, setState] = useState({ status: 'loading', events: [], error: '' });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/economic-calendar/', { cache: 'no-store' });
        const data = await res.json().catch(() => null);
        if (cancelled) return;
        if (!res.ok || !data || data.error) {
          setState({
            status: 'error',
            events: [],
            error: (data && data.error) || 'Economic calendar data is unavailable right now.',
          });
          return;
        }
        setState({
          status: 'ready',
          events: Array.isArray(data.events) ? data.events : [],
          error: '',
          source: data.source || 'Fair Economy',
          sourceUrl: data.sourceUrl || 'https://www.faireconomy.media/',
        });
      } catch {
        if (!cancelled) {
          setState({
            status: 'error',
            events: [],
            error: 'Economic calendar data is unavailable right now.',
          });
        }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <main>
      <div className="tape mono" aria-hidden="true"><div className="tape__inner"></div></div>
      <section className="phero">
        <div className="phero__bg" style={{ backgroundImage: "url('/assets/stills/last1.png')" }}></div>
        <a className="backlink" href="/tools/">BACK TO TOOLS</a>
        <p className="phero__eyebrow mono">TOOLS</p>
        <h1>Economic Calendar</h1>
        <p>Upcoming releases that move forex, gold and indices — time, currency, impact, and the published actual, forecast and previous figures when the feed includes them.</p>
      </section>

      <section className="sec sec--line">
        {state.status === 'loading' && (
          <p className="ecal__status mono">Loading upcoming events…</p>
        )}
        {state.status === 'error' && (
          <p className="ecal__status ecal__status--error" role="alert">{state.error}</p>
        )}
        {state.status === 'ready' && state.events.length === 0 && (
          <p className="ecal__status">No upcoming events in the current calendar feed.</p>
        )}
        {state.status === 'ready' && state.events.length > 0 && (
          <div className="mtable-wrap">
            <table className="mtable ecal">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>CURRENCY</th>
                  <th>EVENT</th>
                  <th>IMPACT</th>
                  <th style={{ textAlign: 'right' }}>ACTUAL</th>
                  <th style={{ textAlign: 'right' }}>FORECAST</th>
                  <th style={{ textAlign: 'right' }}>PREVIOUS</th>
                </tr>
              </thead>
              <tbody>
                {state.events.map((event) => (
                  <tr key={`${event.time}|${event.country}|${event.title}`}>
                    <td className="sym">{formatTime(event.time)}</td>
                    <td className="sym">{cell(event.country)}</td>
                    <td>{event.title}</td>
                    <td>
                      {event.impact
                        ? <span className={`ecal__impact ecal__impact--${event.impact.toLowerCase()}`}>{event.impact}</span>
                        : '—'}
                    </td>
                    <td className="px">{cell(event.actual)}</td>
                    <td className="px">{cell(event.forecast)}</td>
                    <td className="px">{cell(event.previous)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {state.status === 'ready' && (
          <p className="note">
            Calendar data from <a href={state.sourceUrl} style={{ color: 'var(--gold)' }}>{state.source}</a>.
            Times shown in your local timezone. Figures appear only when the feed publishes them.
          </p>
        )}
      </section>
    </main>
  );
}
