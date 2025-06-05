import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line } from 'react-chartjs-2';
import { FormControl, MenuItem, Select } from '@mui/material';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const yearlyMonthlyData = [
  {
    year: "2025",
    monthly: [
      { month: "JAN", products: 120, value: 10000 },
      { month: "FEB", products: 150, value: 15000 },
      { month: "MAR", products: 80, value: 20000 },
      { month: "APR", products: 60, value: 25000 },
      { month: "MAY", products: 80, value: 30000 },
      { month: "JUN", products: 150, value: 35000 },
      { month: "JUL", products: 120, value: 40000 },
      { month: "AUG", products: 190, value: 45000 },
      { month: "SEP", products: 200, value: 30000 },
      { month: "OCT", products: 120, value: 25000 },
      { month: "NOV", products: 400, value: 20000 },
      { month: "DEC", products: 220, value: 15500 },
    ],
  },
  {
    year: "2024",
    monthly: [
      { month: "JAN", products: 120, value: 1000 },
      { month: "FEB", products: 150, value: 15000 },
      { month: "MAR", products: 80, value: 2000 },
      { month: "APR", products: 60, value: 5000 },
      { month: "MAY", products: 80, value: 30000 },
      { month: "JUN", products: 150, value: 3500 },
      { month: "JUL", products: 120, value: 40000 },
      { month: "AUG", products: 190, value: 45000 },
      { month: "SEP", products: 200, value: 30000 },
      { month: "OCT", products: 120, value: 2500 },
      { month: "NOV", products: 400, value: 2000 },
      { month: "DEC", products: 220, value: 1550 },
    ],
  },
];

const MonthlyDeliveryStatusFG = () => {
  const [selectedYear, setSelectedYear] = useState(
    yearlyMonthlyData[yearlyMonthlyData.length - 1].year
  );

  const selectedData = yearlyMonthlyData.find((d) => d.year === selectedYear);
  const months = selectedData?.monthly.map((m) => m.month) || [];
  const values = selectedData?.monthly.map((m) => m.value) || [];
  const products = selectedData?.monthly.map((m) => m.products) || [];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Value',
        data: values,
        borderColor: '#d9534f',
        backgroundColor: '#d9534f',
        pointRadius: 5,
        pointHoverRadius: 6,
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (ctx) {
            return `₹${ctx.raw} (Products: ${products[ctx.dataIndex]})`;
          }
        }
      },
      datalabels: {
        color: '#9CA3AF',
        align: 'end',
        anchor: 'end',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: function (value, context) {
          return products[context.dataIndex]; // products count above point
        }
      }
    },
    scales: {
    x: {
        // grid: {
        // display: false,
        // },
        ticks: {
        color: '#6B7280',
        },
    },
    y: {
        beginAtZero: true,
        // grid: {
        // display: false,
        // },
        ticks: {
        callback: (value) => `₹${value}`,
        color: '#6B7280',
        },
        suggestedMax: Math.max(...values) * 1.2, // add 20% headroom for labels
    },
    }

  };

  return (
    <div className="h-full flex flex-col bg-white rounded-xl shadow-md border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-900">Material Details Report</h2>
        <FormControl size="small" sx={{ p: 0, m: 0 }}>
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            sx={{
              p: 0, m: 0,
              '& .MuiSelect-select': { p: '2px 8px' },
              '& .MuiSelect-icon': { m: 0 },
            }}
          >
            {yearlyMonthlyData.map((yearData) => (
              <MenuItem key={yearData.year} value={yearData.year}>
                {yearData.year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className='w-full h-[80%]'>
        <Line data={data} options={options}  />
      </div>
      
    </div>
  );
};

export default MonthlyDeliveryStatusFG;
