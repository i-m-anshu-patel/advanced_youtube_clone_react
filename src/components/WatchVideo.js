import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import VideoContainer from './VideoContainer';
import VideoList from './VideoList';
import { useDispatch } from 'react-redux';
import { addCategoryId } from '../utils/redux/categorySlice';

const WatchVideo = () => {
    const {state} = useLocation();
    const { video } = state;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addCategoryId(video?.snippet?.categoryId))
    }, [])
  return (
    <div className='grid grid-cols-12 gap-3'>
      <VideoContainer video={video} />
      <VideoList />      
    </div>
  )
}

export default WatchVideo
