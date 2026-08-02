import type { PrintifyProduct } from "./types";

export function mapProductToPrintify(product: { name: string; description?: string; price?: number; currency?: string }): PrintifyProduct {
  return {
    title: product.name,
    description: product.description,
    price: product.price,
    currency: product.currency ?? "USD",
  };
}
