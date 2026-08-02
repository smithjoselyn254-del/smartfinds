export interface ShippingQuote {
  carrier: string;
  price: number;
  etaDays: number;
}

export async function getSendyQuote(weightKg: number): Promise<ShippingQuote> {
  return {
    carrier: "Sendy",
    price: Math.max(3, weightKg * 1.1),
    etaDays: 1,
  };
}
