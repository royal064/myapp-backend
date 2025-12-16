export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Complete WebApp Creation Guide
        </h1>
        <p className="text-xl text-gray-600 mb-10 text-center">
          Build a full social platform with feed, chat, and blockchain identity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facebook-like Feed Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Facebook-like Feed</h3>
            <p className="text-gray-600">Create posts, likes, comments, and share content.</p>
          </div>
          
          {/* WhatsApp-like Chat Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">WhatsApp-like Chat</h3>
            <p className="text-gray-600">Real-time messaging, groups, and video calls.</p>
          </div>
          
          {/* Web3 Integration Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Web3 Blockchain</h3>
            <p className="text-gray-600">Wallet login, NFT profiles, and token rewards.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700">
            Start Building Now
          </button>
        </div>
      </div>
    </div>
  );
}