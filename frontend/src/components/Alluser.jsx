import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Alluser() {
  let navigate=useNavigate()

  const [data, setData]=useState([])

  const fetchdata=async()=>{
   try {
    let response =await axios.get('http://localhost:5002/readalluser')
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
  console.log(data);
  const handledelete=(id)=>{
    const res=axios.delete(`http://localhost:5002/deleteuser/${id}`)

  }
  useEffect(()=>{
    fetchdata()
  },[handledelete])
  
  return (
    <div>
      <h1>All users</h1>
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
  {
    data.map((d,ind)=>{
    return(
    <tr key={d.userId}>
      <td>{d.userId}</td>
      <td>{d.firstname}</td>
      <td>{d.lastname}</td>
      <td>{d.email}</td>
      <td>{d.phonenumber}</td>
      <td><NavLink to={`/readuser/${d._id}`}>Read</NavLink></td>
      <td><NavLink to={`/update/${d._id}`}>Edit</NavLink></td>
      <td><button onClick={()=>{handledelete(d._id)}}>delete</button></td>
    </tr>
    )
    })
  }
    
  </tbody>
</table>
    </div>
  )
}

export default Alluser
