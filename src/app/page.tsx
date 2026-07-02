import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

/**
 * Root page — redirects to dashboard if authenticated, sign-in otherwise.
 * Auth check is a Server Component, so no bundle cost on the client.
 *
 * TODO: Replace with real auth check when session logic is implemented.
 */
export default function RootPage() {
  // Temporary: redirect all root visits to the dashboard landing.
  // When auth is implemented, check the session here and redirect accordingly.
  redirect(ROUTES.DASHBOARD);
}
