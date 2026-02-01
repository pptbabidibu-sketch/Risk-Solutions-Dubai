
import React, { useState, useRef, useEffect } from 'react';
import { getRiskInsights } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your AI Risk Analyst. Ask me anything about oceanography, wave patterns, or stochastic engineering scenarios.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const responseText = await getRiskInsights(input);
    const aiMessage: ChatMessage = { role: 'model', text: responseText || 'Analysis complete.' };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-[#111111] rounded-3xl shadow-2xl border border-white/10 w-80 md:w-96 overflow-hidden flex flex-col h-[500px]">
          <div className="bg-[#1A1A1A] p-4 text-[#F5F5F0] flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0891B2] animate-pulse"></div>
              <span className="font-mono text-xs uppercase tracking-widest">AI PROTOCOL</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#0891B2] transition-colors">
              <iconify-icon icon="solar:close-square-linear" width="20"></iconify-icon>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-[#0891B2] text-white' 
                  : 'bg-[#1A1A1A] text-[#F5F5F0]/80 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A1A] rounded-2xl p-3 text-xs text-white/30 italic border border-white/5">
                  Analyzing engineering data...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-white/5 flex gap-2 bg-[#111111]">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="QUERY..."
              className="flex-1 bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-2 text-sm text-[#F5F5F0] placeholder:text-white/10 focus:outline-none focus:border-[#0891B2]/50 transition-colors uppercase font-mono"
            />
            <button 
              onClick={handleSend}
              className="bg-[#F5F5F0] text-black p-2 rounded-xl hover:bg-[#0891B2] hover:text-white transition-colors flex items-center justify-center"
            >
              <iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#F5F5F0] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-[#0891B2] hover:text-white transition-all hover:scale-110 active:scale-95"
        >
          <iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
