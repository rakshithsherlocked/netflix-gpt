import React from 'react'
import { useSelector } from 'react-redux'

import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const trailerId = useSelector(store => store.movies?.addTrailer)

    useMovieTrailer(movieId);

    
  return (
     <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/" + trailerId?.key +"?&autoplay=1&mute=1"} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    >
    </iframe>
   VideoBackground</div>
  )
}

export default VideoBackground