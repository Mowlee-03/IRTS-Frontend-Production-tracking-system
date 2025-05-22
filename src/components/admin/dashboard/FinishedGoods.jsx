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
    <div className="bg-white h-full rounded-xl shadow-bg-shadow-4 pt-4 pl-4 flex flex-col">
        <p className="font-medium ">Finished Goods</p>
        <div className=" flex justify-center flex-1">
          <PieChart
            series={[
              {
                arcLabel:(item)=>`${item.value}`,
                arcLabelMinAngle: 35,
                arcLabelRadius: '60%',
                data,
                innerRadius: 60,
                outerRadius: 100,
                paddingAngle: 1,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 270,
                cx: 100,
                cy: 125,
                
              },
            ]}
            width={220}
            height={250}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            sx={{
              "& .MuiChartsLegend-root": {
                m:0,
                width:"130px",
                bgcolor:"#7EFFF980",
                p:1,
                borderRadius:2
            },
            }}
          />
        </div>
    </div>

  )
}
 
export default FinishedGoods
