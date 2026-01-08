
import React, { useState, useRef, useEffect } from 'react';
import { Message } from './types';
import { generateRamuKakaResponse } from './services/geminiService';
import { getUserName, setUserName as saveUserNameToDB } from './services/db';
import ChatMessage from './components/ChatMessage';
import Login from './components/Login';
import Button from './components/Button';
import { Icons, RAMU_KAKA_AVATAR } from './constants';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedName = await getUserName();
        if (storedName) {
          setUserName(storedName);
          setMessages([
            {
              id: 'welcome',
              role: 'model',
              content: `Oho! ${storedName} babu, aaj bade din baad darsan diye. Kya baat hai, koi kaam hai ya bas mera waqt barbaad karne aaye ho? Jaldi bol, chai thandi ho rahi hai.`,
              timestamp: new Date()
            }
          ]);
        }
      } catch (err) {
        console.error("Failed to load user profile", err);
      } finally {
        setIsInitializing(false);
      }
    };
    loadProfile();
  }, []);

  const handleLogin = async (name: string) => {
    await saveUserNameToDB(name);
    setUserName(name);
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        content: `Acha toh tera naam ${name} hai? Thoda ajeeb hai par chalega. Bata, kya takleef hai tujhe?`,
        timestamp: new Date()
      }
    ]);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `https://ui-avatars.com/api/?name=Ramu+Kaka&background=f97316&color=fff&bold=true`;
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const response = await generateRamuKakaResponse(userMessage.content, history);

    const kakaMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, kakaMessage]);
    setIsLoading(false);
  };

  if (isInitializing) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0f172a]">
        <div className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!userName) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col h-screen max-w-5xl mx-auto px-4 py-6 animate-in fade-in duration-500">
      <header className="flex items-center justify-between mb-6 bg-slate-800/50 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-2 border-orange-500 overflow-hidden bg-slate-700">
               <img 
                 src={RAMU_KAKA_AVATAR} 
                 alt="Ramu Kaka" 
                 className="w-full h-full object-cover" 
                 onError={handleImageError}
               />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
          </div>
          <div>
            <h1 className="text-xl font-bungee text-orange-400 tracking-wide">Ramu Kaka</h1>
            <p className="text-xs text-slate-400 font-medium">Roasting {userName} • Part-time Advisor</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
          <div className="flex items-center gap-1">
            <Icons.Sparkles />
            <span className="text-indigo-400">100% Desi</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto mb-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 relative">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} userName={userName} />
        ))}

        {isLoading && (
          <div className="flex justify-start mb-6">
            <div className="flex flex-row">
               <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-orange-500/50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={RAMU_KAKA_AVATAR} 
                    alt="Thinking" 
                    className="w-full h-full object-cover opacity-50 grayscale" 
                    onError={handleImageError}
                  />
               </div>
               <div className="mx-3 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                  </div>
               </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </main>

      <footer className="bg-slate-800/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700 shadow-2xl">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Bol na ${userName}, kya takleef hai?`}
            className="flex-1 bg-slate-900/50 text-slate-100 px-5 py-4 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder:text-slate-600 transition-all"
          />
          <Button 
            type="submit" 
            isLoading={isLoading} 
            disabled={!inputValue.trim()}
            className="w-14 h-14 !rounded-xl"
          >
            <Icons.Send />
          </Button>
        </form>
        <div className="px-4 py-2 flex justify-between items-center">
          <p className="text-[10px] text-slate-500 font-bold uppercase">Pro tip: Kaka loves {userName} (maybe).</p>
          <div className="flex gap-1 text-[10px] text-orange-500/60 font-bungee italic uppercase">
            <span>Powered by</span>
            <span>Gemini Flash</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
