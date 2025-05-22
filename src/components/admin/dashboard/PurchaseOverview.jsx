import { Card, CardContent, CardHeader } from "@mui/material"


const PurchaseOverview = () => {
  // Mock data
  const purchaseData = [
    { x: 70, y: 70, id: 1, label: "Purchase order creation" },
    { x: 12, y: 50, id: 2, label: "PO approval pending" },
    { x: 50, y: 30, id: 3, label: "Purchase transit" },
    { x: 8, y: 15, id: 4, label: "Purchase order received" },
    { x: 20, y: 10, id: 5, label: "PO need to create" },
    { x: 20, y: 5, id: 6, label: "Required material count" },
  ]

  return (
      <div className="h-full overflow-hidden bg-white rounded-xl shadow-bg-shadow-4">
        <div className="h-[250px]">
          {/* <ScatterChart
            series={[
              {
                data: purchaseData.map((item) => ({ x: item.x, y: item.y, id: item.id })),
                label: "Purchase Items",
                valueFormatter: (value) => value,
              },
            ]}
            width={300}
            height={250}
            xAxis={[
              {
                min: 0,
                max: 80,
                tickMinStep: 20,
              },
            ]}
            yAxis={[
              {
                min: 0,
                max: 80,
                tickMinStep: 20,
              },
            ]}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          /> */}
        </div>
        {/* <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs mt-2">
          {purchaseData.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-1 opacity-70"></div>
              <span>
                {item.x} → {item.label}
              </span>
            </div>
          ))}
        </div> */}
      </div>


  )
}

export default PurchaseOverview
