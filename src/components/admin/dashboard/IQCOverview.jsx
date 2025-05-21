"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { PieChart } from "@mui/x-charts/PieChart"

const IQCOverview = () => {
  const [timeFrame, setTimeFrame] = useState("month")

  // Mock data
  const data = [
    { id: 0, value: 40, label: "Inward", color: "#6366f1" },
    { id: 1, value: 35, label: "In progress", color: "#ec4899" },
    { id: 2, value: 25, label: "outward", color: "#facc15" },
  ]

  return (
    <Card className="h-full shadow-md">
      <CardHeader
        title="IQC Overview"
        className="pb-0"
        action={
          <FormControl size="small" className="min-w-[100px]">
            <InputLabel id="month-select-label">Month</InputLabel>
            <Select
              labelId="month-select-label"
              id="month-select"
              value={timeFrame}
              label="Month"
              onChange={(e) => setTimeFrame(e.target.value)}
            >
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="quarter">Quarter</MenuItem>
              <MenuItem value="year">Year</MenuItem>
            </Select>
          </FormControl>
        }
      />
      <CardContent>
        <div className="h-[250px] relative">
          <PieChart
            series={[
              {
                data,
                innerRadius: 80,
                outerRadius: 120,
                paddingAngle: 1,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 270,
                cx: 150,
                cy: 125,
              },
            ]}
            width={300}
            height={250}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          />
          <div className="absolute top-[125px] left-[150px] transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-sm text-gray-500">50 in progress</div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center bg-indigo-100 px-2 py-1 rounded-md">
            <div className="w-3 h-3 bg-indigo-500 rounded-full mr-1"></div>
            <span className="text-xs">Inward Progress</span>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-md">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
            <span className="text-xs">In Outward Progress</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default IQCOverview
