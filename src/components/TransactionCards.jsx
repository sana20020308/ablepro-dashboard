import React from "react";
import ReactApexChart from "react-apexcharts";
import { MoreVertical } from "lucide-react";

function TransactionCard({ color = "#22c55e", title = "Transactions", date = "2–31 July 2023" }) {
  const options = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
      toolbar: { show: false },
      height: 80,
    },
    stroke: {
      curve: "smooth",
      width: 2.5,
      lineCap: "round",
    },
    colors: [color],
    tooltip: { enabled: false },
    grid: { show: false },
  };

  const series = [{ name: "series1", data: [25, 40, 30, 45, 25, 40, 30] }];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h6 className="text-sm font-semibold text-gray-800">{title}</h6>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        <button className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-400 transition">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Chart */}
      <div className="h-[60px] w-full mt-2">
        <ReactApexChart options={options} series={series} type="line" height={60} />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-start gap-2 mt-3">
        <h4 className="text-lg font-semibold text-gray-900">
          <span className="text-gray-500 text-sm">$</span>650k
        </h4>
        <p className="text-xs text-gray-500">Compare to last week</p>
      </div>
    </div>
  );
}

export default function TransactionCards() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-4">
        <TransactionCard color="#22c55e" />
      </div>
      <div className="col-span-12 md:col-span-4">
        <TransactionCard color="#22c55e" />
      </div>
      <div className="col-span-12 md:col-span-4">
        <TransactionCard color="#ef4444" />
      </div>
    </div>
  );
}
