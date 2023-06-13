import { useState, useEffect } from 'react'
import { Routes, Route, Link} from "react-router-dom";
import './App.css'
import Players from './components/allPlayers/Players.jsx'
import HomeMain from './components/home/HomeMain.jsx'
import PlayerMake from './components/makePlayer/PlayerMake.jsx'
import NavBar from './components/navBarAll/NavBar.jsx'
import SinglePlayer from './components/onePlayer/SinglePlayer.jsx'




function App() {
  const [puppies, setAllPuppies] = useState([])


  useEffect(() => {
    async function fetchProducts() {
      try {
          const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
          const data = await response.json()
          const actualData = data.data.players

          setAllPuppies(actualData)
        } catch (error) {
        console.log('API not fetched')

        }
      }

      console.log(puppies)
      fetchProducts()
    }, [])


  return (
    <div>
      <NavBar />

        <Routes>
          <Route path='/' element={<HomeMain/>} />
          <Route path='/allPlayers' element={<Players puppies = {puppies} />} />
          <Route path='/allPlayers/puppyId' element={<SinglePlayer puppies = {puppies} />} />
          <Route path='/makePlayer' element={<PlayerMake puppies = {puppies} setPuppies = {setAllPuppies} />} />
        </Routes>
    </div>
  )
}

export default App
