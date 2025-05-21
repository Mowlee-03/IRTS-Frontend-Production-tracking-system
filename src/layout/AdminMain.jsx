import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMain = () => {
  return (
    <div className='h-full pt-3'>
        <Outlet/>
    </div>
  )
}

export default AdminMain