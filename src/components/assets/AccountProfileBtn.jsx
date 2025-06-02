import React from 'react'
import profileimage from '../../assets/Commonicons/person-holding-a-glass-of-milk-svgrepo-com.svg'
import { LogOut, User } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../Redux/Slice/LogoutSlice'
const AccountProfileBtn = () => {
  const dispatch=useDispatch()
    const user={
        name:"Mowlee",
        email:"mowleemm@gmail.com"
    }
  return (
    <div className="relative group">
              <button className="flex items-center space-x-2   hover:bg-gray-100 transition-all duration-200 border rounded-full border-gray-400">
                <img
                  src={profileimage}
                  alt={user?.name}
                  className="h-7 w-7 rounded-full border border-gray-200 object-cover"
                />
                {/* <span className="hidden lg:inline text-sm font-medium text-gray-700">
                  {user?.name}
                </span> */}
              
              </button>

              {/* Dropdown */}
              <div className="z-40 absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => dispatch(logoutUser(true))}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
  )
}

export default AccountProfileBtn