import DashboardClock from "@/components/dashboard-clock";
import DashboardTasks from "@/components/dashboard-tasks";

const quickLinks = [
  { label: "Gmail", href: "https://mail.google.com", icon: "✉️" },
  { label: "Calendar", href: "https://calendar.google.com", icon: "📅" },
  { label: "GitHub", href: "https://github.com", icon: "🐙" },
  { label: "YouTube", href: "https://youtube.com", icon: "▶️" },
];

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-black/[.06] bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900 ${className}`}
    >
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 p-6 sm:p-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Personal Dashboard
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          {greeting} 👋
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card title="Today" className="md:col-span-2">
          <DashboardClock />
        </Card>

        <Card title="Tasks">
          <DashboardTasks />
        </Card>

        <Card title="Quick Links">
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-black/[.06] px-3 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.03] dark:border-white/10 dark:hover:bg-white/[.05]"
              >
                <span aria-hidden>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </Card>

        <Card title="Focus of the Day" className="md:col-span-2">
          <p className="text-sm">
            Ship the first version of the personal dashboard.
          </p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/[.06] dark:bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-neutral-800 dark:bg-neutral-200" />
          </div>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
            75% there
          </p>
        </Card>
      </div>

      <footer className="mt-auto pt-4 text-xs text-neutral-400 dark:text-neutral-500">
        Built with Next.js 15 · Tailwind CSS 3
      </footer>
    </main>
  );
}
