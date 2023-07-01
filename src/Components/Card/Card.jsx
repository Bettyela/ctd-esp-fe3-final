/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import './Card.css';
// eslint-disable-next-line no-unused-vars
import { usecontextGlobal } from "/utils/Components/GlobalContext"
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line react/prop-types
const Card = ([odonto]) => {

    // Aquí puedes agregar la lógica para guardar la card en localStorage
    // Ejemplo: localStorage.setItem('card', JSON.stringify({ name, username, id }));
    const {odontoState,odontoDispatch} = useContextGlobal()
  
    const findFav = odontoState.favs.find(fav => fav.id === odonto.id)
   
    const addFav = () => { 
      if(!findFav){
        odontoDispatch({type: 'FAVS', payload: odonto})
      } 
  }

  return (    
    <div className="card">
      <Link to={`/detalle/${odonto.id}`} >
        <img src="/images/doctor.jpg" alt='Doctor'/>
        <h1>{odonto.name}</h1>
        <h5>Username: {odonto.username}</h5> 
      </Link>
      <button onClick={addFav}>⭐</button>
    </div>    
  )
}


export default Card