
import Groq from "groq-sdk";
import { SYSTEM_INSTRUCTION } from "../constants";

export const generateRamuKakaResponse = async (
  prompt: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const apiKey = import.meta.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("Kaka Error: GROQ_API_KEY is missing!");
      return "Arre oye! Bina chabi (API Key) ke tala kaise khulega? Vercel settings mein jaake key daal pehle.";
    }

    const client = new Groq({ apiKey, dangerouslyAllowBrowser: true });

    const messages = [
      { role: 'system' as const, content: SYSTEM_INSTRUCTION },
      ...history.map(msg => ({
        role: (msg.role === 'model' ? 'assistant' : 'user') as 'assistant' | 'user',
        content: msg.parts[0].text,
      })),
      { role: 'user' as const, content: prompt },
    ];

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 1.0,
      max_tokens: 300,
    });

    return completion.choices[0]?.message?.content || "Beta, dimaag khali hai mera abhi. Thodi der baad puch.";
  } catch (error: any) {
    console.error("Groq API Call Failed:", error);
    return "Arre bhai, network slow hai ya tera dimaag? Groq se connectivity tut gayi! (Console dekh, error wahan hai)";
  }
};
