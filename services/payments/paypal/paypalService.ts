export interface PayPalPaymentRequest {
  orderId: string;
  amount: number;
}

export interface PayPalPaymentResult {
  success: boolean;
  message: string;
  approvalUrl?: string;
}

export async function createPayPalOrder(request: PayPalPaymentRequest): Promise<PayPalPaymentResult> {
  return {
    success: true,
    message: "PayPal order created successfully.",
    approvalUrl: `https://paypal.example/checkout/${request.orderId}`,
  };
}
