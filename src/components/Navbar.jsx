import { Bell, Sun, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between h-16 bg-white border-b px-6 shadow-sm">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-64"
      />

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Sun className="w-5 h-5 text-gray-600 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
