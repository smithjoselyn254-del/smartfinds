export interface ShippingQuote {
  carrier: string;
  price: number;
  etaDays: number;
}

export async function getUpsQuote(weightKg: number): Promise<ShippingQuote> {
  return {
    carrier: "UPS",
    price: Math.max(4, weightKg * 1.2),
    etaDays: 2,
  };
}
