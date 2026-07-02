// ---------------------------------------------------------------------------
// User-facing messages — centralised to ease future i18n migration
// ---------------------------------------------------------------------------

export const MESSAGES = {
  auth: {
    signInSuccess: 'Welcome back!',
    signUpSuccess: 'Account created. Please verify your email.',
    signOutSuccess: 'You have been signed out.',
    invalidCredentials: 'Invalid email or password.',
    sessionExpired: 'Your session has expired. Please sign in again.',
  },
  documents: {
    uploadSuccess: 'Document uploaded and is being processed.',
    uploadError: 'Failed to upload document. Please try again.',
    deleteSuccess: 'Document deleted successfully.',
    deleteError: 'Failed to delete document.',
    processingPending: 'Document is being processed. This may take a moment.',
  },
  generic: {
    loadingError: 'Something went wrong. Please try again.',
    networkError: 'Network error. Please check your connection.',
    notFound: 'The requested resource was not found.',
    forbidden: 'You do not have permission to perform this action.',
    unexpectedError: 'An unexpected error occurred.',
  },
} as const;
