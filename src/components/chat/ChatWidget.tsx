import ChatBubble from './ChatBubble';
import ChatPopup from './ChatPopup';
import ChatFullscreen from './ChatFullscreen';

const ChatWidget = () => {
  return (
    <>
      <ChatBubble />
      <ChatPopup />
      <ChatFullscreen />
    </>
  );
};

export default ChatWidget;
