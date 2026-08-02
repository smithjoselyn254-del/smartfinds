export interface ShopifyProduct {
  id?: string;
  title: string;
  bodyHtml?: string;
  variants?: Array<{ price?: string }>;
}

export interface ShopifySyncResult {
  success: boolean;
  message: string;
  productId?: string;
}
