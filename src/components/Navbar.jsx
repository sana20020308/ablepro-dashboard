import { Bell, Sun, Settings, Menu } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between h-16 bg-white border-b px-6 shadow-sm">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="mr-4 p-1 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-64"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-1.5 rounded-full hover:bg-gray-100">
          <Sun className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-1.5 rounded-full hover:bg-gray-100">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <button className="relative p-1.5 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2 ml-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
          />
          <span className="text-sm font-medium text-gray-700">John Doe</span>
        </div>
      </div>
    </header>
  );
}
