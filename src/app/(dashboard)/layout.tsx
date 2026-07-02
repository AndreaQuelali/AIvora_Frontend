import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { DashboardHeader } from '@/components/layout/DashboardHeader';

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | AIvora',
  },
};

/**
 * Dashboard layout — applies to all /dashboard/** routes.
 * Uses a classic app-shell pattern: fixed sidebar + sticky header + scrollable content.
 *
 * Server Component — the sidebar/header are rendered on the server for fast initial paint.
 * Interactive elements (toggle, user menu) are Client Components nested inside.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
