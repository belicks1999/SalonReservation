import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userAuth from './Auth/userAuth.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); 

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', userAuth);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, () => {
        console.log(`Server running on ${port}`);
      });
}).catch((err)=>{console.log(err)})

