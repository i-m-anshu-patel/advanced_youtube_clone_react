import React from 'react';
import useConvertDuration from '../utils/hooks/useConvertDuration';
import { Link } from 'react-router-dom';


const SuggestionsVideoCards = ({ video }) => {
    const durationValue = video?.contentDetails?.duration ?? '';
    const duration = useConvertDuration(durationValue);
    return (
        <Link to={"/watchVideo"} state={{ video: video }}>
            <div className=' border p-2 grid grid-cols-9 h-36 gap-1'>
                <div className='col-span-3 h-36 relative'>
                    <img src={video?.snippet?.thumbnails?.high?.url} alt='thumbnail' className='w-full rounded' />
                    <div className='absolute bottom-10 right-0 bg-black bg-opacity-75 text-white p-1 rounded'>{duration}</div>
                </div>

                <div className='col-span-5 h-36'>
                    <div className="font-bold text-sm mb-2">{video?.snippet?.title}</div>
                    <p className="text-gray-700  text-xs">{video?.snippet?.channelTitle}</p>
                    <span className="text-sm text-gray-700 font-semibold">{video?.statistics?.viewCount} views . {video?.statistics?.likeCount} likes . </span>
                </div>

            </div>
        </Link>
    )
}

export default SuggestionsVideoCards
