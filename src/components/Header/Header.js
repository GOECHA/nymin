import React from 'react'
import './Header.css'
import logo from '../../images/nymin-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-wrapper'>
          <Link to='/'>
            <img src={logo} alt='logo' className='header-logo'/>
          </Link>
            <h1 className='header'>NY | Min</h1>
        </div>
    </div>
  )
}

export default Header