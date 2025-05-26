import { Card, CardContent, CardHeader } from "@mui/material"
import { BarChart } from "@mui/x-charts/BarChart"

const PerformanceStatus = () => {
  // Mock data
  const departments = [
    "INI KIT",
    "PO COM",
    "IQC COM",
    "KIT COM",
    "BOM COM",
    "PRD STRD",
    "PRODUCTION",
    "FG RECEIVED",
    "FG",
  ]
const totalData = [60, 24, 26, 34, 34, 64, 66, 30, 45]
const overdueData = [0, 5, 5, 12, 16, 22, 31, 3, 4]
const nearDeadlineData = [0, 10, 12, 12, 7, 25, 19, 4, 5]
const onScheduleData = [6, 9, 9, 10, 11, 14, 16, 5, 8]


  return (
        <div className="h-full p-4 flex flex-col rounded-xl bg-white shadow-bg-shadow-4">
          <p className="font-medium">Overall Performance Status</p>
          <div className="h-[95%]">
            <BarChart
            sx={{
              width:"100%",height:"100%",
              // bgcolor:"gray"
            }}
              layout="horizontal"
              series={[
                { data: totalData, label: "Total", color: "#3b82f6", stack: "total" },
                { data: overdueData, label: "Overdue", color: "#ef4444", stack: "breakdown" },
                { data: nearDeadlineData, label: "Near Deadline", color: "#f97316", stack: "breakdown" },
                { data: onScheduleData, label: "On Schedule", color: "#22c55e", stack: "breakdown" },
              ]}
               barLabel="value"
               
              yAxis={[{ 
                data: departments, 
                scaleType: "band", 
                width:100
              }]}
              margin={{ top: 10, bottom: 0, left: 0, right: 10 }}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
            />
          </div>
        </div>

  )
}

export default PerformanceStatus
