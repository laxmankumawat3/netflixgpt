import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
  return (
    <div >
          <h1 style={{padding : "2rem 0 0 2rem", color : "white"}}>{title}</h1>
          <div >
                    <div style={{display : "flex" , overflowX : "scroll", margin : "1rem"}}>
                    {
                              movies && movies.map((movie)=>{
                                        return <MovieCard key={movie.id}  movie = {movie}/>
                              })
                    }
                    </div>
                 
          </div>
    </div>
  )
}

export default MovieList