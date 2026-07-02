import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';

// ---------------------------------------------------------------------------
// API Error — normalised shape for all HTTP errors
// ---------------------------------------------------------------------------
export interface ApiError {
  message: string;
  code?: string;
  status: number;
  errors?: Record<string, string[]>;
}

// ---------------------------------------------------------------------------
// Axios instance
// ---------------------------------------------------------------------------
export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30_000,
});

// ---------------------------------------------------------------------------
// Request interceptor — attach auth token
// ---------------------------------------------------------------------------
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Token is read from localStorage instead of Zustand to avoid
    // circular imports (store imports apiClient, apiClient imports store).
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// ---------------------------------------------------------------------------
// Response interceptor — normalise errors
// ---------------------------------------------------------------------------
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ message?: string; errors?: Record<string, string[]> }>) => {
    const status = error.response?.status ?? 0;

    // 401 — clear stored credentials and redirect to sign-in
    if (status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      window.location.href = '/sign-in';
    }

    const apiError: ApiError = {
      message: error.response?.data?.message ?? error.message ?? 'An unexpected error occurred',
      status,
      errors: error.response?.data?.errors,
    };

    return Promise.reject(apiError);
  },
);
