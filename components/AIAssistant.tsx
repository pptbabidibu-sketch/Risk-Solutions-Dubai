
import React, { useState, useRef, useEffect } from 'react';
import { getRiskInsights } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([
    { role: 'model', text: 'Protocol initialized. I am your AI Risk Analyst. Please specify the engineering scenario or coastal vulnerability you wish to analyze.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const responseText = await getRiskInsights(input);
    const aiMessage = { role: 'model', text: responseText || 'Analysis complete.' };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-[#F5F5F0] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 w-80 md:w-96 overflow-hidden flex flex-col h-[500px]">
          <div className="bg-black p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">Risk Analysis Unit</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <iconify-icon icon="solar:close-linear" width="20"></iconify-icon>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-black text-white rounded-tr-none' 
                  : 'bg-white text-gray-700 border border-black/5 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-black/5 rounded-2xl p-4 text-xs text-gray-400 font-mono italic">
                  COMPUTING STOCHASTIC DATA...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-black/5 bg-white flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="System query..."
              className="flex-1 bg-[#F5F5F0] border-none rounded-xl px-4 py-3 text-sm focus:outline-none placeholder:text-gray-300 text-black font-medium"
            />
            <button 
              onClick={handleSend}
              className="bg-black text-white w-12 h-12 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center group"
            >
              <iconify-icon icon="solar:plain-3-linear" width="20" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <iconify-icon icon="solar:chat-round-dots-linear" width="28" className="group-hover:rotate-12 transition-transform"></iconify-icon>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
