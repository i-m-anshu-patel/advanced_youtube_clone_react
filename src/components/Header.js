import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/redux/appSlice';
import { HAMBURGER_ICON, YOUTUBE_LOGO } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const searchText = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search', {state: {searchText : searchText.current.value}})
  }
  return (
    <div className='grid grid-cols-12 py-4 shadow-md sticky top-0 bg-white z-20'>
      <div className='flex col-span-4'>
        <img src={HAMBURGER_ICON} alt='hamburger-btn' className='h-10 w-10 mx-2' onClick={() => { dispatch(toggleMenu()) }} />
        <Link to='/'><img src={YOUTUBE_LOGO} alt='logo' className='h-10 w-24' /></Link>
      </div>
      <div className='col-span-8 '>
        <form onSubmit={handleSubmit}>
          <input type='text' ref={searchText} placeholder='Search' className='border w-1/2 p-2 rounded-l-full' />
          <button className='bg-gray-300 py-2 px-3 rounded-r-full'><i className="fa fa-search "></i></button>
        </form>
      </div>
    </div>
  )
}

export default Header
