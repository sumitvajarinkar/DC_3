import React from 'react'
import { Button } from './styles/GlobalStyles'
import { RightSidbarContainer, UserArea,Icon,CloseButton } from './styles/RigthSidbar.styled'
import {FiSettings} from 'react-icons/fi'
import {GrNotification} from 'react-icons/gr'
import Filter from './Filter'
import { useShow ,useShowUpadte} from '../FilterContext'
const RightSidbar = () => {
  const showFilter=useShow()
  const setShowFilter= useShowUpadte()
  return (
    <RightSidbarContainer className={showFilter&&"show"}>
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
        <CloseButton style={{marginTop:'20px'}} onClick={()=>setShowFilter()}>Apply filter</CloseButton>

    </RightSidbarContainer>
  )
}

export default RightSidbar