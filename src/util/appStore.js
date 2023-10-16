import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
import cartitemSlice from './cartitemSlice';
import movieReducer from './movieSlice';
import gptSlice from './gptSlice';

const store = configureStore({
  reducer: {
    user : userReducer,
    card : cartReducer,
    cartitem : cartitemSlice,
    movie : movieReducer,
    gpt : gptSlice,
  },
})

export default store;