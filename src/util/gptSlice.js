import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    togglegptsearchbtn: false,
    searchMovielist : null
  },

  reducers: {
    setTogglegptsearchbtn: (state) => {
      state.togglegptsearchbtn = !state.togglegptsearchbtn;
    },
    setSearchMovieList: (state, action) => {
      state.searchMovielist = action.payload
    },
  },
});

export default gptSlice.reducer;
export const { setTogglegptsearchbtn,setSearchMovieList } = gptSlice.actions;
