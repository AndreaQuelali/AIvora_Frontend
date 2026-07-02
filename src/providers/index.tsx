import type { ReactNode } from 'react';
import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';
import { ToastProvider } from './ToastProvider';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Composed root provider — wraps the entire app in the correct provider order:
 *
 * ThemeProvider          (CSS class on <html>)
 *   └─ QueryProvider     (server-state via TanStack Query)
 *       └─ AuthProvider  (future session context)
 *           └─ ToastProvider (global toast renderer)
 *
 * Order matters:
 * - Theme must be outermost to prevent flicker
 * - Query must wrap Auth so auth hooks can use TanStack Query
 * - Toast wraps everything so toasts can be triggered from any provider
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <ToastProvider>{children}</ToastProvider>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
