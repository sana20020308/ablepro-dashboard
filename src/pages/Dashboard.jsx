import React from "react";
import {
  Search,
  Sun,
  Bell,
  MessageSquare,
  Settings,
  User,
  Plus,
  MoreVertical,
  Wallet,
  Eye,
  CalendarDays,
  Download,
  ShoppingCart,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const miniBarData = [
    { name: "1", uv: 30 },
    { name: "2", uv: 45 },
    { name: "3", uv: 35 },
    { name: "4", uv: 60 },
    { name: "5", uv: 50 },
    { name: "6", uv: 65 },
    { name: "7", uv: 55 },
  ];

  const lineData = [
    { name: "Jan", uv: 30 },
    { name: "Feb", uv: 60 },
    { name: "Mar", uv: 40 },
    { name: "Apr", uv: 70 },
    { name: "May", uv: 50 },
    { name: "Jun", uv: 90 },
    { name: "Jul", uv: 50 },
    { name: "Aug", uv: 55 },
    { name: "Sep", uv: 45 },
    { name: "Oct", uv: 60 },
    { name: "Nov", uv: 65 },
    { name: "Dec", uv: 80 },
  ];

  const pieData = [
    { name: "Item01", value: 23876 },
    { name: "Item02", value: 23876 },
    { name: "Item03", value: 23876 },
    { name: "Item04", value: 23876 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#06b6d4"];

  const transactions = [
    { id: "AI", name: "Apple Inc.", code: "#ABLE-PRO-T00232", amount: "$210,000", change: "10.6%", color: "text-red-500" },
    { id: "SM", name: "Spotify Music", code: "#ABLE-PRO-T10232", amount: "-10,000", change: "30.6%", color: "text-green-500" },
    { id: "MD", name: "Medium", code: "06:30 pm", amount: "-26", change: "5%", color: "text-amber-500" },
    { id: "U", name: "Uber", code: "08:40 pm", amount: "+210,000", change: "10.6%", color: "text-green-500" },
    { id: "OC", name: "Ola Cabs", code: "07:40 pm", amount: "+210,000", change: "10.6%", color: "text-green-500" },
  ];

  const cards = [
    { title: "All Earnings", color: "blue", value: "$30200", percent: "30.6%", icon: <Wallet className="w-5 h-5 text-blue-500" /> },
    { title: "Page Views", color: "amber", value: "290+", percent: "30.6%", icon: <Eye className="w-5 h-5 text-amber-500" /> },
    { title: "Total Task", color: "green", value: "14568", percent: "30.6%", icon: <CalendarDays className="w-5 h-5 text-emerald-500" /> },
    { title: "Download", color: "red", value: "$30200", percent: "30.6%", icon: <Download className="w-5 h-5 text-rose-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ================= HEADER ================= */}
      <header className="flex justify-between items-center bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
        <div className="flex items-center gap-3 w-full max-w-md">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Ctrl + K"
            className="w-full bg-gray-50 rounded-md px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <Sun className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          <MessageSquare className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          <Settings className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          <User className="w-7 h-7 rounded-full bg-blue-100 p-1 text-blue-600 cursor-pointer" />
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="p-6 space-y-6">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#60a5fa] p-8 text-white shadow-md">
          <div className="relative z-10 flex justify-between items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-3">Explore Redesigned Able Pro</h2>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                The Brand new User Interface with power of Bootstrap Components.
                Explore the Endless possibilities with Able Pro.
              </p>
              <button className="rounded-full border border-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Download
              </button>
            </div>
            <img
              src="public/Images/rocket.png"
              alt="Rocket"
              className="w-52 drop-shadow-xl"
            />
          </div>
        </section>

        {/* STATS CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    card.color === "blue"
                      ? "bg-blue-100"
                      : card.color === "amber"
                      ? "bg-amber-100"
                      : card.color === "green"
                      ? "bg-emerald-100"
                      : "bg-rose-100"
                  }`}
                >
                  {card.icon}
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>

              <h3 className="text-gray-700 font-semibold text-sm mb-2">{card.title}</h3>
              <div className="flex gap-4 text-xs text-gray-500 mb-3">
                <span className="text-blue-600 font-medium cursor-pointer">Today</span>
                <span className="cursor-pointer hover:text-blue-600">Weekly</span>
                <span className="cursor-pointer hover:text-blue-600">Monthly</span>
              </div>

              <div className="h-10 mb-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={miniBarData}>
                    <Bar
                      dataKey="uv"
                      radius={[4, 4, 0, 0]}
                      fill={
                        card.color === "blue"
                          ? "#3b82f6"
                          : card.color === "amber"
                          ? "#f59e0b"
                          : card.color === "green"
                          ? "#10b981"
                          : "#ef4444"
                      }
                      barSize={6}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-gray-900">{card.value}</p>
                <p
                  className={`text-sm font-medium ${
                    card.color === "red" ? "text-rose-500" : "text-emerald-500"
                  }`}
                >
                  ↑ {card.percent}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* REPEAT CUSTOMER RATE & PROJECT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Repeat Customer Rate */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-800">Repeat customer rate</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-800 font-semibold text-lg">5.44%</span>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                  +2.6%
                </span>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" tickLine={false} axisLine={false} />
                  <YAxis stroke="#9ca3af" tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#3b82f6"
                    strokeWidth={2.5}
                    dot={false}
                    fill="url(#colorUv)"
                  />
                  <Brush dataKey="name" height={25} stroke="#3b82f6" travellerWidth={12} fill="#f9fafb" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Project - Able Pro */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Project - Able Pro</h3>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Release v1.2.0</span>
              <span>70%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full mb-4">
              <div className="h-2 bg-blue-500 rounded-full w-[70%]"></div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Horizontal Layout
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 text-xs rounded">2</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Invoice Generator
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Figma Auto Layout
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium mt-3">
              + Add task
            </button>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Project overview</h3>
              <div className="flex space-x-10">
                <div>
                  <p className="text-sm text-gray-500">Total Tasks</p>
                  <p className="text-2xl font-bold text-gray-800">34,686</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pending Tasks</p>
                  <p className="text-2xl font-bold text-gray-800">3,786</p>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-full flex items-center gap-2 font-medium">
              <Plus className="w-4 h-4" /> Add project
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-lg font-semibold">@</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Able pro</h3>
                  <p className="text-xs text-gray-500">@ableprodevelop</p>
                </div>
              </div>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </section>

        {/* TRANSACTIONS & TOTAL INCOME */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transactions */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Transactions</h3>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex gap-6 border-b mb-4 text-sm">
              <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">
                All Transaction
              </button>
              <button className="text-gray-500 hover:text-blue-600 pb-2">Success</button>
              <button className="text-gray-500 hover:text-blue-600 pb-2">Pending</button>
            </div>
            <ul className="divide-y">
              {transactions.map((t, i) => (
                <li key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-semibold text-gray-700">
                      {t.id}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.code}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{t.amount}</p>
                    <p className={`text-xs ${t.color}`}>{t.change}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-100">
                View all Transaction History
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 text-sm font-medium">
                Create new Transaction
              </button>
            </div>
          </div>

          {/* Total Income */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Total Income</h3>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {pieData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 border border-gray-100 p-3 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    ></span>
                    <p className="text-sm font-medium text-gray-700">
                      {item.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">
                      ${item.value.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600">
                      +${(763.43).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-500 mt-8">
          © Able Pro crafted with ❤️ by Team Phoenixcoded
          <div className="mt-2">
            <span className="text-gray-400 mr-4">Home</span>
            <span className="text-gray-400 mr-4">Documentation</span>
            <span className="text-red-500 font-medium cursor-pointer">Support</span>
          </div>
        </footer>
      </main>

      {/* BUY NOW BUTTON */}
      <button className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" /> Buy Now
      </button>
    </div>
  );
}
