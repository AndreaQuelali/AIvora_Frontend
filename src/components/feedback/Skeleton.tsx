import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

/**
 * Skeleton — placeholder for content that is loading.
 *
 * @example
 * // Text line
 * <Skeleton className="h-4 w-48" />
 * // Avatar
 * <Skeleton className="h-10 w-10 rounded-full" />
 * // Card
 * <Skeleton className="h-32 w-full rounded-xl" />
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-md bg-surface-2', className)} aria-hidden="true" />
  );
}

/**
 * SkeletonText — convenience wrapper for multiple text skeleton lines.
 */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-3', i === lines - 1 ? 'w-3/4' : 'w-full')} />
      ))}
    </div>
  );
}
