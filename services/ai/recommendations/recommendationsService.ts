import type { AIServiceRequest, AIServiceResponse } from "../types";

export interface RecommendationRequest extends AIServiceRequest {
  productIds?: string[];
  limit?: number;
  category?: string;
}

export interface RecommendationItem {
  id: string;
  title: string;
  score: number;
  reason: string;
}

export async function getRecommendations(
  request: RecommendationRequest,
): Promise<AIServiceResponse<RecommendationItem[]>> {
  const limit = request.limit ?? 5;
  const category = request.category ?? "general";

  const recommendations: RecommendationItem[] = [
    {
      id: "rec-001",
      title: `${category} best-seller`,
      score: 0.95,
      reason: "High conversion probability based on the current catalog context.",
    },
    {
      id: "rec-002",
      title: `${category} complementary item`,
      score: 0.89,
      reason: "Often purchased alongside the selected products.",
    },
  ].slice(0, limit);

  return {
    success: true,
    message: "Recommendations generated successfully.",
    data: recommendations,
    metadata: {
      category,
      source: "recommendations-service",
    },
  };
}
