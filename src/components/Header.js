import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const menuToggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
     {menuToggle ? (<h1>"yes"</h1>) : (<h1>"no"</h1>)}
    </div>
  )
}

export default Header
