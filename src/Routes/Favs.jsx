/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/GlobalContext'
function Favs() {
  const {odontoState}= useContextGlobal()

  return (

    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       
      {odontoState.favs.map(odonto => <Card odonto={odonto} key={odonto.id}/>)}
      
       
      </div>
     
    </>
  );
   

}

export default Favs;
