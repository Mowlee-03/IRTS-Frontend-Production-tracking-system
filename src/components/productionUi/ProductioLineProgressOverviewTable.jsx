import React from "react"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InProgressTable from "./InProgressTable";

const ProductionLineProgressOverviewTable = () => {

  return (
    <div className="flex-1 overflow-x-auto shadow-bg-shadow-1 rounded-xl bg-white pl-6">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center  pt-4">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
        <div className="p-2 xl:p-3  rounded-lg bg-[#F0F3FF] flex items-center justify-center text-[#4F46E5]">
           <AccessTimeIcon sx={{fontSize:{xs:20 ,md:23,xl:25}}}/>
          </div>
          <span className="text-lg">In Progress Production Lines</span>
        </div>
      </div>
      <div className="pr-4">
       <InProgressTable/>
      </div>

    </div>
  )
}

export default React.memo(ProductionLineProgressOverviewTable)
