import { apiClient } from '@/lib/axios';
import type { SearchResult } from '@/types/document.types';
import type { ApiResponse, PaginationParams } from '@/types/api.types';

export interface SearchParams extends PaginationParams {
  query: string;
  documentIds?: string[];
}

/**
 * Search service — semantic search and RAG API calls.
 * Consumed by TanStack Query hooks in features/search/.
 */
export const searchService = {
  semanticSearch: async (params: SearchParams): Promise<SearchResult> => {
    const { data } = await apiClient.post<ApiResponse<SearchResult>>('/search/semantic', params);
    return data.data;
  },

  suggest: async (query: string): Promise<string[]> => {
    const { data } = await apiClient.get<ApiResponse<string[]>>('/search/suggest', {
      params: { q: query },
    });
    return data.data;
  },
};
