
import React, { useState } from 'react';
import Button from './Button';
import { RAMU_KAKA_AVATAR } from '../constants';

interface LoginProps {
  onLogin: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Arre! Itna chhota naam? Kam se kam 2 akshar toh likh.');
      return;
    }
    onLogin(name.trim());
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `https://ui-avatars.com/api/?name=Ramu+Kaka&background=f97316&color=fff&bold=true&size=128`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700 shadow-2xl text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-orange-500 overflow-hidden shadow-lg shadow-orange-500/20 bg-slate-700">
          <img 
            src={RAMU_KAKA_AVATAR} 
            alt="Ramu Kaka" 
            className="w-full h-full object-cover" 
            onError={handleImageError}
          />
        </div>
        
        <h2 className="text-3xl font-bungee text-orange-400 mb-2">Apna Naam Bata, Oye!</h2>
        <p className="text-slate-400 mb-8 text-sm italic">"Bina naam ke entry nahi milti yahan. Jaldi likh, mere paas फालतू ka waqt nahi hai."</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Tera Shubh Naam</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Jaise: Pappu, Chintu, etc."
              className={`w-full bg-slate-900/50 text-white px-5 py-4 rounded-xl border ${error ? 'border-red-500' : 'border-slate-700'} focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all`}
              autoFocus
            />
            {error && <p className="text-red-400 text-xs mt-2 ml-1 font-semibold">{error}</p>}
          </div>
          
          <Button type="submit" className="w-full py-4 text-lg">
            Theek Hai, Chalo!
          </Button>
        </form>
        
        <p className="mt-8 text-[10px] text-slate-600 uppercase font-bold tracking-tighter">Warning: Kaka might roast your name too.</p>
      </div>
    </div>
  );
};

export default Login;
