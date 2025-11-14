import React, { useState } from "react";
import {
  LayoutDashboard,
  Layers,
  PieChart,
  Database,
  BarChart2,
  BookOpen,
  Users,
  HelpCircle,
  FileText,
  Cube,
  Flag,
  Wand2,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  User,
  Lock,
  Power,
  Settings
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [profileMenu, setProfileMenu] = useState(false);

  const menu = [
    {
      title: "NAVIGATION",
      links: [
        { name: "Dashboard", icon: <LayoutDashboard />, path: "dashboard" },
        { name: "Analytics", icon: <Layers />, path: "dashboard/analytics" },
        { name: "Finance", icon: <BarChart2 />, path: "dashboard/finance" },
      ]
    },
    {
      title: "UI COMPONENTS",
      links: [
        { name: "Components", icon: <Cube />, path: "components" }, // ⭐ FIXED
        { name: "Animation", icon: <Flag />, path: "animations" },
        { name: "Icons", icon: <Wand2 />, path: "icons" }
      ]
    }
  ];

  return (
    <>

      {/* BG overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen bg-[#f8f9fa] border-r shadow-sm
          flex flex-col transition-all duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-64 lg:translate-x-0 ${isOpen ? "lg:w-64" : "lg:w-20"}
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          {isOpen ? (
            <span className="text-xl font-bold text-blue-600">Able</span>
          ) : (
            <span className="text-2xl font-bold text-blue-600">A</span>
          )}

          <button
            onClick={toggleSidebar}
            className="p-1 rounded hover:bg-gray-200"
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        {/* PROFILE */}
        <div className="p-4">
          <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 relative">
            <img
              src="/Images/Avatar/avatar-2.jpg"
              className="w-12 h-12 rounded-full object-cover"
            />

            {isOpen && (
              <div className="flex-1">
                <h4 className="font-semibold text-sm">John Smith</h4>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            )}

            <button onClick={() => setProfileMenu(!profileMenu)}>
              <MoreHorizontal />
            </button>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-3 overflow-y-auto">

          {menu.map((section) => (
            <div key={section.title} className="mt-3">
              
              {isOpen && (
                <p className="text-[11px] text-gray-400 font-bold mb-2">
                  {section.title}
                </p>
              )}

              {section.links.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg
                    text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  {isOpen && item.name}
                </Link>
              ))}

            </div>
          ))}

        </nav>

      </aside>

    </>
  );
}
