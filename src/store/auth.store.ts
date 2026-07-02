import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User, UserRole, Permission, AuthSession } from '@/types/auth.types';
import { ROLE_PERMISSIONS } from '@/types/auth.types';

// ---------------------------------------------------------------------------
// State shape
// ---------------------------------------------------------------------------

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  // Actions
  setSession: (session: AuthSession) => void;
  clearSession: () => void;
  hasPermission: (permission: Permission) => boolean;
  hasRole: (role: UserRole) => boolean;
}

// ---------------------------------------------------------------------------
// Store — persisted to localStorage so auth survives page refreshes
// ---------------------------------------------------------------------------

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setSession: (session) =>
        set({
          user: session.user,
          token: session.token,
          isAuthenticated: true,
        }),

      clearSession: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      hasPermission: (permission) => {
        const { user } = get();
        if (!user) return false;
        return ROLE_PERMISSIONS[user.role].includes(permission);
      },

      hasRole: (role) => {
        const { user } = get();
        return user?.role === role;
      },
    }),
    {
      name: 'aivora-auth',
      storage: createJSONStorage(() => localStorage),
      // Only persist non-sensitive fields; token comes from secure cookie in production
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
);
