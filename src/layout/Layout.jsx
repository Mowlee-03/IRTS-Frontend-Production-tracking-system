import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import MainNav from '../components/common/Mainnav';


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-app-background ">
      <div className='h-full md:px-3 md:py-4'>
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          activePage={activePage} 
          setActivePage={setActivePage} 
        />
      </div>
      
      
      <div className="flex-1 overflow-auto ">
        <div className="py-4 px-2">
          <MainNav 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} 
          />
          <Outlet/>

        </div>
      </div>
    </div>
  );
};

export default Layout;
