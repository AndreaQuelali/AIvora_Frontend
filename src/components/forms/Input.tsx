import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

/**
 * Input primitive — base text input.
 * Uses forwardRef so it works seamlessly with React Hook Form register().
 *
 * @example <Input id="email" type="email" {...register('email')} hasError={!!errors.email} />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-9 w-full rounded-lg border bg-surface px-3 text-sm text-foreground',
          'placeholder:text-muted-foreground',
          'transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40',
          hasError
            ? 'border-danger focus:ring-danger/40'
            : 'border-border hover:border-border-strong focus:border-primary',
          props.disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
