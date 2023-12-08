import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

const Header = () => {
  return (
   <MainHeader>
        <NavLink to="/">
            <img src="./images/logo1.png" alt ="my logo images " />

        </NavLink>
        <Nav/>

   </MainHeader>
  )
}
  const MainHeader = styled.header`
    height: 10rem;
    
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
 
 .logo{
        height: 3rem;
}
  `;


export default Header;