export default function PostCard({
  username,
  content,
}: {
  username: string;
  content: string;
}) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-semibold">{username}</h3>
      <p className="mt-2">{content}</p>

      <div className="flex gap-4 mt-3 text-sm text-gray-600">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}
