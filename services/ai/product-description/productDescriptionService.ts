import type { AIServiceRequest, AIServiceResponse } from "../types";

export interface ProductDescriptionRequest extends AIServiceRequest {
  productName?: string;
  features?: string[];
}

export interface ProductDescriptionResult {
  title: string;
  description: string;
  tags: string[];
}

export async function generateProductDescription(
  request: ProductDescriptionRequest,
): Promise<AIServiceResponse<ProductDescriptionResult>> {
  const name = request.productName ?? "product";
  const features = request.features ?? ["reliable", "high quality"];

  return {
    success: true,
    message: "Product description generated successfully.",
    data: {
      title: `${name} essentials`,
      description: `${name} designed to deliver dependable performance with modern convenience.`,
      tags: features.slice(0, 5),
    },
    metadata: {
      featureCount: features.length,
    },
  };
}
