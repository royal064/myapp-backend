export default function NotificationItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="bg-blue-100 p-3 rounded mb-2">
      {text}
    </div>
  );
}
