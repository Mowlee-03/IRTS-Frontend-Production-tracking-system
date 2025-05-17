import { Bell, LogOut } from 'lucide-react'
import React from 'react'
import NumberPlaceButton from './NumberPlaceButton'

const Notification = () => {
  return (
     <div className="relative group ">
                <NumberPlaceButton icon={<Bell size={20}/>} />         
              

              {/* Dropdown */}
              <div className="z-40 absolute right-0 mt-1 w-[500px] bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">wed</p>
                  <p className="text-xs text-gray-500 truncate">Helloo World!!</p>
                </div>
                
              </div>
            </div>
  )
}

export default Notification