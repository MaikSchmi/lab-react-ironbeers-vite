import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BeerDetails from './components/BeerDetails'
import Beers from './components/Beers'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route element={<Navbar />}>
          <Route path="/beers" element={<Beers /> } />
          <Route path="/:_id" element={<BeerDetails /> } />
          <Route path="/random-beer" element={<RandomBeer /> } />
          <Route path="/new-beer" element={<NewBeer /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
