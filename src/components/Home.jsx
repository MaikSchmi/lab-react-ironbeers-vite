import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to="/beers" style={{textDecoration: "none", color: "black"}}>
            <img src="../../src/assets/beers.png" alt="titleImage" style={{width: "100vw"}} />
            <h2 style={{fontWeight: "unset"}}>All Beers</h2>
            <p style={{color: "gray"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequuntur repellat eum fugiat delectus cupiditate facilis, quis molestias quisquam ducimus error sequi quas, deserunt quasi porro in. Nihil, modi porro.</p>
        </Link>
        <Link to="/random-beer" style={{textDecoration: "none", color: "black"}}>
            <img src="../../src/assets/random-beer.png" alt="titleImage" style={{width: "100vw"}} />
            <h2 style={{fontWeight: "unset"}}>Random Beer</h2>
            <p style={{color: "gray"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequuntur repellat eum fugiat delectus cupiditate facilis, quis molestias quisquam ducimus error sequi quas, deserunt quasi porro in. Nihil, modi porro.</p>
        </Link>
        <Link to="/new-beer" style={{textDecoration: "none", color: "black"}}>
            <img src="../../src/assets/new-beer.png" alt="titleImage" style={{width: "100vw"}} />
            <h2 style={{fontWeight: "unset"}}>New Beer</h2>
            <p style={{color: "gray"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequuntur repellat eum fugiat delectus cupiditate facilis, quis molestias quisquam ducimus error sequi quas, deserunt quasi porro in. Nihil, modi porro.</p>
        </Link>
    </div>
  )
}

export default Home
