import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CashflowChart = () => {
  const options = {
    chart: {
      type: 'area',
      height: 300,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#3B82F6'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px',
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
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px',
        },
        formatter: (value) => `$${value}k`,
      },
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value}K`,
      },
    },
  };

  const series = [
    {
      name: 'Cash Flow',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Cash Flow</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default CashflowChart;
