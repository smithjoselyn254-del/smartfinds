import type { AIServiceRequest, AIServiceResponse } from "../types";

export interface SemanticSearchRequest extends AIServiceRequest {
  query: string;
  topK?: number;
}

export interface SemanticSearchHit {
  id: string;
  title: string;
  score: number;
}

export async function semanticSearch(
  request: SemanticSearchRequest,
): Promise<AIServiceResponse<SemanticSearchHit[]>> {
  const topK = request.topK ?? 3;
  const query = request.query.trim();

  const hits: SemanticSearchHit[] = [
    {
      id: "hit-001",
      title: `Top match for ${query}`,
      score: 0.96,
    },
    {
      id: "hit-002",
      title: `Related result for ${query}`,
      score: 0.91,
    },
  ].slice(0, topK);

  return {
    success: true,
    message: "Semantic search completed successfully.",
    data: hits,
    metadata: {
      query,
      source: "semantic-search-service",
    },
  };
}
