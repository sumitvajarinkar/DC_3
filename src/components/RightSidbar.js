import React from 'react'
import { Button } from './styles/GlobalStyles'
import { RightSidbarContainer, UserArea,Icon } from './styles/RigthSidbar.styled'
import {FiSettings} from 'react-icons/fi'
import {GrNotification} from 'react-icons/gr'
import Filter from './Filter'
const RightSidbar = () => {
  return (
    <RightSidbarContainer>
      <UserArea>
       <Icon>
       <FiSettings/>
       </Icon>
       <Icon>
      <GrNotification/>
       </Icon>
        <Button>
          Login
        </Button>
        </UserArea>
        <Filter/>
    </RightSidbarContainer>
  )
}

export default RightSidbar