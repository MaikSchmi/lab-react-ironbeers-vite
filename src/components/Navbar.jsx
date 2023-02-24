import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="../../src/assets/home.png" alt="home" style={{width: "100vw"}}/>
      </Link>
    </nav>
  )
}

export default Navbar
