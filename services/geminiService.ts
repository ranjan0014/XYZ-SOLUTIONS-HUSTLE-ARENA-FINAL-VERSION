import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini client
// Note: In a real production app, you might proxy this through a backend to hide the key,
// but for this frontend-only demo, we use the env var directly as per instructions.
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    if (!apiKey) {
      return "Error: API Key is missing. Please configure process.env.API_KEY.";
    }

    const model = 'gemini-2.5-flash';
    
    // We construct a chat session for context, but for a simple single-turn helper
    // or if we want to manage state manually, we can just use generateContent with system instructions.
    // Here we will use the Chat API for better context management.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `You are 'Nexus', the advanced AI Fleet Consultant for XYZ Solutions. 
        Your goal is to explain the benefits of GPS tracking, fleet management, and logistics analytics to potential clients.
        
        Company Key Points:
        - Products: GPS Vehicle Tracking, Live Route Monitoring, Anti-Theft Alerts, Fleet Analytics, Driver Behavior.
        - Tone: Professional, Futuristic, Tech-Focused, Concise.
        - Brand Colors: Electric Blue, Neon Green.
        
        If asked about pricing, suggest they contact our sales team for a custom quote.
        Keep answers short (under 100 words) and punchy.`,
        temperature: 0.7,
      },
      history: history // Pass previous history to maintain context
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm having trouble processing that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System malfunction. Unable to reach the core. Please try again later.";
  }
};
