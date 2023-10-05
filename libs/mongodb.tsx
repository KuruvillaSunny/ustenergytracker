require('dotenv').config();
import mongoose from "mongoose";

const connectMongoDB = async() =>{
    console.log(`${process.env.MongoDBConnectionString}`)
    try{
        await mongoose.connect(`${process.env.MongoDBConnectionString}`);
        console.log("Connected to MongoDb")
    }   
    catch(error){
        console.log(error)
    } 
}

export default connectMongoDB