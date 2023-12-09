import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";

const Home = () => {

  const data={
    name:"Sasto Bazar",
    images: "images/hero1.jpg",
  }
  return <HeroSection myData ={data}/>
};


export default Home;