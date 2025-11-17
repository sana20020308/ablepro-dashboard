import React from "react";
import {
  BarChart2,
  Calendar,
  Eye,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MoreVertical,
  Plus,
} from "lucide-react";

export default function Statistics() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">

      {/* PAGE TITLE */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Statistics
        </h1>
      </div>

      {/* ================================================= */}
      {/* 1) TOP METRIC CARDS                               */}
      {/* ================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <MetricCard title="All Earnings" value="$30200" icon={<BarChart2 />} />
        <MetricCard title="Task" value="145" icon={<Calendar />} />
        <MetricCard title="Page Views" value="290+" icon={<Eye />} />
        <MetricCard title="Downloads" value="500" icon={<Download />} />
      </div>

      {/* ================================================= */}
      {/* 2) SOCIAL CARDS                                   */}
      {/* ================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <SocialCard
          color="bg-[#3b82f6]"
          value="1165+"
          label="Facebook Users"
          icon={<Facebook />}
        />
        <SocialCard
          color="bg-[#06b6d4]"
          value="780+"
          label="Twitter Users"
          icon={<Twitter />}
        />
        <SocialCard
          color="bg-[#0f172a]"
          value="998+"
          label="LinkedIn Users"
          icon={<Linkedin />}
        />
        <SocialCard
          color="bg-[#ef4444]"
          value="650+"
          label="Youtube Videos"
          icon={<Youtube />}
        />
      </div>

      {/* ================================================= */}
      {/* 3) PERFORMANCE CARDS                              */}
      {/* ================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <StatsInfoCard
          title="Total Page Views"
          value="4,42,236"
          change="↑ 59.3%"
          color="text-blue-500"
          footnote="You made an extra 35,000 this year"
        />
        <StatsInfoCard
          title="Total Users"
          value="78,250"
          change="↑ 70.5%"
          color="text-green-500"
          footnote="You made an extra 8,900 this year"
        />
        <StatsInfoCard
          title="Total Order"
          value="18,800"
          change="↓ 27.4%"
          color="text-orange-500"
          footnote="You made an extra 1,943 this year"
        />
        <StatsInfoCard
          title="Total Sales"
          value="$35,078"
          change="↓ 27.4%"
          color="text-red-500"
          footnote="You made an extra $20,395 this year"
        />
      </div>

      {/* ================================================= */}
      {/* 4) BOTTOM SECTION                                 */}
      {/* ================================================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">

        {/* ===================== */}
        {/* Add Fund              */}
        {/* ===================== */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border shadow-sm hover:shadow-md transition">
          <div className="flex justify-between mb-3">
            <h3 className="text-gray-700 font-semibold text-sm sm:text-base">Add Fund</h3>
            <MoreVertical className="text-gray-500 w-5" />
          </div>

          <p className="text-gray-600 text-xl sm:text-2xl font-bold mb-3">$100</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {["$100", "$150", "$200", "$250"].map((amt) => (
              <button
                key={amt}
                className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100"
              >
                {amt}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 mb-4">
            <img src="/Images/Avatar/avatar-1.jpg" className="w-9 h-9 rounded-full" />
            <div>
              <p className="font-medium text-gray-700 text-sm">Able pro</p>
              <p className="text-xs text-gray-500">@ableprodevelop</p>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
            Confirm
          </button>
        </div>

        {/* ===================== */}
        {/* Able Pro + Unlock     */}
        {/* ===================== */}
        <div className="space-y-4">
          {/* Able Pro Card */}
          <div className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Able pro</h3>
              <MoreVertical className="text-gray-500 w-5" />
            </div>

            <p className="text-xs sm:text-sm text-gray-600">@ableprodevelop</p>

            <div className="flex mt-2 -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`/Images/Avatar/avatar-${i}.jpg`}
                  className="w-7 h-7 rounded-full border"
                />
              ))}
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">+2</span>
            </div>

            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 w-full text-sm">
              <Plus className="w-3 h-3" /> Add Member
            </button>
          </div>

          {/* Unlock Features */}
          <div className="bg-white p-4 rounded-xl border shadow-sm text-center hover:shadow-md transition">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                  <path d="M7 11V7a5 5 0 0110 0v4"></path>
                </svg>
              </div>
            </div>

            <h3 className="font-semibold text-gray-700 text-sm">Unlock All Features</h3>
            <p className="text-gray-500 text-xs mb-3">Upgrade to premium</p>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm">
              Upgrade to premium
            </button>
          </div>
        </div>

        {/* ===================== */}
        {/* Storage + Balance     */}
        {/* ===================== */}
        <div className="space-y-4">

          {/* Dropbox Storage */}
          <div
            className="relative rounded-2xl p-5 overflow-hidden shadow-md hover:shadow-lg transition h-[180px] sm:h-[200px]"
            style={{
              backgroundColor: "#1e293b",
              backgroundImage: "url('/Images/Bg/storage-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="relative z-20 text-white h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h5 className="text-base sm:text-lg font-semibold">Dropbox Storage</h5>
                <h4 className="text-lg sm:text-xl font-bold">150GB</h4>
              </div>

              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                ☁️
              </div>

              <div>
                <small className="block mb-2 text-white/90 text-xs sm:text-sm">
                  134.2GB of 150GB
                </small>

                <div className="w-full h-1.5 rounded-lg flex overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: "15%" }}></div>
                  <div className="bg-yellow-500 h-full" style={{ width: "20%" }}></div>
                  <div className="bg-blue-200 h-full" style={{ width: "20%" }}></div>
                  <div className="bg-green-500 h-full" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Balance */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-5 rounded-xl text-white shadow-md hover:shadow-lg transition">
            <p className="text-xs text-blue-100">Available Balance</p>
            <h3 className="text-2xl sm:text-3xl font-bold">$1,234.90</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================================================== */
/* REUSABLE COMPONENTS                                */
/* ================================================== */

function MetricCard({ title, value, icon }) {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-xl border shadow-sm flex items-center justify-between hover:bg-white/80 hover:shadow-md transition cursor-pointer">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold">{value}</h3>
        <p className="text-gray-500 text-xs sm:text-sm">{title}</p>
      </div>
      <div className="text-gray-400 w-6 h-6 sm:w-7 sm:h-7">{icon}</div>
    </div>
  );
}

function SocialCard({ color, value, label, icon }) {
  return (
    <div
      className={`${color} p-5 sm:p-6 rounded-xl flex justify-between items-center text-white hover:brightness-110 transition cursor-pointer`}
    >
      <div>
        <h3 className="text-lg sm:text-xl font-bold">{value}</h3>
        <p className="opacity-90 text-xs sm:text-sm">{label}</p>
      </div>
      <div className="text-white/70 w-7 h-7 sm:w-10 sm:h-10">{icon}</div>
    </div>
  );
}

function StatsInfoCard({ title, value, change, color, footnote }) {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer">
      <h4 className="text-gray-600 text-xs sm:text-sm mb-2">{title}</h4>
      <p className="text-xl sm:text-2xl font-semibold">
        {value} <span className={`${color} text-xs sm:text-sm`}>{change}</span>
      </p>
      <p className="text-xs text-gray-500 mt-1">{footnote}</p>
    </div>
  );
}
