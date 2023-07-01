/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useReducer } from "react";
import { createContext, useContext, useEffect } from "react";
import axios from 'axios'
const ContextGlobal = createContext()
const initialState = {
  list: [],
  dentist: {},
  favs :JSON.parse(localStorage.getItem('dentistLikeStorage'))||[],
  theme : true 

}
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
const dentistReducer = (state, action) => {
  switch(action.type){
      case 'LIST':
          return {...state,dentistsList: action.payload}
      case 'DENTIST': 
          return {...state, dentist: action.payload}
     
      case 'FAVS':
           return {...state, dentistLike:[...state.dentistLike, action.payload]}
       
      case 'DELETE': 
           return {...state, dentistLike: action.payload}     
      case 'THEME': 
           return {...state, dentistTheme: action.payload}                
      default:
           throw new Error()
  }
}



const Context = ({children}) => {
  // eslint-disable-next-line no-undef
  const [odontoState, odontoDispatch] = useReducer(odontoReducer, initialState)

  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect(() => {
      axios(url)
      .then(res => odontoDispatch({type: 'LIST', payload: res.data}))
  }, [url])
  
  useEffect(() => {
    localStorage.setItem('FavsStorage', JSON.stringify(odontoState.odontoLike))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [odontoState.favs])


  return(
    <ContextGlobal.Provider value={{
      odontoState, odontoDispatch
    }}>
        {children}
    </ContextGlobal.Provider>
)
}
export default Context

// eslint-disable-next-line react-refresh/only-export-components
export const useContextGlobal = () => useContext(ContextGlobal)