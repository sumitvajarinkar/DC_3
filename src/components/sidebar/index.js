import React from 'react'
import { Icon, Navbar } from './NavbarStyles'
import {AiFillHome} from 'react-icons/ai'
const index = () => {
  return (
    <Navbar>
        <Icon>
            <AiFillHome/>
        </Icon>
        <Icon>
            <AiFillHome/>
        </Icon>
        <Icon>
            <AiFillHome/>
        </Icon>
    </Navbar>
  )
}

export default index