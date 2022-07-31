import React,{createContext,useState,useContext} from "react";
 const FilterContext=createContext()
 const FilterUpdate=createContext()

 export const useFilter=()=>{
    return useContext(FilterContext)
 }

 export const useFilterUpdate=()=>{
    return useContext(FilterUpdate)
 } 

export const Provider =({children})=>{
    const [data,setData]=useState([])
    
    const getFilterValues=(values)=>{
        
       setData(values)
    }
    return(
        <FilterContext.Provider value={data}>
            <FilterUpdate.Provider value={getFilterValues}>
              {children}
          </FilterUpdate.Provider>
        </FilterContext.Provider>
    )

}