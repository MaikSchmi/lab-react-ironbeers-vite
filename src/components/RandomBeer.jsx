import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getRandomBeer = () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                setRandomBeer(response.data);
                setIsLoading(false);
            })
            .catch((err) => console.log("Error fetching random beer: ", err));
    }

  useEffect(() => {
    getRandomBeer();
  }, [])

  return isLoading ? <div>Loading data...</div> : (
    <div className="beerCardCtn">
      <>
        <div className="beerDetailsCtn">
          <div className="beerDetailsImgCtn">
            <img src={randomBeer.image_url} alt={randomBeer.name} />
          </div>
          <div>
            <div className="simpleFlex">
              <h1>{randomBeer.name}</h1>
              <h1 className="brightGray">{randomBeer.attenuation_level}</h1>
            </div>
            <div className="simpleFlex">
              <h4 className="brightGray">{randomBeer.tagline}</h4>
              <h4>{randomBeer.first_brewed}</h4>
            </div>
            <div>
              <p>{randomBeer.description}</p>
            </div>
            <div>
              <p className="beerDetailsContributor">{randomBeer.contributed_by}</p>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default RandomBeer
