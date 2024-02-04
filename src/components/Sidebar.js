import React from 'react'

const Sidebar = () => {
    return (
        <div className='fixed left-0 top-17 w-1/6 border-r-2 border-gray-200 p-3 h-screen hover:overflow-y-auto'  >
            <div className='divide-y divide-slate-200'>
                <ul className='py-3'>
                    <li>Home</li>
                    <li>Shorts</li>
                    <li>Youtube Music</li>
                </ul>
                <ul className='py-4'>
                    <li>Your channel</li>
                    <li>History</li>
                    <li>Your videos</li>
                    <li>Watch later</li>
                    <li>Downloads</li>
                </ul>
                <ul className='py-4'>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                    <li>News</li>
                </ul>
                <ul className='py-4'>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                    <li>News</li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
