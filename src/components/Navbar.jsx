import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

import './NavbarStyles.css'

const Navbar = () => {

const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

  return (
    <header>
    <nav className='navbar'>
        <div className='logo'>
          <Link to='/'>
           <img src={Logo} alt="Plant The Seed Logo" />
          </Link> 
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className='nav-link'>About</Link>
            </li>
            <li className="nav-item">
                <Link to='/prayers' className='nav-link'>Prayers</Link>
            </li>
            <li className="nav-item">
                <Link to='/faq' className='nav-link'>FAQ</Link>
            </li>
            <li className="nav-item">
                <Link to='/' className='nav-link'>Contact</Link>
            </li>
        </ul>
{/* Hamburger Nav */}
<div className="hamburger" onClick={handleClick}>
    {click ? (<FaTimes size={20} style={{color: '#fefae0'}}/>) : (<FaBars size={20} style={{color: '#fefae0'}}/>) }
</div>
    </nav>
    </header>
  )
}

export default Navbar