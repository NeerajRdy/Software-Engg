import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/Auth.js';


dotenv.config() 
const app = express()
const port = process.env.PORT


app.use(cors(
    { 
    // credentials : true,
    origin: process.env.ORIGIN_URI 
  } 
  )); 

app.use(express.json())
app.use('/api/auth', router);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log("Connected to DB");
      app.listen(port, () => {
      console.log(`Listening on PORT ${port}`);
    }); 
  })
  .catch((error) => {
    console.error("Error connecting to DB:", {mesage : error}); 
  });
