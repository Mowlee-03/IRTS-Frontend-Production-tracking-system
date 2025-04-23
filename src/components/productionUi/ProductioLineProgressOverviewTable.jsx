import React from "react"
import ArrowIcon from "../common/ArrowIconImage"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ProductionLineProgressOverviewTable = () => {


  const mockData = {
    totalOrders: {
      label: "Total Orders",
      color: "blue",
      type: "total",
      values: [28, 11, 8, 10, 1],
      className: "text-blue-600",
    },
    overdue: {
      label: "Overdue",
      color: "red",
      type: "overdue",
      values: [3, 1, 2, 0, 0],
      className: "text-red-500",
    },
    nearDeadline: {
      label: "Near Deadline",
      color: "orange",
      type: "deadline",
      values: [8, 0, 2, 5, 1],
      className: "text-amber-500",
    },
    onSchedule: {
      label: "On Schedule",
      color: "green",
      type: "onschedule",
      values: [17, 10, 3, 4, 0],
      className: "text-green-500",
    },
  }

  const lines = ["Total Orders", "Line 1", "Line 2", "Line 3", "Line 4"]
 
  return (
    <div className="flex-1 overflow-x-auto shadow-bg-shadow-1 rounded-xl bg-white">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pl-8 pt-8 pb-8 x">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <div className="p-4  rounded-lg bg-[#F0F3FF] flex items-center justify-center text-[#4F46E5]">
           <AccessTimeIcon/>
          </div>
          <span className="text-lg">In Progress Production Lines</span>
        </div>
      </div>
      <div className="md:pl-14 pr-4">
      <table className="w-full min-w-[600px] ">
        <thead>
          <tr>
            <th className="p-3 text-left text-gray-500 font-medium">Production Line</th>
            {lines.map((line, index) => (
              <th key={index} className="p-3 text-center text-gray-500 font-medium">
                {line}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(mockData).map(([key, row]) => (
            <tr key={key} className="border-t border-gray-200">
              <td className={`p-3 py-6 ${row.className} font-medium`}>{row.label}</td>
              {row.values.map((value, index) => (
                <td key={index} className="p-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className={`font-medium min-w-7 min-h-7 flex items-center justify-center rounded-full ${row.className} ${
                            row.color === "red" ? "bg-red-100" : row.color === "orange" ? "bg-orange-100" : row.color==="green" ? "bg-green-100":row.color==="blue"? "bg-blue-100":"bg-slate-100"
                    }`}>{value}</span>
                    <ArrowIcon type={row.type} color={row.color} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default ProductionLineProgressOverviewTable;
