import React from 'react'
import styled from 'styled-components'
import BreadCrum from '../components/BreadCrum'
import folder from '../assets/images/folder-invoices.png'
import MainCompCard from '../components/MainCompCard'
import RightSidbar from '../components/RightSidbar'
import Sidebar from '../components/Sidebar'
import { CardContainer, MainComponent } from '../components/styles/Main.styled'
import { useEffect } from 'react'
import {getDocs,collection} from 'firebase/firestore'
import {firestore,db} from '../firebase'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Course = () => {
    const [data,setData]=useState([])
    const CatlogStyles=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    `
    useEffect(()=>{
      const getAllDocs=async()=>{
        const querySnapshot= await getDocs(collection(firestore,"Engineering"))
        const tempDoc=[]
        querySnapshot.forEach((doc)=>{
          const id =db.formatedDoc(doc).id
          tempDoc.push(id)
        })
        setData(tempDoc)
      }
      getAllDocs()
    },[])
    
  return (
    <CatlogStyles>
        <Sidebar/>
          <MainComponent>
          <div style={{width:'100%'}}>
            <h2>Engineering</h2>
           </div>
           <BreadCrum/>
           <CardContainer>
            {
                data.map((branch)=>(
                   <Link to={`/course/${branch}`}> <MainCompCard key={branch} img={folder} title={branch} des={"Total 6 files"}/></Link>
                ))
            }
           </CardContainer>
          </MainComponent>
        <RightSidbar/>
    </CatlogStyles>
  )
}

export default Course