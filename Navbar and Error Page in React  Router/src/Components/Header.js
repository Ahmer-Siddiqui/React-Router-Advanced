import React from 'react'
// navlink use for put active class automatically
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
          {/* we use to on the place of href */}
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
