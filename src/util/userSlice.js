import { createSlice } from "@reduxjs/toolkit";

// in the slice we create our state variable and its modified functions


const userSlice = createSlice({
    name: "user",
    initialState : null,
    reducers : {
        addUser : (state, action)=>{
           return action.payload;
        },
        removeUser : (state , action)=>{
            return action.payload;
        }
    }
})
export default userSlice.reducer;
export const  {addUser, removeUser} = userSlice.actions;
