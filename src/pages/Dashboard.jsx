import React from "react";
import {
  MoreVertical,
  Wallet,
  Eye,
  CalendarDays,
  Download,
  Plus,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
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
    { name: "Jan", uv: 40 },
    { name: "Feb", uv: 55 },
    { name: "Mar", uv: 48 },
    { name: "Apr", uv: 65 },
    { name: "May", uv: 80 },
    { name: "Jun", uv: 90 },
    { name: "Jul", uv: 50 },
    { name: "Aug", uv: 60 },
    { name: "Sep", uv: 55 },
    { name: "Oct", uv: 68 },
    { name: "Nov", uv: 65 },
    { name: "Dec", uv: 70 },
  ];

  const pieData = [
    { name: "Item01", value: 23876 },
    { name: "Item02", value: 23876 },
    { name: "Item03", value: 23876 },
    { name: "Item04", value: 23876 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#06b6d4"];

  const transactions = [
    { id: "AI", name: "Apple Inc.", code: "#ABLE-PRO-T00232", amount: "$210,000", change: "-10.6%", color: "text-red-500" },
    { id: "SM", name: "Spotify Music", code: "#ABLE-PRO-T10232", amount: "-10,000", change: "+30.6%", color: "text-green-500" },
    { id: "MD", name: "Medium", code: "06:30 pm", amount: "-26", change: "-5%", color: "text-amber-500" },
    { id: "U", name: "Uber", code: "08:40 pm", amount: "+210,000", change: "+10.6%", color: "text-green-500" },
    { id: "OC", name: "Ola Cabs", code: "07:40 pm", amount: "+210,000", change: "+10.6%", color: "text-green-500" },
  ];

  const cards = [
    { title: "All Earnings", value: "$30200", color: "#3b82f6", icon: <Wallet className="w-5 h-5 text-blue-500" /> },
    { title: "Page Views", value: "290+", color: "#f59e0b", icon: <Eye className="w-5 h-5 text-amber-500" /> },
    { title: "Total Task", value: "14568", color: "#10b981", icon: <CalendarDays className="w-5 h-5 text-emerald-500" /> },
    { title: "Download", value: "$30200", color: "#ef4444", icon: <Download className="w-5 h-5 text-rose-500" /> },
  ];

  return (
    <div className="flex-1 bg-gray-50 p-6 space-y-6">

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white rounded-2xl p-8 flex justify-between items-center overflow-hidden mt-8">

        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"></div>

        {/* Decorative layered wave */}
        <div className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0 w-full opacity-25"
          >
            <path
              fill="#60a5fa"
              fillOpacity="1"
              d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,154.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Text content */}
        <div className="relative z-10 text-white max-w-lg">
          <h1 className="text-3xl font-bold mb-3">Explore Redesigned Able Pro</h1>
          <p className="text-white/90 leading-relaxed mb-6 text-sm">
            The Brand new User Interface with power of Bootstrap Components.
            Explore the Endless possibilities with Able Pro.
          </p>
          <button className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full text-sm shadow-md hover:bg-gray-50 transition">
            Download
          </button>
        </div>

        {/* Rocket image */}
        <div className="relative z-10">
          <img
            src="/Images/rocket.png"
            alt="Rocket"
            className="w-56 drop-shadow-2xl translate-y-3 animate-float"
          />
        </div>
      </div>

      {/* Floating rocket animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(5px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between mb-3">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl"
                style={{ backgroundColor: `${card.color}15` }}
              >
                {card.icon}
              </div>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
            <p className="font-medium text-gray-700 text-sm mb-1">{card.title}</p>
            <div className="h-10 mb-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={miniBarData}>
                  <Bar
                    dataKey="uv"
                    fill={card.color}
                    radius={[4, 4, 0, 0]}
                    barSize={6}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-gray-900">{card.value}</p>
              <span className="text-green-500 text-sm">▲ 30.6%</span>
            </div>
          </div>
        ))}
      </div>

      {/* REPEAT CUSTOMER + PROJECT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Repeat Customer Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-gray-800">Repeat customer rate</h3>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl text-gray-800">5.44%</span>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md font-semibold">
                +2.6%
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#colorUv)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Project - Able Pro */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Project - Able Pro</h3>
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-600">Release v1.2.0</span>
            <span className="text-gray-800 font-semibold">70%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full mb-5">
            <div className="h-2 bg-blue-500 rounded-full w-[70%]"></div>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Horizontal Layout
              </div>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                2
              </span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              Invoice Generator
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Figma Auto Layout
            </li>
          </ul>
          <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add task
          </button>
        </div>
      </div>

{/* PROJECT OVERVIEW & ABLE PRO SECTION */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Project Overview */}
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between lg:col-span-2">
    <div className="flex justify-between items-start mb-6">
      <h3 className="font-semibold text-gray-800 text-lg">Project overview</h3>
      <MoreVertical className="w-4 h-4 text-gray-400" />
    </div>

    <div className="flex justify-between items-center">
      {/* Total Tasks */}
      <div className="flex items-center gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total Tasks</p>
          <p className="text-2xl font-semibold text-gray-800">34,686</p>
        </div>
        <div className="w-28 h-14">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={[
                { name: "Jan", uv: 20 },
                { name: "Feb", uv: 40 },
                { name: "Mar", uv: 60 },
                { name: "Apr", uv: 50 },
                { name: "May", uv: 70 },
                { name: "Jun", uv: 60 },
              ]}
            >
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="flex items-center gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Pending Tasks</p>
          <p className="text-2xl font-semibold text-gray-800">3,786</p>
        </div>
        <div className="w-28 h-14">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={[
                { name: "Jan", uv: 30 },
                { name: "Feb", uv: 45 },
                { name: "Mar", uv: 55 },
                { name: "Apr", uv: 50 },
                { name: "May", uv: 65 },
                { name: "Jun", uv: 60 },
              ]}
            >
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Add Project Button */}
      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition">
        <Plus className="w-4 h-4" />
        Add project
      </button>
    </div>
  </div>

  {/* Able Pro */}
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between">
    <div className="flex justify-between items-start mb-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl font-semibold text-lg">
          @
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Able pro</p>
          <p className="text-xs text-gray-500">@ableprodevelop</p>
        </div>
      </div>
      <MoreVertical className="w-4 h-4 text-gray-400" />
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center -space-x-3">
        <img
          src="/Images/avatar1.png"
          alt="Member 1"
          className="w-8 h-8 rounded-full border-2 border-white object-cover"
        />
        <img
          src="/Images/avatar2.png"
          alt="Member 2"
          className="w-8 h-8 rounded-full border-2 border-white object-cover"
        />
        <img
          src="/Images/avatar3.png"
          alt="Member 3"
          className="w-8 h-8 rounded-full border-2 border-white object-cover"
        />
        <img
          src="/Images/avatar4.png"
          alt="Member 4"
          className="w-8 h-8 rounded-full border-2 border-white object-cover"
        />
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 border-2 border-white">
          +2
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <Plus className="w-4 h-4" />
      </button>
    </div>
  </div>
</section>



      {/* TRANSACTIONS + TOTAL INCOME */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transactions */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Transactions</h3>
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex gap-6 border-b mb-4 text-sm">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">All Transaction</button>
            <button className="text-gray-500 hover:text-blue-600 pb-2">Success</button>
            <button className="text-gray-500 hover:text-blue-600 pb-2">Pending</button>
          </div>
          <ul className="divide-y">
            {transactions.map((t, i) => (
              <li key={i} className="flex justify-between items-center py-3">
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
          <div className="flex justify-between mt-5">
            <button className="border border-gray-300 text-gray-700 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-gray-100">
              View all Transaction History
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 text-sm font-medium">
              Create new Transaction
            </button>
          </div>
        </div>

        {/* Total Income */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
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
                  dataKey="value"
                  paddingAngle={3}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {pieData.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-gray-50 border border-gray-100 p-3 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[i] }}
                  ></span>
                  <p className="text-sm font-medium text-gray-700">{item.name}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-gray-800">
                    ${item.value.toLocaleString()}
                  </p>
                  <p className="text-green-600 text-xs">+${(763.43).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 mt-8">
        © Able Pro crafted with ❤️ by Team Phoenixcoded
        <div className="mt-2">
          <span className="text-gray-400 mr-4">Home</span>
          <span className="text-gray-400 mr-4">Documentation</span>
          <span className="text-red-500 font-medium cursor-pointer">Support</span>
        </div>
      </footer>
    </div>
  );
}
