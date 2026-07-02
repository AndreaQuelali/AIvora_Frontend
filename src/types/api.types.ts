// ---------------------------------------------------------------------------
// Generic API response shapes
// ---------------------------------------------------------------------------

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status: number;
  errors?: Record<string, string[]>;
}

// ---------------------------------------------------------------------------
// Sorting & filtering helpers
// ---------------------------------------------------------------------------

export type SortOrder = 'asc' | 'desc';

export interface SortParams {
  sortBy: string;
  sortOrder: SortOrder;
}

export interface PaginationParams {
  page: number;
  perPage: number;
}
