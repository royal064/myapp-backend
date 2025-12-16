import ChatBubble from "@/components/ChatBubble";

export default function ChatPage() {
  return (
    <div className="p-6">
      <ChatBubble message="Hello 👋" isMe={false} />
      <ChatBubble message="Hi there!" isMe={true} />
    </div>
  );
}
