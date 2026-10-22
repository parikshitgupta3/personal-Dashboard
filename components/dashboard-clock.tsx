"use client";

import { useEffect, useState } from "react";

export default function DashboardClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-5xl font-bold tabular-nums tracking-tight">
        {now
          ? now.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })
          : "--:--:--"}
      </p>
      <p className="text-neutral-500 dark:text-neutral-400">
        {now
          ? now.toLocaleDateString([], {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </p>
    </div>
  );
}
