import otpGenerator from 'otp-generator';
import dotenv from 'dotenv';
import User from '../Model/User.js';  // Ensure this path is correct

dotenv.config();

export const getOtp = async (req, res) => {
  const mobile = req.body.mobile;

  if (!mobile) {
    return res.status(400).json({ message: 'Mobile number is required' });
  }

  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false
  });

  try {
    // Your Twilio code to send OTP would be here, if integrated
    res.status(200).json({ message: 'OTP sent successfully', otp });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};

export const reservation = async (req, res) => {
  const { name, mobile, date, time } = req.body;

  if (!name || !mobile || !date || !time) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newReservation = new User({ name, mobile, date, time });
    await newReservation.save();
    res.status(200).json({ message: 'Reservation successful' });
  } catch (error) {
    console.error('Error making reservation:', error);
    res.status(500).json({ message: 'Reservation failed' });
  }
};
