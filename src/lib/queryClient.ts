import { QueryClient } from '@tanstack/react-query';

/**
 * Global TanStack Query client with sensible defaults for a SaaS app:
 * - staleTime: 60s  — reduces unnecessary background refetches
 * - retry: 1        — retry failed queries once before showing error
 * - refetchOnWindowFocus: true  — keeps data fresh when user returns to tab
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      retry: 1,
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0,
    },
  },
});
