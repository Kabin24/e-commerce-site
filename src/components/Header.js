import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';
import logoimg from "../images/logo1.png"
const Header = () => {
  return (
   <MainHeader>
        <NavLink to="/">
            <img src={logoimg} alt ="my logo img " />

        </NavLink>
        <Nav/>

   </MainHeader>
  )
}
  const MainHeader = styled.header`
    height: 10rem;
    background-color:#B2FFFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
 
 .logo{
        height: 3rem;
}
  `;


export default Header;