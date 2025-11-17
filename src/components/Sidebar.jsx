import React, { useState } from "react";
import {
  LayoutDashboard,
  BarChart2,
  PieChart,
  Database,
  ChevronRight,
  ChevronLeft,
  Package,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(null);

  const sections = [
    {
      title: "NAVIGATION",
      items: [
        {
          name: "Dashboard",
          icon: <LayoutDashboard />,
          path: "dashboard",
        },
        {
          name: "Finance",
          icon: <BarChart2 />,
          path: "dashboard/finance",
        },
        {
          name: "Statistics",
          icon: <PieChart />,
          path: "statistics",
        },
        {
          name: "Data",
          icon: <Database />,
          path: "data",
        },
        {
          name: "Charts",          // ⭐ ADDED
          icon: <BarChart2 />,
          path: "charts",
        },
      ],
    },
    {
      title: "UI COMPONENTS",
      items: [
        {
          name: "Components",
          icon: <Package />,
          path: "components",
        },
      ],
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen flex flex-col 
          bg-[#f8f9fa] border-r border-gray-200
          transition-all duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-64 lg:translate-x-0
          ${isOpen ? "lg:w-64" : "lg:w-20"}
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b bg-[#f8f9fa]">
          {isOpen ? (
            <span className="text-blue-600 font-bold text-xl">Able</span>
          ) : (
            <span className="text-blue-600 font-bold text-2xl">A</span>
          )}

          <button
            onClick={toggleSidebar}
            className="p-1 text-gray-500 hover:bg-gray-200 rounded"
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-5">
          {sections.map((section) => (
            <div key={section.title} className="mt-4">

              {isOpen && (
                <p className="text-[11px] font-bold text-gray-400 mb-2">
                  {section.title}
                </p>
              )}

              {section.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-3 py-2.5 px-3 text-gray-700 hover:bg-gray-100 rounded-lg"
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
