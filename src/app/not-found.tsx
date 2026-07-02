import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

/**
 * 404 Not Found page — Server Component.
 * Shown when no route matches in the entire app.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <div className="space-y-2">
        <p className="text-8xl font-bold tracking-tight text-gray-200 dark:text-gray-800">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link
        href={ROUTES.DASHBOARD}
        className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
