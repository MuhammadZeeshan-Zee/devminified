import React from 'react'
import { useState } from 'react'
import { FormGroup, FormControl, InputLabel,Input,Button,styled } from '@mui/material'
import {useNavigate} from 'react-router-dom'

import axios from 'axios'
const Btn=styled(Button)`
width:40px;
display:flex;
justify-content:center;
`
function Adduser() {
  let navigate=useNavigate()

  const [formData,setFormData]=useState({
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:''
  })
  
  
  const handleinput=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  console.log(formData);
  const handleSubmit=async(event)=>{
    try {
      event.preventDefault()
    console.log('im handle post function',formData);
    const res= await axios.post('http://localhost:5002/adduser',formData)
    navigate('/alluser')

    console.log(res);
    } catch (error) {
      console.log('error while api calling the errr is ',error);
    }
    
  }
  return (
    <div>
    <h1>Add user</h1>
   
    <form onSubmit={handleSubmit}>
    <FormControl>
    <InputLabel >First Name</InputLabel>
    <Input name='firstname'value={formData.firstname} onChange={(e)=>{handleinput(e)}}/>
    </FormControl><br/><br/>

    <FormControl>
    <InputLabel >Last Name</InputLabel>
    <Input name='lastname'value={formData.lastname} onChange={(e)=>{handleinput(e)}}/>
    </FormControl><br/><br/>
    
    <FormControl>
    <InputLabel >Email</InputLabel>
    <Input name='email' value={formData.email} onChange={(e)=>{handleinput(e)}}/>
    </FormControl><br/><br/>
    
    <FormControl>
    <InputLabel >Phone Number</InputLabel>
    <Input name='phonenumber' value={formData.phonenumber}  onChange={(e)=>{handleinput(e)}}/>
    </FormControl><br/><br/>

    <FormControl>
    <Button variant="contained" type='submit'>Add user</Button>
    </FormControl>
    </form>
   
    
    

    

    </div>
  )
}

export default Adduser
