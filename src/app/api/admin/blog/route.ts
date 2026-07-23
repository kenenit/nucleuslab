import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";
import { z } from "zod";

const blogInputSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  coverImage: z.string().optional(),
  category: z.string().min(1),
  tags: z.array(z.string()),
  published: z.boolean().optional(),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) return null;
  return session;
}

export async function GET() {
  try {
    const posts = await withRetry(() => prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } }));
    return NextResponse.json(posts);
  } catch (error) {
    console.error("[admin/blog] GET failed", error);
    return NextResponse.json({ error: "Database unavailable, please try again." }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = blogInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { published, ...rest } = parsed.data;
  const post = await withRetry(() =>
    prisma.blogPost.create({
      data: {
        ...rest,
        published: published ?? false,
        publishedAt: published ? new Date() : null,
      },
    })
  );
  return NextResponse.json(post, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...rest } = body as { id: string } & Record<string, unknown>;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const parsed = blogInputSchema.partial().safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const existing = await withRetry(() => prisma.blogPost.findUnique({ where: { id } }));
  const { published, ...updateRest } = parsed.data;

  const post = await withRetry(() =>
    prisma.blogPost.update({
      where: { id },
      data: {
        ...updateRest,
        ...(published !== undefined && {
          published,
          publishedAt: published && !existing?.publishedAt ? new Date() : existing?.publishedAt,
        }),
      },
    })
  );
  return NextResponse.json(post);
}

export async function DELETE(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await withRetry(() => prisma.blogPost.delete({ where: { id } }));
  return NextResponse.json({ ok: true });
}
