import dotenv from 'dotenv';
import User from '../Model/User.js'; 
import Admin from '../Model/Admin.js';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import passport from 'passport';

dotenv.config();


//configuration for email
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


//admin side reservation logic
export const makeReservation = async (req, res) => {
  const { name, mobile, date, time, email } = req.body;

  try {
    const newReservation = new User({ name, mobile, date, time, email });
    await newReservation.save();
    res.status(200).json({ message: 'Reservation successful' });
  } catch (error) {
    console.error('Error making reservation:', error);
    res.status(500).json({ message: 'Reservation failed' });
  }
};


//admin side get reservation
export const getReservation = async (req, res) => {
  try {
    const allreservation = await User.find();
    res.status(200).json({ allreservation });
  } catch (error) {
    res.status(400).json({ error });
  }
};


//admin side delete reservation
export const deleteReservation = async (req, res) => {
  try {
    const id = req.params.id;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    // Find the user and get the email address
    const user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const email = user.email;

    // Delete the reservation
    const deletedReservation = await User.findByIdAndDelete(id);

    if (!deletedReservation) {
      return res.status(404).json({ error: 'Reservation not found' });
      
    }
    res.status(200).json({ message: 'Reservation deleted successfully', deletedReservation });


    // Prepare the mail options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Reservation cancelled',
      text: 'Your Reservation has been cancelled'
    };

    // Send the cancellation email
    await transporter.sendMail(mailOptions);

    
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'An error occurred while deleting the reservation' });
  }
};


//admin side login
export const adminLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {//redirect to the passport-config to use passport.js 
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Logged in successfully' });
    });
  })(req, res, next);
};


//check admin authentication
export const Auth = (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ isAuthenticated: true });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
};


//logic for admin logout
export const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Session destruction failed' });
      }
      res.clearCookie('connect.sid'); // Clears the cookie that stores the session ID
      res.status(200).json({ message: 'Logged out successfully' });
    });
  });
};