import { createContext,useContext, useReducer } from "react";
import { useProductContext } from "../context/productcontext";

const FilterContext =createContext();


 export const FilterContextProvider =({children})=>{
   const {products } =useProductContext();

   const[state,dispatch] = useReducer=(reduce ,initialState);


return(
   <FilterContext.Provider value ={{ ...state }}>
    {children}
   </FilterContext.Provider>
   )
}

 export const useFilterContext =() =>{
    return useContext(FilterContext);
 }