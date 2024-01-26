import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux';

const Home = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="grid grid-cols-12 mt-3 pl-2">
      {menuToggle && (<div className='col-span-2'><Sidebar/></div>)}
      <div className={menuToggle ? "col-span-10 pl-2" : "col-span-12 pl-2"}><MainContainer /></div>
    </div>
  )
}

export default Home
