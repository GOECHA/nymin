import React from 'react'
import './Header.css'
import logo from '../../images/nymin-logo.png'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-wrapper'>
            <img src={logo} alt='logo' className='header-logo'/>
            <h1 className='header'>NY | Min</h1>
        </div>
    </div>
  )
}

export default Header