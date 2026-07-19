import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { z } from "zod";

const projectInputSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  client: z.string().optional(),
  category: z.string().min(1),
  summary: z.string().min(1),
  problem: z.string().optional(),
  solution: z.string().optional(),
  results: z.string().optional(),
  technologies: z.array(z.string()),
  coverImage: z.string().optional(),
  beforeImage: z.string().optional(),
  afterImage: z.string().optional(),
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
    const projects = await withRetry(() => prisma.project.findMany({ orderBy: { order: "asc" } }));
    return NextResponse.json(projects);
  } catch (error) {
    console.error("[admin/portfolio] GET failed", error);
    return NextResponse.json({ error: "Database unavailable, please try again." }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = projectInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const project = await withRetry(() => prisma.project.create({ data: parsed.data }));
  return NextResponse.json(project, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...rest } = body as { id: string } & Record<string, unknown>;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const parsed = projectInputSchema.partial().safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const project = await withRetry(() => prisma.project.update({ where: { id }, data: parsed.data }));
  return NextResponse.json(project);
}

export async function DELETE(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await withRetry(() => prisma.project.delete({ where: { id } }));
  return NextResponse.json({ ok: true });
}
