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
      
      
      <div className="flex-1 flex flex-col overflow-auto h-full px-2 lg:pr-3 py-4">
          <MainNav 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} 
          />
          <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
