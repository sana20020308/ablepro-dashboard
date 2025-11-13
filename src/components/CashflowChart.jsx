import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function CashflowChart() {
  const [timeframe, setTimeframe] = useState("Monthly");

  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
      zoom: { enabled: false },
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 4,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: { 
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    colors: ["#3b82f6", "#93c5fd"],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: '#6b7280',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 4,
      padding: { left: 0, right: 0, top: 0 },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -10,
      markers: {
        width: 10,
        height: 10,
        radius: 2,
      },
      itemMargin: {
        horizontal: 12,
      },
    },
    tooltip: { 
      theme: 'light',
      y: {
        formatter: function (val) {
          return '$' + val + 'k';
        }
      }
    },
  };

  const series = [
    { 
      name: "Income", 
      data: [25, 40, 35, 50, 45, 60],
    },
    { 
      name: "Expends", 
      data: [15, 30, 25, 40, 35, 50],
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-200 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h5 className="text-base font-semibold text-gray-800 mb-1">Cashflow</h5>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">5.44%</span>
            <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-0.5 rounded">+5.44%</span>
          </div>
        </div>

        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="border border-gray-300 rounded-md text-sm px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option>Today</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={230}
        />
      </div>
    </div>
  );
}