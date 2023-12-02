import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import React from "react";
import { reducer } from "../../Reducers/Reducer";

const ContextGlobal = createContext();

const initialState = {
  theme: "",
  data: [],
  dentista:{}, 
  favs: JSON.parse(localStorage.getItem("favs")) || [],}

const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const {favs} = state
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTAS', payload: res.data}))
    
  }, [])
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs])
  
  return (
    <ContextGlobal.Provider value={{ state, favs, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
