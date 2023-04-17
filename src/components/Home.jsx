import React from 'react'
import './HomeStyles.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Prayers from './Prayers'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Prayers/>
    </div>
  )
}

export default Home