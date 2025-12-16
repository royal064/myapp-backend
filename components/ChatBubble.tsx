export default function ChatBubble({
  message,
  isMe,
}: {
  message: string;
  isMe: boolean;
}) {
  return (
    <div
      className={`max-w-xs p-3 rounded mb-2 ${
        isMe
          ? "bg-green-500 text-white ml-auto"
          : "bg-gray-200"
      }`}
    >
      {message}
    </div>
  );
}
