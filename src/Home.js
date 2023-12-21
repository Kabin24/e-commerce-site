

import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {

  const data={
    name:"Sasto Bazar",
  
  }
  return (
  <> 
  <HeroSection myData ={data}/>
  <FeatureProduct/>
  <Service/>
  <Trusted/>

  </>
  )

};


export default Home;