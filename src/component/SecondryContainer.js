import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const  movie = useSelector(store => store.movie);
 
  if(!movie) return

  return (
    <div style={{    background: "linear-gradient(45deg, black, transparent)"}}>
  <div style={{marginTop :"1rem"}}>
    <MovieList  key={movie.id} title={"Now Playing Movie"} movies={movie?.NowPlayingMovie} />
    <MovieList  key={movie.id} title={"Populer Movie"} movies={movie?.PopulerMovie} />
    <MovieList  key={movie.id} title={"TopReted Movie "} movies={movie?.TopRatedMovie} />
    <MovieList  key={movie.id} title={"Upcoming Movie"} movies={movie?.upcomingMovie} />

  </div>
 
    </div>
  )
}

export default SecondryContainer
