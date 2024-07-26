import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userAuth from './Auth/userAuth.js';
import adminAuth from './Auth/adminAuth.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from './config/passport-config.js';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'hasna', // Use an environment variable for security
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60// 1 hour
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', userAuth);
app.use('/api/admin', adminAuth);

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
}).catch((err) => {
  console.log(err);
});
