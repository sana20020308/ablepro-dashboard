import React, { useState, useRef, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

export default function CashflowChart() {
  const [timeframe, setTimeframe] = useState("Monthly");
  const chartRef = useRef(null);

  const options = {
    chart: {
      id: "cashflow-chart",
      type: "bar",
      toolbar: { show: true },
      zoom: { enabled: false },
      stacked: false,
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 4,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },

    dataLabels: { enabled: false },

    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },

    colors: ["#3b82f6", "#93c5fd"],

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#6b7280",
          fontSize: "11px",
          fontFamily: "Inter, sans-serif",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      min: 0,
      max: 5,
    },

    yaxis: { show: false },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      padding: { left: 0, right: 0, top: 0 },
      yaxis: { lines: { show: true } },
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetY: -10,
      fontSize: "12px",
    },

    tooltip: {
      theme: "light",
      y: {
        formatter: (val) => "$" + val + "k",
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            bar: { columnWidth: "65%" },
          },
          legend: { fontSize: "10px" },
          xaxis: {
            labels: { style: { fontSize: "10px" } },
          },
        },
      },
    ],
  };

  const series = [
    { name: "Income", data: [25, 40, 35, 50, 45, 60] },
    { name: "Expends", data: [15, 30, 25, 40, 35, 50] },
  ];

  // ⭐ CUSTOM MOUSE WHEEL ZOOM
  useEffect(() => {
    const chartEl = document.querySelector("#cashflow-chart");

    function handleWheel(e) {
      e.preventDefault();
      const chart = chartRef.current?.chart;
      if (!chart) return;

      let min = chart.w.config.xaxis.min;
      let max = chart.w.config.xaxis.max;
      const zoomSpeed = 0.2;

      if (e.deltaY < 0) {
        min += zoomSpeed;
        max -= zoomSpeed;
      } else {
        min -= zoomSpeed;
        max += zoomSpeed;
      }

      if (min < 0) min = 0;
      if (max > 5) max = 5;
      if (max - min < 1) return;

      chart.updateOptions({ xaxis: { min, max } });
    }

    if (chartEl) {
      chartEl.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (chartEl) {
        chartEl.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 transition-all duration-200 w-full h-full">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
        <div>
          <h5 className="text-base font-semibold text-gray-800">Cashflow</h5>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">5.44%</span>
            <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-0.5 rounded">
              +5.44%
            </span>
          </div>
        </div>

        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="border border-gray-300 rounded-md text-sm px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 w-32 sm:w-auto"
        >
          <option>Today</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full">
        <ReactApexChart
          id="cashflow-chart"
          ref={chartRef}
          options={options}
          series={series}
          type="bar"
          height={230}
        />
      </div>
    </div>
  );
}
