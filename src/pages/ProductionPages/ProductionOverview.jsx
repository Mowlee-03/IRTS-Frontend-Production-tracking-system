import React, { useState } from 'react'
import ProductDeliveryStatusCard from '../../components/productionUi/ProductDeliveryStatusCard';
import rectangel from '../../assets/sidebarIcons/Bg-rectangel.png'
import OrderTable from '../../components/productionUi/ProductDeliveryStatusList';
import ProductioLineProgressOverviewTable from '../../components/productionUi/ProductioLineProgressOverviewTable';
import ProductionLineProgressOverviewTable from '../../components/productionUi/ProductioLineProgressOverviewTable';
import AssignedLineChart from '../../components/productionUi/AssignedLineChart';
const ProductionOverview = () => {
    const [viewMode, setViewMode] = useState('tiles'); 
    return (
      <div className="mt-2  py-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
          <h2 className="text-lg md:text-3xl font-medium text-gray-800 pl-2">Pending Delivery Status</h2>
          
          <div  style={{ backgroundImage: `url(${rectangel})` }} className="bg-contain bg-bottom bg-no-repeat px-4 pt-4 mr-3">
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

        <div
        className='bg-main-background  rounded-2xl shadow-bg-shadow-2'
        >
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
         <div className="flex flex-col lg:flex-row gap-8">
            <ProductionLineProgressOverviewTable/>
            <AssignedLineChart/>
        </div>
        </div>
        
      </div>
    );
  };
  

export default ProductionOverview