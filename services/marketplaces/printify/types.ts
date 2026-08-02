export interface PrintifyProduct {
  id?: string;
  title: string;
  description?: string;
  price?: number;
  currency?: string;
}

export interface PrintifySyncResult {
  success: boolean;
  message: string;
  productId?: string;
}
