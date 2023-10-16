import { createSlice } from "@reduxjs/toolkit";


const cartitemSlice = createSlice({
    name : "cartitem",
    initialState : {
        cartitem : []
    },

    reducers : {
        addtoCart : (state, action)=>{
            // muteting the state
            state.cartitem.push(action.payload)
        },
        removetoCart : (state, action)=>{
            state.cartitem.pop(action.payload)
        },
        emptyCart : (state, )=>{
            state.cartitem.length = 0
        },
    }
})

export const  {addtoCart, removetoCart , emptyCart } = cartitemSlice.actions;
export default cartitemSlice.reducer;