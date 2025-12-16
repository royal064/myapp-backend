import NotificationItem from "@/components/NotificationItem";

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Notifications</h1>

      <NotificationItem text="Alex liked your post" />
      <NotificationItem text="Mary sent you a message" />
      <NotificationItem text="John followed you" />
    </div>
  );
}
