import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import HeadIcon from '../../assets/sidebarIcons/HeadIcon.png';
import PersonIcon from '../../assets/sidebarIcons/PersonIcon.png';
import PaperIcon from '../../assets/sidebarIcons/PaperIcon.png';
import SettingMsgIcon from '../../assets/sidebarIcons/SettingMsgIcon.png';
import logoutIcon from '../../assets/sidebarIcons/logoutIcon.png';
import RTSLOGOwithLabel from '../../assets/sidebarIcons/Logo_Rts 1.png'
import RTSLOGO from '../../assets/sidebarIcons/RTS_png.png'
import AdminDashboardIcon from '../../assets/sidebarIcons/AdminDashboardicon.png'
import ProductionMainIcon from '../../assets/sidebarIcons/ProductionMainIcon.png'
import SalesMainIcon from '../../assets/sidebarIcons/SalesmainIcon.png'
import PurchaseMainIcon from '../../assets/sidebarIcons/PurchasemainIcon.png'
import AccountsMainIcon from '../../assets/sidebarIcons/Accounts-MainIcon.png'
import ManagementIcon from '../../assets/sidebarIcons/ManageMentIcon.png'
import ModuleAndResourcesIcon from '../../assets/sidebarIcons/ModuleAndResourcesIcon.png'
import RolesManageIcon from '../../assets/sidebarIcons/RolesManageIcon.png'
import StoreMainIcon from '../../assets/sidebarIcons/StoreMainIcon.png'
import OverviewIcon from '../../assets/sidebarIcons/OverviewIcon.png'
import StoreStaffIcon from '../../assets/sidebarIcons/StoreStaffIcon.png'
import { logoutUser } from '../../Redux/Slice/LogoutSlice';
import { useDispatch } from 'react-redux';

const menuItems = {
  admin: {
    label: 'Admin',
    icon: PersonIcon,
    links: [
      { icon: AdminDashboardIcon, label: 'Dashboard', to: '/admin/dashboard' },
      { icon: ManagementIcon, label: 'Management', 
        children:[
         { icon: ModuleAndResourcesIcon, label: 'Resources', to: '/admin/manage/modules_resources' },
         { icon: RolesManageIcon, label: 'Roles', to: '/admin/manage/roles' },
        ]
       },
    ],
  },
  production: {
    label: 'Production',
    icon: ProductionMainIcon,
    links: [
      { icon: OverviewIcon, label: 'Prod-Overview', to: '/production/overview' },
      { icon: PaperIcon,label: 'Total Production',to: '/production/total_orders'},
      { icon: SettingMsgIcon, label: 'Production in Progress', to: '/production/in-progress' },
    ],
  },
  store:{
    label:"Store",
    icon:StoreMainIcon,
    links:[
      {icon:OverviewIcon,label:"Store-Overview",to:"/store/overview"},
      {icon:StoreStaffIcon,label:"Store Staffs",to:"/store/workers-status"},
    ]
  },
  fg:{
    label:"FG",
    icon:StoreMainIcon,
    links:[
      {icon:OverviewIcon,label:"FG Overview",to:"/fg/overview"}
    ]
  }
  // Add more departments...
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDepartments, setOpenDepartments] = useState({}); // Track expanded departments
  const [openLinks, setOpenLinks] = useState({}); // Track expanded nested links
  const userdepartment = 'admin'; // Change to 'production' to test
  const dispatch=useDispatch()
  const toggleDepartment = (department) => {
    
    setOpenDepartments((prev) => ({
      ...prev,
      [department]: !prev[department],
    }));
  };

  const toggleLink = (linkPath) => {

    setOpenLinks((prev) => ({
      ...prev,
      [linkPath]: !prev[linkPath],
    }));
  };

  const renderLinks = (links, depth = 0, isMainLink = false) => {
    return links.map((link, index) => {
      const isActive = location.pathname.startsWith(link.to);
      const isExpanded = openLinks[link.to];
      const hasChildren = link.children && link.children.length > 0;

      return (
        <div key={index} className={isCollapsed && !isMainLink ? 'hidden' : `ml-${depth * 4}`}>
          <Link
            to={link.to}
            className={`flex items-center p-3 rounded-xl cursor-pointer my-1 2xl:my-3 ${
              isActive ? 'bg-active-bg-clr text-black' : 'hover:bg-hover-bg-clr'
            } ${isCollapsed ? 'justify-center' : ''}`}
            onClick={(e) => {
              if (hasChildren && !isCollapsed) {
                e.preventDefault(); // Prevent navigation if link has children and sidebar is not collapsed
                toggleLink(link.to);
                
              }else if(hasChildren&&isCollapsed){
                setIsCollapsed(false)
              }
            }}
          >
            <img src={link.icon} className={`w-4 h-4 ${isCollapsed ? '' : 'mr-1 lg:mr-3'}`} />
            {!isCollapsed && (
              <>
                <span className="text-text-secondary-clr font-medium text-xs lg:text-[13px] 2xl:text-[15px]">
                  {link.label}
                </span>
                {hasChildren && (
                  <span className="ml-auto">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                )}
              </>
            )}
          </Link>
          {!isCollapsed && hasChildren && isExpanded && (
            <div>{renderLinks(link.children, depth + 1)}</div>
          )}
        </div>
      );
    });
  };

  
const renderHeader = () => {
  switch (userdepartment) {
    case 'admin':
      return (
        <div
          className={`flex items-center ${
            isCollapsed ? 'justify-center' : 'justify-center gap-4'
          } w-full`}
        >{
          isCollapsed?<img src={RTSLOGO} alt="Admin"  />
          :
          <img src={RTSLOGOwithLabel} alt="Admin"  />
        }
          

        </div>
      );

    case 'production':
      return (
        <div
          className={`flex items-center ${
            isCollapsed ? 'justify-center' : 'justify-start gap-4'
          } w-full`}
        >
          <img src={HeadIcon} alt="Production" className="h-6 w-6" />
          {!isCollapsed && (
            <span className="font-medium text-text-primary-clr text-[15px]">
              Production Panel
            </span>
          )}
        </div>
      );

    // Add more cases for other departments if needed
    default:
      return (
        <div
          className={`flex items-center ${
            isCollapsed ? 'justify-center' : 'justify-start gap-4'
          } w-full`}
        >
          <img src={HeadIcon} alt="Default" className="h-6 w-6" />
          {!isCollapsed && (
            <span className="font-medium text-text-primary-clr text-[15px]">
              Welcome
            </span>
          )}
        </div>
      );
  }
};


  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
        className={`
          fixed md:static inset-y-0 left-0 z-30 md:z-0
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          transition-all duration-300 ease-in-out
          bg-primary-background border-r border-gray-200
          ${isCollapsed ? 'md:w-20' : 'w-56 lg:w-[266px]'}
          h-full rounded-[10px]
          flex flex-col
        `}
      >
        {/* Header */}
        <div
          className={`relative px-4 py-6 border-b flex items-center justify-between ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          {renderHeader()}


          <button onClick={() => setIsOpen(false)} className="md:hidden">
            <X size={20} />
          </button>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex absolute -right-3 -bottom-3 bg-white rounded-lg p-1 shadow-md hover:bg-gray-100 z-30"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 px-3  scrollbar-hide">
          {userdepartment === 'admin' ? (
            <>
              {/* Admin links directly */}
              {renderLinks(menuItems.admin.links, 0, true)}
              {/* Other departments as collapsible */}
              {Object.keys(menuItems).map((deptKey) => {
                if (deptKey === 'admin') return null; // Skip admin links
                const department = menuItems[deptKey];
                const isActiveDept = department.links.some((link) =>
                  location.pathname.startsWith(link.to)
                );
                const isExpanded = openDepartments[deptKey];

                return (
                  <div key={deptKey} className="mb-2">
                    <div
                      className={`flex items-center p-3 rounded-xl cursor-pointer ${
                        isActiveDept ? 'bg-active-bg-clr text-black' : 'hover:bg-hover-bg-clr'
                      } ${isCollapsed ? 'justify-center' : ''}`}
                     onClick={() => {
                        if (isCollapsed) {
                          setIsCollapsed(false); // Expand the sidebar first
                        } else {
                          toggleDepartment(deptKey); // Then toggle the department if expanded
                        }
                      }}
                    >
                      <img src={department.icon} className={`w-4 h-4 ${isCollapsed ? '' : 'mr-1 lg:mr-3'}`} />
                      {!isCollapsed && (
                        <>
                          <span className="text-text-secondary-clr font-medium text-xs lg:text-[13px] 2xl:text-[15px]">
                            {department.label}
                          </span>
                          {department.links.length > 0 && (
                            <span className="ml-auto">
                              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    {!isCollapsed && isExpanded && (
                      <div className="ml-4">{renderLinks(department.links)}</div>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            // Non-admin: Show only userdepartment's links directly
            renderLinks(menuItems[userdepartment]?.links || [], 0, true)
          )}
        </nav>

        {/* Logout Button */}
        <div
          className={`w-full flex items-center ${
            isCollapsed ? 'justify-center px-0' : 'justify-center pr-8'
          } pb-10`}
        >
          <button
          onClick={()=>dispatch(logoutUser(true))}
            className={`p-4 hover:bg-gray-50 flex items-center text-gray-700 text-[14px] font-medium rounded-xl ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            <img
              src={logoutIcon}
              className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} text-gray-500`}
            />
            {!isCollapsed && 'Logout'}
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar);