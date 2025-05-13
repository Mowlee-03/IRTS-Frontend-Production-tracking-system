import { useState } from 'react'
import './App.css'
import AppRouting from './routes/AppRouting'
import GlobalSnackbar from './components/common/GlobalSnackbar'
function App() {
  return (
    <>
        <AppRouting/>
        <GlobalSnackbar/>
    </>
  )
}

export default App
