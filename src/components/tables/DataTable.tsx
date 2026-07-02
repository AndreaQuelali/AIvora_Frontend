import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface Column<T> {
  key: string;
  header: string;
  cell: (row: T) => ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  getRowKey: (row: T) => string;
  onRowClick?: (row: T) => void;
  emptyState?: ReactNode;
  className?: string;
}

/**
 * DataTable — generic, type-safe table shell.
 * Supports custom cell renderers, click handlers, loading skeletons, and empty state.
 *
 * @example
 * <DataTable
 *   columns={[{ key: 'name', header: 'Name', cell: (row) => row.name }]}
 *   data={documents}
 *   getRowKey={(row) => row.id}
 * />
 */
export function DataTable<T>({
  columns,
  data,
  isLoading,
  getRowKey,
  onRowClick,
  emptyState,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-border', className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width }}
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3">
                      <div className="h-4 animate-pulse rounded bg-surface-2" />
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-12 text-center">
                  {emptyState ?? (
                    <span className="text-sm text-muted-foreground">No data available.</span>
                  )}
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={getRowKey(row)}
                  onClick={() => onRowClick?.(row)}
                  className={cn(
                    'transition-colors',
                    onRowClick && 'cursor-pointer hover:bg-surface',
                  )}
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3">
                      {col.cell(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
