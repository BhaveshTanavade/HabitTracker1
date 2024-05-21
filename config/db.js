import mongoose from "mongoose";

export const connectToDb = async()=>{
  try{
    console.log("Connecting to DB....");
    const resp = await mongoose.connect("mongodb://localhost:27017/habitTracker");
    console.log("Connected to mongoose DB");
  }catch(err){
    console.log("mongodb connection failed!");
    console.log(err);
  } ; 
};