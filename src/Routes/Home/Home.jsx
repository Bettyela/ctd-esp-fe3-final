/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../../Components/Card/Card'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import {useContextGlobal} from '../Components/utils/GlobalContext'


const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const {odontoState} = useContextGlobal()
  return (
    <main className="Home" >
      <h1>Dentists:</h1>
      <p>click on the card to see details of the dentist.</p>
      <div className='card-grid'>
      {odontoState.list.map(odonto => (<Card odonto={odonto} key ={odonto.id}/>))}      </div>
    </main>
  )
}

export default Home