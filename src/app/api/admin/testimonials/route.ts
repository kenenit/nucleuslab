import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { z } from "zod";

const testimonialInputSchema = z.object({
  quote: z.string().min(1),
  authorName: z.string().min(1),
  authorRole: z.string().optional(),
  company: z.string().optional(),
  avatarUrl: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
  featured: z.boolean().optional(),
  order: z.number().optional(),
  published: z.boolean().optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) return null;
  return session;
}

export async function GET() {
  try {
    const rows = await withRetry(() => prisma.testimonial.findMany({ orderBy: { order: "asc" } }));
    return NextResponse.json(rows);
  } catch (error) {
    console.error("[admin/testimonials] GET failed", error);
    return NextResponse.json({ error: "Database unavailable, please try again." }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = testimonialInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const row = await withRetry(() => prisma.testimonial.create({ data: parsed.data }));
  return NextResponse.json(row, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...rest } = body as { id: string } & Record<string, unknown>;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const parsed = testimonialInputSchema.partial().safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const row = await withRetry(() => prisma.testimonial.update({ where: { id }, data: parsed.data }));
  return NextResponse.json(row);
}

export async function DELETE(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await withRetry(() => prisma.testimonial.delete({ where: { id } }));
  return NextResponse.json({ ok: true });
}
