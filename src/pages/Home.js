import React from 'react'
import styled from 'styled-components'
import Sidbar from '../components/sidebar/index';
const Home = () => {
 const HomeStyles = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 `;

  return (
    <HomeStyles>
      <Sidbar/>
    </HomeStyles>
  )
}

export default Home