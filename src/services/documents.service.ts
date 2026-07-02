import { apiClient } from '@/lib/axios';
import type { Document, UploadPayload } from '@/types/document.types';
import type { ApiResponse, PaginatedResponse, PaginationParams } from '@/types/api.types';

/**
 * Documents service — pure async functions for document CRUD and upload.
 * Consumed by TanStack Query hooks in features/documents/.
 */
export const documentsService = {
  list: async (params?: PaginationParams): Promise<PaginatedResponse<Document>> => {
    const { data } = await apiClient.get<PaginatedResponse<Document>>('/documents', { params });
    return data;
  },

  getById: async (id: string): Promise<Document> => {
    const { data } = await apiClient.get<ApiResponse<Document>>(`/documents/${id}`);
    return data.data;
  },

  upload: async ({ file, description }: UploadPayload): Promise<Document> => {
    const formData = new FormData();
    formData.append('file', file);
    if (description) formData.append('description', description);

    const { data } = await apiClient.post<ApiResponse<Document>>('/documents/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/documents/${id}`);
  },
};
