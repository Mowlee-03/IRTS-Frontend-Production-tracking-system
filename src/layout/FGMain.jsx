import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import theme from '../../Style'

const FGMain = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='flex-1 pt-3'>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default FGMain