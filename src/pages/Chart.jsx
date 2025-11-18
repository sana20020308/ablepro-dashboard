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

/* -----------------------------
   DATA & CHART OPTIONS
-----------------------------*/
const cards = [
  { title: "All Earnings", value: "$30,200", color: "#3b82f6", icon: <Wallet />, data: [10, 20, 15, 18, 22, 19] },
  { title: "Page Views", value: "290+", color: "#f59e0b", icon: <Eye />, data: [5, 10, 6, 12, 9, 14] },
  { title: "Total Task", value: "14,568", color: "#10b981", icon: <CalendarDays />, data: [8, 6, 9, 12, 11, 13] },
  { title: "Download", value: "$30,200", color: "#ef4444", icon: <Download />, data: [7, 9, 11, 13, 12, 15] },
];

const sparkOptions = (color) => ({
  chart: { type: "bar", sparkline: { enabled: true } },
  plotOptions: { bar: { borderRadius: 3, columnWidth: "55%" } },
  dataLabels: { enabled: false },
  colors: [color],
  tooltip: { enabled: false },
});

const repeatOptions = {
  chart: { type: "area", toolbar: { show: false }, zoom: { enabled: false }, foreColor: "#374151" },
  stroke: { curve: "smooth", width: 2, colors: ["#3b82f6"] },
  fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.28, opacityTo: 0.04, stops: [0, 90, 100] } },
  markers: { size: 4, colors: ["#3b82f6"], strokeColors: "#fff", strokeWidth: 2, hover: { size: 6 } },
  xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], labels: { style: { colors: "#6b7280", fontSize: "11px" } } },
  yaxis: { labels: { style: { colors: "#6b7280", fontSize: "11px" } }, tickAmount: 4 },
  grid: { borderColor: "#eef2f7", strokeDashArray: 4 },
  dataLabels: { enabled: false },
  legend: { show: false },
  tooltip: { theme: "light" },
};
const repeatSeries = [{ name: "Repeat Customers", data: [30,60,45,70,50,90,50,55,48,60,57,65] }];

const projectSpark = (color) => ({
  chart: { type: "area", sparkline: { enabled: true } },
  stroke: { curve: "smooth", width: 2 },
  fill: { opacity: 0.15 },
  colors: [color],
  tooltip: { enabled: false },
});
const projectSeriesA = [{ data: [10, 15, 13, 18, 16] }];
const projectSeriesB = [{ data: [3, 6, 5, 7, 6] }];

const incomeOptions = {
  chart: { type: "bar", sparkline: { enabled: true } },
  plotOptions: { bar: { borderRadius: 6, columnWidth: "60%" } },
  dataLabels: { enabled: false },
  colors: ["#34D399"],
  tooltip: { enabled: false },
};
const incomeSeries = [{ data: [5, 7, 4, 8, 6, 9] }];

const donutOptions = {
  chart: { type: "donut", sparkline: { enabled: true } },
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
  plotOptions: { pie: { donut: { size: "70%" } } },
  legend: { show: false },
  dataLabels: { enabled: false },
};

const pieOptions = {
  chart: { type: "pie" },
  labels: ["Apps", "Widgets", "Forms", "Other"],
  colors: ["#3B82F6", "#93C5FD", "#6B7280", "#111827"],
  legend: { show: false },
  dataLabels: { enabled: false },
};
const pieSeries = [40, 20, 15, 25];

const stackedOptions = {
  chart: { type: "bar", stacked: true },
  plotOptions: { bar: { columnWidth: "40%" } },
  xaxis: { categories: ["1","2","3","4","5","6","7","8","9","10","11","12"], labels: { style: { colors: "#9CA3AF" } } },
  colors: ["#3B82F6", "#FDE68A", "#93C5FD"],
};
const stackedSeries = [
  { name: "A", data: [6,8,10,9,12,11,8,9,10,11,9,7] },
  { name: "B", data: [4,6,5,7,6,5,6,5,4,6,5,4] },
];

const overviewOptions = {
  chart: { type: "bar" },
  plotOptions: { bar: { columnWidth: "55%", borderRadius: 4 } },
  xaxis: { categories: ["Feb","Mar","Apr","May","Jun","Jul","Aug"], labels: { style: { colors: "#9CA3AF" } } },
  dataLabels: { enabled: false },
  grid: { borderColor: "#E5E7EB" },
};
const overviewSeries = [{ data: [70, 82, 100, 95, 80, 102, 88] }];

const salesOptions = {
  chart: { type: "bar" },
  plotOptions: { bar: { columnWidth: "40%" } },
  xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun"] },
  colors: ["#F59E0B", "#3B82F6"],
};
const salesSeries = [
  { name: "Net Profit", data: [40,80,70,100,90,120] },
  { name: "Revenue", data: [60,50,90,80,110,100] },
];

const acqOptions = {
  chart: { type: "bar", stacked: true },
  plotOptions: { bar: { columnWidth: "40%" } },
  colors: ["#111827", "#93C5FD", "#BFDBFE"],
  xaxis: { labels: { show: false } },
  grid: { show: false },
};
const acqSeries = [
  { name: "Direct", data: [30,28,26,24,22,20,18,16,14,12] },
  { name: "Referral", data: [10,12,11,9,8,7,6,5,4,3] },
];

/* -----------------------------
   FINAL COMPONENT
-----------------------------*/
export default function ChartPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Chart</h1>

      {/* ROW 1 — KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-white rounded-[20px] border border-gray-100 shadow p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${card.color}20`, color: card.color }}
                >
                  {React.cloneElement(card.icon, { className: "w-5 h-5" })}
                </div>
                <div className="font-semibold text-sm">{card.title}</div>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>

            <div className="bg-gray-50 rounded-xl mt-5 p-4">
              <div className="grid grid-cols-12 items-center gap-4">
                <div className="col-span-7">
                  <ReactApexChart options={sparkOptions(card.color)} series={[{ data: card.data }]} type="bar" height={56} />
                </div>
                <div className="col-span-5 text-right">
                  <div className="font-bold text-lg">{card.value}</div>
                  <div className="text-sm font-medium flex items-center justify-end gap-1" style={{ color: card.color }}>
                    <ArrowUpRight className="w-4 h-4" /> 30.6%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ROWS 2-4 combined: left big block (9) + right sidebar (3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT: combined stack (9 cols) */}
        <div className="lg:col-span-9 space-y-6">

          {/* ROW 2: Repeat customer rate */}
          <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Repeat customer rate</h3>
              <div className="flex items-center gap-3">
                <div className="text-lg font-bold">5.44%</div>
                <div className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs font-semibold">+2.6%</div>
                <MoreVertical className="w-5 h-5 text-gray-300" />
              </div>
            </div>
            <ReactApexChart options={repeatOptions} series={repeatSeries} type="area" height={300} />
          </div>

          {/* ROW 3: Project overview */}
          <div className="bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-sm">Project overview</div>
                <div className="text-gray-500 text-xs">Total Tasks</div>
                <div className="font-bold text-lg">34,686</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-40">
                  <ReactApexChart options={projectSpark("#60A5FA")} series={projectSeriesA} type="area" height={48} />
                </div>
                <div className="w-40">
                  <ReactApexChart options={projectSpark("#F87171")} series={projectSeriesB} type="area" height={48} />
                </div>

                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add project
                </button>
              </div>
            </div>
          </div>

          {/* ROW 4 — Income + Two Donut Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Income Card */}
            <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2 .9 2 2-.9 2-2 2m0-8V4m0 16v-4" />
                  </svg>
                </div>

                <div>
                  <div className="text-xl font-semibold">$30,200.00</div>
                  <div className="text-gray-500 text-sm">Income</div>
                </div>
              </div>

              <ReactApexChart options={incomeOptions} series={incomeSeries} type="bar" height={120} />
            </div>

            {/* Blue Donut */}
            <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-sm flex items-center gap-6">
              <div className="w-32 h-32">
                <ReactApexChart
                  options={{
                    chart: { type: "radialBar", sparkline: { enabled: true } },
                    plotOptions: {
                      radialBar: {
                        hollow: { size: "60%" },
                        track: { background: "#eef2ff" },
                        dataLabels: { show: false },
                        stroke: { lineCap: "round" },
                      },
                    },
                    colors: ["#3b82f6"],
                  }}
                  series={[30]}
                  type="radialBar"
                  height={130}
                />
              </div>

              <div>
                <div className="text-sm text-gray-500">Total Earning</div>
                <div className="text-xl font-bold">$45,890</div>
              </div>
            </div>

            {/* Red Donut */}
            <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-sm flex items-center gap-6">
              <div className="w-32 h-32">
                <ReactApexChart
                  options={{
                    chart: { type: "radialBar", sparkline: { enabled: true } },
                    plotOptions: {
                      radialBar: {
                        hollow: { size: "60%" },
                        track: { background: "#fee2e2" },
                        dataLabels: { show: false },
                        stroke: { lineCap: "round" },
                      },
                    },
                    colors: ["#ef4444"],
                  }}
                  series={[30]}
                  type="radialBar"
                  height={130}
                />
              </div>

              <div>
                <div className="text-sm text-gray-500">Total Earning</div>
                <div className="text-xl font-bold">$45,890</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Sidebar (3 cols) — ONLY these THREE compact widgets */}
        <aside className="lg:col-span-3 space-y-6">
          {/* New Orders */}
          <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-sm">New Orders</div>
              <span className="text-xs text-gray-400">Monthly</span>
            </div>
            <ReactApexChart
              options={{
                chart: { type: "bar", sparkline: { enabled: true } },
                plotOptions: { bar: { columnWidth: "55%", borderRadius: 6 } },
                colors: ["#3b82f6"],
                tooltip: { enabled: false },
              }}
              series={[{ data: [8,10,14,18,16,12] }]}
              type="bar"
              height={84}
            />
            <div className="mt-3 text-center">
              <div className="text-sm font-bold">$30,200</div>
              <div className="text-xs text-green-500">▲ 30.6%</div>
            </div>
            <div className="mt-4 text-center">
              <button className="px-3 py-2 border rounded-lg text-sm w-full">View more</button>
            </div>
          </div>

          {/* New Users */}
          <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-sm">New Users</div>
              <span className="text-xs text-gray-400">Monthly</span>
            </div>
            <ReactApexChart
              options={{
                chart: { type: "line", sparkline: { enabled: true } },
                stroke: { curve: "smooth", width: 2 },
                colors: ["#10b981"],
                tooltip: { enabled: false },
              }}
              series={[{ data: [4,8,6,12,10,14] }]}
              type="line"
              height={84}
            />
            <div className="mt-3 text-center">
              <div className="text-sm font-bold">$30,200</div>
              <div className="text-xs text-green-500">▲ 30.6%</div>
            </div>
            <div className="mt-4 text-center">
              <button className="px-3 py-2 border rounded-lg text-sm w-full">View more</button>
            </div>
          </div>

          {/* Visitors */}
          <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold text-sm">Visitors</div>
              <span className="text-xs text-gray-400">Monthly</span>
            </div>
            <ReactApexChart
              options={{
                chart: { type: "bar", sparkline: { enabled: true } },
                plotOptions: { bar: { columnWidth: "45%", borderRadius: 6 } },
                colors: ["#f59e0b"],
                tooltip: { enabled: false },
              }}
              series={[{ data: [3,5,7,9,10,9] }]}
              type="bar"
              height={84}
            />
            <div className="mt-3 text-center">
              <div className="text-sm font-bold">$30,200</div>
              <div className="text-xs text-red-500">▼ 30.6%</div>
            </div>
            <div className="mt-4 text-center">
              <button className="px-3 py-2 border rounded-lg text-sm w-full">View more</button>
            </div>
          </div>
        </aside>
      </div>

      {/* ROW 5 — Overview bar chart with 4 mini KPIs on the right (full width) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-9 bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-6">
              <nav className="flex gap-4 text-sm">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-2">Overview</button>
                <button className="text-gray-600">Marketing</button>
                <button className="text-gray-600">Project</button>
                <button className="text-gray-600">Order</button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <select className="border rounded px-3 py-1 text-sm">
                <option>Monthly</option>
              </select>
              <button className="p-2 border rounded" aria-label="export"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              <button className="p-2 border rounded" aria-label="toggle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              <button className="p-2 border rounded" aria-label="more">•••</button>
            </div>
          </div>

          <ReactApexChart options={overviewOptions} series={overviewSeries} type="bar" height={260} />
        </div>

        {/* mini KPI list for the overview row */}
        <div className="lg:col-span-3 bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gray-100"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/></svg></div>
              <div>
                <div className="text-xs text-gray-500">Total Sales</div>
                <div className="font-bold">1,800</div>
              </div>
            </div>
            <div className="text-red-500">-245</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gray-100"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/></svg></div>
              <div>
                <div className="text-xs text-gray-500">Revenue</div>
                <div className="font-bold">$5,667</div>
              </div>
            </div>
            <div className="text-green-500">+ $2100</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gray-100"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/></svg></div>
              <div>
                <div className="text-xs text-gray-500">Abandon Cart</div>
                <div className="font-bold">128</div>
              </div>
            </div>
            <div className="text-orange-500">-26</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gray-100"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/></svg></div>
              <div>
                <div className="text-xs text-gray-500">Ads Spent</div>
                <div className="font-bold">$2,500</div>
              </div>
            </div>
            <div className="text-green-500">+10.6%</div>
          </div>
        </div>
      </div>

      {/* ROW 6 — Pie + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-6 bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm">
          <div className="font-semibold text-sm mb-3">Overview Product</div>
          <ReactApexChart options={pieOptions} series={pieSeries} type="pie" height={220} />
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-gray-50 p-3 rounded text-center text-xs">Apps<br/><span className="font-bold">10+</span></div>
            <div className="bg-gray-50 p-3 rounded text-center text-xs">Other<br/><span className="font-bold">5+</span></div>
            <div className="bg-gray-50 p-3 rounded text-center text-xs">Widgets<br/><span className="font-bold">150+</span></div>
            <div className="bg-gray-50 p-3 rounded text-center text-xs">Forms<br/><span className="font-bold">50+</span></div>
            <div className="bg-gray-50 p-3 rounded text-center text-xs">Components<br/><span className="font-bold">200+</span></div>
            <div className="bg-gray-50 p-3 rounded text-center text-xs">Pages<br/><span className="font-bold">150+</span></div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm">
          <div className="font-semibold text-sm mb-3">Total Income</div>
          <ReactApexChart options={donutOptions} series={[20,40,30,10]} type="donut" height={220} />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-50 p-3 rounded text-sm">$23,876 <div className="text-xs text-green-500">+ $763.43</div></div>
            <div className="bg-gray-50 p-3 rounded text-sm">$23,876 <div className="text-xs text-green-500">+ $763.43</div></div>
            <div className="bg-gray-50 p-3 rounded text-sm">$23,876 <div className="text-xs text-green-500">+ $763.43</div></div>
            <div className="bg-gray-50 p-3 rounded text-sm">$23,876 <div className="text-xs text-green-500">+ $763.43</div></div>
          </div>
        </div>
      </div>

      {/* ROW 7 — Languages support + Monthly stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-4 bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm">
          <div className="font-semibold text-sm mb-2">Languages support</div>
          <ReactApexChart options={sparkOptions("#3b82f6")} series={[{ data: [3,8,6,10] }]} type="bar" height={80} />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="px-3 py-2 border rounded-lg text-sm">React</button>
            <button className="px-3 py-2 border rounded-lg text-sm">Angular</button>
            <button className="px-3 py-2 border rounded-lg text-sm">Bootstrap</button>
            <button className="px-3 py-2 border rounded-lg text-sm">MUI</button>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm">
          <div className="font-semibold text-sm mb-2">Monthly Report</div>
          <ReactApexChart options={stackedOptions} series={stackedSeries} type="bar" height={260} />
        </div>
      </div>

      {/* ROW 8 — Sales + Acquisition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        <div className="lg:col-span-8 bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
          <div className="font-semibold text-sm mb-2">Sales Report</div>
          <div className="text-xs text-gray-500 mb-4">This Week Statistics</div>
          <div className="text-2xl font-bold mb-4">$7,650</div>
          <ReactApexChart options={salesOptions} series={salesSeries} type="bar" height={300} />
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">Acquisition Channels</div>
              <div className="text-xs text-gray-500">Marketing</div>
            </div>
            <div className="text-blue-500 text-lg">-128</div>
          </div>

          <ReactApexChart options={acqOptions} series={acqSeries} type="bar" height={220} />

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm">Top Channels <div className="text-xs text-gray-400">Today, 2:00 AM</div></div>
              <div className="text-green-500">+ $1,430</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">Top Pages <div className="text-xs text-gray-400">Today 6:00 AM</div></div>
              <div className="text-red-500">- $1,430</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © Able Pro crafted with ♥ by Team Phoenixcoded
      </div>
    </div>
  );
}
