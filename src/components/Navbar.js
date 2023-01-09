import React from 'react'
import logo from '../images/logo.png'


function Navbar() {
  return (
    <nav>
        <img src={logo} alt='' className='logo'></img>
        <div className='title'>my travel journal</div>
    </nav>
  )
}


export default Navbar;