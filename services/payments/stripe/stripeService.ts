export interface StripePaymentIntent {
  id: string;
  amount: number;
  currency: string;
}

export async function createStripePaymentIntent(amount: number, currency = "USD"): Promise<StripePaymentIntent> {
  return {
    id: `pi_${Date.now()}`,
    amount,
    currency,
  };
}
