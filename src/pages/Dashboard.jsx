import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { MoreVertical, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Dashboard() {
  const cards = [
    { title: "All Earnings", value: "$30200", change: "+30.6%", color: "blue" },
    { title: "Page Views", value: "290+", change: "+30.6%", color: "amber" },
    { title: "Total Task", value: "14568", change: "+30.6%", color: "green" },
    { title: "Download", value: "$30200", change: "-30.6%", color: "red" },
  ];

  const lineData = [
    { name: "Jan", uv: 40 },
    { name: "Feb", uv: 55 },
    { name: "Mar", uv: 60 },
    { name: "Apr", uv: 35 },
    { name: "May", uv: 75 },
    { name: "Jun", uv: 50 },
    { name: "Jul", uv: 40 },
    { name: "Aug", uv: 70 },
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
  const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#ef4444"];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 space-y-6">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#60a5fa] p-8 md:p-10 text-white shadow-md">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08) 0%, transparent 40%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        ></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Explore Redesigned Able Pro
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
              The Brand new User Interface with power of Bootstrap Components.
              Explore the Endless possibilities with Able Pro.
            </p>
            <button className="rounded-full border border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white hover:text-blue-600 transition-all">
              Download
            </button>
          </div>

          <div className="md:w-auto flex justify-center md:justify-end">
            <img
              src="public/Images/rocket.png"
              alt="Rocket"
              className="w-40 md:w-52 lg:w-56 drop-shadow-xl"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 bg-white w-10 h-10 rounded-full translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
      </section>

{/* ================= STATISTICS CARDS ================= */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
  {[
    {
      title: "All Earnings",
      value: "$30200",
      change: "+30.6%",
      color: "blue",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Page Views",
      value: "290+",
      change: "+30.6%",
      color: "amber",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "Total Task",
      value: "14568",
      change: "+30.6%",
      color: "green",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Download",
      value: "$30200",
      change: "-30.6%",
      color: "red",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
  ].map((card, i) => (
    <div
      key={i}
      className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-xl ${card.iconBg}`}>
            {/* Placeholder icon (you can replace with lucide-react) */}
            <div
              className={`w-5 h-5 ${card.iconColor}`}
              dangerouslySetInnerHTML={{
                __html:
                  card.color === "blue"
                    ? "💰"
                    : card.color === "amber"
                    ? "📈"
                    : card.color === "green"
                    ? "📅"
                    : "⬇️",
              }}
            ></div>
          </div>
          <h3 className="text-sm font-semibold text-gray-800">
            {card.title}
          </h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v.01M12 12v.01M12 18v.01"
            />
          </svg>
        </button>
      </div>

      {/* Chart Preview */}
      <div className="flex flex-col items-start bg-gray-50 rounded-xl p-3">
        {/* Fake Bar Chart (visual mimic) */}
        <div className="flex items-end space-x-0.5 mb-3">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`w-1 rounded-sm ${
                card.color === "blue"
                  ? "bg-blue-500"
                  : card.color === "amber"
                  ? "bg-amber-500"
                  : card.color === "green"
                  ? "bg-emerald-500"
                  : "bg-rose-500"
              }`}
              style={{ height: `${Math.random() * 20 + 10}px` }}
            ></div>
          ))}
        </div>

        {/* Value + Change */}
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-bold text-gray-900">
            {card.value}
          </span>
          <span
            className={`flex items-center text-xs font-medium ${
              card.change.includes("-")
                ? "text-rose-500"
                : "text-emerald-500"
            }`}
          >
            {card.change.includes("-") ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
            )}
            {card.change}
          </span>
        </div>
      </div>
    </div>
  ))}
</section>


      {/* ================= CHART SECTION ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: LINE CHART */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-gray-800">
              Repeat customer rate
            </h3>
            <span className="text-sm text-green-600 font-semibold">+2.6%</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT: PROJECT STATUS */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Project - Able Pro</h3>
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Release v1.2.0</span>
              <span>70%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <ul className="text-sm space-y-2">
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Horizontal Layout
              </span>
              <span className="bg-blue-50 text-blue-600 px-2 py-0.5 text-xs rounded">
                2
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              Invoice Generator
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Figma Auto Layout
            </li>
          </ul>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium mt-3">
            + Add Task
          </button>
        </div>
      </section>

      {/* ================= TOTAL INCOME ================= */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-800 mb-6">Total Income</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pieData.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  <span className="font-medium text-gray-800 text-sm">
                    {item.name}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  ${item.value.toLocaleString()}
                </p>
                <p className="text-xs font-medium text-green-600 mt-1">
                  +9,765.43
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        © Able Pro crafted with ❤ by Team Phoenixcoded
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-800">
            Home
          </a>
          <a href="#" className="hover:text-gray-800">
            Documentation
          </a>
          <a href="#" className="hover:text-gray-800">
            Support
          </a>
        </div>
      </footer>
    </div>
  );
}
