import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

function Beers() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  const getBeers = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error fetching all beers: ", err));
  }

  useEffect(() => {
    getBeers();
  }, [])

  return (
    isLoading ? <div>Loading...</div> : 
    <div>
      <Navbar />
      <div className="searchInputCtn">
        <input className="searchInput" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {beers.filter(beer => beer.name.startsWith(searchTerm)).map((beer) => {
        return(
          <Link to={"/" + beer._id} key={beer._id} style={{textDecoration: "none", color: "black"}}>
            <div className="beerCard">
              <div className="beerCardImgCtn">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="beerCardInfoCtn">
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>Created by: {beer.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  )
}

export default Beers
