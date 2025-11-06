import {
  LayoutDashboard,
  BarChart2,
  CreditCard,
  Layers,
  Database,
  PieChart,
  ClipboardList,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 h-screen flex flex-col border-r border-gray-200">
      {/* Logo Section */}
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

      {/* Profile Section */}
      <div className="flex flex-col items-center py-6 border-b border-gray-200">
        <img
          src="https://i.pravatar.cc/80?img=3"
          alt="User Avatar"
          className="w-16 h-16 rounded-full shadow-sm border-2 border-white"
        />
        <h2 className="text-sm font-semibold text-gray-900 mt-3">Jonh Smith</h2>
        <p className="text-xs text-gray-500">Administrator</p>
        <button className="mt-3 p-1.5 rounded-lg hover:bg-gray-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6h8m-8 6h8m-8 6h8M6 6h.01M6 12h.01M6 18h.01"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Navigation Header */}
        <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Navigation
        </h3>

        {/* Dashboard Button */}
        <div className="space-y-1">
          <button className="flex items-center justify-between w-full bg-blue-50 text-blue-600 px-3 py-2.5 rounded-xl font-medium shadow-sm">
            <span className="flex items-center space-x-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </span>
            <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5 font-semibold">
              2
            </span>
          </button>

          {/* Sub Items */}
          <ul className="ml-5 mt-2 space-y-1 text-sm">
            <li className="text-blue-600 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>Default</span>
            </li>
            <li className="text-gray-500 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span>Analytics</span>
            </li>
            <li className="text-gray-500 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span>Finance</span>
            </li>
            <li className="text-gray-500 flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Layouts</span>
              <ChevronRight className="w-3 h-3 ml-auto" />
            </li>
          </ul>
        </div>

        {/* Widget Section */}
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

        {/* Admin Panel */}
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
