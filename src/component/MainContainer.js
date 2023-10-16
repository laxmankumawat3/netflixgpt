import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector((store)=>store.movie?.NowPlayingMovie)  
    if(!movie)   return

    const mainMovie = movie[0];
    const {title,overview,id} = mainMovie;
   
  return (
    <div>
      <VideoTitle title ={title} overview ={overview} />
      <VideoBackground id = {id}/>
    </div>
  )
}

export default MainContainer
