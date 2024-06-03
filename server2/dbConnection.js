import mongoose from "mongoose";
export const Connection=async(username,password)=>{
    try {
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ukpd6rg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
       console.log('db is connected successfully'); 
    } catch (error) {
        console.log(`error in connect with db ${error}`);
    }
    }