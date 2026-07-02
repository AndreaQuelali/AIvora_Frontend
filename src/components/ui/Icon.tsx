import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Size } from '@/types/common.types';

interface IconProps {
  icon: LucideIcon;
  size?: Size;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const SIZE_MAP: Record<Size, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

/**
 * Icon wrapper — ensures consistent sizing across all Lucide icons.
 * Prefer this over using LucideIcon directly to maintain size standards.
 *
 * @example <Icon icon={Search} size="sm" aria-hidden />
 */
export function Icon({ icon: LucideIconComponent, size = 'md', className, ...props }: IconProps) {
  return <LucideIconComponent className={cn(SIZE_MAP[size], className)} {...props} />;
}
