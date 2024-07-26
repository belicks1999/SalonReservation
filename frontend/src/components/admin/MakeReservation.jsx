import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';

const AdminMakeReservation = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      //fetch availble slots based on current time
      if (date) {
        try {
          const response = await axios.get('http://localhost:5000/api/user/available-slots', { params: { date } });
          const slots = response.data;
          const now = new Date();
          const nowMinutes = now.getHours() * 60 + now.getMinutes();

          const filteredSlots = date === getTodayDate()
            ? slots.filter(slot => {
                const slotStartTimeInMinutes = parseTimeString(slot);
                return slotStartTimeInMinutes > nowMinutes;
              })
            : slots;

          setAvailableTimeSlots(filteredSlots);
        } catch (error) {
          console.error('Error fetching available slots:', error);
          toast.error("Failed to fetch available time slots.");
        }
      }
    };

    fetchAvailableSlots();
  }, [date]);


  //convert time slot start time to minutes
  const parseTimeString = (timeString) => {
    const startTime = timeString.split(' - ')[0].trim();
    const [time, modifier] = startTime.split(' ');
    const [hours, minutes] = time.split(':').map(Number);

    let adjustedHours = hours;
    if (modifier === 'PM' && hours !== 12) {
      adjustedHours += 12;
    } else if (modifier === 'AM' && hours === 12) {
      adjustedHours = 0;
    }

    return adjustedHours * 60 + minutes;
  };

  const makeReservation = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    //reservation

    try {
      const response = await axios.post('http://localhost:5000/api/admin/reservation', { name, mobile, date, time, email },{ withCredentials: true });
      toast.success("Reservation successful");
      setMobile('');
      setName('');
      setDate('');
      setTime('');
      setEmail('');
    } catch (error) {
      toast.error("Reservation Failed. Try Again!");
    }
  };


  //get todays date
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div className="flex items-center justify-center p-5 overflow-hidden">
      <div className="mx-auto w-full max-w-[550px] bg-white p-5 rounded">
        <h1 className='text-2xl text-center p-4 font-bold font-serif'>Make Reservation</h1>

        <form onSubmit={makeReservation}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input 
              type="text" 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
              value={name}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input 
              type="text" 
              name="phone" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)} 
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input 
              type="email" 
              value={email}
              name="email" 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                  Date
                </label>
                <input 
                  type="date" 
                  name="date" 
                  value={date}
                  min={getTodayDate()} 
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                  Time
                </label>
                <select
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >             
                  <option value="">Select Time Slot</option>
                  {availableTimeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <button
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              type="submit"
            >
              Book Appointment
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AdminMakeReservation;
