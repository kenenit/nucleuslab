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
export async function withRetry<T>(fn: () => Promise<T>, retries = 1, delayMs = 800): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return withRetry(fn, retries - 1, delayMs);
  }
}
