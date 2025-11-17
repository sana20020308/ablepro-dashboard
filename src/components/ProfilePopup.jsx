import { LogOut, User, Settings, Users, ChevronRight } from "lucide-react";

export default function ProfilePopup() {
  return (
    <div
      className="
        absolute right-0 mt-3 w-80
        bg-white border border-gray-200 shadow-xl
        rounded-2xl p-4 animate-fadeIn
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="/Images/Avatar/avatar-1.jpg"
          className="w-10 h-10 rounded-full object-cover"
          alt="profile"
        />
        <div>
          <h4 className="font-semibold text-gray-800">John Deo</h4>
          <p className="text-xs text-gray-500">deo123@gmail.com</p>
        </div>
      </div>

      {/* MENU ITEMS */}
      <div className="space-y-2">

        <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">My Account</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <Settings className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Settings</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Team</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>

      </div>

      {/* SEPARATOR */}
      <div className="border-t my-3"></div>

      {/* LOGOUT */}
      <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition text-red-600 font-semibold">
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </div>
  );
}
