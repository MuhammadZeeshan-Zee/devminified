import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
function Readsingle() {
    const {id}=useParams()
  const [data, setData]=useState([])

    const fetchdata=async()=>{
        try {
         let response =await axios.get(`http://localhost:5002/readuser/${id}`)
         console.log(response.data);
         return setData(response.data)
     
        } catch (error) {
         console.error('error:', error);
            console.error('error.name:', error.name);
            console.error('error.stack:', error.stack);
            console.error('error.code:', error.code);
        }
       }
    useEffect(()=>{
        fetchdata()
      },[])
  return (
    <div>
        <table>
  <thead>
    <tr>
      <th>Id</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Email</th>
      <th>Phone Number</th>
    </tr>
  </thead>
  <tbody>
  <tr key={data.userId}>
      <td>{data.userId}</td>
      <td>{data.firstname}</td>
      <td>{data.lastname}</td>
      <td>{data.email}</td>
      <td>{data.phonenumber}</td>
      
    </tr>
    
 </tbody>
</table>
    </div>
  )
}

export default Readsingle
