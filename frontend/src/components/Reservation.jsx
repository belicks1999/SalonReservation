import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reservation({ onClose, show }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [inputOtp, setInputOtp] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isOtpSending, setIsOtpSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp !== inputOtp) {
      toast.error("Invalid OTP. Please try again.");
      return;
    }

    const mobileNumber = mobile.replace(/^\+94/, '').replace(/\D/g, '');
    if (mobileNumber.length !== 9) {
      toast.error("Phone number must be 9 digits long.");
      return;
    }


    try {
      if(otp){
      const response = await axios.post('http://localhost:5000/api/user/reserve', { name, mobile, date, time,email });
      toast.success("Reservation successful");
      setMobile('');
      setName('');
      setDate('');
      setTime('');
      setOtp('');
      setInputOtp('');
      setEmail('');
    }else{
      toast.error("Please Verify email");
    }
      
    } catch (error) {
      toast.error("Reservation failed. Please try again.");
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const otpButton = async () => {
    setIsOtpSending(true); // Start loading state
    try {
      if (!isValidEmail(email)) {
        toast.error("Invalid email format.");
      }
      else{
      const response = await axios.post('http://localhost:5000/api/user/otp', { email });
      setOtp(response.data.otp);
      toast.success("OTP sent successfully");
    }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setIsOtpSending(false); // End loading state
    }
  };

  const timeSlots = [
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
    '21:00 - 22:00',
  ];

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 min-w-lg">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded shadow-lg w-96 lg:h-[120] lg:w-1/3"
      >
        <ToastContainer />
        <h2 className="text-xl font-bold mb-4 text-center">Make Reservation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-black p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="flex items-center mb-4">
            <PhoneInput
             defaultCountry="LK"
              className="border-black p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter Your Mobile No"
              value={mobile}
              onChange={setMobile}
              required
            />
           
          </div>
          <div className="flex items-center mb-4">
          <input
            type="email"
            className="border-black p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> 
          <button
              type="button"
              onClick={otpButton}
              disabled={isOtpSending}
              className="ml-4 bg-teal-600 text-white p-2 rounded hover:bg-green-500 transition-colors"

            >{isOtpSending?"Sending" :"Send OTP"}</button>
          </div>
          {otp ? (
            <input
              type="number"
              className="border-black p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter OTP"
              value={inputOtp}
              onChange={(e) => setInputOtp(e.target.value)}
              required
            />
          ) : null}
          <input
            type="date"
            className="border-black p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={date}
            min={getTodayDate()}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <select
            className='border-black p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 bg-gray-600 text-white p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition-colors"
            >
              Reserve
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Reservation;
