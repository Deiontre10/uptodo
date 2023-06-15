"use server";

import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function toggleTodo(id: string, done: boolean) {
  await prisma.todo.update({ where: { id }, data: { done } });
}

export async function createTodo(data: FormData) {
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title, done: false } });
  redirect("/");
}
