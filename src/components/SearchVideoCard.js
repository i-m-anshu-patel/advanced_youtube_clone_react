import React from 'react'
import { Link } from 'react-router-dom'
const SearchVideoCard = ({ video }) => {
  return (
    <Link to={"/watchVideo"} state={{ video: video }}>
      <div className='border grid grid-cols-12 mt-3 p-2'>
        <div className='col-span-2'>
          <img src={video?.snippet?.thumbnails?.high.url} alt='image' className='h-36' />
        </div>
        <div className='col-span-9 flex-col'>
          <div className='font-bold'>{video?.snippet?.title}</div>
          <div className='font-medium'>{video?.snippet?.channelTitle}</div>
          <div className='font-semibold'>{video?.snippet?.description}</div>
        </div>
      </div>
    </Link>
  )
}

export default SearchVideoCard
