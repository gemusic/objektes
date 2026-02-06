import { X } from 'lucide-react';
import { useChat } from '@/context/ChatContext';

const ChatPopup = () => {
  const { showPopup, firstMessage, openChat, dismissPopup } = useChat();

  if (!showPopup || !firstMessage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 animate-fade-in"
        onClick={dismissPopup}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-2xl max-w-md w-full p-8 animate-scale-fade-in">
        {/* Close button */}
        <button
          onClick={dismissPopup}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <span className="font-serif text-2xl text-primary">o</span>
          </div>

          {/* Message */}
          <p className="text-foreground/80 leading-relaxed mb-8">
            {firstMessage}
          </p>

          {/* CTA Button */}
          <button
            onClick={openChat}
            className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
          >
            Discuter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
