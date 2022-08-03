import React from 'react'
import { ResponsiveMenuContainer,MenuBox } from './styles/ResMenu.styled'
import {MdFilterList} from 'react-icons/md'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import { useShowUpadte} from '../FilterContext'

const ResponsiveMenu = ({setShowMenu}) => {
    const setShowFilter=useShowUpadte()
  return (
    <ResponsiveMenuContainer>
        <MenuBox onClick={()=>setShowMenu(true)} >
         <AiOutlineMenuUnfold/>
         <p>Menu</p>
        </MenuBox>
        <MenuBox onClick={()=>setShowFilter()}>
         <MdFilterList/>
         <p>Filter</p>
        </MenuBox>
    </ResponsiveMenuContainer>
    
  )
}

export default ResponsiveMenu