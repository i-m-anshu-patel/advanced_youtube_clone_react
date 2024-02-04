import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { API_KEY } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';
import { useDispatch } from 'react-redux';
import { addVideo } from '../utils/redux/videoSlice';

const SearchPage = () => {
    const { state } = useLocation();
    const { searchText } = state;
    const [searchResults, setSearchResults] = useState();
    const dispatch = useDispatch();

    const fetchSearchData = async () => {
        const data = await fetch('https://youtube.googleapis.com/youtube/v3/search?'+ new URLSearchParams({
            part: 'snippet',
            q: searchText,
            key: API_KEY
        }));
        const json = await data.json();
        const videoItems = json.items.filter((video) => video.id.videoId);
        dispatch(addVideo(videoItems));
        setSearchResults(videoItems);
    }
    useEffect(() => {
        fetchSearchData();
    }, [searchText])
    console.log(searchResults)
    return (
        <div className='container mx-auto'>
            {searchResults && searchResults.length > 0 && searchResults.map((video) => (
                <SearchVideoCard key={video.id.videoId} video={video} />
            ))}
        </div>

    )
}

export default SearchPage
