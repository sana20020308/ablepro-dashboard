// /src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import ProfilePopup from "./ProfilePopup";
import { Bell, Sun, Settings, Zap, Menu, Search, Type } from "lucide-react";

/**
 * Responsive Navbar tuned for Able Pro mobile:
 * - On mobile: compact layout, hamburger left, small action icons, avatar right (matches screenshot)
 * - On desktop: original search input shown
 * - Uses props: toggleSidebar(isOpen toggle), isSidebarOpen (keeps existing app logic)
 */

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setOpenNotif(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setOpenProfile(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`
        fixed top-0 right-0 z-50
        flex items-center justify-between
        h-16 px-4 sm:px-6
        bg-white/40 backdrop-blur-md
        border-b border-white/20
        transition-all duration-300
        left-0
        ${isSidebarOpen ? "lg:left-64" : "lg:left-20"}
      `}
    >
      {/* LEFT: hamburger + compact search (mobile) */}
      <div className="flex items-center gap-3">
        {/* hamburger always visible on mobile and small on desktop */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-white/30 text-gray-600 transition"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* mobile tiny search placeholder (visible on small devices) */}
        <div className="flex items-center gap-2">
          <div className="relative md:hidden">
            <Search className="absolute left-2 top-2 w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-2 py-1.5 text-xs bg-white/60 border border-gray-200 rounded-md w-[120px]"
            />
          </div>

          {/* desktop full search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Ctrl + K"
              className="
                pl-9 pr-4 py-2 text-sm bg-white/60
                border border-gray-200 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-100
                placeholder-gray-400 text-gray-700
                w-64 transition
              "
            />
          </div>
        </div>
      </div>

      {/* RIGHT: compact action icons (stacked like screenshot on mobile) */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600">
          <Sun className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600 hidden sm:inline-flex">
          <Type className="w-4 h-4" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600 hidden sm:inline-flex">
          <Settings className="w-4 h-4" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600">
          <Zap className="w-4 h-4" />
        </button>

        {/* NOTIFICATION */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setOpenNotif(!openNotif);
              setOpenProfile(false);
            }}
            className="p-2 rounded-full hover:bg-white/30 transition text-gray-600 relative"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </button>

          {openNotif && (
            <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 shadow-xl rounded-2xl p-3 animate-fadeIn">
              <h3 className="font-semibold text-gray-800 mb-2">Notifications</h3>
              <div className="space-y-2">
                <div className="p-2 rounded-xl bg-gray-50">
                  <div className="font-medium">UI/UX Design</div>
                  <div className="text-xs text-gray-400">2 min ago</div>
                </div>
                <div className="p-2 rounded-xl bg-gray-50">
                  <div className="font-medium">Message</div>
                  <div className="text-xs text-gray-400">1 hour ago</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="relative" ref={profileRef}>
          <img
            src="/Images/Avatar/avatar-1.jpg"
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover cursor-pointer"
            onClick={() => {
              setOpenProfile(!openProfile);
              setOpenNotif(false);
            }}
            alt="profile"
          />
          {openProfile && <ProfilePopup />}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadeIn { animation: fadeIn .16s ease-out; }
      `}</style>
    </header>
  );
}
