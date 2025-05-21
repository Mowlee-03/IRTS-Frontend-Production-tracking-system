"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import { BarChart } from "@mui/x-charts/BarChart"

const ProductionView = () => {
  const [timeFrame, setTimeFrame] = useState("month")

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
    <Card className="h-full shadow-md">
      <CardHeader title="Production Overview" className="pb-0" />
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-blue-100 rounded-lg p-3 flex-1">
            <div className="text-sm text-blue-800">Awaiting Production</div>
            <div className="text-2xl font-bold text-blue-600">{productionData.awaiting}</div>
          </div>
          <div className="bg-green-100 rounded-lg p-3 flex-1">
            <div className="text-sm text-green-800">In progress</div>
            <div className="text-2xl font-bold text-green-600">{productionData.inProgress}</div>
          </div>
          <div className="bg-yellow-100 rounded-lg p-3 flex-1">
            <div className="text-sm text-yellow-800">Completed production</div>
            <div className="text-2xl font-bold text-yellow-600">{productionData.completed}</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-medium">Products Process</div>
          <div className="flex gap-2">
            <FormControl size="small" className="min-w-[100px]">
              <InputLabel id="year-select-label">Year</InputLabel>
              <Select labelId="year-select-label" id="year-select" value="2023" label="Year">
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" className="min-w-[100px]">
              <InputLabel id="month-select-label">Month</InputLabel>
              <Select labelId="month-select-label" id="month-select" value="december" label="Month">
                <MenuItem value="december">December</MenuItem>
                <MenuItem value="november">November</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="h-[180px]">
          <BarChart
            series={[
              { data: chartData.overdue, label: "Overdue Order", stack: "total", color: "#ef4444" },
              { data: chartData.nearDeadline, label: "Orders Near Deadline", stack: "total", color: "#f97316" },
              { data: chartData.onSchedule, label: "Orders on Schedule", stack: "total", color: "#22c55e" },
            ]}
            xAxis={[{ data: chartData.days, scaleType: "band" }]}
            height={180}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          />
        </div>
        <div className="flex justify-between text-xs mt-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            <span>Overdue Order</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
            <span>Orders Near Deadline</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span>Orders on Schedule</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductionView
