import React from 'react';
import NavbarStyled from './Navbar.styled';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <NavbarStyled>
    <h1>Home
    <Link to="/" style={{width:"100%"}}></Link>
    </h1>
    <h1>Projects
      <Link to="/Projects" style={{width:"100%"}}></Link>
    </h1>
  </NavbarStyled>;
}
