import React, { useEffect, useState } from 'react'
import popularVideos from '../utils/popularVideos';
import VideoCards from './VideoCards';
import { useDispatch } from 'react-redux';
import { addVideo } from '../utils/redux/videoSlice';

const MainContainer = () => {
    const [listOfVideos, setListOfVideos] = useState(popularVideos['items']);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(addVideo(listOfVideos))
    }, [])
  return (
    <div className='grid grid-cols-3'>
      {listOfVideos && listOfVideos.map((video) => 
      (<VideoCards key={video.id} video={video}/>))}
    </div>
  )
}

export default MainContainer
