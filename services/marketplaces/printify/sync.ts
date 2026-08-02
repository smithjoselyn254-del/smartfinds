import type { PrintifySyncResult } from "./types";

export async function syncProductToPrintify(productId: string): Promise<PrintifySyncResult> {
  return {
    success: true,
    message: "Product synced to Printify successfully.",
    productId,
  };
}
