export interface AIServiceRequest {
  tenantId?: string;
  userId?: string;
  input: string;
  metadata?: Record<string, unknown>;
}

export interface AIServiceResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  metadata?: Record<string, unknown>;
}
