import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovie: null,
    upcomingMovie : null,
    TopRatedMovie : null,
    PopulerMovie : null,
    TrailerKey : null
  },

  reducers: {
    addNowPlayingMovie(state, action) {
          state.NowPlayingMovie = action.payload;
    },
    setUpcomingMovie(state , action){
      state.upcomingMovie = action.payload
    },
    setPopulerMovie(state , action){
      state.PopulerMovie = action.payload
    },
    setTopRetedMovie(state , action){
      state.TopRatedMovie = action.payload
    },
    setTrailerkey (state, action){
          state.TrailerKey = action.payload
    }
  },
});

export  default movieSlice.reducer;
    
export const {addNowPlayingMovie,setTrailerkey,setPopulerMovie,setUpcomingMovie,  setTopRetedMovie} = movieSlice.actions;
