// ---------------------------------------------------------------------------
// Common UI / utility types used throughout the application
// ---------------------------------------------------------------------------

/** Key-value pair — useful for select options, comboboxes, etc. */
export interface Option<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

/** Generic ID type */
export type ID = string;

/** ISO 8601 date string */
export type ISODate = string;

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
  children?: NavLink[];
}

/** Component size variants */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Component color variants */
export type ColorVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

/** Generic async status */
export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

/** Generic component with children */
export interface WithChildren {
  children: React.ReactNode;
}

/** Generic component with className */
export interface WithClassName {
  className?: string;
}
