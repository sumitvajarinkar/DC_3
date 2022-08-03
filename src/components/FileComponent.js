import React from 'react'
import { CardContainer } from './styles/Main.styled'
import MainCompCard from './MainCompCard'
import { useEffect,useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db, firestore } from '../firebase'
import { useParams } from 'react-router-dom'
import pdf from '../assets/images/pdf.png'
import { useFilter } from '../FilterContext'
const FileComponent = () => {
    const [data,setData]=useState([])
    
    const filterData=useFilter()
    const {id}=useParams()
    useEffect(()=>{
     const docRef = doc(firestore,db.engineering,id)
      getDoc(docRef)
     .then((doc)=>{
         setData(db.formatedDoc(doc).papers)
     })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
    useEffect(()=>{
        
        if(filterData.exam===undefined&&filterData.sem===undefined){
            const result = data.filter(elem=>elem["year"]===filterData.year)
            setData(result)
        }
        if(filterData.exam!==undefined){
            const result = data.filter(elem=>elem["year"]===filterData.year&&elem["exam"]===filterData.exam)
            setData(result)
        }
        if(filterData.exam!==undefined&&filterData.sem!==undefined){
            const result = data.filter(elem=>elem["year"]===filterData.year&&elem["exam"]===filterData.exam&&elem["sem"]===filterData.sem)
            setData(result)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filterData])



  return (
    <CardContainer>
            {
                data.map((file,i)=>(
                    <a href={file?.pdf} key={i}><MainCompCard  img={pdf} title={`${file?.exam.toUpperCase()}.pdf`} des={`${file.exam?.toUpperCase()} ${file?.sem} ${file?.year}`}/></a>
                ))
            }
           </CardContainer>
  )
}

export default FileComponent