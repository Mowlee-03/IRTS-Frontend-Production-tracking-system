import { Card, CardContent, CardHeader } from "@mui/material"
import { PieChart } from "@mui/x-charts/PieChart"

const FinishedGoods = () => {
  // Mock data
  const data = [
    { id: 0, value: 40, label: "Flow Meter", color: "#3b82f6" },
    { id: 1, value: 30, value: 30, label: "Motor valve", color: "#22c55e" },
    { id: 2, value: 20, label: "Autodell", color: "#f97316" },
    { id: 3, value: 10, label: "GPS", color: "#ef4444" },
  ]

  return (
    <Card className="h-full shadow-md">
      <CardHeader title="Finished goods" className="pb-0" />
      <CardContent>
        <div className="h-[250px] flex justify-center">
          <PieChart
            series={[
              {
                data,
                innerRadius: 60,
                outerRadius: 100,
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
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {data.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
              <span>{item.label}</span>
            </div>
          ))}
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
            <span>SMC</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
            <span>Other</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FinishedGoods
