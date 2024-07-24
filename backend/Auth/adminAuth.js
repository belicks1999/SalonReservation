import express from 'express';
import { makeReservation, getReservation, deleteReservation, adminLogin ,Auth,logout} from '../Controller/adminControl.js';
import { isAuthenticated } from './authMiddleware.js';

const router = express.Router();

router.post('/reservation', isAuthenticated, makeReservation);
router.get('/allreservation', isAuthenticated, getReservation);
router.delete('/:id', isAuthenticated, deleteReservation);
router.post('/login', adminLogin);
router.get('/check-auth',Auth);
router.post('/logout',logout)

export default router;
