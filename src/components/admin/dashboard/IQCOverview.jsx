"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { PieChart } from "@mui/x-charts/PieChart"

const IQCOverview = () => {
  const [timeFrame, setTimeFrame] = useState("month")

  // Mock data
  const data = [
    { id: 0, value: 40, label: "Inward", color: "#6366f1" },
    { id: 1, value: 35, label: "In progress", color: "#FFA55D" },
    { id: 2, value: 25, label: "outward", color: "#B0DB9C" },
  ]

  return (
   
      <div className="h-full bg-white flex flex-col justify-between p-4 rounded-xl shadow-bg-shadow-4">

          <div className=" flex justify-between items-center">
            <p className="font-medium">IQC Overview</p>
            
          <div className="flex gap-2">
                <FormControl size="small">
                  <Select
                    id="year-select"
                    value=""
                    displayEmpty
                    sx={{
                      borderRadius: '8px',
                      minHeight: '32px',
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
                      minHeight: '32px',
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
          <div className=" h-[85%] ">
            <PieChart
              sx={{
                height:"100%",
                width:"100%"
              }}
              series={[
                {
                  data,
                  innerRadius: 60,
                  outerRadius: 100,
                  paddingAngle: 1,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 270,
                  highlightScope: { fade: 'global', highlight: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  arcLabel:(item)=>`${item.value}`
                },
              ]}

              slotProps={{
                legend: {
                  direction:"horizontal",
                  position:{vertical:"top",horizontal:"center"},
                  hidden: true,
                },
              }}
            />
          </div>
      </div>


  )
}

export default IQCOverview
