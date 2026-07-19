import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { withRetry } from "@/lib/db-retry";

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);
    const { success } = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }

    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Honeypot: if filled in, silently accept without persisting (don't tip off bots)
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, phone, company, service, message } = parsed.data;

    await withRetry(() =>
      prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone: phone || null,
          company: company || null,
          service: service || null,
          message,
          source: req.headers.get("referer") ?? undefined,
        },
      })
    );

    // TODO: send a notification email to the team and/or an auto-reply to the
    // submitter here via your email provider (Resend, Postmark, SES, etc.),
    // using EMAIL_FROM / EMAIL_PROVIDER_API_KEY from the environment.

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] submission failed", error);
    return NextResponse.json(
      { error: "We couldn't save your message — the database may be temporarily unavailable. Please try again in a moment." },
      { status: 500 }
    );
  }
}
