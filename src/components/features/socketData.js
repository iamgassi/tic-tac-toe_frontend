import { createSlice } from "@reduxjs/toolkit";

export const socketData=createSlice({
    name:"data",
    initialState:{
        data:null,
    },
    reducers:{
        getData:(state,action)=>{
            state.data=action.payload;
        },
        clearData:(state)=>{
            state.data=null;
        },
    }
});

export const {getData,clearData}=socketData.actions;
export const selectData=(state)=>state.data.data;
export default socketData.reducer;