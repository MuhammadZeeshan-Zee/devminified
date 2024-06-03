import express from "express"
const app=express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
app.use(cors())
app.use(express.json())

import mongoose from 'mongoose'
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
import { Connection } from "./dbConnection.js"
Connection(username,password)

// application level middleware start
// const reqfilter=(req,res,next)=>{
// console.log('im reqfilter func');
// if(!req.query.age){
//     res.send('please fill age in the link bar')
// }
// else if(req.query.age<18){
//     res.send('invalid for this service')
// }
// else{
//     next()
// }
// }
// app.use(reqfilter)
// app.get('/',(req,res)=>{
// res.send('welcome to home page')
// })
// app.get('/contact',(req,res)=>{
// res.send('welcome to contact page')
// })
// app.get('/about',(req,res)=>{
// res.send('welcome to about page')
// })
// application level middleware

// route middleware for single route start
// const reqfilter=(req,res,next)=>{
//     console.log('im reqfilter func');
//     if(!req.query.age){
//         res.send('please fill age in the link bar')
//     }
//     else if(req.query.age<18){
//         res.send('invalid for this service')
//     }
//     else{
//         next()
//     }
//     }
    
//     app.get('/',(req,res)=>{
//     res.send('welcome to home page')
//     })
//     app.get('/contact',(req,res)=>{
//     res.send('welcome to contact page')
//     })
//     app.get('/about',reqfilter,(req,res)=>{
//     res.send('welcome to about page')
//     })
// route middleware for single route end

// route middleware for more routes and outside the file start
// import {reqfilter} from './middleware.js'
// const reqfilter=(req,res,next)=>{
//     console.log('im reqfilter func');
//     if(!req.query.age){
//         res.send('please fill age in the link bar')
//     }
//     else if(req.query.age<18){
//         res.send('invalid for this service')
//     }
//     else{
//         next()
//     }
//     }
//     const route=express.Router
//     app.use('/',route)
//     route.use(reqfilter)
//     app.get('/',(req,res)=>{
//     res.send('welcome to home page')
//     })
//     route.get('/contact',(req,res)=>{
//     res.send('welcome to contact page')
//     })
//     route.get('/about',(req,res)=>{
//     res.send('welcome to about page')
//     })
import multer from "multer" 
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploadsfolder")
        },
        filename:function(res,file,cb){
            cb(null,file.originalname+"-"+Date.now()+".jpeg")
        }
    }) 
}).single("userfolder")   
app.post('/uploads',upload,(req,res)=>{
res.send("file uploaded")
})
import { adduser } from "./usercontroler.js"
app.post('/adduser',adduser)    
import { readalluser } from "./usercontroler.js"
app.get('/readalluser',readalluser)
import { readuser } from "./usercontroler.js"
app.get('/readuser/:id',readuser)
import { updateuser } from "./usercontroler.js"
app.put('/update/:id',updateuser)
import { deleteuser } from "./usercontroler.js"
app.delete("/deleteuser/:id",deleteuser)
const port = 5002
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})