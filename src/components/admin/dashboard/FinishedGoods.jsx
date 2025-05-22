import { PieChart } from "@mui/x-charts/PieChart"

const FinishedGoods = () => {
  // Mock data
  const data = [
    { id: 0, value: 40, label: "Flow Meter", color: "#3b82f6" },
    { id: 1, value: 30, label: "Motor valve", color: "#22c55e" },
    { id: 2, value: 20, label: "Autodell", color: "#f97316" },
    { id: 3, value: 10, label: "GPS", color: "#ef4444" },
  ]

  return (
    <div className="relative bg-white h-full rounded-xl shadow-bg-shadow-4 pt-4 pl-4 flex flex-col justify-between">
        <p className="font-medium ">Finished Goods</p>
        <div className=" h-[80%]">
          <PieChart
          hideLegend
            series={[
              {
                arcLabel:(item)=>`${item.value}`,
                arcLabelMinAngle: 35,
                arcLabelRadius: '60%',
                data,
                innerRadius: 60,
                outerRadius: 110,
                paddingAngle: 1,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 270,
                cx:160,
                cy:120
              },
            ]}
            sx={{
              width:"100%",
              height:"100%",
            }}
          />
        </div>
        <div className="absolute right-3 bg-[#7EFFF980] p-1 rounded-lg ">
          {data.map((item) => (
            <div key={item.id} className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
    </div>

  )
}
 
export default FinishedGoods
