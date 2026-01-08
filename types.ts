
export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  title: string;
}
