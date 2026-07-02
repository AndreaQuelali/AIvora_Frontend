'use client';

import { Bell, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const THEME_OPTIONS = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'dark', icon: Moon, label: 'Dark' },
  { value: 'system', icon: Monitor, label: 'System' },
] as const;

/**
 * Dashboard top header — Client Component for theme switcher and notifications.
 *
 * The theme switcher uses `mounted` guard to prevent SSR/client hydration mismatch.
 * `useTheme()` has no value during SSR; we only render the active state after mount.
 */
export function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch: render a neutral placeholder on server,
  // then show the real active state after mount on client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="flex h-[60px] shrink-0 items-center justify-between border-b border-border bg-background px-6">
      {/* Left: breadcrumb placeholder */}
      <div className="text-sm text-muted-foreground">{/* TODO: <Breadcrumb /> */}</div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        {/* Theme switcher — suppressed until mounted to avoid hydration diff */}
        <div
          className="flex items-center rounded-lg border border-border bg-surface p-0.5"
          suppressHydrationWarning
        >
          {THEME_OPTIONS.map(({ value, icon: Icon, label }) => (
            <button
              key={value}
              onClick={() => setTheme(value)}
              title={label}
              aria-label={`Switch to ${label} theme`}
              className={cn(
                'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
                mounted && theme === value
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        {/* User avatar */}
        <button
          aria-label="User menu"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
        >
          U
        </button>
      </div>
    </header>
  );
}
