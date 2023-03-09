import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
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
      <h1>about</h1>
    </>
  )
}

export default About
