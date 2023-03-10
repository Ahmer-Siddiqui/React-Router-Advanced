import React from 'react'
// navlink use for put active class automaticallynpm
import { NavLink } from 'react-router-dom'

const Home = () => {
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
      <h1>Home</h1>
    </>
  )
}

export default Home
