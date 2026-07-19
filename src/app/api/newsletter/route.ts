import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { withRetry } from "@/lib/db-retry";

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);
    const { success } = rateLimit(`newsletter:${ip}`, { limit: 5, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }

    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    await withRetry(() =>
      prisma.newsletterSubscriber.upsert({
        where: { email: parsed.data.email },
        update: { subscribed: true, unsubscribedAt: null },
        create: { email: parsed.data.email },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[newsletter] subscription failed", error);
    return NextResponse.json(
      { error: "We couldn't save your subscription — please try again in a moment." },
      { status: 500 }
    );
  }
}
