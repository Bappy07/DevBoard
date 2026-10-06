import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const body = await request.json();

  const project = await prisma.project.create({
    data: {
      name: body.name,
      description: body.description,
      userId: 1,
    },
  });

  return NextResponse.json(project);
}