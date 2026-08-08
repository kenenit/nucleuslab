import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { z } from "zod";

const jobInputSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  department: z.string().optional(),
  type: z.string().min(1),
  location: z.string().min(1),
  description: z.string().min(1),
  requirements: z.array(z.string()).optional(),
  isInternship: z.boolean().optional(),
  published: z.boolean().optional(),
  order: z.number().optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) return null;
  return session;
}

export async function GET() {
  try {
    const rows = await withRetry(() => prisma.jobListing.findMany({ orderBy: { order: "asc" } }));
    return NextResponse.json(rows);
  } catch (error) {
    console.error("[admin/careers] GET failed", error);
    return NextResponse.json({ error: "Database unavailable, please try again." }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = jobInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const row = await withRetry(() => prisma.jobListing.create({ data: parsed.data }));
  return NextResponse.json(row, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...rest } = body as { id: string } & Record<string, unknown>;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const parsed = jobInputSchema.partial().safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const row = await withRetry(() => prisma.jobListing.update({ where: { id }, data: parsed.data }));
  return NextResponse.json(row);
}

export async function DELETE(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await withRetry(() => prisma.jobListing.delete({ where: { id } }));
  return NextResponse.json({ ok: true });
}
