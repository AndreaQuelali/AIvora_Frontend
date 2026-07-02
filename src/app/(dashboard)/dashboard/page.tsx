import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Dashboard' };

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome to AIvora — your AI document intelligence platform.
        </p>
      </div>
      {/* TODO: DashboardStats, RecentDocuments, QuickSearch */}
      <div className="grid gap-4 md:grid-cols-3">
        {['Documents', 'Searches', 'AI Queries'].map((stat) => (
          <div key={stat} className="rounded-xl border border-border bg-surface p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {stat}
            </p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}
