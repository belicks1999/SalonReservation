import express from 'express';
import {getOtp,reservation,availableSlot } from '../Controller/userControl.js'; // Adjust the path as needed

const router = express.Router();

// Define your routes
router.post('/reserve', reservation);
router.get('/available-slots', availableSlot);
router.post('/otp',getOtp);


export default router;
