import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/redux/appSlice';
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-12 pt-2'>
      <div className='flex col-span-4'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' alt='hamburger-btn' className='h-10 w-10 mx-2' onClick={() => {dispatch(toggleMenu())}}/>
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='logo' className='h-10 w-24'/>
      </div>
    <div className='col-span-8 '>
      <input type='text' placeholder='Search' className='border w-1/2 p-2 rounded-l-full'/>
      <button className='bg-gray-300 py-2 px-4 rounded-r-full'><i className="fa fa-search "></i></button>
    </div>
    </div>
  )
}

export default Header
