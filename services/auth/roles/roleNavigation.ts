export interface DashboardSection {
  slug: string;
  title: string;
  roles: string[];
}

export const roleDashboardSections: DashboardSection[] = [
  { slug: "overview", title: "Dashboard", roles: ["guest", "buyer", "seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "products", title: "Products", roles: ["buyer", "seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "orders", title: "Orders", roles: ["buyer", "seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "inventory", title: "Inventory", roles: ["seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "customers", title: "Customers", roles: ["seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "analytics", title: "Analytics", roles: ["store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "ai-assistant", title: "AI Assistant", roles: ["seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "marketplace-connections", title: "Marketplace Connections", roles: ["seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "payment-settings", title: "Payment Settings", roles: ["administrator", "super_administrator", "developer"] },
  { slug: "shipping", title: "Shipping", roles: ["seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "messages", title: "Messages", roles: ["seller", "store_manager", "administrator", "super_administrator", "developer"] },
  { slug: "reports", title: "Reports", roles: ["administrator", "super_administrator", "developer"] },
  { slug: "settings", title: "Settings", roles: ["administrator", "super_administrator", "developer"] },
];

export function getAllowedDashboardSections(role: string): DashboardSection[] {
  return roleDashboardSections.filter((section) => section.roles.includes(role));
}
