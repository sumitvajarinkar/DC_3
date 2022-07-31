import React from 'react'
import {SidebarComponent,Icon} from './styles/Sidebar.styled'
import{MdOutlineDashboardCustomize,MdLogout} from 'react-icons/md'
import {AiFillHome,AiFillFolderAdd} from 'react-icons/ai'
import {BsFillInfoSquareFill} from 'react-icons/bs'
const Sidebar = () => {
    
  return (
    <SidebarComponent>
      
        
      
        <div>
        <h4>QPAPERS</h4>
         <Icon active={true}>
          <MdOutlineDashboardCustomize/>
          <p>Dashborad</p>
         </Icon>
         <Icon>
          <AiFillHome/>
          <p>Home</p>
         </Icon>
         <Icon>
          <BsFillInfoSquareFill/>
          <p>About</p>
         </Icon>
         <Icon>
          <AiFillFolderAdd/>
          <p>Contribute</p>
         </Icon>


        </div>
        <div>
        <Icon>
          <MdLogout/>
          <p>Logout</p>
         </Icon>
        </div>
    </SidebarComponent>
  )
}

export default Sidebar