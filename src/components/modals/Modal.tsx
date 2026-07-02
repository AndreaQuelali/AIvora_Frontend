'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
}

const SIZE_CLASSES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
};

/**
 * Modal — generic dialog shell.
 * Traps focus, closes on Escape key and backdrop click.
 * For confirmations use ConfirmDialog instead.
 */
export function Modal({ isOpen, onClose, title, description, size = 'md', children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className={cn(
        'w-full rounded-xl border border-border bg-background p-6 shadow-lg backdrop:bg-black/40 backdrop:backdrop-blur-sm',
        SIZE_CLASSES[size],
      )}
    >
      {/* Header */}
      {(title || description) && (
        <div className="mb-5">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
      )}

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-md p-0.5 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Close modal"
      >
        <X className="h-4 w-4" />
      </button>

      {children}
    </dialog>
  );
}
