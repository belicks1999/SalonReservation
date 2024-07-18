import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {motion} from 'framer-motion';


function Reservation({onClose,show}) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('55');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, mobile, otp, date, time });
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
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  if (!show) return null;
  return (

    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 min-w-lg">
      <motion.div
      initial={{scale:0}}
      animate={{scale:1}}
      transition={{delay:0.2, duration:0.5}}
      className="bg-white p-6 rounded shadow-lg w-80 lg:w-1/3">
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
              className="border-black p-2 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter Your Mobile No"
              value={mobile}
              onChange={setMobile}
              required
            />
            <button
              type="button"
              className="ml-4 bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition-colors"
            >
              Send
            </button>
          </div>
          {otp?<input 
            type="number"
            className="border-black p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />:null}
          

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
