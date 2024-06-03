// import Student from "./schema.js";
import User from './modelautoincrement.js'
export const adduser=async(req,res)=>{
    try {
        const bodydata=req.body
        console.log(bodydata);
        const user=User(bodydata)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(409).json({message:error.message})
    }  
}
export const readalluser=async(req,res)=>{
    try {

        const allstudentdata=await User.find({})
        res.status(201).json(allstudentdata)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
export const readuser=async(req,res)=>{
    try {
        const id=req.params.id
        const studentdata=await User.findById({_id:id})
        res.status(201).json(studentdata)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
export const updateuser=async(req,res)=>{
    try {
        const id=req.params.id
        const studentdata=await User.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(studentdata)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
} 
export const deleteuser=async(req,res)=>{
    try {
        const id=req.params.id
        const studentdata=await User.findByIdAndDelete({_id:id})
        res.status(200).json(studentdata)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
} 