import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux';

const Home = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="grid grid-cols-12">
      {menuToggle && (<div className='col-span-2'><Sidebar/></div>)}
      <div className={menuToggle ? "col-span-10" : "col-span-12"}><MainContainer /></div>
    </div>
  )
}

export default Home
