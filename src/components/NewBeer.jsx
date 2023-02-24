import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

function NewBeer() {
    const [name , setName] = useState("")
    const [tagline , setTagline] = useState("")
    const [description , setDescription] = useState("")
    const [firstBrewed , setFirstBrewed] = useState("")
    const [brewersTips , setBrewersTips] = useState("")
    const [attenuationLevel , setAttenuationLevel] = useState(10)
    const [contributedBy , setContributedBy] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userInput = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", userInput )
            .then((response) => console.log("RESPONSE: ", response));
        
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
    }

  return (
    <>
        <Navbar />
        <div className="newBeerCtn">
            <h1>Create a new beer</h1>
        <form className="newBeerFrm" onSubmit={handleFormSubmit}>
            <div className="newBeerFrmInputCtn">
                <label>Name<br/>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
            </div>
            <div className="newBeerFrmInputCtn">
                <label>Tagline<br/>
                    <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
                </label>
            </div>
            <div className="newBeerFrmInputCtn descriptionCtn">
                <label>Description<br/>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
            </div>
            <div className="newBeerFrmInputCtn">
                <label>First Brewed<br/>
                    <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
                </label>
            </div>
            <div className="newBeerFrmInputCtn">
                <label>Brewer's Tips<br/>
                    <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)}/>
                </label>
            </div>
            <div className="newBeerFrmInputCtn">
                <label>Attenuation Level<br/>
                    <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)}/>
                </label>
            </div>
            <div className="newBeerFrmInputCtn">
                <label>Contributed By<br/>
                    <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)}/>
                </label>
            </div>
            <div className="newBeerBtn">
                <button type="submit">Add New</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default NewBeer
