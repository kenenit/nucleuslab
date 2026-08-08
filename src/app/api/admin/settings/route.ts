import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { z } from "zod";

const settingsInputSchema = z.object({
  contactEmail: z.string().min(1),
  contactPhone: z.string().optional(),
  contactAddress: z.string().optional(),
  contactHours: z.string().optional(),
  socialLinkedin: z.string().optional(),
  socialTwitter: z.string().optional(),
  socialInstagram: z.string().optional(),
  socialFacebook: z.string().optional(),
  socialTiktok: z.string().optional(),
  socialYoutube: z.string().optional(),
  socialGithub: z.string().optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) return null;
  return session;
}

// Single settings row, always id "main" — created on first read if missing.
export async function GET() {
  try {
    const row = await withRetry(() =>
      prisma.siteSettings.upsert({ where: { id: "main" }, update: {}, create: { id: "main" } })
    );
    return NextResponse.json(row);
  } catch (error) {
    console.error("[admin/settings] GET failed", error);
    return NextResponse.json({ error: "Database unavailable, please try again." }, { status: 503 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = settingsInputSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const row = await withRetry(() =>
    prisma.siteSettings.upsert({
      where: { id: "main" },
      update: parsed.data,
      create: { id: "main", ...parsed.data },
    })
  );
  return NextResponse.json(row);
}
