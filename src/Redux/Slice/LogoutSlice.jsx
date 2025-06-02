import { createSlice } from "@reduxjs/toolkit";

const logoutSlice=createSlice({
    name:'logout',
    initialState:{
        open:false
    },
    reducers:{
        logoutUser:(state,action)=>{
            state.open=action.payload
        }
    }
})

export const {logoutUser}=logoutSlice.actions
export default logoutSlice.reducer