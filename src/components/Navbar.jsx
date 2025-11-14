import { Bell, Sun, Settings, Zap, Menu, Search, Type } from "lucide-react";

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <header
      className={`
        fixed top-0 right-0 z-30
        flex items-center justify-between
        h-16 px-6
        bg-white/40
        backdrop-blur-xl
        border-b border-white/20
        shadow-sm
        transition-all duration-300
        ${isSidebarOpen ? "left-64" : "left-20"}  /* aligns with sidebar width */
      `}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-white/30 text-gray-600 transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Box */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Ctrl + K"
            className="
              pl-9 pr-4 py-2 text-sm
              bg-white/60
              border border-gray-200
              rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-100
              placeholder-gray-400
              text-gray-700
              w-64
              transition
            "
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button className="p-2 rounded-full hover:bg-white/30 transition text-gray-600">
          <Sun className="w-5 h-5" />
        </button>

        {/* Font size toggle */}
        <button className="p-2 rounded-full hover:bg-white/30 transition text-gray-600">
          <Type className="w-5 h-5" />
        </button>

        {/* Settings */}
        <button className="p-2 rounded-full hover:bg-white/30 transition text-gray-600">
          <Settings className="w-5 h-5" />
        </button>

        {/* Zap / Shortcut */}
        <button className="p-2 rounded-full hover:bg-white/30 transition text-gray-600">
          <Zap className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-white/30 transition text-gray-600">
            <Bell className="w-5 h-5" />
          </button>
          <span className="absolute top-1 right-1 bg-green-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* Avatar */}
        <div className="relative">
          <img
            src="/Images/Avatar/avatar-1.jpg"
            alt="User"
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
          />
        </div>
      </div>
    </header>
  );
}
