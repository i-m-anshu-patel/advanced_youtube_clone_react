import React, { useEffect, useState } from 'react'
import popularVideos from '../utils/popularVideos';

const MainContainer = () => {
    const [listOfVideos, setListOfVideos] = useState(popularVideos);
    console.log(popularVideos);
  return (
    <div>
      MainContainer
    </div>
  )
}

export default MainContainer
