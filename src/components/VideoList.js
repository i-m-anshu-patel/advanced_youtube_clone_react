import React from 'react'
import { useSelector } from 'react-redux'
import SuggestionsVideoCards from './SuggestionsVideoCards';

const VideoList = () => {
  const videoList = useSelector((store) => store.video.video)
  return (
    <div className='mt-2 col-span-4'>
      {videoList && videoList.map((video) => 
      (<SuggestionsVideoCards key={video.id} video={video}/>)
    )}
    </div>
  )
}

export default VideoList
