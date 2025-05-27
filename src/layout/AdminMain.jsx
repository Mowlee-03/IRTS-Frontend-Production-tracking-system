import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import theme from '../../Style'

const AdminMain = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='h-full pt-3'>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default AdminMain
