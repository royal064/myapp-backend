import PostCard from "@/components/PostCard";

export default function FeedPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <PostCard username="Royal" content="My first post 🚀" />
      <PostCard username="Alex" content="Hello world!" />
    </div>
  );
}
