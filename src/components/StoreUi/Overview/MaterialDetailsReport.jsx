"use client"

import { useState } from "react"
import {
  BarChart,
  axisClasses,
} from "@mui/x-charts"
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"

const yearlyMonthlyData = [
  {
    year: "2021",
    monthly: [
      { month: "JAN", value: 12000 },
      { month: "FEB", value: 13500 },
      { month: "MAR", value: 14200 },
      { month: "APR", value: 15800 },
      { month: "MAY", value: 16000 },
      { month: "JUN", value: 15500 },
      { month: "JUL", value: 16200 },
      { month: "AUG", value: 17000 },
      { month: "SEP", value: 16800 },
      { month: "OCT", value: 17500 },
      { month: "NOV", value: 16000 },
      { month: "DEC", value: 18000 },
    ],
  },
  {
    year: "2022",
    monthly: [
      { month: "JAN", value: 14000 },
      { month: "FEB", value: 15000 },
      { month: "MAR", value: 15500 },
      { month: "APR", value: 16500 },
      { month: "MAY", value: 17000 },
      { month: "JUN", value: 18000 },
      { month: "JUL", value: 18500 },
      { month: "AUG", value: 19000 },
      { month: "SEP", value: 18800 },
      { month: "OCT", value: 20000 },
      { month: "NOV", value: 19500 },
      { month: "DEC", value: 20500 },
    ],
  },
  {
    year: "2023",
    monthly: [
      { month: "JAN", value: 16000 },
      { month: "FEB", value: 16500 },
      { month: "MAR", value: 17200 },
      { month: "APR", value: 18000 },
      { month: "MAY", value: 18500 },
      { month: "JUN", value: 19000 },
      { month: "JUL", value: 19500 },
      { month: "AUG", value: 20000 },
      { month: "SEP", value: 20200 },
      { month: "OCT", value: 21000 },
      { month: "NOV", value: 21500 },
      { month: "DEC", value: 22000 },
    ],
  },
  {
    year: "2024",
    monthly: [
      { month: "JAN", value: 18000 },
      { month: "FEB", value: 18500 },
      { month: "MAR", value: 19200 },
      { month: "APR", value: 20000 },
      { month: "MAY", value: 20500 },
      { month: "JUN", value: 21000 },
      { month: "JUL", value: 21500 },
      { month: "AUG", value: 22000 },
      { month: "SEP", value: 22500 },
      { month: "OCT", value: 23000 },
      { month: "NOV", value: 23500 },
      { month: "DEC", value: 24000 },
    ],
  },
  {
    year: "2025",
    monthly: [
      { month: "JAN", value: 20000 },
      { month: "FEB", value: 21000 },
      { month: "MAR", value: 21500 },
      { month: "APR", value: 22000 },
      { month: "MAY", value: 22500 },
      { month: "JUN", value: 23000 },
      { month: "JUL", value: 24000 },
      { month: "AUG", value: 24500 },
      { month: "SEP", value: 25000 },
      { month: "OCT", value: 25500 },
      { month: "NOV", value: 26000 },
      { month: "DEC", value: 26500 },
    ],
  },
]

const MaterialDetailsReport = () => {
 const [selectedYear, setSelectedYear] = useState(
    yearlyMonthlyData[yearlyMonthlyData.length - 1].year
  )

  const selectedData = yearlyMonthlyData.find((d) => d.year === selectedYear)

  const months = selectedData?.monthly.map((m) => m.month) || []
  const values = selectedData?.monthly.map((m) => m.value) || []

  return (
    <div className="h-full flex flex-col bg-white rounded-xl  shadow-md border border-gray-200">
      <div className="flex items-center justify-between px-3 py-2 ">
        <h2 className="text-lg font-semibold text-gray-900">Material Details Report</h2>
        <FormControl 
            sx={{ 
                p:0,m:0,
                borderRadius:9
            }}
        size="small">
          <Select
            size="small"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            sx={{ 
                p:0,m:0,
                 '& .MuiSelect-select': {
                    p: '2px 8px', // shrink text padding inside the dropdown
                },
                '& .MuiSelect-icon': {
                    m: 0, // reduce space for dropdown arrow icon
                },
                // minWidth: 120 
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

      <BarChart
        margin={{ top: 0, right: 30, bottom: 5, left: 5 }} 
        xAxis={[   
          {
            id: "months",
            data: months,
            scaleType: "band",
            label: "Month",
          },
        ]}
         yAxis={[
            {
            id: 'material',
            label: 'Amount',
            width: 80, // Set desired Y-axis width here
            },
        ]}
        series={[
          {
            data: values,
            label: `Material Usage (${selectedYear})`,
            color: "#3B82F6", // Tailwind blue-500
          },
        ]}
        sx={{width:"100%",
            p:0,
            m:0,
            // bgcolor:"gray",
            maxHeight:"90%",
            flex:1
        }}
      />
    </div>
  )
}

export default MaterialDetailsReport
