// ---------------------------------------------------------------------------
// Application route constants — single source of truth for all routes
// ---------------------------------------------------------------------------

export const ROUTES = {
  // Public
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',

  // Dashboard
  DASHBOARD: '/dashboard',

  // Documents
  DOCUMENTS: '/documents',
  DOCUMENT_DETAIL: (id: string) => `/documents/${id}` as const,
  DOCUMENT_UPLOAD: '/documents/upload',

  // Search
  SEARCH: '/search',

  // AI Chat
  CHAT: '/chat',

  // Settings
  SETTINGS: '/settings',
  SETTINGS_PROFILE: '/settings/profile',
  SETTINGS_TEAM: '/settings/team',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
