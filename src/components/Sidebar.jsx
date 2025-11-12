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
  Grid,
  Type,
  PlusSquare,
  Upload,
  FileCheck,
  Wand2,
  Table,
  List,
  Map,
  CalendarDays,
  MessageSquare,
  ShoppingBag,
  Folder,
  Mail,
  User,
  Shield,
  Flag,
  DollarSign,
  Plane,
  MoreHorizontal,
  ChevronRight,
  ChevronLeft,
  Power,
  Settings,
  Lock,
  Box as Cube,
} from "lucide-react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [profileMenu, setProfileMenu] = useState(false);

  const toggleSubmenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  const sections = [
    {
      title: "NAVIGATION",
      items: [
        {
  name: "Dashboard",
  icon: <LayoutDashboard />,
  hasArrow: true,
  subItems: [
    { name: "Default", path: "/dashboard" },
    { name: "Analytics", path: "/dashboard/analytics" },
    { name: "Finance", path: "/dashboard/finance" }, // ✅ NEW PAGE
  ],
},
        { name: "Layouts", icon: <Layers />, hasArrow: true },
      ],
    },
    {
      title: "WIDGET",
      items: [
        { name: "Statistics", icon: <PieChart /> },
        { name: "Data", icon: <Database /> },
        { name: "Chart", icon: <BarChart2 /> },
      ],
    },
    {
      title: "ADMIN PANEL",
      items: [
        { name: "Online Courses", icon: <BookOpen />, hasArrow: true },
        { name: "Membership", icon: <Users />, hasArrow: true },
        { name: "Helpdesk", icon: <HelpCircle />, hasArrow: true },
        { name: "Invoice", icon: <FileText />, hasArrow: true },
      ],
    },
    {
      title: "UI COMPONENTS",
      items: [
        { name: "Components", icon: <Cube />, hasArrow: true },
        { name: "Animation", icon: <Flag /> },
        { name: "Icons", icon: <Wand2 />, hasArrow: true },
      ],
    },
    {
      title: "FORMS",
      items: [
        { name: "Form Elements", icon: <PlusSquare />, hasArrow: true },
        { name: "Form Plugins", icon: <Settings />, hasArrow: true },
        { name: "Text Editor", icon: <Type /> },
        { name: "Form Layouts", icon: <Grid />, hasArrow: true },
        { name: "File Upload", icon: <Upload />, hasArrow: true },
        { name: "Wizard", icon: <FileCheck />, hasArrow: true },
        { name: "Form Validation", icon: <Lock />, hasArrow: true },
        { name: "Images Cropper", icon: <Wand2 />, hasArrow: true },
      ],
    },
    {
      title: "TABLES",
      items: [
        { name: "Bootstrap Table", icon: <Table />, hasArrow: true },
        { name: "Vanilla Table", icon: <List />, hasArrow: true },
        { name: "Data Table", icon: <Database />, hasArrow: true },
        { name: "DT Extensions", icon: <Layers />, hasArrow: true },
      ],
    },
    {
      title: "CHART & MAPS",
      items: [
        { name: "Charts", icon: <BarChart2 />, hasArrow: true },
        { name: "Map", icon: <Map />, hasArrow: true },
      ],
    },
    {
      title: "APPLICATION",
      items: [
        { name: "Calendar", icon: <CalendarDays /> },
        { name: "Chat", icon: <MessageSquare /> },
        { name: "Customer", icon: <Users /> },
        { name: "Ecommerce", icon: <ShoppingBag />, hasArrow: true },
        { name: "File Manager", icon: <Folder /> },
        { name: "Mail", icon: <Mail /> },
        { name: "User", icon: <User />, hasArrow: true },
      ],
    },
    {
      title: "PAGES",
      items: [
        { name: "Authentication", icon: <Shield />, hasArrow: true },
        { name: "Maintenance", icon: <Flag /> },
        { name: "Contact Us", icon: <HelpCircle /> },
        { name: "Price", icon: <DollarSign />, hasArrow: true },
        { name: "Landing", icon: <Plane /> },
      ],
    },
    {
      title: "OTHER",
      items: [
        { name: "Menu Levels", icon: <List />, hasArrow: true },
        { name: "Sample Page", icon: <FileText />, hasArrow: true },
      ],
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen flex flex-col bg-[#f8f9fa] border-r border-gray-200 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-[#f8f9fa] z-10">
        {isOpen ? (
          <div className="flex items-center gap-1 text-blue-600 font-bold text-xl">
            Able{" "}
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold">
              v1.2.0
            </span>
          </div>
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

      {/* Profile */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3 relative">
          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full"
            alt="profile"
          />
          {isOpen && (
            <div className="flex-1">
              <h4 className="font-semibold text-sm">Jonh Smith</h4>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          )}
          <button onClick={() => setProfileMenu(!profileMenu)}>
            <MoreHorizontal className="text-gray-500" />
          </button>

          {/* Profile menu */}
          {profileMenu && (
            <div className="absolute right-2 top-14 bg-white shadow-lg rounded-lg p-2 w-40 text-sm">
              <button className="flex w-full px-2 py-2 hover:bg-gray-50 gap-2 items-center text-gray-700">
                <User className="w-4" /> My Account
              </button>
              <button className="flex w-full px-2 py-2 hover:bg-gray-50 gap-2 items-center text-gray-700">
                <Settings className="w-4" /> Settings
              </button>
              <button className="flex w-full px-2 py-2 hover:bg-gray-50 gap-2 items-center text-gray-700">
                <Lock className="w-4" /> Lock Screen
              </button>
              <button className="flex w-full px-2 py-2 text-red-600 hover:bg-red-50 gap-2 items-center">
                <Power className="w-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 overflow-y-auto px-3 pb-5 custom-scroll">
        {sections.map((section) => (
          <div key={section.title} className="mt-3">
            {isOpen && (
              <p className="text-[11px] font-bold text-gray-400 mb-2">
                {section.title}
              </p>
            )}
            {section.items.map((item) => (
              <div key={item.name} className="mb-1">
                <button
                  onClick={() => item.hasArrow && toggleSubmenu(item.name)}
                  className={`flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-sm transition-colors ${
                    openMenu === item.name
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">{item.icon}</span>
                    {isOpen && <span>{item.name}</span>}
                  </div>

                  {item.badge && isOpen && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {item.hasArrow && isOpen && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        openMenu === item.name
                          ? "rotate-90 text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                  )}
                </button>

                {/* Submenu items */}
                {item.subItems && openMenu === item.name && isOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.path}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
