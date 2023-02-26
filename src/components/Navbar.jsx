import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src="../../src/assets/home.png" alt="home" className="navImg"/>
      </Link>
    </nav>
  )
}

export default Navbar
