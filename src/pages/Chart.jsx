// /src/pages/Chart.jsx
import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  MoreVertical,
  Wallet,
  Eye,
  CalendarDays,
  Download,
  ArrowUpRight,
  Plus,
} from "lucide-react";

/* ---------------------------------------------
   TOP KPI CARD DATA
--------------------------------------------- */
const cards = [
  {
    title: "All Earnings",
    value: "$30,200",
    color: "#3b82f6",
    icon: <Wallet />,
    data: [10, 20, 15, 18, 22, 19],
  },
  {
    title: "Page Views",
    value: "290+",
    color: "#f59e0b",
    icon: <Eye />,
    data: [5, 10, 6, 12, 9, 14],
  },
  {
    title: "Total Task",
    value: "14,568",
    color: "#10b981",
    icon: <CalendarDays />,
    data: [8, 6, 9, 12, 11, 13],
  },
  {
    title: "Download",
    value: "$30,200",
    color: "#ef4444",
    icon: <Download />,
    data: [7, 9, 11, 13, 12, 15],
  },
];

// Sparkline generator
const sparkOptions = (color) => ({
  chart: { type: "bar", sparkline: { enabled: true } },
  plotOptions: { bar: { borderRadius: 3, columnWidth: "55%" } },
  dataLabels: { enabled: false },
  colors: [color],
  tooltip: { enabled: false },
});

/* ---------------------------------------------
   FULL-WIDTH Repeat Customer Chart
--------------------------------------------- */
const repeatOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#374151",
    offsetY: 0,
    parentHeightOffset: 0,
  },
  stroke: {
    curve: "smooth",
    width: 2,
    colors: ["#3b82f6"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.28,
      opacityTo: 0.04,
      stops: [0, 90, 100],
    },
  },
  markers: {
    size: 4,
    colors: ["#3b82f6"],
    strokeColors: "#fff",
    strokeWidth: 2,
    hover: { size: 6 },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: { colors: "#6b7280", fontSize: "11px" },
    },
  },
  yaxis: {
    labels: {
      style: { colors: "#6b7280", fontSize: "11px" },
    },
    tickAmount: 4,
  },
  grid: {
    borderColor: "#eef2f7",
    strokeDashArray: 4,
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  tooltip: { theme: "light" },
};

const repeatSeries = [
  {
    name: "Repeat Customers",
    data: [30, 60, 45, 70, 50, 90, 50, 55, 48, 60, 57, 65],
  },
];

/* ---------------------------------------------
   PROJECT SPARK AREA (small)
--------------------------------------------- */
const projectSpark = (color) => ({
  chart: { type: "area", sparkline: { enabled: true } },
  stroke: { curve: "smooth", width: 2 },
  fill: { opacity: 0.15 },
  colors: [color],
  tooltip: { enabled: false },
});

const projectSeriesA = [{ data: [10, 15, 13, 18, 16] }];
const projectSeriesB = [{ data: [3, 6, 5, 7, 6] }];

/* ---------------------------------------------
   INCOME BAR MINI
--------------------------------------------- */
const incomeOptions = {
  chart: { type: "bar", sparkline: { enabled: true } },
  plotOptions: { bar: { borderRadius: 6, columnWidth: "60%" } },
  colors: ["#34D399"],
  tooltip: { enabled: false },
};
const incomeSeries = [{ data: [5, 7, 4, 8, 6, 9] }];

/* ---------------------------------------------
   DONUT
--------------------------------------------- */
const donutOptions = {
  chart: { type: "donut", sparkline: { enabled: true } },
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
  plotOptions: { pie: { donut: { size: "70%" } } },
  legend: { show: false },
  dataLabels: { enabled: false },
};

/* ---------------------------------------------
   OVERVIEW BAR
--------------------------------------------- */
const overviewOptions = {
  chart: { type: "bar" },
  plotOptions: { bar: { columnWidth: "55%", borderRadius: 4 } },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    labels: { style: { colors: "#9CA3AF" } },
  },
  dataLabels: { enabled: false },
  grid: { borderColor: "#E5E7EB" },
};
const overviewSeries = [{ data: [40, 50, 60, 55, 70] }];

/* ---------------------------------------------
   PIE
--------------------------------------------- */
const pieOptions = {
  chart: { type: "pie" },
  labels: ["A", "B", "C", "D"],
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
  legend: { show: false },
  dataLabels: { enabled: false },
};
const pieSeries = [44, 55, 13, 43];

/* ---------------------------------------------
   MONTHLY STACKED
--------------------------------------------- */
const stackedOptions = {
  chart: { type: "bar", stacked: true },
  plotOptions: { bar: { columnWidth: "40%" } },
  xaxis: { categories: ["Jan", "Feb", "Mar", "Apr"], labels: { style: { colors: "#9CA3AF" } } },
  colors: ["#3B82F6", "#93C5FD"],
};
const stackedSeries = [
  { name: "A", data: [20, 30, 25, 35] },
  { name: "B", data: [15, 20, 18, 22] },
];

/* ---------------------------------------------
   SALES REPORT
--------------------------------------------- */
const salesOptions = {
  chart: { type: "bar" },
  plotOptions: { bar: { columnWidth: "40%" } },
  xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  colors: ["#F59E0B", "#3B82F6"],
};
const salesSeries = [
  { name: "Net Profit", data: [40, 80, 70, 100, 90, 120] },
  { name: "Revenue", data: [60, 50, 90, 80, 110, 100] },
];

/* ---------------------------------------------
   ACQUISITION
--------------------------------------------- */
const acqOptions = {
  chart: { type: "bar", stacked: true },
  plotOptions: { bar: { columnWidth: "40%" } },
  colors: ["#111827", "#93C5FD"],
  xaxis: { labels: { show: false } },
  grid: { show: false },
};
const acqSeries = [
  { name: "Direct", data: [30, 28, 26, 24] },
  { name: "Referral", data: [10, 12, 11, 9] },
];

/* ---------------------------------------------
   MAIN PAGE START
--------------------------------------------- */
export default function ChartPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Chart</h1>

      {/* TOP KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow p-5"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${card.color}20`, color: card.color }}
                >
                  {React.cloneElement(card.icon, { className: "w-5 h-5" })}
                </div>

                <div className="font-semibold">{card.title}</div>
              </div>

              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>

            {/* Sparkline + Values */}
            <div className="bg-gray-50 rounded-xl mt-4 p-3">
              <div className="grid grid-cols-12 items-center gap-3">
                <div className="col-span-7">
                  <ReactApexChart
                    options={sparkOptions(card.color)}
                    series={[{ data: card.data }]}
                    type="bar"
                    height={55}
                  />
                </div>

                <div className="col-span-5 text-right">
                  <div className="font-bold text-lg">{card.value}</div>
                  <div
                    className="text-sm font-medium flex items-center justify-end gap-1"
                    style={{ color: card.color }}
                  >
                    <ArrowUpRight className="w-4 h-4" /> 30.6%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FULL WIDTH — REPEAT CUSTOMER CHART */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Repeat customer rate</h3>
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold">5.44%</div>
            <div className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs font-semibold">
              +2.6%
            </div>
          </div>
        </div>

        <ReactApexChart
          options={repeatOptions}
          series={repeatSeries}
          type="area"
          height={260}
        />
      </div>

      {/* RIGHT KPI CARDS BELOW (Option A layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white p-5 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">New Orders</h3>
          <ReactApexChart
            options={{
              chart: { type: "bar", sparkline: { enabled: true } },
              plotOptions: { bar: { columnWidth: "55%", borderRadius: 4 } },
              colors: ["#3b82f6"],
              tooltip: { enabled: false },
            }}
            series={[{ data: [8, 10, 14, 18, 16, 12] }]}
            type="bar"
            height={80}
          />
        </div>

        <div className="bg-white p-5 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">New Users</h3>
          <ReactApexChart
            options={{
              chart: { type: "line", sparkline: { enabled: true } },
              stroke: { curve: "smooth", width: 2 },
              colors: ["#10b981"],
              tooltip: { enabled: false },
            }}
            series={[{ data: [4, 8, 6, 12, 10, 14] }]}
            type="line"
            height={80}
          />
        </div>

        <div className="bg-white p-5 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">Visitors</h3>
          <ReactApexChart
            options={{
              chart: { type: "bar", sparkline: { enabled: true } },
              plotOptions: { bar: { columnWidth: "45%", borderRadius: 4 } },
              colors: ["#f59e0b"],
              tooltip: { enabled: false },
            }}
            series={[{ data: [3, 5, 7, 9, 10, 9] }]}
            type="bar"
            height={80}
          />
        </div>

      </div>

      {/* PROJECT OVERVIEW */}
      <div className="bg-white rounded-2xl border p-6 shadow-sm mt-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-sm">Project Overview</div>
            <div className="text-gray-500 text-xs">Total Tasks</div>
            <div className="font-bold text-lg">34,686</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-36">
              <ReactApexChart
                options={projectSpark("#60A5FA")}
                series={projectSeriesA}
                type="area"
                height={45}
              />
            </div>

            <div className="w-36">
              <ReactApexChart
                options={projectSpark("#F87171")}
                series={projectSeriesB}
                type="area"
                height={45}
              />
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Project
            </button>
          </div>
        </div>
      </div>

      {/* INCOME / DONUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="text-xs text-gray-500 mb-2">$30,200.00</div>
          <ReactApexChart
            options={incomeOptions}
            series={incomeSeries}
            type="bar"
            height={60}
          />
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">Total Earning</div>
            <div className="text-lg font-bold">$45,890</div>
          </div>

          <div className="w-28">
            <ReactApexChart
              options={donutOptions}
              series={[44, 55, 13, 43]}
              type="donut"
              height={100}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="text-xs text-gray-500">Total Earning</div>
          <div className="text-lg font-bold">$45,890</div>
        </div>

      </div>

      {/* OVERVIEW BAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-2xl border p-6 shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-3">
            <div className="font-semibold text-sm">Overview</div>
            <select className="border rounded text-xs px-2 py-1">
              <option>Monthly</option>
            </select>
          </div>

          <ReactApexChart
            options={overviewOptions}
            series={overviewSeries}
            type="bar"
            height={220}
          />
        </div>

        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Total Sales</div>
            <div className="text-lg font-bold">1,800</div>
            <div className="text-xs text-red-500">-245</div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Revenue</div>
            <div className="text-lg font-bold">$5,667</div>
            <div className="text-xs text-green-500">+ $2100</div>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <div className="text-xs text-gray-500">Abandon Cart</div>
            <div className="text-lg font-bold">128</div>
            <div className="text-xs text-red-500">-26</div>
          </div>
        </div>

      </div>

      {/* PIE + INCOME */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="font-semibold text-sm mb-2">Overview Product</div>
          <ReactApexChart
            options={pieOptions}
            series={pieSeries}
            type="pie"
            height={180}
          />
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="font-semibold text-sm mb-2">Total Income</div>
          <ReactApexChart
            options={donutOptions}
            series={[20, 40, 30, 10]}
            type="donut"
            height={150}
          />
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <div className="text-xs text-gray-500">Total Earning</div>
          <div className="text-lg font-bold">$45,890</div>
        </div>

      </div>

      {/* MONTHLY STACKED */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <div className="font-semibold text-sm mb-2">Languages Support</div>
          <ReactApexChart
            options={sparkOptions("#3b82f6")}
            series={[{ data: [3, 8, 6, 10] }]}
            type="bar"
            height={60}
          />
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
          <ReactApexChart
            options={stackedOptions}
            series={stackedSeries}
            type="bar"
            height={200}
          />
        </div>

      </div>

      {/* SALES + ACQUISITION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
          <div className="font-semibold text-sm mb-2">Sales Report</div>
          <ReactApexChart
            options={salesOptions}
            series={salesSeries}
            type="bar"
            height={240}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <div className="font-semibold text-sm mb-2">Acquisition Channels</div>
          <ReactApexChart
            options={acqOptions}
            series={acqSeries}
            type="bar"
            height={150}
          />
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © Able Pro crafted with ♥ by Team Phoenixcoded
      </div>

    </div>
  );
}
