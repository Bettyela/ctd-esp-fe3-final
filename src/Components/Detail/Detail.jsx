/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usecontextGlobal } from "/utils/Components/GlobalContext";
import "./Detail.css";

// eslint-disable-next-line no-unused-vars
const Detail = () => {
  const [detail, setDetail] = useState([{}])
  const params = useParams()

  const {dispatch} = usecontextGlobal()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(url)
    .then(res => setDetail(res.data))
  }, [])

  return (
    <div className="Detail"> 
      <div>  
        <h1>{detail.name}</h1>
        <h2>{detail.email}</h2>
        <h2>{detail.phone}</h2>
        <h2>{detail.website}</h2>
      </div> 
      <div>
          <button onClick={() => dispatch({type: 'LIKE', payload: detail})}>
          Add to Favorites</button>
    </div>
    </div>
  )
}

export default Detail