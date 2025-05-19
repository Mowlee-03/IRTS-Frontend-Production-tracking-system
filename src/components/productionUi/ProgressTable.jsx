import React from 'react'
import ArrowIconImage from '../common/ArrowIconImage'

const ProgressTable = ({lines,mockData}) => {
  return (
          <table className="w-full min-w-[400px] xl:mt-1">
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
              <td className={`p-3 py-4 xl:py-6 ${row.className} font-medium`}>{row.label}</td>
              {row.values.map((value, index) => (
                <td key={index} className="p-3 py-4 xl:py-6">
                  <div className="flex items-center justify-center gap-2">
                    <span className={`font-medium min-w-7 min-h-7 flex items-center justify-center rounded-full ${row.className} ${
                            row.color === "red" ? "bg-red-100" : row.color === "orange" ? "bg-orange-100" : row.color==="green" ? "bg-green-100":row.color==="blue"? "bg-blue-100":"bg-slate-100"
                    }`}>{value}</span>
                    <ArrowIconImage type={row.type} color={row.color} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default ProgressTable