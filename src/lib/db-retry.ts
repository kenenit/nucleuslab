/**
 * Retries a database call once after a short delay.
 *
 * Why this exists: serverless Postgres providers on a free tier (Neon,
 * in particular) auto-suspend the database after a period of inactivity.
 * The first query after that can fail with "Can't reach database server"
 * while it wakes back up — that's not a bug in this app, it's expected
 * behavior of the free tier. Retrying once after ~800ms almost always
 * succeeds once the database is warm. If you're on a paid/always-on plan,
 * or a different provider, this just becomes a harmless no-op safety net.
 */
/**
 * Retries a database call with exponential backoff.
 *
 * Why this exists: serverless Postgres providers on a free tier (Neon,
 * in particular) auto-suspend the database after a period of inactivity.
 * The first query after that can fail with "Can't reach database server"
 * while it wakes back up — that's not a bug in this app, it's expected
 * behavior of the free tier. After a long idle stretch (e.g. the dev
 * machine being off overnight), cold-start can take a few seconds longer
 * than a quick single retry accounts for, so this backs off progressively
 * (1s, 2s, 4s — ~7s total) rather than giving up almost immediately.
 * If you're on a paid/always-on plan, or a different provider, this just
 * becomes a harmless no-op safety net.
 */
export async function withRetry<T>(fn: () => Promise<T>, retries = 3, delayMs = 1000): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return withRetry(fn, retries - 1, delayMs * 2);
  }
}
