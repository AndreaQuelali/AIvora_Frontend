import type { ID, ISODate } from './common.types';

// ---------------------------------------------------------------------------
// Document entity
// ---------------------------------------------------------------------------

export type DocumentStatus = 'uploading' | 'processing' | 'indexed' | 'error';

export type DocumentMimeType =
  | 'application/pdf'
  | 'text/plain'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'text/markdown';

export interface Document {
  id: ID;
  name: string;
  description?: string;
  mimeType: DocumentMimeType;
  sizeBytes: number;
  status: DocumentStatus;
  pageCount?: number;
  uploadedBy: ID;
  createdAt: ISODate;
  updatedAt: ISODate;
}

// ---------------------------------------------------------------------------
// RAG / Search types
// ---------------------------------------------------------------------------

export interface DocumentChunk {
  id: ID;
  documentId: ID;
  content: string;
  pageNumber?: number;
  score?: number; // semantic similarity score (0 – 1)
}

export interface SearchResult {
  query: string;
  chunks: DocumentChunk[];
  totalMatches: number;
}

// ---------------------------------------------------------------------------
// Upload
// ---------------------------------------------------------------------------

export interface UploadPayload {
  file: File;
  description?: string;
}
