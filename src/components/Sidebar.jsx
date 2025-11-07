import React, { useState } from "react";
import {
  LayoutDashboard,
  BarChart2,
  CreditCard,
  Layers,
  Database,
  PieChart,
  ClipboardList,
  ChevronRight,
  Settings,
  Lock,
  Power,
  User,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-50 h-screen flex flex-col border-r border-gray-200">
      {/* ================= LOGO SECTION ================= */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <div className="flex items-center space-x-1">
          <h1 className="text-2xl font-bold text-blue-600">Able</h1>
          <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">
            pro
          </span>
        </div>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
          v1.2.0
        </span>
      </div>

      {/* ================= PROFILE SECTION ================= */}
      <div className="relative flex flex-col items-center py-6 border-b border-gray-200">
        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden">
          <img
            src="public/Images/avatar1.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-sm font-semibold text-gray-900 mt-3">Jonh Smith</h2>
        <p className="text-xs text-gray-500">Administrator</p>

        {/* 3-bar dropdown button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute right-5 top-8 p-1.5 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="w-4 h-4 text-gray-600" />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-[90%] bg-white border border-gray-200 shadow-lg rounded-xl w-48 mt-2 z-50 p-3 animate-fadeIn">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                <User className="w-4 h-4 text-gray-500" />
                My Account
              </li>
              <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Settings className="w-4 h-4 text-gray-500" />
                Settings
              </li>
              <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Lock className="w-4 h-4 text-gray-500" />
                Lock Screen
              </li>
              <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer text-red-500">
                <Power className="w-4 h-4" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* ================= NAVIGATION ================= */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* NAVIGATION TITLE */}
        <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Navigation
        </h3>

        {/* Dashboard group */}
        <div className="space-y-1">
          {/* Dashboard main */}
          <button className="flex items-center justify-between w-full bg-blue-50 text-blue-600 px-3 py-2.5 rounded-xl font-medium shadow-sm">
            <span className="flex items-center space-x-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </span>
            <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5 font-semibold">
              2
            </span>
          </button>

          {/* Sub items */}
          <ul className="ml-5 mt-2 space-y-1 text-sm">
            <li className="text-blue-600 flex items-center space-x-2 cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>Default</span>
            </li>
            <li className="text-gray-500 flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span>Analytics</span>
            </li>
            <li className="text-gray-500 flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span>Finance</span>
            </li>
            <li className="text-gray-500 flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
              <Layers className="w-4 h-4" />
              <span>Layouts</span>
              <ChevronRight className="w-3 h-3 ml-auto" />
            </li>
          </ul>
        </div>

        {/* WIDGET SECTION */}
        <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-3">
          Widget
        </h3>

        <div className="space-y-1">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg transition">
            <BarChart2 className="w-4 h-4" />
            <span>Statistics</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg transition">
            <Database className="w-4 h-4" />
            <span>Data</span>
          </button>
          <button className="flex items-center space-x-2 text-blue-600 bg-blue-50 px-3 py-2 rounded-lg transition">
            <PieChart className="w-4 h-4" />
            <span>Chart</span>
          </button>
        </div>

        {/* ADMIN PANEL SECTION */}
        <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2">
          Admin Panel
        </h3>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg transition">
          <ClipboardList className="w-4 h-4" />
          <span>Admin Settings</span>
        </button>
      </div>
    </aside>
  );
}
