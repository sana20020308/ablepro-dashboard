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
  BookOpen,
  Users,
  HelpCircle,
  FileText,
  Cube,
  Flag,
  Type,
  PlusSquare,
  Upload,
  FileCheck,
  Wand2,
  Table,
  List,
  Grid,
  Map,
  CalendarDays,
  MessageSquare,
  ShoppingBag,
  Folder,
  Mail,
  DollarSign,
  Plane,
  MoreHorizontal,
} from "lucide-react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-50 h-screen flex flex-col border-r border-gray-200 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {/* LOGO SECTION */}
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

      {/* PROFILE SECTION */}
      <div className="relative flex flex-col items-center py-6 border-b border-gray-200 px-4">
        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden">
          <img
            src="public/Images/avatar1.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-sm font-semibold text-gray-900 mt-3">
          Jonh Smith
        </h2>
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

      {/* SCROLLABLE MENU */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
        {/* NAVIGATION */}
        <SidebarTitle title="Navigation" />
        <SidebarGroup
          active
          icon={<LayoutDashboard />}
          label="Dashboard"
          badge="2"
          subItems={[
            { name: "Default", active: true },
            { name: "Analytics" },
            { name: "Finance" },
            { name: "Layouts", icon: <Layers /> },
          ]}
        />

        {/* WIDGET */}
        <SidebarTitle title="Widget" />
        <SidebarLink icon={<BarChart2 />} label="Statistics" />
        <SidebarLink icon={<Database />} label="Data" />
        <SidebarLink icon={<PieChart />} label="Chart" />

        {/* ADMIN PANEL */}
        <SidebarTitle title="Admin Panel" />
        <SidebarLink icon={<BookOpen />} label="Online Courses" />
        <SidebarLink icon={<Users />} label="Membership" />
        <SidebarLink icon={<CalendarDays />} label="Helpdesk" />
        <SidebarLink icon={<FileText />} label="Invoice" />

        {/* UI COMPONENTS */}
        <SidebarTitle title="UI Components" />
        <SidebarLink icon={<Cube />} label="Components" />
        <SidebarLink icon={<Flag />} label="Animation" />
        <SidebarLink icon={<User />} label="Icons" />

        {/* FORMS */}
        <SidebarTitle title="Forms" />
        <SidebarLink icon={<PlusSquare />} label="Form Elements" />
        <SidebarLink icon={<Wand2 />} label="Form Plugins" />
        <SidebarLink icon={<Type />} label="Text Editor" />
        <SidebarLink icon={<Layers />} label="Form Layouts" />
        <SidebarLink icon={<Upload />} label="File Upload" />
        <SidebarLink icon={<ClipboardList />} label="Wizard" />
        <SidebarLink icon={<FileCheck />} label="Form Validation" />
        <SidebarLink icon={<CreditCard />} label="Images Cropper" />

        {/* TABLES */}
        <SidebarTitle title="Tables" />
        <SidebarLink icon={<Table />} label="Bootstrap Table" />
        <SidebarLink icon={<List />} label="Vanilla Table" />
        <SidebarLink icon={<Grid />} label="Data Table" />
        <SidebarLink icon={<ClipboardList />} label="DT extensions" />

        {/* CHART & MAPS */}
        <SidebarTitle title="Chart & Maps" />
        <SidebarLink icon={<PieChart />} label="Charts" />
        <SidebarLink icon={<Map />} label="Map" />

        {/* APPLICATION */}
        <SidebarTitle title="Application" />
        <SidebarLink icon={<CalendarDays />} label="Calendar" />
        <SidebarLink icon={<MessageSquare />} label="Chat" />
        <SidebarLink icon={<User />} label="Customer" />
        <SidebarLink icon={<ShoppingBag />} label="Ecommerce" />
        <SidebarLink icon={<Folder />} label="File manager" />
        <SidebarLink icon={<Mail />} label="Mail" />
        <SidebarLink icon={<User />} label="User" />

        {/* PAGES */}
        <SidebarTitle title="Pages" />
        <SidebarLink icon={<Shield />} label="Authentication" />
        <SidebarLink icon={<Flag />} label="Maintenance" />
        <SidebarLink icon={<CalendarDays />} label="Contact Us" />
        <SidebarLink icon={<DollarSign />} label="Price" />
        <SidebarLink icon={<Plane />} label="Landing" />

        {/* OTHER */}
        <SidebarTitle title="Other" />
        <SidebarLink icon={<MoreHorizontal />} label="Menu levels" />
        <SidebarLink icon={<FileText />} label="Sample Page" />
      </div>
    </aside>
  );
}

/* COMPONENTS */
function SidebarTitle({ title }) {
  return (
    <h3 className="text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-2">
      {title}
    </h3>
  );
}

function SidebarGroup({ icon, label, badge, subItems, active }) {
  return (
    <div className="space-y-2">
      <div
        className={`flex items-center justify-between w-full ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700 hover:text-blue-600"
        } px-3 py-2.5 rounded-xl font-medium shadow-sm cursor-pointer`}
      >
        <span className="flex items-center space-x-2">
          <span className="w-5 h-5">{icon}</span>
          <span>{label}</span>
        </span>
        {badge && (
          <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5 font-semibold">
            {badge}
          </span>
        )}
      </div>

      {/* Sub Items */}
      <ul className="ml-5 space-y-1 text-sm">
        {subItems.map((item, i) => (
          <li
            key={i}
            className={`flex items-center space-x-2 cursor-pointer ${
              item.active
                ? "text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                item.active ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidebarLink({ icon, label }) {
  return (
    <div className="flex items-center text-[14px] text-gray-700 font-medium py-2 cursor-pointer group hover:text-blue-600">
      <span className="text-gray-500 group-hover:text-blue-600 w-6">{icon}</span>
      <span className="flex-1">{label}</span>
      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
    </div>
  );
}
