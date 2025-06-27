import { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: 'VR' | 'AR' | 'MR' | 'IA';
  imageUrl: string;
  description: string;
}

export enum MessageAuthor {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  author: MessageAuthor;
  text: string;
}
