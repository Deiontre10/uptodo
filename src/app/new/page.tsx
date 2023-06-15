import { createTodo } from "@/components/ServerSideComponents";
import Link from "next/link";

export default function New() {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent px-2 py-1 rounded focus-within:border-slate-100 outline-none"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-white px-2 py-1 rounded hover:bg-purple-700 focus-within:bg-purple-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-white px-2 py-1 rounded hover:bg-purple-700 focus-within:bg-purple-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
