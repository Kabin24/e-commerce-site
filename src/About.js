import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data ={
    name:" Ecomerce Website",
    images: 
        "images/hero2.jpg"
    ,
  }
  return (
    <HeroSection myData={data}/>
  )
}

export default About