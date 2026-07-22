/* ============================================================
   PRIME DCX - scroll-scrubbed cinema
   frames are declared in manifest.json: { count, path, pad, ext }
   ============================================================ */

(async function () {
  const $ = (s) => document.querySelector(s);
  const canvas = $("#film");
  const ctx = canvas.getContext("2d");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- manifest ---------- */
  let manifest = { count: 0, path: "frames/f_", pad: 4, ext: "jpg" };
  try {
    manifest = await (await fetch("manifest.json")).json();
  } catch (e) {
    console.warn("manifest.json missing - film disabled", e);
  }
  const FRAMES = manifest.count;
  const frameSrc = (i) =>
    manifest.path + String(i + 1).padStart(manifest.pad, "0") + "." + manifest.ext;

  /* ---------- progressive frame loading ----------
     pass 1: every 8th frame (site becomes usable fast)
     pass 2: every 2nd    pass 3: all                     */
  const frames = new Array(FRAMES).fill(null);
  let loadedCount = 0;
  const loaderFill = $("#loaderFill");
  const loaderPct = $("#loaderPct");
  const loader = $("#loader");
  const firstPassTotal = Math.ceil(FRAMES / 8) || 1;

  function loadFrame(i) {
    return new Promise((res) => {
      if (frames[i]) return res();
      const img = new Image();
      img.decoding = "async";
      img.onload = () => { frames[i] = img; loadedCount++; res(); };
      img.onerror = () => res();
      img.src = frameSrc(i);
    });
  }

  async function loadPass(step, onEach) {
    const idxs = [];
    for (let i = 0; i < FRAMES; i += step) idxs.push(i);
    const CONC = 12;
    let ptr = 0;
    await Promise.all(
      Array.from({ length: CONC }, async () => {
        while (ptr < idxs.length) {
          const i = idxs[ptr++];
          await loadFrame(i);
          if (onEach) onEach();
        }
      })
    );
  }

  function nearestLoaded(i) {
    if (frames[i]) return frames[i];
    for (let d = 1; d < FRAMES; d++) {
      if (frames[i - d]) return frames[i - d];
      if (frames[i + d]) return frames[i + d];
    }
    return null;
  }

  /* ---------- instant poster (hero still) while frames load ---------- */
  const poster = new Image();
  poster.src = "assets/hero2_preview.jpg";
  poster.onload = () => { if (!frames[0]) { drawFrame(poster); } };

  /* ---------- canvas ---------- */
  const DPR = Math.min(devicePixelRatio || 1, 2);
  function resize() {
    canvas.width = innerWidth * DPR;
    canvas.height = innerHeight * DPR;
  }
  resize();
  addEventListener("resize", () => { resize(); dirty = true; });

  function drawFrame(img) {
    if (!img) return;
    const cw = canvas.width, ch = canvas.height;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    const s = Math.max(cw / iw, ch / ih);
    const w = iw * s, h = ih * s;
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }

  /* ---------- scroll ---------- */
  const track = $("#track");
  let progress = 0; // 0..1
  function computeProgress() {
    const max = track.offsetHeight + track.offsetTop - innerHeight;
    progress = Math.min(1, Math.max(0, scrollY / Math.max(1, max)));
  }

  let lenis = null;
  if (window.Lenis && !reduceMotion) {
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1.0 });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }
  addEventListener("scroll", () => { computeProgress(); dirty = true; }, { passive: true });

  /* ---------- film scrub with easing (extra smoothness) ---------- */
  let shownFrame = 0;   // eased, fractional
  let dirty = true;

  /* ---------- HUD ---------- */
  const ZONES = ["STREET", "RISING", "SKYLINE", "ORBIT", "GLOBE"];
  const zoneText = $("#zoneText");
  const zoneIndex = $("#zoneIndex");
  const altiFill = $("#altiFill");
  const hudPct = $("#hudPct");
  const tSpread = $("#tSpread");
  const tExec = $("#tExec");
  const tPairs = $("#tPairs");
  const tAlt = $("#tAlt");
  let currentZone = -1;

  function setZone(z) {
    if (z === currentZone) return;
    currentZone = z;
    zoneText.classList.add("flip");
    setTimeout(() => {
      zoneText.textContent = ZONES[z];
      zoneText.style.color = z >= 3 ? "var(--gold)" : "var(--green)";
      zoneText.style.textShadow = z >= 3 ? "0 0 14px rgba(245,197,66,.5)" : "0 0 14px rgba(0,230,122,.5)";
      zoneText.classList.remove("flip");
      zoneIndex.textContent = "0" + (z + 1) + " / 05";
    }, reduceMotion ? 0 : 220);
    // scene visibility
    document.querySelectorAll(".scene").forEach((s) => {
      s.classList.toggle("active", +s.dataset.zone === z);
    });
  }

  // deterministic pseudo-live numbers driven by progress + time
  function hudTick(now) {
    const p = progress;
    const wob = Math.sin(now / 530) * 0.5 + Math.sin(now / 197) * 0.5; // -1..1
    const spread = Math.max(0, 0.0 + (wob > 0.72 ? 0.1 : 0.0));
    tSpread.textContent = spread.toFixed(1);
    tExec.textContent = Math.round(31 + wob * 6) + "ms";
    tPairs.textContent = String(Math.round(12 + p * 143));
    const alt = p < 0.6 ? Math.round(12 + p * 1400) + "m" : (p * 35).toFixed(0) + "km";
    tAlt.textContent = alt;
    altiFill.style.height = (p * 100).toFixed(2) + "%";
    hudPct.textContent = String(Math.round(p * 100)).padStart(3, "0");
  }

  /* ---------- session clocks (orbit zone) ---------- */
  function clocks() {
    const f = (tz) =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(new Date());
    const set = (id, tz) => { const el = $(id); if (el) el.textContent = f(tz); };
    set("#ckLON", "Europe/London");
    set("#ckNYC", "America/New_York");
    set("#ckTYO", "Asia/Tokyo");
    set("#ckDXB", "Asia/Dubai");
  }
  clocks();
  setInterval(clocks, 30000);

  /* ---------- stat counters ---------- */
  const counts = document.querySelectorAll(".count");
  let statsPlayed = false;
  function playStats() {
    if (statsPlayed) return;
    statsPlayed = true;
    counts.forEach((el) => {
      const to = parseFloat(el.dataset.to);
      const dec = +(el.dataset.dec || 0);
      const suf = el.dataset.suffix || "";
      const t0 = performance.now();
      const dur = reduceMotion ? 1 : 1400;
      (function step(t) {
        const k = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - k, 3);
        el.textContent = (to * e).toFixed(dec) + suf;
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }

  /* ---------- main loop ---------- */
  function loop(now) {
    computeProgress();

    // film
    if (FRAMES > 0) {
      const target = progress * (FRAMES - 1);
      const prev = shownFrame;
      shownFrame += (target - shownFrame) * (reduceMotion ? 1 : 0.14);
      if (Math.abs(shownFrame - prev) > 0.01 || dirty) {
        const img = nearestLoaded(Math.round(shownFrame));
        drawFrame(img);
        dirty = false;
      }
    }

    // zone: 5 equal bands
    const z = Math.min(4, Math.floor(progress * 5));
    setZone(z);
    if (z === 1) playStats();

    hudTick(now);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  /* ---------- boot: load pass 1, drop loader, keep filling ---------- */
  if (FRAMES > 0) {
    let done = 0;
    await loadPass(8, () => {
      done++;
      const pct = Math.round((done / firstPassTotal) * 100);
      loaderFill.style.width = pct + "%";
      loaderPct.textContent = String(pct).padStart(2, "0") + "%";
    });
  } else {
    loaderFill.style.width = "100%";
  }
  loader.classList.add("done");
  dirty = true;

  if (FRAMES > 0) {
    loadPass(2, () => { dirty = true; }).then(() => loadPass(1, () => { dirty = true; }));
  }
})();
