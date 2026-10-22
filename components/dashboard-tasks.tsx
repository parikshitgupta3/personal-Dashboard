"use client";

import { useState } from "react";

type Task = { id: number; title: string; done: boolean };

const initialTasks: Task[] = [
  { id: 1, title: "Review the week's plan", done: true },
  { id: 2, title: "30 min walk", done: false },
  { id: 3, title: "Read a chapter", done: false },
  { id: 4, title: "Inbox zero", done: false },
];

export default function DashboardTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const doneCount = tasks.filter((t) => t.done).length;

  function toggle(id: number) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col gap-1.5">
        {tasks.map((task) => (
          <li key={task.id}>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-black/[.03] dark:hover:bg-white/[.05]">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggle(task.id)}
                className="h-4 w-4 accent-neutral-800 dark:accent-neutral-200"
              />
              <span
                className={`text-sm ${
                  task.done
                    ? "text-neutral-400 line-through dark:text-neutral-500"
                    : ""
                }`}
              >
                {task.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
        {doneCount} of {tasks.length} done
      </p>
    </div>
  );
}
