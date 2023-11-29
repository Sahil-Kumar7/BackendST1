import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from "./Routes/bookRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const url = process.env.MONGOURL;

mongoose.connect(url)
.then(()=>{
    console.log("Database connect hogyaa");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch(error => console.log("tumse na ho payega"))

app.use('/api',route);