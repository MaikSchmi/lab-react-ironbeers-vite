import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img src="../../src/assets/home.png" alt="home" className="navImg"/>
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
