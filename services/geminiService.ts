
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

const getAIClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found. Please ensure it is set in the environment.");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateRamuKakaResponse = async (
  prompt: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const ai = getAIClient();
    
    // We use gemini-3-flash-preview for fast, witty responses
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9, // Higher temperature for more creativity and humor
        topP: 0.95,
        topK: 40,
      },
    });

    return response.text || "Beta, mera dimaag thoda off hai. Recharge karke aa.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Arre bhai, network slow hai ya tera dimaag? Google se connectivity tut gayi!";
  }
};
