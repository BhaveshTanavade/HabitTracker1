import mongoose from "mongoose";

export const connectToDb = async()=>{
  try{
    console.log("Connecting to DB....");
    const resp = await mongoose.connect("mongodb+srv://Bhavesh:Password1@cluster0.hgfwvey.mongodb.net/?retryWrites=true&w=majority&appName=HabitTrackernode");
    console.log("Connected to mongoose DB");
  }catch(err){
    console.log("mongodb connection failed!");
    console.log(err);
  } ; 
};