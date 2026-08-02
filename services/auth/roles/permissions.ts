import type { UserRole } from "../../../types/auth/roles";

export const rolePermissions: Record<UserRole, string[]> = {
  guest: ["view_public_content"],
  buyer: ["view_public_content", "browse_products", "place_orders"],
  seller: ["view_public_content", "manage_products", "view_orders"],
  store_manager: ["view_public_content", "manage_products", "view_orders", "manage_store"],
  administrator: ["view_public_content", "manage_users", "manage_store", "view_analytics"],
  super_administrator: ["view_public_content", "manage_users", "manage_store", "view_analytics", "manage_system"],
  developer: ["view_public_content", "manage_users", "manage_store", "view_analytics", "manage_system", "manage_integrations"],
};

export function canAccess(role: UserRole, permission: string): boolean {
  return rolePermissions[role]?.includes(permission) ?? false;
}
