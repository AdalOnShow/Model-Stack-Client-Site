import React from 'react'
import HeroSlider from '../components/home/HeroSlider'
import AboutAIModels from '../components/home/AboutAIModels'
import GetStarted from '../components/home/GetStarted'
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AboutAIModels />
      <GetStarted />
    </div>
  )
}

export default Home