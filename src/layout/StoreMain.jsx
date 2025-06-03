import React from 'react'
import { Outlet } from 'react-router-dom'
import theme from '../../Style'
import { ThemeProvider } from '@mui/material'

const StoreMain = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='grow min-h-0 pt-3'>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default StoreMain