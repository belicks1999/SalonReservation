import express from 'express';
import {getOtp, reservation} from '../Controller/userControl.js';

const router = express.Router();

router.post('/otp',getOtp);
router.post('/reserve',reservation);

export default router;