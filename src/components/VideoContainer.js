import React from 'react'

const VideoContainer = ({ video }) => {
    if (!video) return <div> Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id}`

    return (
        <div className="embed-responsive embed-responsive-16by9 mt-3 col-span-8 ml-3">
            <iframe height="400px" width="100%" className="embed-responsive-item" src={videoSrc} allowFullScreen />
            <div className="mt-2">
                <span className='font-bold text-xl'>{video?.snippet?.title}</span>
                <div className='flex justify-between mt-2'>
                    <div className='font-semibold text-md'>{video?.snippet?.channelTitle}</div>
                    <div className='flex '>
                    <button className='bg-gray-300 py-1 px-3 border rounded-l-full'><i className="fa fa-eye"></i>  {video?.statistics?.viewCount}</button>
                        <button className='bg-gray-300 py-1 px-3 border'><i className="fa fa-thumbs-up"></i>  {video?.statistics?.likeCount}</button>
                        <buttom className='bg-gray-300 py-1 px-3 border rounded-r-full'><i className="fa fa-comment"></i>  {video?.statistics?.commentCount}</buttom>
                    </div>
                </div>
                <p className='mt-2'>{video.snippet.description.substring(0, 120)}...</p>
            </div>
        </div>
    )
}

export default VideoContainer
