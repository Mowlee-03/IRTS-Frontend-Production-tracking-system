
import { ArrowLeft, Menu } from 'lucide-react';
import React from 'react';
import ProductionStatusCards from '../productionUi/ProductionStatusCard';
import { useLocation } from 'react-router-dom';
import AccountProfileBtn from '../assets/AccountProfileBtn';
import Notification from '../assets/Notification';
const MainNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  
  const headings = [
    { path: '/production/overview', title: 'Overall Production Performance Status' },
    { path: '/production/total_orders', title: 'Total Production Orders' },
    { path: '/production/delivered_orders', title: 'Delivered Orders' },
    { path: '/production/pending_orders', title: 'Pending Orders' },
    { path: '/production/new_orders', title: 'Add New Production Order' },
  ];
  
  const getHeading = () => {
    const match = headings.find(item => location.pathname.startsWith(item.path));
    return match ? match.title : 'Production Dashboard';
  };
  

  return (
    <div 
    className="flex flex-col  bg-white shadow-bg-shadow-1 
    px-5 py-4 rounded-2xl mt-4">
      <div className='w-full flex items-center justify-between'>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-4 md:hidden"
          > 
            <Menu/>
          </button>
          <button className="hidden md:block hover:bg-gray-200 p-1 rounded-md" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          <h2 className="text-md md:text-xl font-medium">
            {getHeading()}
            </h2>

        </div>
        
        <div className="flex items-center gap-3">
            <Notification/>
            <AccountProfileBtn/>
        </div>
      </div>

      <div >
         {['/production/total_orders', '/production/delivered_orders', '/production/pending_orders','/production/overview'].includes(location.pathname) && (
            <ProductionStatusCards/>
         )}
      </div>
      
    </div>
  );
};

export default React.memo(MainNav)
