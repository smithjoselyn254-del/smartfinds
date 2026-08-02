export interface MpesaPaymentRequest {
  phoneNumber: string;
  amount: number;
}

export interface MpesaPaymentResult {
  success: boolean;
  message: string;
  transactionId?: string;
}

export async function initiateMpesaPayment(request: MpesaPaymentRequest): Promise<MpesaPaymentResult> {
  return {
    success: true,
    message: "M-Pesa payment initiated successfully.",
    transactionId: `mpesa_${Date.now()}`,
  };
}
