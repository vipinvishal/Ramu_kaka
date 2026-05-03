
import { SYSTEM_INSTRUCTION } from "../constants";

export const generateRamuKakaResponse = async (
  prompt: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const apiKey = import.meta.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Kaka Error: GEMINI_API_KEY is missing!");
      return "Arre oye! Bina chabi (API Key) ke tala kaise khulega? Vercel settings mein jaake key daal pehle.";
    }

    const messages = [
      { role: 'system', content: SYSTEM_INSTRUCTION },
      ...history.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.parts[0].text,
      })),
      { role: 'user', content: prompt },
    ];

    const response = await fetch('https://api.euron.one/api/v1/euri/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gemini-2.0-flash',
        messages,
        temperature: 1.0,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Euron API Error:", err);
      return "Arre bhai, kuch toh lafda hai API mein. Console dekh.";
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "Beta, dimaag khali hai mera abhi. Thodi der baad puch.";
  } catch (error: any) {
    console.error("API Call Failed:", error);
    return "Arre bhai, network slow hai ya tera dimaag? Connectivity tut gayi!";
  }
};
