import React from 'react'
import { Outlet } from 'react-router-dom'
import theme from '../../Style'
import { ThemeProvider } from '@mui/material'

const StoreMain = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='h-full pt-3'>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default StoreMain