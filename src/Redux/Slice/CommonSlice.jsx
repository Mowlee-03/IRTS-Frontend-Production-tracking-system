import { createSlice } from "@reduxjs/toolkit";

const CommonSlice=createSlice({
    name:'logout',
    initialState:{
        r:"r"
    },
    reducers:{
        s:(state,action)=>{
            state.r=action.payload
        }
    }
})

export const {s}=CommonSlice.actions
export default CommonSlice.reducer