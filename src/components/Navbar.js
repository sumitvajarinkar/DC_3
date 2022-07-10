import React, {useState} from "react";
import {Nav, Logo, Hamburger, Menu, MenuLink} from './styles/Navbar.styled';

function Navbar() {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <Nav>
      <Logo href="">
        Q-P<span>apers</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>
      <Menu isOpen={isOpen}>
      <MenuLink href="">Courses</MenuLink>
      <MenuLink href="">About</MenuLink>
      <MenuLink href="">Contact</MenuLink>
      <MenuLink href="">Collaborate</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;
