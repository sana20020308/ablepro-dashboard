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

/**
 * Clean, optimized and working Chart.jsx
 * - Single source of truth for all chart options/series
 * - Uses getSparklineOptions(...) everywhere (no sparkOptions)
 * - All imports present (Plus, ArrowUpRight, etc.)
 * - Recreated the STAT CARDS, Repeat Customer area, Project Overview,
 *   Income/Donut, Overview stacked, Monthly report, Sales, Acquisition
 */

/* ---------- TOP KPI CARDS DATA ---------- */
const cards = [
  {
    title: "All Earnings",
    value: "$30,200",
    color: "#3b82f6",
    icon: <Wallet className="w-4 h-4" />,
  },
  {
    title: "Page Views",
    value: "290+",
    color: "#f59e0b",
    icon: <Eye className="w-4 h-4" />,
  },
  {
    title: "Total Task",
    value: "14,568",
    color: "#10b981",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    title: "Download",
    value: "$30,200",
    color: "#ef4444",
    icon: <Download className="w-4 h-4" />,
  },
];

/* ---------- Repeat Customer Apex Chart ---------- */
const apexOptions = {
  chart: { type: "area", height: 280, toolbar: { show: false }, zoom: { enabled: false }, foreColor: "#374151" },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", width: 2, colors: ["#3b82f6"] },
  fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.28, opacityTo: 0.04, stops: [0, 90, 100] } },
  grid: { borderColor: "#eef2f7", strokeDashArray: 4, yaxis: { lines: { show: true } } },
  markers: { size: 4, colors: ["#3b82f6"], strokeColors: "#fff", strokeWidth: 2, hover: { size: 6 } },
  xaxis: {
    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    labels: { style: { colors: "#6b7280", fontSize: "12px" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { labels: { style: { colors: "#6b7280", fontSize: "12px" } }, tickAmount: 5 },
  tooltip: { theme: "light" },
  legend: { show: false },
};

const apexSeries = [
  { name: "Repeat Customers", data: [30, 60, 45, 70, 50, 90, 50, 55, 48, 60, 57, 65] },
];

/* ---------- Sparkline chart options ---------- */
const getSparklineOptions = (color) => ({
  chart: { type: "bar", sparkline: { enabled: true }, toolbar: { show: false } },
  plotOptions: { bar: { columnWidth: "55%", borderRadius: 3 } },
  dataLabels: { enabled: false },
  colors: [color],
  xaxis: { crosshairs: { show: false } },
  grid: { show: false },
  tooltip: { enabled: false },
});

const sparklineData = [10, 30, 40, 20, 60, 50, 25, 15, 20, 30, 25, 20];

/* ---------- Project overview sparkline charts ---------- */
const projectSpark = (color) => ({
  chart: { type: "area", sparkline: { enabled: true }, toolbar: { show: false } },
  stroke: { curve: "smooth", width: 2 },
  fill: { opacity: 0.15 },
  colors: [color],
  tooltip: { enabled: false },
});
const projectSeriesA = [{ data: [10, 15, 13, 18, 16, 20, 18] }];
const projectSeriesB = [{ data: [3, 6, 5, 7, 6, 8, 7] }];

/* ---------- Income bar mini ---------- */
const incomeSeries = [{ data: [5, 7, 4, 8, 6, 9, 7, 6, 5, 6, 7] }];
const incomeOptions = {
  chart: { type: "bar", sparkline: { enabled: true }, toolbar: { show: false } },
  plotOptions: { bar: { columnWidth: "60%", borderRadius: 6 } },
  colors: ["#34D399"],
  tooltip: { enabled: false },
};

/* ---------- Donut chart ---------- */
const donutSeries = [44, 55, 41, 17, 15];
const donutOptions = {
  chart: { type: "donut", sparkline: { enabled: true } },
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
  labels: ["Desktop", "Tablet", "Mobile", "Other", "Unknown"],
  legend: { show: false },
  dataLabels: { enabled: false },
  plotOptions: { pie: { donut: { size: "75%" } } },
};

/* ---------- Overview bar ---------- */
const overviewSeries = [{ name: "Overview", data: [30, 40, 45, 50, 49, 60, 70, 91] }];
const overviewOptions = {
  chart: { type: "bar", height: 350, toolbar: { show: false } },
  plotOptions: { bar: { borderRadius: 4, horizontal: false, columnWidth: "55%" } },
  dataLabels: { enabled: false },
  xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"] },
  colors: ["#3B82F6"],
  grid: { borderColor: "#e7e7e7", strokeDashArray: 4, yaxis: { lines: { show: true } } },
};

/* ---------- Pie chart ---------- */
const pieSeries = [44, 55, 13, 43];
const pieOptions = {
  chart: { type: "pie", toolbar: { show: false } },
  labels: ["Desktop", "Tablet", "Mobile", "Other"],
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
  legend: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
};

/* ---------- Monthly stacked ---------- */
const stackedSeries = [
  { name: "Layer1", data: [20, 30, 25, 35, 30, 40, 33, 42, 38, 45, 30, 25] },
  { name: "Layer2", data: [10, 12, 9, 14, 12, 16, 13, 18, 15, 18, 12, 10] },
  { name: "Layer3", data: [5, 6, 4, 7, 6, 8, 7, 9, 8, 10, 6, 5] },
];
const stackedOptions = {
  chart: { type: "bar", stacked: true, toolbar: { show: false } },
  plotOptions: { bar: { columnWidth: "40%" } },
  colors: ["#3B82F6", "#93C5FD", "#FBBF24"],
  xaxis: { categories: [1,2,3,4,5,6,7,8,9,10,11,12], labels: { style: { colors: "#9CA3AF" } } },
  grid: { borderColor: "#E5E7EB" },
  legend: { show: false },
};

/* ---------- Sales report ---------- */
const salesSeries = [
  { name: "Net Profit", data: [40, 80, 70, 100, 90, 120] },
  { name: "Revenue", data: [60, 50, 90, 80, 110, 100] },
];
const salesOptions = {
  chart: { type: "bar", toolbar: { show: false } },
  plotOptions: { bar: { columnWidth: "40%" } },
  colors: ["#F59E0B", "#3B82F6"],
  xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun"], labels: { style: { colors: "#9CA3AF" } } },
  dataLabels: { enabled: false },
  grid: { borderColor: "#E5E7EB" },
};

/* ---------- Acquisition ---------- */
const acqSeries = [
  { name: "Direct", data: [30,28,26,24,20,18,16,14,12,10,9,8] },
  { name: "Referral", data: [10,12,11,9,8,7,6,6,5,4,3,3] },
  { name: "Social", data: [5,6,7,8,6,5,4,3,2,2,1,1] },
];
const acqOptions = {
  chart: { type: "bar", stacked: true, toolbar: { show: false } },
  plotOptions: { bar: { columnWidth: "40%" } },
  colors: ["#111827", "#93C5FD", "#3B82F6"],
  xaxis: { labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false } },
  grid: { show: false },
  legend: { show: false },
};

/* ---------- MAIN COMPONENT ---------- */
export default function ChartPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-2">Home &gt; Dashboard &gt; Chart</div>
        <h1 className="text-3xl font-semibold text-gray-800">Chart</h1>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_20px_rgba(16,24,40,0.04),0_2px_6px_rgba(16,24,40,0.03)] p-5 transition hover:shadow-[0_10px_24px_rgba(16,24,40,0.05)]">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center" style={{ backgroundColor: `${card.color}1A`, color: card.color }}>
                  {React.cloneElement(card.icon, { className: "w-5 h-5" })}
                </div>
                <h6 className="font-semibold text-gray-800">{card.title}</h6>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
            </div>

            {/* Body */}
            <div className="bg-gray-50 mt-4 rounded-lg p-3">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-7">
                  <ReactApexChart options={getSparklineOptions(card.color)} series={[{ data: sparklineData }]} type="bar" height={60} />
                </div>

                <div className="col-span-5 text-right">
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">{card.value}</h5>
                  <p className="text-sm font-medium flex items-center justify-end gap-1" style={{ color: card.color }}>
                    <ArrowUpRight className="w-4 h-4" /> 30.6%
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* REPEAT CUSTOMER CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 ap-card-shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold text-gray-800">Repeat Customer Rate</h3>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg text-gray-800">5.44%</span>
              <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md font-semibold">+2.6%</span>
            </div>
          </div>
          
          <div className="-mt-2 -mb-1">
            <ReactApexChart 
              options={{
                chart: {
                  type: "area",
                  height: 180,
                  toolbar: { show: false },
                  zoom: { enabled: false },
                  foreColor: "#374151",
                  parentHeightOffset: 0,
                  offsetY: 0,
                  animations: { enabled: false },
                },
                dataLabels: { enabled: false },
                stroke: { 
                  curve: "smooth", 
                  width: 2, 
                  colors: ["#3b82f6"] 
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
                grid: {
                  borderColor: "#eef2f7",
                  strokeDashArray: 4,
                  padding: { top: 5, bottom: 0, left: 0, right: 0 },
                  yaxis: { 
                    lines: { 
                      show: true,
                      offsetX: -10
                    } 
                  },
                  xaxis: {
                    lines: { show: false }
                  },
                  padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                  }
                },
                markers: { 
                  size: 4, 
                  colors: ["#3b82f6"], 
                  strokeColors: "#fff", 
                  strokeWidth: 2, 
                  hover: { size: 6 } 
                },
                xaxis: {
                  categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                  labels: { 
                    style: { 
                      colors: "#6b7280", 
                      fontSize: "11px" 
                    } 
                  },
                  axisBorder: { show: false },
                  axisTicks: { show: false },
                },
                yaxis: {
                  labels: { 
                    style: { 
                      colors: "#6b7280", 
                      fontSize: "11px" 
                    },
                    offsetX: -5
                  },
                  tickAmount: 4,
                  floating: true,
                  axisTicks: { show: false },
                  axisBorder: { show: false },
                },
                tooltip: { 
                  theme: "light",
                  style: {
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                  }
                },
                legend: { show: false },
              }} 
              series={apexSeries} 
              type="area" 
              height={180}
            />
          </div>
        </div>

        {/* RIGHT SIDE SMALL KPI CARDS */}
        <div className="space-y-5">

          {/* New Orders */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-800">New Orders</h3>
              <select className="text-xs border rounded px-2 py-1 text-gray-600"><option>Monthly</option></select>
            </div>

            <div className="w-full mb-3">
              <ReactApexChart options={{ chart: { type: "bar", sparkline: { enabled: true } }, plotOptions: { bar: { columnWidth: "55%", borderRadius: 4 } }, colors: ["#3B82F6"], tooltip: { enabled: false } }} series={[{ data: [8,10,14,18,16,12,10,9,8,11,12,10] }]} type="bar" height={80} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">$30200</h4>
              <p className="text-xs flex justify-center items-center text-blue-500 font-semibold gap-1"><ArrowUpRight className="w-3 h-3" /> 30.6%</p>
            </div>

            <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-xs hover:bg-gray-50 transition">View more</button>
          </div>

          {/* New Users */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-800">New Users</h3>
              <select className="text-xs border rounded px-2 py-1 text-gray-600"><option>Monthly</option></select>
            </div>

            <div className="w-full mb-3">
              <ReactApexChart options={{ chart: { type: "line", sparkline: { enabled: true } }, stroke: { curve: "smooth", width: 2 }, colors: ["#10B981"], tooltip: { enabled: false } }} series={[{ data: [4,8,6,12,10,14,8,10] }]} type="line" height={80} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">$30200</h4>
              <p className="text-xs flex justify-center items-center text-green-500 font-semibold gap-1"><ArrowUpRight className="w-3 h-3" /> 30.6%</p>
            </div>

            <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-xs hover:bg-gray-50 transition">View more</button>
          </div>

          {/* Visitors */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-800">Visitors</h3>
              <select className="text-xs border rounded px-2 py-1 text-gray-600"><option>Monthly</option></select>
            </div>

            <div className="w-full mb-3">
              <ReactApexChart options={{ chart: { type: "bar", sparkline: { enabled: true } }, plotOptions: { bar: { columnWidth: "45%", borderRadius: 4 } }, colors: ["#F59E0B"], tooltip: { enabled: false } }} series={[{ data: [3,5,7,9,10,9,7,6,5,4,3] }]} type="bar" height={80} />
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">$30200</h4>
              <p className="text-xs flex justify-center items-center text-red-500 font-semibold gap-1">↓ 30.6%</p>
            </div>

            <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-xs hover:bg-gray-50 transition">View more</button>
          </div>

        </div>
      </div>

      {/* PROJECT OVERVIEW */}
      <div className="bg-white rounded-2xl border p-4 shadow-sm mt-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold">Project overview</div>
            <div className="text-xs text-gray-500">Total Tasks</div>
            <div className="text-lg font-bold">34,686</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-36"><ReactApexChart options={projectSpark("#60A5FA")} series={projectSeriesA} type="area" height={48} /></div>
            <div className="w-36"><ReactApexChart options={projectSpark("#F87171")} series={projectSeriesB} type="area" height={48} /></div>
            <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded inline-flex items-center gap-2"><Plus className="w-4 h-4" /> Add project</button>
          </div>
        </div>
      </div>

      {/* INCOME / DONUT / TOTAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-xs text-gray-500 mb-2">$30,200.00</div>
          <ReactApexChart options={incomeOptions} series={incomeSeries} type="bar" height={64} />
        </div>

        <div className="bg-white rounded-2xl border p-4 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">Total Earning</div>
            <div className="text-lg font-bold">$45,890</div>
          </div>
          <div className="w-28 h-28">
            <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={84} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-xs text-gray-500">Total Earning</div>
          <div className="text-lg font-bold">$45,890</div>
        </div>
      </div>

      {/* OVERVIEW + RIGHT KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold">Overview</div>
            <select className="text-xs border rounded px-2 py-1"><option>Monthly</option></select>
          </div>

          <ReactApexChart options={overviewOptions} series={overviewSeries} type="bar" height={220} />
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

      {/* OVERVIEW PRODUCT + TOTAL INCOME */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-sm font-semibold mb-2">Overview Product</div>
          <ReactApexChart options={pieOptions} series={pieSeries} type="pie" height={180} />
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-gray-50 rounded text-center">Apps<br />10+</div>
            <div className="p-2 bg-gray-50 rounded text-center">Other<br />5+</div>
            <div className="p-2 bg-gray-50 rounded text-center">Widgets<br />150+</div>
          </div>
          <div className="mt-3 flex gap-3">
            <button className="flex-1 text-xs px-4 py-2 border rounded">View All</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Create new Page</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-sm font-semibold mb-3">Total Income</div>
          <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={160} />
          <div className="mt-3 space-y-2 text-xs">
            <div className="bg-gray-50 p-2 rounded">
              Item01<br /><strong>$23,876</strong>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              Item02<br /><strong>$23,876</strong>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-xs text-gray-500">Total Earning</div>
          <div className="text-lg font-bold">$45,890</div>
        </div>
      </div>


      {/* LANGUAGES + MONTHLY REPORT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-sm font-semibold mb-2">Languages support</div>
          <ReactApexChart
            options={getSparklineOptions("#60A5FA")}
            series={[{ data: [3, 8, 6, 10, 7, 12, 9] }]}
            type="bar"
            height={60}
          />
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 border rounded text-xs">React</button>
            <button className="px-3 py-1 border rounded text-xs">Angular</button>
            <button className="px-3 py-1 border rounded text-xs">Bootstrap</button>
            <button className="px-3 py-1 border rounded text-xs">MUI</button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold">Monthly Report</div>
            <select className="text-xs border rounded px-2 py-1">
              <option>Monthly</option>
            </select>
          </div>

          <ReactApexChart options={stackedOptions} series={stackedSeries} type="bar" height={220} />
        </div>

      </div>

      {/* FINAL: SALES + ACQUISITION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

        <div className="lg:col-span-2 bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-sm text-gray-500 mb-2">Sales Report</div>
          <div className="text-2xl font-bold">$7,650</div>
          <ReactApexChart options={salesOptions} series={salesSeries} type="bar" height={260} />
        </div>

        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-sm font-semibold mb-2">Acquisition Channels</div>
          <ReactApexChart options={acqOptions} series={acqSeries} type="bar" height={160} />
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">Top Channels</div>
              <div className="text-sm font-semibold">+ $1,430</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">Top Pages</div>
              <div className="text-sm font-semibold">- $1,430</div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-10 text-xs text-gray-400">
        © Able Pro crafted with ♥ by Team Phoenixcoded
      </div>

    </div>
  );
}
