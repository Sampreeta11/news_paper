import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const issues = await prisma.dailyIssue.findMany({
      orderBy: { publishDate: 'desc' },
      include: {
        uploadedBy: {
          select: { name: true, email: true }
        }
      }
    });
    return NextResponse.json(issues);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch issues" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();
    const { publishDate, title, pdfUrl, isPublished } = body;

    if (!publishDate || !title || !pdfUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const issue = await prisma.dailyIssue.create({
      data: {
        publishDate: new Date(publishDate),
        title,
        pdfUrl,
        isPublished: isPublished ?? true,
        uploadedById: (session.user as any).id,
      }
    });

    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create issue" }, { status: 500 });
  }
}
