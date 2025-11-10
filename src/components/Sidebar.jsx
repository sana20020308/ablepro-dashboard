import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Settings, 
  FileText, 
  CalendarDays,
  User,
  Power,
  Lock,
  ChevronRight,
  ChevronLeft,
  Home,
  Database,
  PieChart,
  Layers,
  BookOpen
} from "lucide-react";

const menuItems = [
  { 
    title: 'Dashboard', 
    icon: <LayoutDashboard className="w-5 h-5" />, 
    path: '/',
    subItems: [
      { name: 'Default', path: '/' },
      { name: 'Analytics', path: '/analytics' },
      { name: 'CRM', path: '/crm' },
    ]
  },
  { 
    title: 'Users', 
    icon: <Users className="w-5 h-5" />, 
    path: '/users',
    subItems: [
      { name: 'All Users', path: '/users' },
      { name: 'Add New', path: '/users/new' },
    ]
  },
  { 
    title: 'Reports', 
    icon: <BarChart2 className="w-5 h-5" />, 
    path: '/reports',
    subItems: []
  },
  { 
    title: 'Pages', 
    icon: <FileText className="w-5 h-5" />, 
    path: '/pages',
    subItems: [
      { name: 'Profile', path: '/profile' },
      { name: 'Settings', path: '/settings' },
    ]
  },
  { 
    title: 'Calendar', 
    icon: <CalendarDays className="w-5 h-5" />, 
    path: '/calendar',
    subItems: []
  },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
    setActiveMenu(title);
  };

  return (
    <aside 
      className={`bg-white h-screen flex flex-col border-r border-gray-200 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isOpen ? (
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-blue-600">Able</h1>
            <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">
              pro
            </span>
          </div>
        ) : (
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
            A
          </div>
        )}
        
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Profile */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          {isOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => toggleSubmenu(item.title)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">{item.icon}</span>
                  {isOpen && <span>{item.title}</span>}
                </div>
                {isOpen && item.subItems.length > 0 && (
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      openSubmenu === item.title ? 'transform rotate-90' : ''
                    }`}
                  />
                )}
              </NavLink>

              {/* Submenu */}
              {isOpen && openSubmenu === item.title && item.subItems.length > 0 && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'text-blue-600 font-medium'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-500" />
              {isOpen && <span>Settings</span>}
            </button>
          </li>
          <li>
            <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <Power className="w-5 h-5" />
              {isOpen && <span>Logout</span>}
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
