import React, { useState } from 'react';
import HeadIcon from '../../assets/sidebarIcons/HeadIcon.png'
import PersonIcon from '../../assets/sidebarIcons/PersonIcon.png'
import PaperIcon from '../../assets/sidebarIcons/PaperIcon.png'
import SettingHintIcon from '../../assets/sidebarIcons/SettingHintIcon.png'
import SettingMsgIcon from '../../assets/sidebarIcons/SettingMsgIcon.png'
import logoutIcon from '../../assets/sidebarIcons/logoutIcon.png'
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    // New state for sidebar collapse on large screens
    const [isCollapsed, setIsCollapsed] = useState(false);
    const menuItems = [
        { icon: PersonIcon, label: "Production manager", to: "/production/overview" },
        { icon: PaperIcon, label: "Total production", to: "/production/total_orders" },
        { icon: SettingMsgIcon, label: "Production in progress", to: "o" },
        { icon: SettingHintIcon, label: "Production NOT Started", to: "o" },
    ];
    
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
          {/* Collapse button - only visible on md screens and above */}
        
          
          <div className={`relative px-4 py-6 border-b flex items-center justify-between  ${isCollapsed ? 'justify-center' : ''}`}>
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start gap-4'} w-full`}>
              <img src={HeadIcon} alt="" className="h-6 w-6" />
              {!isCollapsed && <span className="font-medium text-text-primary-clr text-[15px]">Production Hub</span>}
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="md:hidden"
            >
             <X size={20}/>
            </button>

            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex absolute -right-3 -bottom-3 bg-white rounded-lg p-1 shadow-md hover:bg-gray-100 z-30"
            >
                {isCollapsed ? <ChevronRight size={20}/>:<ChevronLeft size={20}/>}
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-2 px-3">
            {menuItems.map((item, index) => {
                const isActive = location.pathname.startsWith(item.to);
                return (
                <Link
                    key={index}
                    to={item.to}
                    className={`flex items-center p-3 md:p-4 my-2 rounded-xl cursor-pointer ${
                      isCollapsed ? 'justify-center' : ''
                    } ${
                      isActive ? "bg-active-bg-clr text-black" : "hover:bg-hover-bg-clr"
                    }`}
                >
                    <img src={item.icon} className={`w-4 h-4 ${isCollapsed ? '' : 'mr-1 lg:mr-3'}`} />
                    {!isCollapsed && <span className="text-text-secondary-clr font-medium text-xs lg:text-[13px]">{item.label}</span>}
                </Link>
                );
            })}
          </nav>
          
          <div className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'justify-center pr-8'} pb-10`}>
            <button className={`p-4 hover:bg-gray-50 flex items-center text-gray-700 text-[14px] font-medium rounded-xl ${isCollapsed ? 'justify-center' : ''}`}>
              <img src={logoutIcon} className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} text-gray-500`}/>
              {!isCollapsed && 'Logout'}
            </button>
          </div>
        </div>
      </>
    );
};

export default React.memo(Sidebar);