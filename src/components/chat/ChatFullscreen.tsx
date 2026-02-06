import { useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ProductCard from './ProductCard';
import logo from '@/assets/logo.png';

const ChatFullscreen = () => {
  const { 
    messages, 
    isOpen, 
    isFullscreen, 
    closeChat, 
    sendMessage, 
    showProductCard,
    firstMessage 
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showProductCard]);

  if (!isOpen || !isFullscreen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col animate-fade-in">
      {/* Header */}
      <header className="flex items-center gap-4 px-4 py-4 border-b border-secondary bg-background">
        <button
          onClick={closeChat}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          aria-label="Retour"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3">
          <img src={logo} alt="objekté" className="h-6" />
          <div>
            <p className="text-sm font-medium">objekté</p>
            <p className="text-xs text-muted-foreground">En ligne</p>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* First message if exists */}
        {firstMessage && messages.length === 0 && (
          <div className="flex justify-start mb-4">
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary text-foreground px-4 py-3">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {firstMessage}
              </p>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Product Card */}
        {showProductCard && <ProductCard />}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatFullscreen;
