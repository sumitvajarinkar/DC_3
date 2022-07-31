import React from 'react'
import { Card } from './styles/Main.styled'
const MainCompCard = ({img,title,des}) => {
  return (
    <Card>
         <img src={img} alt="img" height="50px" width="50px" />
         <h3>{title}</h3>
         <p>{des}</p>
    </Card>
  )
}

export default MainCompCard