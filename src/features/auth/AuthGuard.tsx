/**
 * AuthGuard — shell for protecting dashboard routes.
 * TODO: Reads `useAuthStore.isAuthenticated` and redirects to /sign-in if false.
 * Can be used as a wrapper component or inside a Next.js middleware.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  // TODO: const { isAuthenticated } = useAuthStore();
  // TODO: if (!isAuthenticated) redirect(ROUTES.SIGN_IN);
  return <>{children}</>;
}
