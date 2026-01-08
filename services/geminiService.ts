
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const generateRamuKakaResponse = async (
  prompt: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === "undefined") {
      console.error("Kaka Error: API_KEY is missing! Check your Vercel Environment Variables.");
      return "Arre oye! Bina chabi (API Key) ke tala kaise khulega? Vercel settings mein jaake key daal pehle.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-3-flash-preview as per the strict quality guidelines for basic text tasks
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9,
      },
    });

    if (!response.text) {
      console.warn("Kaka Warning: Empty response from Gemini.");
      return "Beta, dimaag khali hai mera abhi. Thodi der baad puch.";
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Call Failed:", error);
    
    // If it's a 404, the model name might not be accessible yet for this key
    if (error?.message?.includes('404') || error?.message?.includes('not found')) {
      return "Arre bhai, ye naya model (Gemini 3) tere ilake mein nahi aaya lagta hai. Apni kismat check kar.";
    }

    return "Arre bhai, network slow hai ya tera dimaag? Google se connectivity tut gayi! (Console dekh, error wahan hai)";
  }
};
