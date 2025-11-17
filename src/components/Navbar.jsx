import { useState, useRef, useEffect } from "react";
import ProfilePopup from "./ProfilePopup";
import { Bell, Sun, Settings, Zap, Menu, Search, Type } from "lucide-react";

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  /* ---- CLOSE BOTH ON OUTSIDE CLICK ---- */
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target)
      ) {
        setOpenNotif(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setOpenProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`
        fixed top-0 right-0 z-50
        flex items-center justify-between
        h-16 px-6
        bg-white/40 backdrop-blur-xl
        border-b border-white/20 shadow-sm
        transition-all duration-300
        left-0
        ${isSidebarOpen ? "lg:left-64" : "lg:left-20"}
      `}
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-white/30 text-gray-600 transition"
        >
          <Menu className="w-5 h-5" />
        </button>

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

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600">
          <Sun className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600">
          <Type className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600">
          <Settings className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/30 text-gray-600">
          <Zap className="w-5 h-5" />
        </button>

        {/* NOTIFICATION */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setOpenNotif(!openNotif);
              setOpenProfile(false);
            }}
            className="p-2 rounded-full hover:bg-white/30 transition text-gray-600 relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </button>

          {openNotif && (
            <div
              className="
                absolute right-0 mt-3 w-80
                bg-white border border-gray-200 shadow-xl
                rounded-2xl p-4 animate-fadeIn
              "
            >
              <h3 className="font-semibold text-gray-800 mb-3">Notifications</h3>

              <div className="p-4 mb-3 border rounded-xl bg-gray-50">
                <h4 className="font-semibold text-gray-800">UI/UX Design</h4>
                <p className="text-xs text-gray-400">2 min ago</p>
              </div>

              <div className="p-4 mb-3 border rounded-xl bg-gray-50">
                <h4 className="font-semibold text-gray-800">Message</h4>
                <p className="text-xs text-gray-400">1 hour ago</p>
              </div>

              <div className="p-4 border rounded-xl bg-gray-50">
                <h4 className="font-semibold text-gray-800">Forms</h4>
                <p className="text-xs text-gray-400">Yesterday</p>
              </div>
            </div>
          )}
        </div>

        {/* PROFILE BUTTON */}
        <div className="relative" ref={profileRef}>
          <img
            src="/Images/Avatar/avatar-1.jpg"
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover cursor-pointer"
            onClick={() => {
              setOpenProfile(!openProfile);
              setOpenNotif(false);
            }}
          />

          {openProfile && <ProfilePopup />}
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.18s ease-out;
        }
      `}</style>
    </header>
  );
}
