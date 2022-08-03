import React,{createContext,useState,useContext} from "react";
 const FilterContext=createContext()
 const FilterUpdate=createContext()
 const ShowContext=createContext()
 const ShowUpadte=createContext()

 export const useFilter=()=>{
    return useContext(FilterContext)
 }

 export const useFilterUpdate=()=>{
    return useContext(FilterUpdate)
 } 

 export const useShow=()=>{
    return useContext(ShowContext)

 }
 export const useShowUpadte=()=>{
    return useContext(ShowUpadte)

 }

export const Provider =({children})=>{
    const [data,setData]=useState([])
    const [showFilter,setShowFilter]=useState(false)
    const getFilterValues=(values)=>{
        
       setData(values)
    }
    const displayFilter=()=>{
      setShowFilter(!showFilter)
    }
    return(
        <FilterContext.Provider value={data}>
            <FilterUpdate.Provider value={getFilterValues}>
                <ShowContext.Provider value={showFilter}>
                <ShowUpadte.Provider value={displayFilter}>

                {children}
                </ShowUpadte.Provider>
              </ShowContext.Provider>
          </FilterUpdate.Provider>
        </FilterContext.Provider>
    )

}