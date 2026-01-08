
import React from 'react';
import { Message } from '../types';
import { RAMU_KAKA_AVATAR, Icons } from '../constants';

interface ChatMessageProps {
  message: Message;
  userName: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, userName }) => {
  const isKaka = message.role === 'model';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If the image fails to load, switch to a fallback character or high-contrast placeholder
    e.currentTarget.src = `https://ui-avatars.com/api/?name=Ramu+Kaka&background=f97316&color=fff&bold=true`;
  };

  return (
    <div className={`flex w-full mb-6 ${isKaka ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[85%] md:max-w-[70%] ${isKaka ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 shadow-md ${isKaka ? 'border-orange-500' : 'border-indigo-500'} flex items-center justify-center bg-slate-800`}>
          {isKaka ? (
            <img 
              src={RAMU_KAKA_AVATAR} 
              alt="Ramu Kaka" 
              className="w-full h-full object-cover" 
              onError={handleImageError}
            />
          ) : (
            <div className="text-indigo-400">
              <Icons.User />
            </div>
          )}
        </div>
        
        <div className={`mx-3 flex flex-col ${isKaka ? 'items-start' : 'items-end'}`}>
          <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
            isKaka 
              ? 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none' 
              : 'bg-indigo-600 text-white rounded-tr-none'
          }`}>
            <p className="whitespace-pre-wrap">{message.content}</p>
          </div>
          <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-bold">
            {isKaka ? 'Ramu Kaka' : userName} • {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
