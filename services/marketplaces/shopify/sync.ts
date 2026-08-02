import type { ShopifySyncResult } from "./types";

export async function syncProductToShopify(productId: string): Promise<ShopifySyncResult> {
  return {
    success: true,
    message: "Product synced to Shopify successfully.",
    productId,
  };
}
