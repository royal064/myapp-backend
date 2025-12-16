export default function FriendsList() {
  const friends = ["Alex", "Mary", "John"];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Friends</h3>
      <ul>
        {friends.map((f) => (
          <li key={f} className="border-b py-1">
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
