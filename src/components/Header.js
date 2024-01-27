import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/redux/appSlice';
import { HAMBURGER_ICON, YOUTUBE_LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-12 py-4 shadow-md sticky top-0 bg-white'>
      <div className='flex col-span-4'>
        <img src={HAMBURGER_ICON} alt='hamburger-btn' className='h-10 w-10 mx-2' onClick={() => { dispatch(toggleMenu()) }} />
        <Link to='/'><img src={YOUTUBE_LOGO} alt='logo' className='h-10 w-24' /></Link>
      </div>
      <div className='col-span-8 '>
        <input type='text' placeholder='Search' className='border w-1/2 p-2 rounded-l-full' />
        <button className='bg-gray-300 py-2 px-3 rounded-r-full'><i className="fa fa-search "></i></button>
      </div>
    </div>
  )
}

export default Header
