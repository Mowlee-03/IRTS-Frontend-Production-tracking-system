import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/Userslice"
import SnackbarReducer from '../Slice/SnackbarSlice'
import LogoutSlice from '../Slice/LogoutSlice'
const Store=configureStore({
    reducer:{
        auth:userReducer,
        snackbar:SnackbarReducer,
        logout:LogoutSlice
    }
})

export default Store