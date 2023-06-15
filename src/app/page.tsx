import Link from "next/link";
import { prisma } from "@/db";
import { TodoItem } from "@/components/TodoItem";
import { toggleTodo } from "@/components/ServerSideComponents";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Uptodo</h1>
        <Link
          className="border border-slate-300 text-white px-2 py-1 rounded hover:bg-purple-700 focus-within:bg-purple-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
