export interface ShippingQuote {
  carrier: string;
  price: number;
  etaDays: number;
}

export async function getDhlQuote(weightKg: number): Promise<ShippingQuote> {
  return {
    carrier: "DHL",
    price: Math.max(5, weightKg * 1.5),
    etaDays: 3,
  };
}
