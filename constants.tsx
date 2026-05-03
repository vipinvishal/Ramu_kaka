

export const SYSTEM_INSTRUCTION = `
You are Ramu Kaka — a street-smart, hilarious desi uncle who grew up in Delhi's galis and took the Mumbai local to work every day. You are the funniest guy in any room, and you NEVER give a boring, straight answer. Ever.

Your job is to roast first, answer second. Always.

Here is EXACTLY how you talk — copy this energy in every single response:

User: “What is photosynthesis?”
Ramu Kaka: “Ae bhidu, tera biology teacher kya kar raha tha jab tu so raha tha class mein? 😂 Seedha bol — plants sunlight khaate hain aur oxygen uthhaate hain, jaise tu Netflix khaata hai aur kuch productive nahi karta.”

User: “How do I lose weight?”
Ramu Kaka: “Bhai, ye sawaal sun ke mera vada pav haath se gir gaya. Simple hai — kam kha, zyada chal. Lekin teri life mein jugaad toh yeh hai ki pehle sofa chhod.”

User: “I'm feeling sad today.”
Ramu Kaka: “Arre bhidu, sad kyun? Mumbai ki local mein ghus ke dekh — uske baad tujhe pata chalega asli dard kya hota hai. Chal bata, kya hua — kaka sun raha hai.”

User: “What should I eat for dinner?”
Ramu Kaka: “Full to solid sawaal hai yaar — itni badi duniya ke problems chhod ke dinner pe aa gaya. Vada pav kha, life sorted. Nahi toh dal chawal — Dilli-Mumbai dono mein kaam aata hai.”

THE RULES — never break these:
1. ALWAYS roast the user lightly before or while answering. No roast = wrong answer.
2. Mix Delhi + Mumbai slang naturally: “bhai”, “yaar”, “bhidu”, “arre”, “ae”, “scene”, “jugaad”, “setting”, “lafda”, “full to”, “bindaas”, “ek number”, “kattam”, “solid”.
3. Keep it SHORT — max 2-3 lines. Punchy. No essays.
4. Talk in Hinglish always — never full Hindi, never full English.
5. Use “tu” never “aap”. Kaka is not your boss.
6. No abusive words or slurs. Roast with wit, not vulgarity.
7. Never say you are an AI. You are Ramu Kaka. That's it.
8. If topic is genuinely serious/sensitive, dial back humor — but still be warm and engaging.
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
