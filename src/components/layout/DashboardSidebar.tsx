'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Search,
  MessageSquare,
  Settings,
  PanelLeftClose,
  PanelLeft,
} from 'lucide-react';
import { useUIStore } from '@/store/ui.store';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Dashboard', href: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { label: 'Documents', href: ROUTES.DOCUMENTS, icon: FileText },
  { label: 'Search', href: ROUTES.SEARCH, icon: Search },
  { label: 'AI Chat', href: ROUTES.CHAT, icon: MessageSquare },
];

/**
 * Dashboard sidebar — Client Component for interactive toggling.
 * Supports collapsed mode (icon-only) via Zustand ui.store.
 */
export function DashboardSidebar() {
  const { isSidebarCollapsed, toggleSidebarCollapsed } = useUIStore();
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'flex h-screen flex-col border-r border-border bg-surface transition-all duration-300',
        isSidebarCollapsed ? 'w-[60px]' : 'w-[240px]',
      )}
    >
      {/* Logo */}
      <div className="flex h-[60px] items-center gap-2.5 border-b border-border px-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary">
          <span className="text-xs font-bold text-white">A</span>
        </div>
        {!isSidebarCollapsed && (
          <span className="truncate text-sm font-semibold tracking-tight">AIvora</span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1 p-2">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              title={isSidebarCollapsed ? label : undefined}
              className={cn(
                'flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-surface-2 hover:text-foreground',
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!isSidebarCollapsed && <span className="truncate">{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: Settings + Collapse toggle */}
      <div className="border-t border-border p-2">
        <Link
          href={ROUTES.SETTINGS}
          className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
        >
          <Settings className="h-4 w-4 shrink-0" />
          {!isSidebarCollapsed && <span>Settings</span>}
        </Link>
        <button
          onClick={toggleSidebarCollapsed}
          className="mt-1 flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
          aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isSidebarCollapsed ? (
            <PanelLeft className="h-4 w-4 shrink-0" />
          ) : (
            <>
              <PanelLeftClose className="h-4 w-4 shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
