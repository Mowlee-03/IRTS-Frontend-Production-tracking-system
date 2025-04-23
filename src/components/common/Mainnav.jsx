
import { ArrowLeft, Menu } from 'lucide-react';
import React from 'react';
import ProductionStatusCards from '../productionUi/ProductionStatusCard';
const MainNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div 
    className="flex flex-col bg-white shadow-bg-shadow-1 
    px-5 py-4 rounded-2xl">
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
          <h1 className="text-md md:text-2xl font-medium">Overall Production Performance Status</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            PM
          </div>
        </div>
      </div>
      <div className='md:px-3 pt-5'>
       <ProductionStatusCards/>
      </div>
      
    </div>
  );
};

export default MainNav;
