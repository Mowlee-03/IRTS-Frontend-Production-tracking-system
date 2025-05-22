import { Card, CardContent, CardHeader } from "@mui/material"
import { PieChart } from "@mui/x-charts/PieChart"

const StorePerformance = () => {
  // Mock data
  const data = [
    { id: 0, value: 120, label: "Total Bom", color: "#3b82f6" },
    { id: 1, value: 100, label: "Bom Out", color: "#6366f1" },
    { id: 2, value: 80, label: "Partial Bom out", color: "#22c55e" },
    { id: 3, value: 60, label: "Out store", color: "#f97316" },
    { id: 4, value: 10, label: "Progress", color: "#facc15" },
    { id: 5, value: 70, label: "Required count", color: "#ef4444" },
  ]

  return (
        <div className="h-full flex flex-col justify-between p-4 bg-white rounded-xl shadow-bg-shadow-4"> 
          <div className="flex items-center">
            <p className="font-medium"> Store Performance</p>
          </div>
          <div className="h-[150px] w-full">
            <PieChart
              series={[
                {
                  data: data.map((item) => ({ ...item, value: item.value / 5 })),
                  innerRadius: 80,
                  outerRadius: 120,
                  paddingAngle: 1,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 90,
                  cx: 130,
                  cy: 125,
                },
              ]}
              hideLegend
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mt-4">
            {data.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
                <span>
                  {item.label} ({item.value})
                </span>
              </div>
            ))}
          </div>
        </div>

  )
}

export default StorePerformance
