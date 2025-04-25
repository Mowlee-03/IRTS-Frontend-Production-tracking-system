import { BarChart } from '@mui/x-charts/BarChart'
import React, { useState } from "react"
const AssignedLineChart = () => {
    const [activeTab, setActiveTab] = useState("In Progress")
    const data = {
        "In Progress": [
          { line: "Line 1", value: 11 },
          { line: "Line 2", value: 8 },
          { line: "Line 3", value: 10 },
          { line: "Line 4", value: 1 },
        ],
        "Not Started": [
          { line: "Line 1", value: 5 },
          { line: "Line 2", value: 3 },
          { line: "Line 3", value: 6 },
          { line: "Line 4", value: 2 },
        ],
      }
    
      const chartData = data[activeTab]
      const yLabels = chartData.map(item => item.line)
      const xValues = chartData.map(item => item.value)
  return (
    <div className="w-full flex flex-col gap-2 items-end lg:w-[500px] border-blue-100 px-6 py-3 shadow-bg-shadow-1 rounded-xl bg-white">
      
      <div className="flex bg-[#F5F6F8] p-2 rounded-md">
        <button
          className={`px-4 py-1 text-sm text-black rounded-md ${activeTab === "In Progress" ? "bg-[#FFFFFF] " : "text-gray-500"}`}
          onClick={() => setActiveTab("In Progress")}
        >
          In Progress
        </button>
        <button
          className={`px-4 py-1 text-sm text-black rounded-md ${activeTab === "Not Started" ?"bg-[#FFFFFF] " : "text-gray-500"}`}
          onClick={() => setActiveTab("Not Started")}
        >
          Not Started
        </button>
      </div>

        <div className="w-full bg-[#F8FAFC] rounded-xl shadow-bg-shadow-3 ">
          <h3 className="text-gray-700 font-medium mb-1 mt-3 ml-3">
            Assigned Line ({activeTab.toLowerCase()})
          </h3>

          <BarChart
            layout="horizontal"
            xAxis={[{ label: 'Assigned Value', min: 0 }]}
            yAxis={[{ scaleType: 'band', data: yLabels }]}
            series={[{ data: xValues, color: "#3B82F6" }]}
            height={300}
            
          />
        </div>
      
    </div>
  )
}

export default AssignedLineChart;