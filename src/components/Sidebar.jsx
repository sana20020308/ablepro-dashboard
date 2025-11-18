// /src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  LayoutDashboard,
  BarChart2,
  PieChart,
  Database,
  Package,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Sidebar tuned for mobile:
 * - On mobile (lg:hidden): full-screen sliding drawer with backdrop (pixel match)
 * - On desktop: keep the collapsed/expanded behaviour
 *
 * Props:
 * - isOpen: boolean (controls mobile overlay open)
 * - toggleSidebar: function
 *
 * Note: The top logo / toggle keeps same labels but adapts width for mobile.
 */

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openMenu] = useState(null);

  const sections = [
    {
      title: "NAVIGATION",
      items: [
        { name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
        { name: "Finance", icon: <BarChart2 />, path: "/dashboard/finance" },
        { name: "Statistics", icon: <PieChart />, path: "/statistics" },
        { name: "Data", icon: <Database />, path: "/data" },
        { name: "Charts", icon: <BarChart2 />, path: "/charts" },
      ],
    },
    {
      title: "UI COMPONENTS",
      items: [{ name: "Components", icon: <Package />, path: "/components" }],
    },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-30 transition-opacity lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!isOpen}
        onClick={toggleSidebar}
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen flex flex-col
          bg-[#f8f9fa] border-r border-gray-200
          transition-transform duration-300
          w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-64
        `}
        aria-hidden={!isOpen && window.innerWidth < 1024}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f8f9fa]">
          <div className="flex items-center gap-3">
            <img src="/Images/logo-small.png" alt="logo" className="w-7 h-7 object-contain" />
            <span className="text-blue-600 font-bold text-lg hidden lg:inline">Able</span>
          </div>

          <button onClick={toggleSidebar} className="p-1 text-gray-500 hover:bg-gray-200 rounded">
            <ChevronLeft />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-5">
          {sections.map((section) => (
            <div key={section.title} className="mt-4">
              <p className="text-[11px] font-bold text-gray-400 mb-2 px-2">{section.title}</p>
              {section.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => { if (window.innerWidth < 1024) toggleSidebar(); }}
                  className="flex items-center gap-3 py-2.5 px-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
