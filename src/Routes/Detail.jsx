import React from 'react'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/global.context.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

   
   const {state, dispatch} = useContextGlobal()
   const {id} = useParams()
   const {name, username, phone, website} = state.dentista
   useEffect(() => {
     axios(url)
     .then(res => dispatch({type: 'GET_DENTISTA', payload: res.data}))
    }, [])

    const url = `https://jsonplaceholder.typicode.com/users/${id}`
  
  return (
    <>
      <div className='detail'>
        <h1>Detail Dentist id </h1>
        <img className="detail-img" src="../images/doctor.jpg" alt='doctor' />
        <table>
          <tr>
            <td>Nombre</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Usuario</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{website}</td>
          </tr>
          <tr>
            <td>Teléfono</td>
            <td>{phone}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Detail