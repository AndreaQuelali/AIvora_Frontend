import { cn } from '@/lib/utils';
import type { Size, ColorVariant } from '@/types/common.types';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Exclude<Size, 'xs' | 'xl'>;
  colorScheme?: ColorVariant;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  solid: 'bg-primary text-white hover:opacity-90 active:opacity-80',
  outline:
    'border border-border bg-transparent text-foreground hover:bg-surface active:bg-surface-2',
  ghost: 'bg-transparent text-foreground hover:bg-surface active:bg-surface-2',
  link: 'bg-transparent text-primary underline-offset-4 hover:underline p-0 h-auto',
};

const SIZE_CLASSES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-9 px-4 text-sm gap-2',
  lg: 'h-10 px-5 text-sm gap-2',
};

/**
 * Button primitive — used throughout the app.
 * Extend this with additional variants as needed rather than using ad-hoc Tailwind in feature components.
 */
export function Button({
  variant = 'solid',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size as 'sm' | 'md' | 'lg'],
        isDisabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
