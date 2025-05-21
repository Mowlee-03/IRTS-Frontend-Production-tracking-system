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
  const totalData = [60, 24, 26, 34, 34, 64, 66]
  const overdueData = [0, 5, 5, 12, 16, 22, 31]
  const nearDeadlineData = [0, 10, 12, 12, 7, 25, 19]
  const onScheduleData = [6, 9, 9, 10, 11, 14, 16]

  return (
    <Card className="h-full shadow-md">
      <CardHeader title="Overall Performance Status" className="pb-0" />
      <CardContent>
        <div className="flex items-center justify-end gap-4 mb-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span>Total</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            <span>Overdue order</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
            <span>Order near deadline</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span>Order on schedule</span>
          </div>
        </div>
        <div className="h-[350px]">
          <BarChart
            layout="horizontal"
            series={[
              { data: totalData, label: "Total", color: "#3b82f6", stack: "total" },
              { data: overdueData, label: "Overdue", color: "#ef4444", stack: "breakdown" },
              { data: nearDeadlineData, label: "Near Deadline", color: "#f97316", stack: "breakdown" },
              { data: onScheduleData, label: "On Schedule", color: "#22c55e", stack: "breakdown" },
            ]}
            yAxis={[{ data: departments, scaleType: "band" }]}
            height={350}
            margin={{ top: 10, bottom: 30, left: 80, right: 10 }}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default PerformanceStatus
