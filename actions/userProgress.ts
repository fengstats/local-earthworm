"use server";
import { prisma } from "@/lib/prisma";
import { Course } from "@prisma/client";

export async function fetchSaveUserProgress({
  courseId,
  statementIndex,
}: {
  courseId: number;
  statementIndex: number;
}) {
  return await prisma.userProgress.upsert({
    where: { courseId },
    update: { statementIndex, active: true },
    create: { courseId, statementIndex, active: true },
  });
}

export async function fetchResetUserProgress({ courseId }: { courseId: number }) {
  return await prisma.userProgress.upsert({
    where: { courseId },
    update: { statementIndex: 0, active: false },
    create: { courseId, statementIndex: 0, active: false },
  });
}

export async function fetchActiveCourseId() {
  const userProgress = await prisma.userProgress.findFirst({
    where: { active: true },
  });

  return userProgress?.courseId;
}

export async function fetchStatementIndex(courseId: Course["id"]) {
  const userProgress = await prisma.userProgress.findUnique({
    where: { courseId },
  });

  return userProgress?.statementIndex;
}
