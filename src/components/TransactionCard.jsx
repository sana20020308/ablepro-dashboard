import React from "react";
import { MoreVertical } from "lucide-react";
import ReactApexChart from "react-apexcharts";

export default function TransactionCard({ color = "#22c55e", date = "2–31 July 2023" }) {
  const chartOptions = {
    chart: { type: "line", toolbar: { show: false }, sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 },
    tooltip: { enabled: false },
    colors: [color],
    grid: { show: false },
  };

  const chartSeries = [{ data: [5, 8, 6, 10, 7, 9, 8] }];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h5 className="text-sm font-semibold text-gray-800">Transactions</h5>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        <MoreVertical className="w-4 h-4 text-gray-400" />
      </div>

      {/* Line chart */}
      <div className="my-3">
        <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={60} />
      </div>

      {/* Footer */}
      <div className="flex items-baseline gap-2">
        <h4 className="text-xl font-semibold text-gray-900">$650k</h4>
        <p className="text-xs text-gray-500">Compare to last week</p>
      </div>
    </div>
  );
}
