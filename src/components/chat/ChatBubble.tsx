import { MessageCircle } from 'lucide-react';
import { useChat } from '@/context/ChatContext';

const ChatBubble = () => {
  const { openChat, isOpen, messages } = useChat();

  if (isOpen) return null;

  const hasUnread = messages.some(m => m.sender === 'agent');

  return (
    <button
      onClick={openChat}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
      aria-label="Ouvrir le chat"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      
      {/* Notification badge */}
      {hasUnread && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full flex items-center justify-center">
          <span className="text-[10px] text-white font-medium">!</span>
        </span>
      )}
    </button>
  );
};

export default ChatBubble;
