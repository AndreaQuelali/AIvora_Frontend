import type { Permission } from '@/types/auth.types';

interface PermissionGateProps {
  permission: Permission;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * PermissionGate — conditionally renders children based on user permissions.
 * TODO: Connect to useAuthStore.hasPermission() when auth is implemented.
 *
 * @example
 * <PermissionGate permission="documents:write">
 *   <UploadButton />
 * </PermissionGate>
 */
export function PermissionGate({ children, fallback = null }: PermissionGateProps) {
  // TODO: const hasPermission = useAuthStore((s) => s.hasPermission(permission));
  // TODO: if (!hasPermission) return <>{fallback}</>;
  return <>{children}</>;
}
