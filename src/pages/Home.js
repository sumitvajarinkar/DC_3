import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Container } from '../components/styles/Container.styled';
import Content from '../Content';
import Navbar from '../components/Navbar';
const Home = () => {
 
  return (
    <>
    <Navbar/>
    <Header />
        <Container>
        {Content.map((item,index)=>(
          <Card key={index} item={item}/>
        ))}
        </Container>
      <Footer/>
      </>
  )
}

export default Home