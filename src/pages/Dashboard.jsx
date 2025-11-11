import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  MoreVertical,
  Wallet,
  Eye,
  CalendarDays,
  Download,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/**
 * DashboardContent.jsx
 * Full dashboard section styled to match Able Pro Default Dashboard v1.2.0 (second-image look).
 *
 * Requires:
 * - Tailwind v4.1 theme (your uploaded file) loaded globally
 * - react-apexcharts
 * - recharts
 * - lucide-react
 */

export default function DashboardContent() {
  const [activeFilter, setActiveFilter] = React.useState('Today');
  const [activeTab, setActiveTab] = React.useState('all');
  
  // helper: convert hex (#rrggbb) to rgba string with opacity
  const hexToRgba = (hex, alpha = 1) => {
    if (!hex) return `rgba(59,130,246,${alpha})`; // fallback blue
    const h = hex.replace("#", "");
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const miniBarSeries = [
    { name: "1", uv: 12 },
    { name: "2", uv: 22 },
    { name: "3", uv: 16 },
    { name: "4", uv: 36 },
    { name: "5", uv: 28 },
    { name: "6", uv: 34 },
    { name: "7", uv: 26 },
  ];

  const pieData = [
    { name: "Item01", value: 23876 },
    { name: "Item02", value: 19876 },
    { name: "Item03", value: 15876 },
    { name: "Item04", value: 11876 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#06b6d4"];

  const transactions = [
    { id: "AI", name: "Apple Inc.", code: "#ABLE-PRO-T00232", amount: "$210,000", change: "-10.6%", color: "text-red-500", icon: <ArrowUpRight className="w-3 h-3" />, type: "success" },
    { id: "SM", name: "Spotify Music", code: "#ABLE-PRO-T10232", amount: "-10,000", change: "+30.6%", color: "text-green-500", icon: <ArrowUpRight className="w-3 h-3" />, type: "success" },
    { id: "MD", name: "Medium", code: "06:30 pm", amount: "-26", change: "-5%", color: "text-amber-500", icon: <ArrowUpRight className="w-3 h-3" />, type: "pending" },
    { id: "U", name: "Uber", code: "08:40 pm", amount: "+210,000", change: "+10.6%", color: "text-green-500", icon: <ArrowUpRight className="w-3 h-3" />, type: "success" },
    { id: "OC", name: "Ola Cabs", code: "07:40 pm", amount: "+210,000", change: "+10.6%", color: "text-green-500", icon: <ArrowUpRight className="w-3 h-3" />, type: "pending" },
  ];

  // stat cards (color hex used for tinted backgrounds & bars)
  const cards = [
    { title: "All Earnings", value: "$30,200", color: "#3b82f6", icon: <Wallet className="w-4 h-4" /> },
    { title: "Page Views", value: "290+", color: "#f59e0b", icon: <Eye className="w-4 h-4" /> },
    { title: "Total Task", value: "14,568", color: "#10b981", icon: <CalendarDays className="w-4 h-4" /> },
    { title: "Download", value: "$30,200", color: "#ef4444", icon: <Download className="w-4 h-4" /> },
  ];

  // Apex chart options (Repeat customer area chart)
  const apexOptions = {
    chart: {
      type: "area",
      height: 280,
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: "#374151",
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2, colors: ["#3b82f6"] },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.28,
        opacityTo: 0.04,
        stops: [0, 90, 100],
      },
    },
    grid: {
      borderColor: "#eef2f7",
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
    },
    markers: { size: 4, colors: ["#3b82f6"], strokeColors: "#fff", strokeWidth: 2, hover: { size: 6 } },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      labels: { style: { colors: "#6b7280", fontSize: "12px" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: true,
      labels: { style: { colors: "#6b7280", fontSize: "12px" } },
      tickAmount: 5,
    },
    tooltip: { theme: "light" },
    legend: { show: false },
  };

  const apexSeries = [
    { name: "Repeat Customers", data: [30, 60, 45, 70, 50, 90, 50, 55, 48, 60, 57, 65] },
  ];

  return (
    <div className="flex-1 bg-gray-50 p-6 space-y-6">

      {/* custom extra CSS to fine tune shadows, small bars, and icon boxes */}
      <style>{`
        /* subtle card shadow like Able Pro */
        .ap-card-shadow {
          box-shadow: 0 8px 20px rgba(16,24,40,0.04), 0 2px 6px rgba(16,24,40,0.03);
        }

        /* small rounded icon container inside card header */
        .stat-icon-box {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        /* inner mini chart area inside card */
        .mini-chart-plate {
          border-radius: 12px;
          padding: 12px;
        }

        /* percentage small text */
        .stat-percent {
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        /* smaller Recharts bars (overrides inline SVG rect height slightly) */
        .recharts-rectangle {
          rx: 3;
          ry: 3;
        }

        /* make chart background plate like the reference */
        .inner-plate-shadow {
          background: #ffffff;
        }

        /* tiny responsive tweaks */
        @media (max-width: 640px) {
          .stat-icon-box { width: 36px; height: 36px; border-radius: 8px; }
        }
      `}</style>

      {/* HERO BANNER */}
      <div className="relative rounded-2xl overflow-hidden flex justify-between items-center p-8 ap-card-shadow bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="max-w-lg">
          <h1 className="text-3xl font-semibold">Explore Redesigned Able Pro</h1>
          <p className="text-white/90 mt-2 text-sm">
            The brand new user interface with the power of Bootstrap Components.
            Explore the endless possibilities with Able Pro.
          </p>
          <div className="mt-4">
            <button className="bg-white text-blue-600 font-medium px-5 py-2 rounded-full text-sm shadow-sm hover:bg-gray-50">
              Download
            </button>
          </div>
        </div>

        {/* rocket image (if you have it at /Images/rocket.png) */}
        <div className="hidden md:block -mr-6">
          <img src="/Images/rocket.png" alt="rocket" className="w-56 animate-[float_4s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(6px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* STAT CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
  {cards.map((card, i) => {
    const chartOptions = {
      chart: {
        type: "bar",
        sparkline: { enabled: true },
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          columnWidth: "55%",
          borderRadius: 3,
        },
      },
      dataLabels: { enabled: false },
      colors: [card.color],
      xaxis: { crosshairs: { show: false } },
      grid: { show: false },
      tooltip: { enabled: false },
    };

    const chartSeries = [
      { data: [10, 30, 40, 20, 60, 50, 25, 15, 20, 30, 25, 20] },
    ];

    return (
      <div
        key={i}
        className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_20px_rgba(16,24,40,0.04),0_2px_6px_rgba(16,24,40,0.03)] p-5 transition hover:shadow-[0_10px_24px_rgba(16,24,40,0.05)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl inline-flex items-center justify-center"
              style={{
                backgroundColor: `${card.color}1A`, // 10% opacity
                color: card.color,
              }}
            >
              {React.cloneElement(card.icon, { className: "w-5 h-5" })}
            </div>
            <h6 className="font-semibold text-gray-800">{card.title}</h6>
          </div>

          <div className="relative">
            <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Body */}
        <div className="bg-gray-50 mt-4 rounded-lg p-3">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Left Chart */}
            <div className="col-span-7">
              <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={60}
              />
            </div>

            {/* Right Value */}
            <div className="col-span-5 text-right">
              <h5 className="text-lg font-semibold text-gray-900 mb-1">
                {card.value}
              </h5>
              <p
                className="text-sm font-medium flex items-center justify-end gap-1"
                style={{ color: card.color }}
              >
                <ArrowUpRight className="w-4 h-4" />
                30.6%
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>


      {/* REPEAT CUSTOMER (Apex) + PROJECT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 ap-card-shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-gray-800">Repeat customer rate</h3>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl text-gray-800">5.44%</span>
              <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md font-semibold">
                +2.6%
              </span>
            </div>
          </div>
          <ReactApexChart options={apexOptions} series={apexSeries} type="area" height={280} />
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 ap-card-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Project - Able Pro</h3>
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-600">Release v1.2.0</span>
            <span className="text-gray-800 font-semibold">70%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full mb-5">
            <div className="h-2 bg-blue-500 rounded-full w-[70%]" />
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                Horizontal Layout
              </div>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">2</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full" />
              Invoice Generator
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Figma Auto Layout
            </li>
          </ul>

          <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 font-medium flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add task
          </button>
        </div>
      </div>

      {/* TRANSACTIONS + TOTAL INCOME */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 ap-card-shadow">
  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-semibold text-gray-800">Transactions</h3>
    <div className="relative">
      <select
        value={activeFilter}
        onChange={(e) => setActiveFilter(e.target.value)}
        className="bg-transparent border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option>Today</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>
    </div>
  </div>

  {/* Tabs */}
  <div className="flex gap-8 border-b border-gray-200 mb-5 text-sm">
    {[
      { id: "all", label: "All Transaction" },
      { id: "success", label: "Success" },
      { id: "pending", label: "Pending" },
    ].map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`pb-2 font-medium transition-all ${
          activeTab === tab.id
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* Transaction List */}
  <ul className="divide-y divide-gray-100">
    {transactions
      .filter((t) =>
        activeTab === "all" ? true : t.type === activeTab
      )
      .map((t, i) => (
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
            <p className="text-sm font-semibold text-gray-800">{t.amount}</p>
            <p className={`flex items-center justify-end gap-1 text-xs font-medium ${t.color}`}>
              {t.icon}
              {t.change}
            </p>
          </div>
        </li>
      ))}
  </ul>

  {/* Footer Buttons */}
  <div className="flex justify-between items-center mt-6">
    <button className="border border-gray-300 text-gray-700 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition">
      View all Transaction History
    </button>
    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 text-sm font-medium transition">
      Create new Transaction
    </button>
  </div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 ap-card-shadow">
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-semibold text-gray-800">Total Income</h3>
    <MoreVertical className="w-4 h-4 text-gray-400" />
  </div>

  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={pieData} innerRadius={70} outerRadius={100} dataKey="value" paddingAngle={3}>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>

  <div className="grid grid-cols-2 gap-3 mt-4">
    {pieData.map((item, i) => (
      <div key={i} className="flex justify-between items-center bg-gray-50 border border-gray-100 p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
          <p className="text-sm font-medium text-gray-700">{item.name}</p>
        </div>
        <div className="text-right text-sm">
          <p className="font-semibold text-gray-800">${item.value.toLocaleString()}</p>
          <p className="text-green-600 text-xs">+${(763.43).toLocaleString()}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>

<footer className="text-center text-sm text-gray-500 mt-8">
  <div className="mt-2">
    <span className="text-gray-400 mr-4">Home</span>
    <span className="text-gray-400 mr-4">Documentation</span>
    <span className="text-red-500 font-medium cursor-pointer">Support</span>
  </div>
</footer>
</div>
);
}
