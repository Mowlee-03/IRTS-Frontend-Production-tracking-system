import React from "react"
import ArrowIcon from "../common/ArrowIconImage"
import StatusBadge from "../common/StatusBadge"


const ProductionDeliveryStatusList= () => {
    const mockData = [
        {
          type: "overdue",
          category: "Overdue Orders",
          totalOrders: 9,
          materialReady: 5,
          materialNotReady: 4,
          inProgress: 3,
          notStarted: 2,
          status: "Critical",
        },
        {
          type: "deadline",
          category: "Near Deadline",
          totalOrders: 11,
          materialReady: 9,
          materialNotReady: 2,
          inProgress: 8,
          notStarted: 1,
          status: "Warning",
        },
        {
          type: "onschedule",
          category: "On Schedule",
          totalOrders: 30,
          materialReady: 20,
          materialNotReady: 10,
          inProgress: 17,
          notStarted: 3,
          status: "On Track",
        },
      ]
      
  return (
    <div className="overflow-x-auto px-4 lg:px-8 py-7">
      <table className="w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="text-gray-600 text-left">
            <th className="py-3 px-4 font-medium">Category</th>
            <th className="py-3 pr-8 font-medium">Total Orders</th>
            <th className="py-3 pr-8 font-medium">Material Ready</th>
            <th className="py-3 pr-8 font-medium">Material Not Ready</th>
            <th className="py-3 pr-8 font-medium">In Progress</th>
            <th className="py-3 px-4 font-medium">Not Started</th>
            <th className="py-3 px-4 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row, index) => (
            <tr
              key={index}
              
            >
              <td className={`py-6 px-6 flex items-center gap-2 border-2 rounded-l-xl border-r-0
                ${
                  row.type === "overdue" ? "border-red-500" : row.type === "deadline" ? "border-yellow-500" : "border-green-500"
                }
                `}>
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    row.type === "overdue" ? "bg-red-500" : row.type === "deadline" ? "bg-yellow-500" : "bg-green-500"
                  }`}
                ></span>
                <span>{row.category}</span>
              </td>
              <td className={`py-4 px-4 border-y-[2px]
                ${
                  row.type === "overdue" ? "border-red-500" : row.type === "deadline" ? "border-yellow-500" : "border-green-500"
                }
                `}>
                <div className="flex items-center justify-center gap-2 border-r-2">
                  {row.totalOrders}
                  <ArrowIcon type={row.type} />
                </div>
              </td>
              <td className={`py-4 px-4 border-y-[2px]
                ${
                  row.type === "overdue" ? "border-red-500" : row.type === "deadline" ? "border-yellow-500" : "border-green-500"
                }
                `}>
                <div className="flex items-center justify-center gap-2 border-r-2">
                  {row.materialReady}
                  <ArrowIcon type={row.type} />
                </div>
              </td>
              <td className={`py-4 px-4 border-y-[2px]
                ${
                  row.type === "overdue" ? "border-red-500" : row.type === "deadline" ? "border-yellow-500" : "border-green-500"
                }
                `}>
                <div className="flex items-center justify-center gap-2 border-r-2">
                  {row.materialNotReady}
                  <ArrowIcon type={row.type} />
                </div>
              </td>
              <td className={`py-4 px-4 border-y-[2px]
                ${
                  row.type === "overdue" ? "border-red-500" : row.type === "deadline" ? "border-yellow-500" : "border-green-500"
                }
                `}>
                <div className="flex items-center justify-center gap-2 border-r-2">
                  {row.inProgress}
                  <ArrowIcon type={row.type} />
                </div>
              </td>
              <td className={`py-4 px-4 border-y-[2px]
                ${
                  row.type === "overdue" ? "border-red-500" : row.type === "deadline" ? "border-yellow-500" : "border-green-500"
                }
                `}>
                <div className="flex items-center justify-center gap-2 border-r-2">
                  {row.notStarted}
                  <ArrowIcon type={row.type} />
                </div>
              </td>
              <td className={`py-4 px-4 border-2 rounded-r-xl border-l-0
                ${
                  row.type === "overdue" ? "border-red-500" : row.type === "deadline" ? "border-yellow-500" : "border-green-500"
                }
                `}>
                <StatusBadge type={row.type} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}





export default ProductionDeliveryStatusList
