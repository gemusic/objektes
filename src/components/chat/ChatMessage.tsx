import type { ChatMessage as ChatMessageType } from '@/types/tracking';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isVisitor = message.sender === 'visitor';

  return (
    <div
      className={`flex ${isVisitor ? 'justify-end' : 'justify-start'} mb-4 animate-slide-up`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isVisitor
            ? 'bg-primary text-primary-foreground rounded-br-sm'
            : 'bg-secondary text-foreground rounded-bl-sm'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.message}
        </p>
        <p className={`text-[10px] mt-1 ${isVisitor ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
          {new Date(message.timestamp).toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
