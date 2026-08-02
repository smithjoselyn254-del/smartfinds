import type { ShopifyProduct } from "./types";

export function mapProductToShopify(product: { name: string; description?: string; price?: number }): ShopifyProduct {
  return {
    title: product.name,
    bodyHtml: product.description,
    variants: [{ price: product.price?.toString() ?? "0" }],
  };
}
