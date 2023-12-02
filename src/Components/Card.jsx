import React from "react";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { useContextGlobal } from './utils/global.context.jsx'
import { useEffect } from "react";

const Card = ({dentista}) => {
  const {state, dispatch} = useContextGlobal()
    
  const removeFav = () => {
    const updatedFavs = state.favs.filter((fav) => fav.id !== dentista.id);
    dispatch({ type: 'DELETE_FAV', payload: updatedFavs });
  };
  
  const findFav = state.favs.find((fav) => fav.id == dentista.id)
  const addFav = () => {
    if(findFav){
      alert('Ese personaje ya está agregado a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: dentista})
    }
  }

  return (
    <div className="card">
      <Link to={'/detail/' + dentista.id}>
        <div className="div-name">
          <h4>{dentista.id} - {dentista.name}</h4>
        </div>
        <img src="./images/doctor.jpg" alt='doctor' />
        <h5>{dentista.username}</h5>
      </Link>
        {!findFav?<button onClick={addFav} className="favButton">⭐</button>:<button onClick={removeFav} className="favButton">🗑</button>}
    </div>
  );
};

export default Card;
