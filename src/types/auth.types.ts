import type { ID, ISODate } from './common.types';

// ---------------------------------------------------------------------------
// Auth entities
// ---------------------------------------------------------------------------

export type UserRole = 'admin' | 'editor' | 'viewer';

export interface User {
  id: ID;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: ISODate;
  updatedAt: ISODate;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: ISODate;
}

// ---------------------------------------------------------------------------
// Auth form payloads
// ---------------------------------------------------------------------------

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

// ---------------------------------------------------------------------------
// Permissions
// ---------------------------------------------------------------------------

export type Permission =
  | 'documents:read'
  | 'documents:write'
  | 'documents:delete'
  | 'search:use'
  | 'ai:use'
  | 'admin:access';

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    'documents:read',
    'documents:write',
    'documents:delete',
    'search:use',
    'ai:use',
    'admin:access',
  ],
  editor: ['documents:read', 'documents:write', 'search:use', 'ai:use'],
  viewer: ['documents:read', 'search:use'],
};
