import { apiClient } from '@/lib/axios';
import type { AuthSession, SignInPayload, SignUpPayload } from '@/types/auth.types';
import type { ApiResponse } from '@/types/api.types';

/**
 * Auth service — pure async functions that call the API.
 * Consumed by TanStack Query hooks in features/auth/.
 */
export const authService = {
  signIn: async (payload: SignInPayload): Promise<AuthSession> => {
    const { data } = await apiClient.post<ApiResponse<AuthSession>>('/auth/sign-in', payload);
    return data.data;
  },

  signUp: async (payload: SignUpPayload): Promise<{ message: string }> => {
    const { data } = await apiClient.post<ApiResponse<{ message: string }>>(
      '/auth/sign-up',
      payload,
    );
    return data.data;
  },

  signOut: async (): Promise<void> => {
    await apiClient.post('/auth/sign-out');
  },

  refreshToken: async (): Promise<Pick<AuthSession, 'token'>> => {
    const { data } = await apiClient.post<ApiResponse<Pick<AuthSession, 'token'>>>('/auth/refresh');
    return data.data;
  },

  me: async (): Promise<AuthSession['user']> => {
    const { data } = await apiClient.get<ApiResponse<AuthSession['user']>>('/auth/me');
    return data.data;
  },
};
