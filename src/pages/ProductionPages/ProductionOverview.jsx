import React, { useState } from 'react'
import ProductDeliveryStatusCard from '../../components/productionUi/ProductDeliveryStatusCard';
import OrderTable from '../../components/productionUi/ProductDeliveryStatusList';
import ProductionLineProgressOverviewTable from '../../components/productionUi/ProductioLineProgressOverviewTable';
import AssignedLineChart from '../../components/productionUi/AssignedLineChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const ProductionOverview = () => {
    const [viewMode, setViewMode] = useState('tiles'); 
    return (
      <div className="mt-3 mb-3 h-full pt-2">
        <div
        className='bg-main-background rounded-2xl shadow-bg-shadow-2 min-h-[380px] px-4 sm:px-6 pt-4'
        >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          <div className="flex items-center gap-2 text-gray-700 font-medium">
          <div className="p-2 xl:p-3 rounded-lg bg-[#F0F3FF] flex items-center justify-center text-[#4F46E5]">
           <AccessTimeIcon sx={{fontSize:{xs:20 ,md:23,xl:25}}}/>
          </div>
          <span className="text-lg">Pending Delivery Status</span>
        </div>
          
          <div className="">
            <div className="bg-gray-100 rounded-lg p-1 flex mt-1">
                <button 
                className={`px-3 md:px-4 py-1 rounded-md text-sm transition-colors ${viewMode === 'tiles' ? 'bg-white shadow-sm' : ''}`}
                onClick={() => setViewMode('tiles')}
                >
                Tiles
                </button>
                <button 
                className={`px-3 md:px-4 py-1 rounded-md text-sm transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                onClick={() => setViewMode('list')}
                >
                List
                </button>
            </div>
          </div>
          
        </div> 
          {
            viewMode==='tiles'&&(
              <ProductDeliveryStatusCard/>
            )
          }
          {
            viewMode==='list'&&(
              <OrderTable/>
            )
          }

        </div>
        
        <div
        className='  rounded-2xl  mt-5'
        >
         <div className="flex flex-col lg:flex-row gap-5">
          
            <ProductionLineProgressOverviewTable/>
            <AssignedLineChart/>
        </div>
        </div>
        
      </div>
    );
  };
  

export default ProductionOverview