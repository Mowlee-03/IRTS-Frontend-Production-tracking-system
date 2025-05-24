"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import { BarChart } from "@mui/x-charts/BarChart"

const ProductionView = () => {  const [timeFrame, setTimeFrame] = useState("month")

  // Mock data
  const productionData = {
    awaiting: 160,
    inProgress: 120,
    completed: 40,
  }

  // Mock data for chart
  const chartData = {
    days: Array.from({ length: 25 }, (_, i) => `-${24 - i}`),
    overdue: [5, 8, 15, 12, 10, 8, 5, 4, 3, 2, 3, 5, 8, 10, 12, 10, 8, 5, 3, 5, 8, 10, 5, 3, 1],
    nearDeadline: [8, 10, 5, 3, 5, 8, 10, 5, 3, 1, 2, 3, 5, 8, 10, 5, 3, 1, 2, 3, 5, 8, 10, 5, 3],
    onSchedule: [10, 5, 3, 5, 8, 10, 5, 3, 1, 2, 3, 5, 8, 10, 5, 3, 1, 2, 3, 5, 8, 10, 5, 3, 1],
  }

  return (
        <div className="bg-white h-full rounded-xl shadow-bg-shadow-2 px-3 pt-1 2xl-plus:px-4 2xl-plus:pt-3">
          <p className=" flex items-center font-medium text-sm 2xl-plus:text-base">Production Overview</p>
          <div className="flex  gap-2 h-[15%] ">

            <div className="bg-blue-100 rounded-lg px-1 2xl-plus:px-2 pt-1 flex-1 flex text-center 2xl-plus:text-start flex-col items-center justify-between 2xl-plus:items-start">
              <div className="text-xs 2xl-plus:text-sm text-blue-800">Awaiting Production</div>
              <div className=" text-base 2xl-plus:text-lg font-bold text-blue-600">{productionData.awaiting}</div>
            </div>

            <div className="bg-green-100 rounded-lg px-1 2xl-plus:px-2 pt-1 flex-1 text-center 2xl-plus:text-start flex flex-col items-center justify-between 2xl-plus:items-start">
              <div className="text-xs 2xl-plus:text-sm text-green-800">In Progress</div>
              <div className="text-base 2xl-plus:text-lg font-bold text-green-600 text-">{productionData.inProgress}</div>
            </div>

            <div className="bg-yellow-100 rounded-lg  px-1 2xl-plus:px-2 pt-1 flex-1 text-center 2xl-plus:text-start flex flex-col items-center justify-between 2xl-plus:items-start ">
              <div className="text-[11px] 2xl-plus:text-xs  text-yellow-800">Completed Production</div>
              <div className="text-base 2xl-plus:text-lg font-bold text-yellow-600">{productionData.completed}</div>
            </div>

          </div>

          <div className="flex justify-between items-center py-2 2xl-plus:py-0 2xl-plus:h-[15%]">
            <div className="text-sm 2xl-plus:text-lg font-medium">Products Process</div>

           <div className="flex gap-2">
              <FormControl size="small">
                <Select
                  id="year-select"
                  value=""
                  displayEmpty
                  sx={{
                    borderRadius: '8px',
                    minHeight: {
                      xl:'20px',
                      '2xl':'32px'
                    },
                    fontSize: '0.75rem',
                    '.MuiSelect-select': {
                      padding: '4px 8px',
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Year
                  </MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small">
                <Select
                  id="month-select"
                  value=""
                  displayEmpty
                  sx={{
                    borderRadius: '8px',
                    minHeight: {
                      xl:'20px',
                      '2xl':'32px'
                    },
                    fontSize: '0.75rem',
                    '.MuiSelect-select': {
                      padding: '4px 8px',
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Month
                  </MenuItem>
                  <MenuItem value="december">December</MenuItem>
                  <MenuItem value="november">November</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="h-[60%] ">
            <BarChart
            
            sx={{
              width:"100%",
              height:"100%",
            }}
              series={[
                { data: chartData.overdue, label: "Overdue Order", stack: "total", color: "#ef4444" },
                { data: chartData.nearDeadline, label: "Orders Near Deadline", stack: "total", color: "#f97316" },
                { data: chartData.onSchedule, label: "Orders on Schedule", stack: "total", color: "#22c55e" },
              ]}
              xAxis={[{ data: chartData.days, scaleType: "band" }]}
              // height={180}
              margin={{ top: 0, bottom: 0, left: 0, right: 30 }}
            />
          </div>
        </div>


  )
}

export default ProductionView
