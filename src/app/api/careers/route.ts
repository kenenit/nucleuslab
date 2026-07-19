import { NextRequest, NextResponse } from "next/server";
import { jobApplicationSchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { withRetry } from "@/lib/db-retry";

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);
    const { success } = rateLimit(`careers:${ip}`, { limit: 5, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }

    const body = await req.json();
    const parsed = jobApplicationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const { fullName, email, phone, resumeUrl, coverLetter, jobListingId } = parsed.data;

    await withRetry(() =>
      prisma.jobApplication.create({
        data: {
          fullName,
          email,
          phone: phone || null,
          resumeUrl,
          coverLetter: coverLetter || null,
          jobListingId: jobListingId || null,
        },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[careers] application failed", error);
    return NextResponse.json(
      { error: "We couldn't save your application — please try again in a moment." },
      { status: 500 }
    );
  }
}
