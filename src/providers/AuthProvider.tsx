'use client';

import type { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Auth context provider — shell for future authentication logic.
 *
 * When implementing auth (NextAuth, custom JWT, etc.), wrap the session
 * management logic here and expose it via useAuthContext().
 * For now, auth state is managed in the Zustand auth store.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  return <>{children}</>;
}
