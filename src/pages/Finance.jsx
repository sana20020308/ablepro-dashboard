import React from "react";
import ReactApexChart from "react-apexcharts";
import MyCard from "../components/MyCard";
import TransactionCards from "../components/TransactionCards";
import MoneySpentSection from "../components/MoneySpentSection";
import AccountsSection from "../components/AccountsSection";
import TransactionsSection from "../components/TransactionsSection";
import { MoreVertical } from "lucide-react";

// Final Complete Finance Page Layout
export default function Finance() {
  // Pie Chart Data (Category)
  const pieOptions = {
    chart: { type: "donut" },
    labels: ["Saving", "Spend", "Income"],
    colors: ["#3b82f6", "#f87171", "#22c55e"],
    legend: {
      position: "bottom",
      fontSize: "13px",
      fontFamily: "Inter, sans-serif",
    },
    dataLabels: { enabled: false },
  };
  const pieSeries = [44, 33, 23];

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-8 bg-[#f8fafc]">
      {/* Breadcrumb + Title */}
      <div>
        <p className="text-sm text-gray-400">
          Home / Dashboard / <span className="text-gray-700">Finance</span>
        </p>
        <h1 className="text-3xl font-semibold text-gray-900 mt-1">Finance</h1>
      </div>

      {/* Row 1: My Card + Transaction cards */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-4">
          <MyCard />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <TransactionCards />
        </div>
      </div>
      

      {/* Row 2: Transactions + Cashflow */}
      <div className="grid grid-cols-12 gap-6">
<div className="col-span-12 xl:col-span-3">
  <TransactionsSection />
</div>


        {/* Right: Cashflow */}
        <div className="col-span-12 xl:col-span-9">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-full">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-1">Cashflow</h5>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  5.44% <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-0.5 rounded">+5.44%</span>
                </p>
              </div>

              <select className="border border-gray-300 rounded-md text-sm px-2 py-1 text-gray-600 focus:ring-1 focus:ring-blue-500">
                <option>Today</option>
                <option>Weekly</option>
                <option selected>Monthly</option>
              </select>
            </div>

            {/* Chart */}
            <ReactApexChart
              options={{
                chart: {
                  type: "bar",
                  height: 230,
                  toolbar: { show: false },
                },
                plotOptions: {
                  bar: { horizontal: false, columnWidth: "40%", borderRadius: 4 },
                },
                dataLabels: { enabled: false },
                stroke: { show: true, width: 3, colors: ["transparent"] },
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
        </div>
      </div>

{/* Row 3: Money Spent + Accounts + Quick Transfer + Category */}
<div className="grid grid-cols-12 gap-6">

  {/* Left: Money Spent (8 cols) */}
  <div className="col-span-12 xl:col-span-8">
    <MoneySpentSection />
  </div>

  {/* Right: Accounts (top-right) */}
  <div className="col-span-12 xl:col-span-4">
    <AccountsSection />
  </div>

  {/* Right: Quick Transfer (middle-right) */}
  <div className="col-span-12 xl:col-span-4">
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-4">
        <h5 className="text-base font-semibold text-gray-800">Quick Transfer</h5>
        <select className="text-sm border border-gray-200 rounded-md px-2 py-1 text-gray-600">
          <option>Today</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="flex items-center gap-3 mb-5">
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src={`/Images/Avatars/user-${i}.png`}
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-200"
          />
        ))}
      </div>

      <ul className="space-y-4 text-sm">
        <li className="flex justify-between">
          <span className="text-gray-700">Starbucks Cafe</span>
          <span className="text-red-500 font-semibold">-$26</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-700">Apple Inc.</span>
          <span className="text-green-500 font-semibold">+$750.00</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-700">Ola Cabs</span>
          <span className="text-red-500 font-semibold">-$26</span>
        </li>
      </ul>

    </div>
  </div>

  {/* Right: Category (bottom-right) */}
  <div className="col-span-12 xl:col-span-4">
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-base font-semibold text-gray-800">Category</h5>
        <select className="text-sm border border-gray-200 rounded-md px-2 py-1 text-gray-600">
          <option>Today</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="flex justify-center">
        <ReactApexChart
          options={pieOptions}
          series={pieSeries}
          type="donut"
          height={200}
        />
      </div>
    </div>
  </div>

</div>


      {/* Row 4: Transaction History Table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-semibold text-gray-800">Transaction History</h5>
          <a className="text-blue-600 text-sm font-medium hover:underline" href="#">
            View All
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3 px-4 text-left">USER NAME</th>
                <th className="py-3 px-4 text-left">CATEGORY</th>
                <th className="py-3 px-4 text-left">DATE/TIME</th>
                <th className="py-3 px-4 text-left">AMOUNT</th>
                <th className="py-3 px-4 text-left">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Airi Satou", cat: "Salary Payment", date: "2023/02/07", amt: "$950.54", status: "Completed" },
                { name: "Ashton Cox", cat: "Project Payment", date: "2023/02/01", amt: "$520.30", status: "Completed" },
                { name: "Bradley Greer", cat: "You Tube Subscribe", date: "2023/01/22", amt: "$100.00", status: "Pending" },
                { name: "Brielle Williamson", cat: "Salary Payment", date: "2023/02/07", amt: "$760.25", status: "In Progress" },
                { name: "Airi Satou", cat: "Spotify Subscribe", date: "2023/02/07", amt: "$60.05", status: "Cancelled" },
              ].map((t, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 px-4 font-medium text-gray-800">{t.name}</td>
                  <td className="py-3 px-4 text-gray-500">{t.cat}</td>
                  <td className="py-3 px-4 text-gray-500">{t.date}</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{t.amt}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
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
