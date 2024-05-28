import mongoose from "mongoose";

export const connectToDb = async()=>{
  try{
    console.log("Connecting to DB....");
    const resp = await mongoose.connect("mongodb://35.160.120.126:27017/habitTracker");
    console.log("Connected to mongoose DB");
  }catch(err){
    console.log("mongodb connection failed!");
    console.log(err);
  } ; 
};