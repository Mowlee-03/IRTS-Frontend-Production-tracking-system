import { useMediaQuery, useTheme } from "@mui/material"
import { PieChart } from "@mui/x-charts/PieChart"

const FinishedGoods = () => {
  
  const data = [
    { id: 0, value: 40, label: "Flow Meter", color: "#3b82f6" },
    { id: 1, value: 30, label: "Motor valve", color: "#22c55e" },
    { id: 2, value: 20, label: "Autodell", color: "#f97316" },
    { id: 3, value: 10, label: "GPS", color: "#ef4444" },
  ]

  
  const theme = useTheme()
  const isBelow2xl = useMediaQuery(theme.breakpoints.down('2xl'))

  // Adjust radii and position based on screen size
  const pieConfig = isBelow2xl
    ? { innerRadius: 80, outerRadius: 130, cx:210, cy:null }
    : { innerRadius: 60, outerRadius: 110, cx: 160, cy: 120 }

  return (
    <div className="relative bg-white h-full rounded-xl shadow-bg-shadow-4 pt-1 pl-3 pr-3 2xl-plus:pr-0 2xl-plus:pt-4 2xl-plus:pl-4 flex flex-col 2xl-plus:justify-between">
        <p className="font-medium text-sm 2xl-plus:text-base">Finished Goods</p>
        <div className="h-[90%] 2xl-plus:h-[80%] ">
          <PieChart
          
          hideLegend={isBelow2xl ? false : true }
          
          slotProps={{
            legend:{
              sx:{
                p:0.7,m:0,mb:1,
                bgcolor:"#7EFFF980",
                borderRadius:2,
              },
              direction:'vertical',
              position:{vertical:"top"}
            }
          }}
            series={[
              {
              arcLabel: (item) => `${item.value}`,
              arcLabelMinAngle: 35,
              arcLabelRadius: "60%",
              data,
              paddingAngle: 1,
              cornerRadius: 1,
              startAngle: -90,
              endAngle: 270,innerRadius: 60, outerRadius: 120,
              // ...pieConfig
              
            },
            ]}
            sx={{
              width:"100%",
              height:"100%",
            }}
          />
        </div>
        <div className="hidden 2xl-plus:block 2xl-plus:absolute right-3 bg-[#7EFFF980] p-1 rounded-lg ">
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
