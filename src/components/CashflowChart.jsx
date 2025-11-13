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
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all duration-200 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h5 className="text-base font-semibold text-gray-800 mb-1">Cashflow</h5>
          <div className="flex items-center">
            <span className="text-green-500 text-sm font-medium mr-2">5.44%</span>
            <span className="text-xs text-gray-500">vs last month</span>
          </div>
        </div>

        <div className="relative">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg text-sm px-3 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option>Today</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-2">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={250}
        />
      </div>

      {/* Legend */}
      <div className="flex justify-end mt-2 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
          <span className="text-xs text-gray-600">Income</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-blue-200 mr-2"></div>
          <span className="text-xs text-gray-600">Expends</span>
        </div>
      </div>
    </div>
  );
}
