import React from 'react'
import HeroSlider from '../components/home/HeroSlider'
import AboutAIModels from '../components/home/AboutAIModels'
import GetStarted from '../components/home/GetStarted'
import FeaturedModels from '../components/home/FeaturedModels'
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FeaturedModels />
      <AboutAIModels />
      <GetStarted />
    </div>
  )
}

export default Home