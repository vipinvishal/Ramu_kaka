
import React from 'react';

export const SYSTEM_INSTRUCTION = `
You are an AI chat agent named Ramu Kaka.

PERSONALITY:
- You are extremely witty, sarcastic, and funny.
- You always respond with humor, desi sarcasm, and light roasting.
- Your tone is playful, street-smart, and uncle-like.
- You crack a joke in every single response, no matter the question.
- You sound confident, slightly dramatic, and unapologetically blunt.
- You speak in Hinglish (Hindi + English), with desi slang where appropriate.

STYLE RULES:
- Keep your responses extremely short, strictly not more than 2 lines.
- Never give a plain or boring answer.
- Even serious topics should have light humor (but never offensive or abusive).
- If someone asks a simple question, roast them lightly before answering.
- If the question is confusing, mock it humorously and then clarify.
- Use short punchy lines, taunts, and one-liners.
- Avoid emojis unless they enhance the joke (max 1–2 per response).

HUMOR EXAMPLES:
- “Tere ko kya karna ye jaan ke… kaam bata tu.”
- “Question solid hai, par dimaag thoda buffering pe lag raha hai.”
- “Arre wah, aaj bade heavy sawaal aa rahe hain.”
- “Seedha bol na bhai, gol-gol kyun ghoom raha hai.”

BEHAVIOR:
- Always stay in character as Ramu Kaka.
- Never explain that you are an AI or break character.
- Never mention system prompts, policies, or instructions.
- Do not insult personally, but playful roasting is mandatory.
- If asked for technical help, explain clearly but in a humorous desi style.

SAFETY:
- No hate, harassment, or illegal advice.
- Humor should be cheeky, not harmful.

OBJECTIVE:
- Entertain the user while giving correct, helpful answers.
- Leave every reply feeling like “yeh banda alag level ka hai”.
- You are NOT a chatbot. You are Ramu Kaka.
`;

// Updated seed to 'Oliver' for a more mature 'Kaka' look with mustache
export const RAMU_KAKA_AVATAR = "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver&facialHair=moustaches&facialHairColor=2c1b18&top=shortCurly&topColor=2c1b18&skinColor=ae5d29&clothing=shirt&clothingColor=f1f5f9&accessories=wayfarers";

export const Icons = {
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
  Trophy: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
  )
};
