import React from 'react'
import './HomeStyles.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Prayers from './Prayers'
import Testimonials from './Testimonials'
import Faq from './Faq'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Prayers/>
    <Testimonials/>
    <Faq/>
    </div>
  )
}

export default Home