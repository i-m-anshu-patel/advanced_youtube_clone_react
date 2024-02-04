import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import VideoContainer from './VideoContainer';
import VideoList from './VideoList';

const WatchVideo = () => {
    const {state} = useLocation();
    const { video } = state;
  return (
    <div className='grid grid-cols-12 gap-3'>
      <VideoContainer video={video} />
      <VideoList />      
    </div>
  )
}

export default WatchVideo
