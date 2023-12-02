import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Favs = () => {
const {state} = useContextGlobal()
const dentistaFavs = localStorage.getItem('favs')
const parsedDent = JSON.parse(dentistaFavs)
  
return (
  <>
    <div className="favs-fondo">
    <h1>Favs</h1>
      <div className='card-grid'>
        { state.favs.map((parsedDent) => (
          <div key={parsedDent.id}>
          <Card dentista={parsedDent} />
          </div>))}
      </div>
    </div>
  </>
    
  )
  ;
};

export default Favs;
  
  //const removeFav = (favId) => {
  //  const updatedFavs = state.favs.filter((fav) => fav.id !== favId);
  //  dispatch({ type: 'REMOVE_FAV', payload: updatedFavs });
  //  localStorage.setItem('favs', JSON.stringify(updatedFavs));
  //};
  