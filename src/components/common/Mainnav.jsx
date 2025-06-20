
import { ArrowLeft, Menu } from 'lucide-react';
import React from 'react';
import ProductionStatusCards from '../productionUi/ProductionStatusCard';
import { Link, useLocation } from 'react-router-dom';
import AccountProfileBtn from '../assets/AccountProfileBtn';
import Notification from '../assets/Notification';
import InProgressTable from '../productionUi/InProgressTable';
import StoreTabs from '../StoreUi/Overview/StoreTabs';
import FGtabs from '../fgUi/FGtabs';
const MainNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  
  const headings = [
    { path: '/production/overview', title: 'Overall Production Performance Status' },
    { path: '/production/total_orders', title: 'Total Production Orders' },
    { path: '/production/delivered_orders', title: 'Delivered Orders' },
    { path: '/production/pending_orders', title: 'Pending Orders' },
    { path: '/production/new_orders', title: 'Add New Production Order' },
    { path: '/production/in-progress', title: 'Production Line Status(In-Progress)' },
    { path: '/admin/dashboard', title: 'IRTS Dashboard' },
    { path: '/admin/manage/modules_resources', title: 'Modules and Resources' },
    { path: '/admin/manage/roles', title: 'Roles And Permissions' },
    { path: '/store/overview', title: 'Overall Store Performance Status' },
    { path: '/store/total/production_order', title: 'Production orders' },
    { path: '/store/pending/production_order', title: 'Pending orders' },
    { path: '/store/initial-kitting', title: 'Initial Kitting' },
    { path: '/store/kitting-complete', title: 'Kitting Completed' },
    { path: '/store/bom-out', title: 'BOM OUT' },
    { path: '/store/workers-status', title: 'Store Staffs' },
    { path: '/fg/overview', title: 'Finished Goods Performance Status' },
  ];
  
  const getHeading = () => {
    const match = headings.find(item => location.pathname.startsWith(item.path));
    return match ? match.title : 'Application';
  };
  

  return (
    <div 
    className="flex flex-col bg-white shadow-bg-shadow-2 
    px-5 rounded-2xl">
      <div className='w-full flex items-center justify-between py-4 '>
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
        
        <div className="flex items-center gap-5">
            <Notification/>
            <AccountProfileBtn/>
        </div>
      </div>

      <div >
         {['/production/total_orders', '/production/delivered_orders', '/production/pending_orders','/production/overview'].includes(location.pathname) && (
            <ProductionStatusCards/>
         )}
         {['/production/in-progress'].includes(location.pathname) && (
          <Link to='/production/in-progress/data'>
              <InProgressTable/>
          </Link>
         )}
         {
          [
            '/store/overview',
            '/store/total/production_orders',
            '/store/pending/production_orders',
            '/store/initial-kitting',
            '/store/kitting-complete',
            '/store/bom-out'
          ].includes(location.pathname)&&(
            <StoreTabs/>
          )
         }

         {
          ["/fg/overview"].includes(location.pathname)&&(
            <FGtabs/>
          )
         }
      </div>
      
    </div>
  );
};

export default React.memo(MainNav)
