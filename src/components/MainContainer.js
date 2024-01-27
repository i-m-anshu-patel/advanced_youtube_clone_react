import React, { useEffect, useState } from 'react'
import popularVideos from '../utils/popularVideos';
import VideoCards from './VideoCards';

const MainContainer = () => {
    const [listOfVideos, setListOfVideos] = useState(popularVideos['items']);
  return (
    <div className='grid grid-cols-3'>
      {listOfVideos && listOfVideos.map((video) => 
      (<VideoCards key={video.id} video={video}/>))}
    </div>
  )
}

export default MainContainer
