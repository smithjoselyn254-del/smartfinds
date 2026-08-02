import type { AIServiceRequest, AIServiceResponse } from "../types";

export interface ChatbotRequest extends AIServiceRequest {
  conversationId?: string;
}

export interface ChatbotMessage {
  role: "assistant" | "user";
  content: string;
}

export async function sendChatbotMessage(
  request: ChatbotRequest,
): Promise<AIServiceResponse<ChatbotMessage>> {
  return {
    success: true,
    message: "Chatbot response generated successfully.",
    data: {
      role: "assistant",
      content: `I can help with your request: ${request.input}`,
    },
    metadata: {
      conversationId: request.conversationId ?? "default",
    },
  };
}
