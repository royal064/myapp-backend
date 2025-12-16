export default function UploadBox() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <input
        type="file"
        accept="image/*,video/*"
        className="w-full"
      />
    </div>
  );
}
