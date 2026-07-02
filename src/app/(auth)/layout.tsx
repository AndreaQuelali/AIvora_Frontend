import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Sign In',
    template: '%s | AIvora',
  },
};

/**
 * Auth layout — renders a centered card without sidebar/header.
 * Wraps all routes in the (auth) route group: /sign-in, /sign-up, etc.
 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface p-4">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-white">A</span>
        </div>
        <span className="text-lg font-semibold tracking-tight">AIvora</span>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-xl border border-border bg-background p-8 shadow-lg">
        {children}
      </div>

      {/* Footer */}
      <p className="mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} AIvora. All rights reserved.
      </p>
    </div>
  );
}
