export type UserRole =
  | "guest"
  | "buyer"
  | "seller"
  | "store_manager"
  | "administrator"
  | "super_administrator"
  | "developer";

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
}
