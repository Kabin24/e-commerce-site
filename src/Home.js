import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {

  const data={
    name:"Sasto Bazar",
    images: "images/hero1.jpg",
  }
  return <> 
  <HeroSection myData ={data}/>
  <FeatureProduct/>
  <Service/>
  <Trusted/>

  </>

};


export default Home;