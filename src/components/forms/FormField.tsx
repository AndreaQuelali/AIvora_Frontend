import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * FormField — wraps a label + input + error/hint message.
 * Use with React Hook Form register() and formState.errors.
 *
 * @example
 * <FormField label="Email" htmlFor="email" error={errors.email?.message} required>
 *   <Input id="email" type="email" {...register('email')} />
 * </FormField>
 */
export function FormField({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium leading-none text-foreground">
        {label}
        {required && (
          <span className="ml-1 text-danger" aria-label="required">
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p role="alert" className="text-xs font-medium text-danger">
          {error}
        </p>
      )}

      {!error && hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
