import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'أهلاً! أنا مساعد آيريس الذكي 🤖. عندك أي سؤال عن الدراسة في مصر أو الأوراق المطلوبة؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiMsg = await getAIResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: aiMsg }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? 'hidden' : 'flex'} fixed bottom-6 left-6 z-40 items-center justify-center bg-brand-orange text-white p-4 rounded-full shadow-2xl hover:bg-brand-dark transition transform hover:scale-105`}
        aria-label="Ask AI"
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
        <span className="mr-2 font-bold hidden md:block">عندك سؤال؟</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden" style={{ maxHeight: '80vh' }}>
          {/* Header */}
          <div className="bg-brand-orange p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 ml-2" />
              <h3 className="font-bold">مستشارك الذكي</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 h-80">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-orange text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex space-x-1 space-x-reverse">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-800 placeholder-gray-400 focus:outline-none ml-2"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="text-brand-orange disabled:text-gray-400 hover:scale-110 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400">مدعوم بواسطة Gemini AI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAdvisor;