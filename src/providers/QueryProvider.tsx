'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/queryClient';
import type { ReactNode } from 'react';

interface QueryProviderProps {
  children: ReactNode;
}

/**
 * Provides TanStack Query context to the entire app.
 * Must be a Client Component since it uses browser-side state.
 * DevTools are only bundled in development builds.
 */
export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}
