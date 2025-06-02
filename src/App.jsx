import { useState } from 'react'
import './App.css'
import AppRouting from './routes/AppRouting'
import GlobalSnackbar from './components/common/GlobalSnackbar'
import ConfirmModal from './components/common/ConfirmModal'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from './Redux/Slice/LogoutSlice'
function App() {
   const dispatch = useDispatch()
  const logoutModalOpen = useSelector(state => state.logout.open)

  const handleClose = () => {
    dispatch(logoutUser(false))
  }

  const handleConfirm = () => {
    dispatch(logoutUser(false))
    // Perform logout logic here (e.g., clear tokens, redirect)
    console.log("User confirmed logout")
  }
  return (
    <>
        <AppRouting/>
        <GlobalSnackbar/>

        <ConfirmModal
        open={logoutModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Logout Confirmation"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        cancelText="Cancel"
        confirmButtonColor="error"
      />
    </>
  )
}

export default App
