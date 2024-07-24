import otpGenerator from 'otp-generator';
import dotenv from 'dotenv';
import User from '../Model/User.js';  // Ensure this path is correct
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const getOtp = async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP sent successfully', otp });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};

export const reservation = async (req, res) => {
  const { name, mobile, date, time, email } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Salon Reservation is Comfirmed',
    text: `Your Reservation Date is ${date} and time is ${time}`
  };

  if (!name || !mobile || !date || !time|| !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newReservation = new User({ name, mobile, date, time, email });
    await newReservation.save();
    res.status(200).json({ message: 'Reservation successful' });
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error making reservation:', error);
    res.status(500).json({ message: 'Reservation failed' });
  }
};

export const availableSlot= async(req,res)=>{


  const { date } = req.query;
  const reservations = await User.find({ date });

  const reservedTimes = reservations.map((reservation) => reservation.time);
  const allTimeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM',
    '9:00 PM - 10:00 PM',
  ];

  const availableTimeSlots = allTimeSlots.filter((slot) => !reservedTimes.includes(slot));

  res.send(availableTimeSlots);
}
