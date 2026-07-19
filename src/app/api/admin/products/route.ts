import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { z } from "zod";

const productInputSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  tagline: z.string().min(1),
  overview: z.string().min(1),
  features: z.array(z.string()),
  storeUrlIos: z.string().optional(),
  storeUrlAndroid: z.string().optional(),
  liveDemoUrl: z.string().optional(),
  learnMoreUrl: z.string().optional(),
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
    const products = await withRetry(() => prisma.product.findMany({ orderBy: { order: "asc" } }));
    return NextResponse.json(products);
  } catch (error) {
    console.error("[admin/products] GET failed", error);
    return NextResponse.json({ error: "Database unavailable, please try again." }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = productInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const product = await withRetry(() => prisma.product.create({ data: parsed.data }));
  return NextResponse.json(product, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...rest } = body as { id: string } & Record<string, unknown>;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const parsed = productInputSchema.partial().safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const product = await withRetry(() => prisma.product.update({ where: { id }, data: parsed.data }));
  return NextResponse.json(product);
}

export async function DELETE(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await withRetry(() => prisma.product.delete({ where: { id } }));
  return NextResponse.json({ ok: true });
}
