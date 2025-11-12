import React from "react";
import ReactApexChart from "react-apexcharts";
import MyCard from "../components/MyCard";
import TransactionCard from "../components/TransactionCard";
import TransactionCards from "../components/TransactionCards";
import {
  MoreVertical,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
} from "lucide-react";

// This single-file React component is designed to be pasted into a Tailwind + React
// project. It uses react-apexcharts for charts and lucide-react for icons.
// Requirements: react, react-dom, react-apexcharts, apexcharts, lucide-react, tailwindcss

export default function Finance() {
  // Cashflow chart config
  const cashflowOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 8, columnWidth: "45%" } },
    dataLabels: { enabled: false },
    stroke: { show: false },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    colors: ["#2b6cb0", "#60a5fa"],
    grid: { show: false },
    legend: { show: true, position: "top", horizontalAlign: "right" },
    tooltip: { theme: "light" },
  };
  const cashflowSeries = [
    { name: "Income", data: [65, 59, 80, 81, 56, 55, 40, 68, 76, 85, 72, 90] },
    { name: "Expends", data: [28, 48, 40, 19, 86, 27, 90, 34, 52, 30, 44, 35] },
  ];

  // Pie chart config
  const pieOptions = {
    chart: { type: "donut" },
    labels: ["Saving", "Spend", "Income"],
    colors: ["#60A5FA", "#F87171", "#34D399"],
    legend: { show: false },
  };
  const pieSeries = [44, 33, 23];

  return (
    <div className="p-6 max-w-full">
      {/* Header / Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm text-[var(--color-gray-500)] mb-2">Home <span className="opacity-50">/</span> Dashboard <span className="opacity-50">/</span> Finance</nav>
        <h1 className="text-3xl font-semibold text-[var(--color-theme-headings)]">Finance</h1>
      </div>

      {/* Top row: Card + 3 small stat cards */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Left: My Card (col-span 5) */}
<div className="col-span-12 lg:col-span-5">
  <MyCard />
</div>


        {/* Right: three small stat cards (col-span 7) */}
        <div className="col-span-12 lg:col-span-7">
  <TransactionCards />
</div>



      </div>

      {/* Middle row: left transactions list + wide cashflow chart */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Transactions list (col 3) */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm h-full">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold">Transactions</h5>
              <MoreVertical className="w-4 h-4 text-[var(--color-gray-400)]" />
            </div>
            <ul className="space-y-4">
              {[{name: 'Apple Inc.', amt: -210000}, {name: 'Spotify Music', amt: -10000}, {name: 'Medium', amt: -26}, {name: 'Uber', amt: 210000}, {name: 'Ola Cabs', amt: 210000}].map((tx, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">{tx.name.split(' ').map(x => x[0]).slice(0,2).join('')}</div>
                      <div>
                        <div className="font-medium text-[var(--color-theme-headings)]">{tx.name}</div>
                        <div className="text-xs text-[var(--color-gray-500)]">#{1000+i}-PRO-TX</div>
                      </div>
                    </div>
                  </div>
                  <div className={`font-semibold flex items-center gap-1 ${tx.amt > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {tx.amt > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span>${Math.abs(tx.amt).toLocaleString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cashflow (col 9) */}
        <div className="col-span-12 lg:col-span-9">
          <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold">Cashflow</h5>
              <select className="border rounded-md text-sm px-2 py-1 text-[var(--color-gray-600)]">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <div className="text-sm text-[var(--color-gray-500)]">5.44%</div>
              <div className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">+5.44%</div>
            </div>
            <ReactApexChart options={cashflowOptions} series={cashflowSeries} type="bar" height={240} />
          </div>
        </div>
      </div>

      {/* Lower row: Where money go (wide), Accounts, Quick Transfer, Category */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold">Where your money go ?</h5>
              <button className="flex items-center gap-2 text-sm text-blue-600"><Plus className="w-4 h-4"/> Add New</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {title: 'Food & Drink', pct: '65%', val: '$1000'},
                {title: 'Travel', pct: '30%', val: '$400'},
                {title: 'Shopping', pct: '52%', val: '$900'},
                {title: 'Healthcare', pct: '26%', val: '$250'},
              ].map((c, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm border">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">{c.title}</div>
                    <MoreVertical className="w-4 h-4 text-[var(--color-gray-400)]" />
                  </div>
                  <div className="bg-gray-900 text-white rounded-lg p-3 text-center">
                    <div className="text-xs opacity-70">{c.pct}</div>
                    <div className="font-semibold text-sm">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
          {/* Accounts */}
          <div className="col-span-1 bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
            <h5 className="font-semibold mb-4">Accounts</h5>
            {[1,2].map((i)=> (
              <div key={i} className="border rounded-lg p-3 mb-3 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[var(--color-gray-500)]">Active</p>
                  <h6 className="font-semibold">12,920,000</h6>
                </div>
                <p className="text-xs text-[var(--color-gray-400)]">US Dollar</p>
              </div>
            ))}
            <button className="w-full border border-dashed text-gray-400 py-2 rounded-lg text-sm">+ Add Account</button>
          </div>

          {/* Quick Transfer */}
          <div className="col-span-1 bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
            <h5 className="font-semibold mb-4">Quick Transfer</h5>
            <ul className="space-y-3">
              <li className="flex justify-between"><span>Starbucks Cafe</span><span className="text-red-500">-$26</span></li>
              <li className="flex justify-between"><span>Apple Inc.</span><span className="text-green-500">+$750</span></li>
              <li className="flex justify-between"><span>Ola Cabs</span><span className="text-red-500">-$26</span></li>
            </ul>
          </div>

          {/* Category (span full width) */}
          <div className="col-span-2 bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-5 shadow-sm">
            <h5 className="font-semibold mb-3">Category</h5>
            <div className="flex justify-center">
              <ReactApexChart options={pieOptions} series={pieSeries} type="donut" height={180} />
            </div>
          </div>
        </div>
      </div>

      {/* Transaction history table */}
      <div className="bg-[var(--color-theme-cardbg)] border border-[var(--color-theme-border)] rounded-2xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-semibold">Transaction History</h5>
          <a className="text-blue-600 text-sm font-medium" href="#">View All</a>
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
              {[{ name: "Airi Satou", cat: "Salary Payment", amt: "$950.54", status: "Completed" }, { name: "Ashton Cox", cat: "Project Payment", amt: "$520.30", status: "Completed" }, { name: "Bradley Greer", cat: "You Tube Subscribe", amt: "$100.00", status: "Pending" }, { name: "Brielle Williamson", cat: "Salary Payment", amt: "$760.25", status: "In Progress" }].map((t, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 px-4 font-medium">{t.name}</td>
                  <td className="py-3 px-4 text-[var(--color-gray-600)]">{t.cat}</td>
                  <td className="py-3 px-4 text-[var(--color-gray-600)]">2023/02/07</td>
                  <td className="py-3 px-4 font-semibold">{t.amt}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${t.status === "Completed" ? "bg-green-100 text-green-600" : t.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        /* If you want to tweak theme variables locally in this component, set them here */
        :root{
          --color-theme-cardbg: #ffffff;
          --color-theme-border: #e6eef5;
          --color-theme-headings: #0f172a;
          --color-gray-500: #94a3b8;
          --color-gray-600: #64748b;
        }
      `}</style>
    </div>
  );
}
