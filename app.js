import express from "express";
import mongoose from "mongoose";

import { connectToDb } from "./config/db.js";
import habitRoutes from "./routes/habit.routes.js"
import { getAllHabits } from "./controller/habit.controller.js";

const app = express();


app.use(express.urlencoded({extended:true})); // Allows req.body to pass
app.use(express.static('public'));
app.set('view engine','ejs');

app.use('/habits', habitRoutes);


//Start the server
app.listen(3000,async ()=>{
    await connectToDb();
    console.log("Server is running on port 3000");
    
});

app.get("/habits",getAllHabits);