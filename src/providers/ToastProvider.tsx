'use client';

import { Toaster } from 'sonner';
import type { ReactNode } from 'react';

interface ToastProviderProps {
  children: ReactNode;
}

/**
 * Renders the Sonner toast container and provides global toast configuration.
 * Import `toast` from 'sonner' anywhere in the app to trigger toasts.
 *
 * @example
 * import { toast } from 'sonner';
 * toast.success('Document uploaded!');
 * toast.error('Upload failed');
 */
export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        duration={4000}
        toastOptions={{
          classNames: {
            toast: 'font-sans text-sm',
          },
        }}
      />
    </>
  );
}
