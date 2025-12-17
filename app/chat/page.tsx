import ChatWidget from '@/components/chat-widget';

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Chatbot Interface</h1>
      <ChatWidget />
    </div>
  );
}