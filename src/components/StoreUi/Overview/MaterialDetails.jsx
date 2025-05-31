const MaterialDetails = () => {
  const details = [
    { category: "Material Issued", value: "3,00,000", color: "text-blue-600" },
    { category: "In Stock", value: "1,30,000", color: "text-blue-600" },
    { category: "Required Stock", value: "1,80,000", color: "text-blue-600" },
    { category: "Required Stock", value: "1,80,000", color: "text-blue-600" },
  ]

  return (
    <div className="h-full bg-white rounded-xl  shadow-md border border-gray-200 flex flex-col gap-2 pb-3">
      <h2 className="text-md font-semibold text-gray-900 pl-3 pt-2">Material Details</h2>
        <div className="flex-1  overflow-auto mx-3">
          <table className="w-full">
            <thead className="sticky top-0">
              <tr className="border-b border-[#F5F5F5] bg-gray-100">
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-900">Category</th>
                <th className="text-right py-3 px-2 text-sm font-medium text-gray-900">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {details.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-2 text-sm text-gray-900">{row.category}</td>
                  <td className="py-3 px-2 text-sm text-gray-900 text-right">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default MaterialDetails
