import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'

function BeerDetails() {
    const [beer, setBeer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { _id } = useParams();

    const getBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
          .then((response) => {
              setBeer(response.data);
              setIsLoading(false);
          })
          .catch((err) => console.log("Error fetching beer: ", err));
    }

    useEffect(() => {
        getBeer();
    }, [])

    return isLoading ? <div>Loading details... </div> : (
      <>
        <Navbar />
        <div className="beerDetailsCtn">
          <div className="beerDetailsImgCtn">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div>
            <div className="simpleFlex">
              <h1>{beer.name}</h1>
              <h1 className="brightGray">{beer.attenuation_level}</h1>
            </div>
            <div className="simpleFlex">
              <h4 className="brightGray">{beer.tagline}</h4>
              <h4>{beer.first_brewed}</h4>
            </div>
            <div>
              <p>{beer.description}</p>
            </div>
            <div>
              <p className="beerDetailsContributor">{beer.contributed_by}</p>
            </div>
          </div>
        </div>
      </>
  )
}

export default BeerDetails
