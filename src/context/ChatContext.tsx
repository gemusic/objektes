import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import type { ChatMessage, LindyPaymentSignal } from '@/types/tracking';
import { pollMessages, sendChatMessage } from '@/lib/trackingService';

interface ChatContextType {
  messages: ChatMessage[];
  isOpen: boolean;
  isFullscreen: boolean;
  showPopup: boolean;
  firstMessage: string | null;
  showProductCard: boolean;
  sessionId: string;
  visitorId: string;
  openChat: () => void;
  closeChat: () => void;
  toggleFullscreen: () => void;
  dismissPopup: () => void;
  sendMessage: (message: string) => Promise<void>;
  setFirstMessage: (message: string) => void;
  triggerProductCard: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [firstMessage, setFirstMessageState] = useState<string | null>(null);
  const [showProductCard, setShowProductCard] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [visitorId, setVisitorId] = useState('');
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastMessageIdRef = useRef<string>('');

  // Initialize session and visitor IDs
  useEffect(() => {
    const storedSessionId = sessionStorage.getItem('objekté_session_id') || '';
    const storedVisitorId = localStorage.getItem('objekté_visitor_id') || '';
    setSessionId(storedSessionId);
    setVisitorId(storedVisitorId);
  }, []);

  // Poll for messages when chat is open
  useEffect(() => {
    if (!sessionId) return;

    const poll = async () => {
      const newMessages = await pollMessages(sessionId);
      
      newMessages.forEach((msg: any) => {
        // Check if it's a new message
        if (msg.id !== lastMessageIdRef.current) {
          lastMessageIdRef.current = msg.id;

          // Handle first message popup
          if (msg.message_type === 'first_message' && !isOpen) {
            setFirstMessageState(msg.message);
            setShowPopup(true);
          }

          // Handle payment signal
          if (msg.action === 'SHOW_PAYMENT_LINK') {
            setShowProductCard(true);
          }

          // Add regular messages
          if (msg.message && msg.sender) {
            setMessages(prev => {
              const exists = prev.some(m => m.id === msg.id);
              if (exists) return prev;
              return [...prev, {
                id: msg.id,
                session_id: msg.session_id,
                sender: msg.sender,
                message: msg.message,
                timestamp: msg.timestamp,
                message_type: msg.message_type,
              }];
            });
          }
        }
      });
    };

    // Poll every 2 seconds
    pollingIntervalRef.current = setInterval(poll, 2000);
    poll(); // Initial poll

    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [sessionId, isOpen]);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setIsFullscreen(true);
    setShowPopup(false);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setIsFullscreen(false);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  const dismissPopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  const setFirstMessage = useCallback((message: string) => {
    setFirstMessageState(message);
    setShowPopup(true);
  }, []);

  const triggerProductCard = useCallback(() => {
    setShowProductCard(true);
  }, []);

  const sendMessageHandler = useCallback(async (message: string) => {
    if (!message.trim() || !sessionId || !visitorId) return;

    // Add message to local state immediately
    const newMessage: ChatMessage = {
      id: `local_${Date.now()}`,
      session_id: sessionId,
      sender: 'visitor',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, newMessage]);

    // Send to backend
    await sendChatMessage(sessionId, visitorId, message.trim());
  }, [sessionId, visitorId]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        isOpen,
        isFullscreen,
        showPopup,
        firstMessage,
        showProductCard,
        sessionId,
        visitorId,
        openChat,
        closeChat,
        toggleFullscreen,
        dismissPopup,
        sendMessage: sendMessageHandler,
        setFirstMessage,
        triggerProductCard,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
