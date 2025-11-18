import React from "react";
import ReactApexChart from "react-apexcharts";
import MyCard from "../components/MyCard";
import TransactionCards from "../components/TransactionCards";
import MoneySpentSection from "../components/MoneySpentSection";
import AccountsSection from "../components/AccountsSection";
import TransactionsSection from "../components/TransactionsSection";

export default function Finance() {
  const pieOptions = {
    chart: { 
      type: "donut",
      fontFamily: 'Inter, sans-serif',
    },
    labels: ["Saving", "Spend", "Income"],
    colors: ["#3b82f6", "#f87171", "#22c55e"],
    legend: {
      show: false,
      position: "bottom",
      fontSize: "13px",
      fontFamily: "Inter, sans-serif",
    },
    dataLabels: { 
      enabled: false 
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: false,
          }
        }
      }
    },
    stroke: {
      width: 0
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function(val) {
          return val + '%';
        }
      }
    }
  };

  const pieSeries = [44, 33, 23];

  return (
    <div className="p-3 sm:p-4 md:p-6 w-full max-w-[1600px] mx-auto bg-[#f8fafc] min-h-screen space-y-4 sm:space-y-6">

      {/* PAGE TITLE */}
      <div className="px-1">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Finance</h1>
      </div>

      {/* ROW 1 — MyCard + TransactionsSection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-6 w-full">
          <MyCard />
          <TransactionsSection />
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-6 w-full">
          {/* 3 Transaction Cards */}
          <TransactionCards />

          {/* CASHFLOW */}
          <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 overflow-hidden">
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center mb-4 gap-2 sm:gap-4">
              <div>
                <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Cashflow</h5>
                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2 mt-0.5">
                  5.44%
                  <span className="bg-green-100 text-green-600 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 rounded">
                    +5.44%
                  </span>
                </p>
              </div>

              <select className="border border-gray-200 rounded-md text-xs sm:text-sm px-2 py-1.5 text-gray-600 w-full xs:w-auto mt-1 xs:mt-0">
                <option>Today</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <ReactApexChart
              options={{
                chart: { type: "bar", height: 230, toolbar: { show: false } },
                plotOptions: { bar: { columnWidth: "40%", borderRadius: 4 } },
                dataLabels: { enabled: false },
                stroke: { width: 3, colors: ["transparent"] },
                colors: ["#4680ff", "rgba(70,128,255,0.4)"],
                xaxis: {
                  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  labels: {
                    style: {
                      colors: "#64748b",
                      fontSize: "12px",
                      fontFamily: '"Public Sans", sans-serif',
                    },
                  },
                },
                yaxis: { show: false },
                grid: { borderColor: "#e5e7eb", strokeDashArray: 4 },
                legend: {
                  position: "top",
                  horizontalAlign: "right",
                  fontSize: "12px",
                },
                tooltip: { theme: "light" },
              }}
              series={[
                { name: "Income", data: [25, 90, 70, 85, 100, 65] },
                { name: "Expends", data: [15, 60, 40, 70, 80, 55] },
              ]}
              type="bar"
              height={230}
            />
          </div>

          {/* WHERE YOUR MONEY GO */}
          <MoneySpentSection />
        </div>
      </div>

      {/* ROW 2 — Accounts / Quick Transfer / Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* ACCOUNTS */}
        <div className="lg:col-span-4 w-full">
          <AccountsSection />
        </div>

        {/* QUICK TRANSFER */}
        <div className="lg:col-span-4 w-full">
          <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 space-y-4 sm:space-y-5">
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2">
              <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Quick Transfer</h5>
              <select className="text-xs sm:text-sm border border-gray-200 rounded-md px-2 py-1.5 text-gray-600 w-full xs:w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`/Images/Avatar/avatar-${i}.jpg`}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
              ))}
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {[
                { name: 'Starbucks Cafe', amount: '-$26', isPositive: false },
                { name: 'Apple Inc.', amount: '+$750.00', isPositive: true },
                { name: 'Ola Cabs', amount: '-$26', isPositive: false }
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center py-1.5 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="truncate pr-2">{item.name}</span>
                  <span className={`font-medium whitespace-nowrap ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="lg:col-span-4 w-full">
          <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 h-full">
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 mb-3">
              <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Category</h5>
              <select className="text-xs sm:text-sm border border-gray-200 rounded-md px-2 py-1.5 text-gray-600 w-full xs:w-auto">
                <option>Today</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-6">
              <div className="w-40 sm:w-48 h-40 sm:h-48">
                <ReactApexChart
                  options={pieOptions}
                  series={pieSeries}
                  type="donut"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="grid grid-cols-1 gap-2 sm:gap-3 mt-2 sm:mt-0 w-full max-w-[160px]">
                {[
                  { label: 'Saving', color: '#3b82f6', value: '44%' },
                  { label: 'Spend', color: '#f87171', value: '33%' },
                  { label: 'Income', color: '#22c55e', value: '23%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs sm:text-sm text-gray-600">{item.label}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-800 ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRANSACTION HISTORY */}
      <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 w-full">
        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 mb-4">
          <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Transaction History</h5>
          <a className="text-blue-600 text-xs sm:text-sm font-medium hover:underline" href="#">
            View All
          </a>
        </div>

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="min-w-full text-xs sm:text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2 px-2 sm:px-4 text-left">USER</th>
                <th className="py-2 px-2 sm:px-4 text-left hidden sm:table-cell">CATEGORY</th>
                <th className="py-2 px-2 sm:px-4 text-left hidden xs:table-cell">DATE/TIME</th>
                <th className="py-2 px-2 sm:px-4 text-right">AMOUNT</th>
                <th className="py-3 px-4 text-left">STATUS</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  name: "Airi Satou",
                  cat: "Salary Payment",
                  date: "2023/02/07",
                  amt: "$950.54",
                  status: "Completed",
                },
                {
                  name: "Ashton Cox",
                  cat: "Project Payment",
                  date: "2023/02/01",
                  amt: "$520.30",
                  status: "Completed",
                },
                {
                  name: "Bradley Greer",
                  cat: "You Tube Subscribe",
                  date: "2023/01/22",
                  amt: "$100.00",
                  status: "Pending",
                },
                {
                  name: "Brielle Williamson",
                  cat: "Salary Payment",
                  date: "2023/02/07",
                  amt: "$760.25",
                  status: "In Progress",
                },
                {
                  name: "Airi Satou",
                  cat: "Spotify Subscribe",
                  date: "2023/02/07",
                  amt: "$60.05",
                  status: "Cancelled",
                },
              ].map((t, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex items-center">
                      <img
                        src={`/Images/Avatar/avatar-${(i % 5) + 1}.jpg`}
                        alt=""
                        className="w-8 h-8 rounded-full mr-3 object-cover border border-gray-200"
                      />
                      {t.name}
                    </div>
                  </td>
                  <td className="py-3 px-2 sm:px-4 text-gray-500 hidden sm:table-cell">{t.cat}</td>
                  <td className="py-3 px-2 sm:px-4 text-gray-500 text-xs hidden xs:table-cell">
                    <span className="hidden sm:inline">{t.date}</span>
                    <span className="sm:hidden">{t.date.split(',')[0]}</span>
                  </td>
                  <td className="py-3 px-2 sm:px-4 font-semibold text-gray-800 text-right">
                    {t.amt}
                  </td>
                  <td className="py-3 px-2 sm:px-4">
                    <span
                      className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                        t.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : t.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : t.status === "In Progress"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
