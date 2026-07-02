'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Global error boundary — catches uncaught errors in the subtree.
 * Must be a Client Component ('use client') per Next.js convention.
 */
export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to an error reporting service (Sentry, Datadog, etc.)
    console.error('[GlobalError]', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
        <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>
      <div className="max-w-md space-y-2">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        {error.digest && (
          <p className="font-mono text-xs text-gray-400">Error ID: {error.digest}</p>
        )}
      </div>
      <button
        onClick={reset}
        className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
