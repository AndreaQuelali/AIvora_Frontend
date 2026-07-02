// ---------------------------------------------------------------------------
// App-wide configuration constants
// ---------------------------------------------------------------------------

export const APP_CONFIG = {
  name: 'AIvora',
  description: 'AI-powered document intelligence platform',
  version: '0.1.0',

  // Pagination defaults
  pagination: {
    defaultPage: 1,
    defaultPerPage: 20,
    perPageOptions: [10, 20, 50, 100],
  },

  // File upload
  upload: {
    maxSizeBytes: 50 * 1024 * 1024, // 50 MB
    acceptedMimeTypes: [
      'application/pdf',
      'text/plain',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/markdown',
    ],
  },

  // Search
  search: {
    debounceMs: 300,
    maxResults: 20,
  },
} as const;
