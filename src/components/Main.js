import React from 'react'
import { CardContainer, MainComponent } from './styles/Main.styled'
import { Link } from 'react-router-dom'
import MainCompCard from './MainCompCard'
import engineericon from '../assets/images/engineericon.png'
import BreadCrum from './BreadCrum'
const Main = () => {
 
  return (
    <MainComponent>
        <div style={{width:'100%'}}>
         <h2>COURSE CATLOG</h2>
        </div>
        <BreadCrum/>
        <CardContainer>
      <Link to="/catlog/Engineering"><MainCompCard img={engineericon} title={"Degree Engineering"} des="Total 8 courses"/></Link>
      <Link to="/catlog/MBA"><MainCompCard  img={engineericon} title={"MBA"} des="Total 8 courses"/></Link>
      <Link to="/catlog/BBA"><MainCompCard  img={engineericon} title={"BBA"} des="Total 8 courses"/></Link>
      <Link to="/catlog/Diploma" ><MainCompCard  img={engineericon} title={"Diploma"} des="Total 8 courses"/></Link>
      </CardContainer>
    </MainComponent>
    
  )
}

export default Main