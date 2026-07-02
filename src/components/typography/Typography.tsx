import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Heading
// ---------------------------------------------------------------------------

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingLevel;
}

const HEADING_SIZE_CLASSES: Record<HeadingLevel, string> = {
  h1: 'text-3xl font-bold tracking-tight',
  h2: 'text-2xl font-semibold tracking-tight',
  h3: 'text-lg font-semibold',
  h4: 'text-base font-semibold',
};

/**
 * Heading — semantic heading with size control decoupled from element.
 * @example <Heading as="h1" size="h2">Section Title</Heading>
 */
export function Heading({ as: Tag = 'h2', size, className, children, ...props }: HeadingProps) {
  const sizeClass = HEADING_SIZE_CLASSES[size ?? Tag];
  return (
    <Tag className={cn(sizeClass, className)} {...props}>
      {children}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Text
// ---------------------------------------------------------------------------

type TextVariant = 'body' | 'small' | 'caption' | 'muted';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  as?: 'p' | 'span' | 'div';
}

const TEXT_VARIANT_CLASSES: Record<TextVariant, string> = {
  body: 'text-sm text-foreground',
  small: 'text-xs text-foreground',
  caption: 'text-xs text-muted-foreground',
  muted: 'text-sm text-muted-foreground',
};

/**
 * Text — paragraph/span with semantic variants.
 */
export function Text({
  as: Tag = 'p',
  variant = 'body',
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag className={cn(TEXT_VARIANT_CLASSES[variant], className)} {...props}>
      {children}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Label
// ---------------------------------------------------------------------------

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({ required, className, children, ...props }: LabelProps) {
  return (
    <label className={cn('text-sm font-medium leading-none text-foreground', className)} {...props}>
      {children}
      {required && (
        <span className="ml-1 text-danger" aria-label="required">
          *
        </span>
      )}
    </label>
  );
}
