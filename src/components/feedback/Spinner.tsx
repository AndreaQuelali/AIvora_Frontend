import { cn } from '@/lib/utils';
import type { Size } from '@/types/common.types';

interface SpinnerProps {
  size?: Size;
  className?: string;
  label?: string;
}

const SIZE_MAP: Record<Size, string> = {
  xs: 'h-3 w-3 border-[1.5px]',
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-[3px]',
  xl: 'h-12 w-12 border-4',
};

/**
 * Spinner — accessible loading indicator.
 * Use `label` to provide a screen-reader description.
 */
export function Spinner({ size = 'md', className, label = 'Loading...' }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        'inline-block animate-spin rounded-full border-current border-t-transparent',
        'text-primary',
        SIZE_MAP[size],
        className,
      )}
    />
  );
}
