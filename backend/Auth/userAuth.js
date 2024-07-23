import express from 'express';
import {getOtp, reservation, availableSlot} from '../Controller/userControl.js';


const router = express.Router();

router.post('/otp',getOtp);
router.post('/reserve',reservation);
router.get('/available-slots',availableSlot);
router.post('/admin')

export default router;