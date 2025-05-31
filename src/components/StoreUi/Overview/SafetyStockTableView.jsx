"use client"

import { useState } from "react"
import ReportIcon from '@mui/icons-material/Report';
const SafetyStockTable = () => {
  const [activeTab, setActiveTab] = useState("Runner")

  const tabs = [
    { name: "Runner", color: "text-red-600 border-red-600" },
    { name: "Repeater", color: "text-green-600 border-green-600" },
    { name: "Stranger", color: "text-blue-600 border-blue-600" },
  ]

  const tableData = [
    {
      materialName: "MCON&MS1 PLUS - 3CORE CABLE ASSEMBLY",
      orderQty: 200,
      issued: 200,
      inStock: 0,
      status: "Safe / Critical",
    },
    {
      materialName: "CT COIL ASSEMBLY-MCON",
      orderQty: 200,
      issued: 200,
      inStock: 0,
      status: "Safe / Critical",
    },

  ]

  return (
    <div className="bg-white overflow-hidden rounded-xl shadow-md border border-gray-200 h-full flex flex-col gap-2">
      
        <div className="h-[18%] bg-[#F5F5F5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-md font-semibold text-gray-900 pl-3">Safety Stock Table View</h2>
          <div className="flex border-b border-gray-200 mt-auto">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.name ? tab.color : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[12%] bg-[#FFF3CD] border-l-4 border-[#FFC107]  mx-3">
          <div className="flex items-center gap-2 h-full pl-3">
            <ReportIcon  sx={{color:"#FFC107"}}/>
            <span className="text-sm font-medium text-yellow-800">Highlight:</span>
            <span className="text-sm text-yellow-700">Always keep buffer stock</span>
          </div>
        </div>

        <div className="h-[70%] overflow-auto mx-3">
          <table className="w-full">
            <thead className="sticky top-0">
              <tr className="border-b border-[#F5F5F5] bg-gray-100">
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-900">Material Name</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-900">Order Qty</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-900">Issued</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-900">In Stock</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-900">Safety Stock Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-2 text-sm text-gray-900">{row.materialName}</td>
                  <td className="py-3 px-2 text-sm text-gray-900">{row.orderQty}</td>
                  <td className="py-3 px-2 text-sm text-gray-900">{row.issued}</td>
                  <td className="py-3 px-2 text-sm text-gray-900">{row.inStock}</td>
                  <td className="py-3 px-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
    </div>
  )
}

export default SafetyStockTable
