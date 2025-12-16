import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow">
      <h1 className="font-bold text-xl">MySocial</h1>

      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/feed">Feed</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}
