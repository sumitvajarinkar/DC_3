import React, {useState} from "react";
import {Nav, Logo, Hamburger, Menu, MenuLink} from './styles/Navbar.styled';

function Navbar() {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <Nav>
      <Logo href="">
        Q-<span>Papers</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>
      <Menu isOpen={isOpen}>
      <MenuLink href="">Our Work</MenuLink>
      <MenuLink href="">About</MenuLink>
      <MenuLink href="">Careers</MenuLink>
      <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;
