// Public, keyless weekly calendar published by Fair Economy
// (the JSON feed behind the Forex Factory economic calendar).
// No API key. Cached for five minutes so we do not hammer the publisher.

const FEEDS = [
  'https://nfs.faireconomy.media/ff_calendar_thisweek.json',
  'https://nfs.faireconomy.media/ff_calendar_nextweek.json',
];

const TTL_MS = 5 * 60 * 1000;

let cache = { at: 0, body: null };

function normalize(event) {
  if (!event || !event.title || !event.date) return null;
  const time = Date.parse(event.date);
  if (!Number.isFinite(time)) return null;
  return {
    time: event.date,
    country: event.country || '',
    title: event.title,
    impact: event.impact || '',
    actual: event.actual ?? '',
    forecast: event.forecast ?? '',
    previous: event.previous ?? '',
  };
}

async function loadFeed(url) {
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`calendar feed ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error('unexpected calendar payload');
  return data;
}

export async function GET() {
  const now = Date.now();
  if (cache.body && now - cache.at < TTL_MS) {
    return Response.json(cache.body, {
      headers: { 'Cache-Control': 'public, max-age=300' },
    });
  }

  const settled = await Promise.allSettled(FEEDS.map(loadFeed));
  const batches = settled
    .filter((r) => r.status === 'fulfilled')
    .map((r) => r.value);

  if (batches.length === 0) {
    if (cache.body) {
      return Response.json(cache.body, {
        headers: { 'Cache-Control': 'public, max-age=60' },
      });
    }
    return Response.json(
      { error: 'Economic calendar data is unavailable right now.' },
      { status: 502 },
    );
  }

  const seen = new Set();
  const events = batches
    .flat()
    .map(normalize)
    .filter(Boolean)
    .filter((event) => Date.parse(event.time) >= now - 60_000)
    .sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
    .filter((event) => {
      const key = `${event.time}|${event.country}|${event.title}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  const body = {
    source: 'Fair Economy',
    sourceUrl: 'https://www.faireconomy.media/',
    events,
  };
  cache = { at: now, body };
  return Response.json(body, {
    headers: { 'Cache-Control': 'public, max-age=300' },
  });
}
