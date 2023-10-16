import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0,
    update : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    // to update state we create the function that is called reducer in redux
    reducers : {
        addCount :(state )=>{
         state.count  = state.count + 1 
        },
        removeCount : (state )=>{
           state.count = state.count -1 
        },
        clearCount : (state)=>{
            state.count  = 0;
        }
    }
}) 



export default cartSlice.reducer;
export const  {addCount, removeCount,clearCount} = cartSlice.actions;
