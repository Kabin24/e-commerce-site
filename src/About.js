
import HeroSection from './components/HeroSection'
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext()
  const data ={
    name:" Ecomerce Website",
    images: "images/hero2.jpg"
    ,
  }
  return (
  <>
    {myName}
    <HeroSection myData={data}/>
    </>
    
  )
}

export default About