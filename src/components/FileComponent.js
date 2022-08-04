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
    const [allData,setAllData]=useState([])
    const [data,setData]=useState([])
    
    const filterData=useFilter()
    const {id}=useParams()
    useEffect(()=>{
     const docRef = doc(firestore,db.engineering,id)
      getDoc(docRef)
     .then((doc)=>{
         setAllData(db.formatedDoc(doc).papers)
         setData(db.formatedDoc(doc).papers)
     })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
   
    useEffect(()=>{
    let newObj={};
    if(filterData.year)newObj.year=filterData.year
    if(filterData.exam)newObj.exam=filterData.exam
    if(filterData.sem)newObj.sem=filterData.sem

    const filteredData = allData.filter(i =>
        Object.entries(newObj).every(([k, v]) => i[k] === v)
      )
      setData(filteredData)

    },[filterData])



console.log(data)


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