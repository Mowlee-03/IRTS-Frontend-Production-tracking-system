import React from 'react'
import { Outlet } from 'react-router-dom'

const StoreMain = () => {
  return (
    <div className='h-full py-3'>
        <Outlet />
      </div>
  )
}

export default StoreMain