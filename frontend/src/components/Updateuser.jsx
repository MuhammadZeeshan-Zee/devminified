import { FormGroup, FormControl, InputLabel,Input,Button,styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Updateuser() {
    const {id}=useParams()

    const [formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        phonenumber:''
      })
      const handleinput=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
      }
      const handleSubmit=async(event)=>{
        try {
          event.preventDefault()
        console.log('im handle update function',formData);
        const res= await axios.put(`http://localhost:5002/update/${id}`,formData)
        console.log(res);
        } catch (error) {
          console.log('error while api calling the errr is ',error);
        }
      }
      const fetchdata=async()=>{
        try {
         let response =await axios.get(`http://localhost:5002/readuser/${id}`)
         console.log(response.data);
         return setFormData({
            firstname:response.data.firstname,
            lastname:response.data.lastname,
            email:response.data.email,
            phonenumber:response.data.phonenumber
          })
     
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
      <form 
      onSubmit={handleSubmit}
      >
    <FormControl>
    <InputLabel >First Name</InputLabel>
    <Input name='firstname'
    value={formData.firstname} onChange={(e)=>{handleinput(e)}}
    />
    </FormControl><br/><br/>

    <FormControl>
    <InputLabel >Last Name</InputLabel>
    <Input name='lastname'
    value={formData.lastname} onChange={(e)=>{handleinput(e)}}
    />
    </FormControl><br/><br/>
    
    <FormControl>
    <InputLabel >Email</InputLabel>
    <Input name='email' 
    value={formData.email} onChange={(e)=>{handleinput(e)}}
    />
    </FormControl><br/><br/>
    
    <FormControl>
    <InputLabel >Phone Number</InputLabel>
    <Input name='phonenumber' 
    value={formData.phonenumber}  onChange={(e)=>{handleinput(e)}}
    />
    </FormControl><br/><br/>

    <FormControl>
    <Button variant="contained" type='submit'>Update user</Button>
    </FormControl>
    </form>
   
    </div>
  )
}

export default Updateuser
