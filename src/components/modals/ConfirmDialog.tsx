'use client';

import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from './Modal';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDangerous?: boolean;
  isLoading?: boolean;
}

/**
 * ConfirmDialog — destructive-action confirmation prompt.
 * Use for delete, disconnect, irreversible operations.
 *
 * @example
 * <ConfirmDialog
 *   isOpen={isOpen} onClose={close} onConfirm={handleDelete}
 *   title="Delete document?" isDangerous
 * />
 */
export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = 'Are you sure?',
  description = 'This action cannot be undone.',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isDangerous = false,
  isLoading = false,
}: ConfirmDialogProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          {isDangerous && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
          )}
          <div>
            <p className="font-semibold">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onClose} disabled={isLoading}>
            {cancelLabel}
          </Button>
          <Button
            variant="solid"
            size="sm"
            onClick={onConfirm}
            isLoading={isLoading}
            className={isDangerous ? 'bg-red-600 hover:bg-red-700' : ''}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
