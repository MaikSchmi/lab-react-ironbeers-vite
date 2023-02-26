import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="homePageExtraCtn">
      <div className="homePageCtn">
          <Link to="/beers" className="homePageLink" style={{textDecoration: "none", color: "black"}}>
              <img src="../../src/assets/beers.png" alt="titleImage" />
              <h2>All Beers</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequuntur repellat eum fugiat delectus cupiditate facilis, quis molestias quisquam ducimus error sequi quas, deserunt quasi porro in. Nihil, modi porro.</p>
          </Link>
          <Link to="/random-beer" className="homePageLink" style={{textDecoration: "none", color: "black"}}>
              <img src="../../src/assets/random-beer.png" alt="titleImage" />
              <h2>Random Beer</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequuntur repellat eum fugiat delectus cupiditate facilis, quis molestias quisquam ducimus error sequi quas, deserunt quasi porro in. Nihil, modi porro.</p>
          </Link>
          <Link to="/new-beer" className="homePageLink" style={{textDecoration: "none", color: "black"}}>
              <img src="../../src/assets/new-beer.png" alt="titleImage" />
              <h2>New Beer</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequuntur repellat eum fugiat delectus cupiditate facilis, quis molestias quisquam ducimus error sequi quas, deserunt quasi porro in. Nihil, modi porro.</p>
          </Link>
      </div>
    </div>
  )
}

export default Home
