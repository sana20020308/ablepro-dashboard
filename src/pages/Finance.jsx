import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  MoreVertical,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  UserPlus,
  Send,
} from "lucide-react";

export default function Finance() {
  // Cashflow chart config
  const cashflowOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: "55%" } },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: ["1", "3", "5", "8", "10", "12"],
      labels: { style: { colors: "#94a3b8" } },
    },
    colors: ["#4F46E5", "#60A5FA"],
    legend: { show: false },
  };
  const cashflowSeries = [
    { name: "Income", data: [44, 55, 41, 67, 22, 43] },
    { name: "Expense", data: [13, 23, 20, 8, 13, 27] },
  ];

  // Pie chart config
  const pieOptions = {
    chart: { type: "donut" },
    labels: ["Saving", "Spend", "Income"],
    colors: ["#60A5FA", "#F87171", "#34D399"],
    legend: { position: "bottom" },
  };
  const pieSeries = [44, 33, 23];

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb / Header */}
      <div>
        <h2 className="text-2xl font-semibold text-[var(--color-theme-headings)]">
          Finance
        </h2>
        <p className="text-sm text-[var(--color-gray-500)]">
          Dashboard / Finance
        </p>
      </div>

      {/* Row 1: My Card + Transaction Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* My Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-5 flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-sm opacity-70 mb-1">CARD NAME</p>
            <h4 className="text-lg font-medium">Jonh Smith</h4>
          </div>
          <div className="flex justify-between items-end mt-6">
            <div>
              <p className="text-xs opacity-70 mb-1">EXP</p>
              <p className="font-semibold">07/30</p>
            </div>
            <div>
              <p className="text-xs opacity-70 mb-1">CVV</p>
              <p className="font-semibold">455</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-6">$1.480.000</h2>
          <p className="text-xs opacity-70">Total Balance</p>
        </div>

        {/* Transaction Summary Cards */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm"
          >
            <div className="flex justify-between mb-3">
              <p className="text-sm text-[var(--color-gray-500)]">
                Transactions
              </p>
              <MoreVertical className="w-4 h-4 text-[var(--color-gray-400)]" />
            </div>
            <h4 className="text-lg font-semibold">$650k</h4>
            <p className="text-xs text-[var(--color-gray-500)]">
              Compare to last week
            </p>
          </div>
        ))}
      </div>

      {/* Row 2: Cashflow + Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transactions List */}
        <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between mb-3">
            <h5 className="font-semibold">Transactions</h5>
            <MoreVertical className="w-4 h-4 text-[var(--color-gray-400)]" />
          </div>

          <ul className="space-y-4">
            {[
              { name: "Apple Inc.", amount: -210000, type: "down" },
              { name: "Spotify Music", amount: -10000, type: "up" },
              { name: "Medium", amount: -26, type: "down" },
              { name: "Uber", amount: 210000, type: "up" },
              { name: "Ola Cabs", amount: 210000, type: "up" },
            ].map((tx, i) => (
              <li key={i} className="flex justify-between items-center">
                <div>
                  <h6 className="font-medium text-[var(--color-theme-headings)]">
                    {tx.name}
                  </h6>
                  <p className="text-xs text-[var(--color-gray-500)]">
                    #{1000 + i}-TX
                  </p>
                </div>
                <div
                  className={`flex items-center gap-1 font-semibold ${
                    tx.type === "up"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {tx.type === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span>${Math.abs(tx.amount).toLocaleString()}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Cashflow Chart */}
        <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm col-span-2">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-semibold">Cashflow</h5>
            <select className="border rounded-md text-sm px-2 py-1 text-[var(--color-gray-600)]">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>
          <ReactApexChart
            options={cashflowOptions}
            series={cashflowSeries}
            type="bar"
            height={220}
          />
        </div>
      </div>

      {/* Row 3: Where your money go, Accounts, Quick Transfer, Category */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Where your money go */}
        <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-semibold">Where your money go?</h5>
            <button className="flex items-center gap-1 text-sm text-blue-600">
              <Plus className="w-4 h-4" /> Add New
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Food & Drink", "Travel", "Shopping", "Healthcare"].map(
              (c, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-3 rounded-lg text-center hover:shadow transition"
                >
                  <p className="font-medium text-sm mb-1">{c}</p>
                  <p className="text-xs text-[var(--color-gray-500)]">
                    {(40 - i * 5) + "%"} | ${1000 - i * 200}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Accounts */}
        <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
          <h5 className="font-semibold mb-4">Accounts</h5>
          {[1, 2].map((i) => (
            <div
              key={i}
              className="border rounded-lg p-3 mb-3 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-[var(--color-gray-500)]">Active</p>
                <h6 className="font-semibold">12,920,000</h6>
              </div>
              <p className="text-xs text-[var(--color-gray-400)]">US Dollar</p>
            </div>
          ))}
          <button className="w-full border border-dashed text-gray-400 py-2 rounded-lg text-sm">
            + Add Account
          </button>
        </div>

        {/* Quick Transfer */}
        <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
          <h5 className="font-semibold mb-4">Quick Transfer</h5>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Starbucks Cafe</span> <span className="text-red-500">-$26</span>
            </li>
            <li className="flex justify-between">
              <span>Apple Inc.</span> <span className="text-green-500">+$750</span>
            </li>
            <li className="flex justify-between">
              <span>Ola Cabs</span> <span className="text-red-500">-$26</span>
            </li>
          </ul>
        </div>

        {/* Category */}
        <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
          <h5 className="font-semibold mb-3">Category</h5>
          <ReactApexChart
            options={pieOptions}
            series={pieSeries}
            type="donut"
            height={200}
          />
        </div>
      </div>

      {/* Row 4: Transaction History Table */}
      <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-semibold">Transaction History</h5>
          <a href="#" className="text-blue-600 text-sm font-medium">
            View All
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-500 text-left border-b">
                <th className="py-3 px-4">USER NAME</th>
                <th className="py-3 px-4">CATEGORY</th>
                <th className="py-3 px-4">DATE/TIME</th>
                <th className="py-3 px-4">AMOUNT</th>
                <th className="py-3 px-4">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Airi Satou", cat: "Salary Payment", amt: "$950.54", status: "Completed" },
                { name: "Ashton Cox", cat: "Project Payment", amt: "$520.30", status: "Completed" },
                { name: "Bradley Greer", cat: "YouTube Subscribe", amt: "$100.00", status: "Pending" },
                { name: "Brielle Williamson", cat: "Salary Payment", amt: "$760.25", status: "In Progress" },
              ].map((t, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 px-4 font-medium">{t.name}</td>
                  <td className="py-3 px-4 text-[var(--color-gray-600)]">{t.cat}</td>
                  <td className="py-3 px-4 text-[var(--color-gray-600)]">2023/02/07</td>
                  <td className="py-3 px-4 font-semibold">{t.amt}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        t.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : t.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
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
