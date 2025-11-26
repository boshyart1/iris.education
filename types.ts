export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
}

export interface DocumentItem {
  name: string;
  note: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}