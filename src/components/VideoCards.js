import React from 'react'
import { Link } from 'react-router-dom';
import useConvertDuration from '../utils/hooks/useConvertDuration';

const VideoCards = ({ video }) => {
  const duration = useConvertDuration(video?.contentDetails?.duration);
  return (
    <Link to={"/watchVideo"} state={{video : video}}>
      <div className="w-80 rounded overflow-hidden shadow-lg  hover:border hover:border-black p-2 mt-2 cursor-pointer">
        <img src={video?.snippet?.thumbnails?.high?.url} alt='thumbnail' className='w-full rounded' />
        <div className='-mt-8 text-right'>
          <span className='bg-black bg-opacity-75 text-white p-2 rounded'>{duration}</span>
        </div>
        <div className="px-6 pt-3">
          <div className="font-bold text-sm mb-2">{video?.snippet?.title}</div>
          <p className="text-gray-700  text-xs">{video?.snippet?.channelTitle}</p>
        </div>
        <div className='pl-6'>
          <span className="text-sm text-gray-700 font-semibold">{video?.statistics?.viewCount} views . {video?.statistics?.likeCount} likes . </span>
        </div>
      </div>
    </Link>

  )
}


export const AdPromotionVideoCard = (VideoCards) => {
  return (props) => {
    return (
      <div className='relative'> 
        <VideoCards {...props} />
        <span className='absolute text-md text-white bg-yellow-700 -mt-6 px-1'>Ad</span>
      </div>
    )
  }
}

export default VideoCards
