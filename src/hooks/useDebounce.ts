import { useEffect, useState } from 'react';

/**
 * Debounces a value by the given delay (ms).
 * Useful for search inputs to reduce API calls.
 *
 * @example const debouncedQuery = useDebounce(query, 300);
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
