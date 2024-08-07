import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AllReservations = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [reservations, setReservations] = useState([]);
    const [filteredReservations, setFilteredReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            //get all reservation from db
            try {
                const response = await axios.get('http://localhost:5000/api/admin/allreservation',{ withCredentials: true });
                console.log('API response:', response.data); // Log the API response
                if (Array.isArray(response.data.allreservation)) {
                    setReservations(response.data.allreservation);
                    setFilteredReservations(response.data.allreservation);
                } else {
                    console.error('API response is not an array:', response.data);
                    setReservations([]);
                    setFilteredReservations([]);
                }
            } catch (error) {
                console.error('Error fetching reservations:', error);
                setReservations([]);
                setFilteredReservations([]);
            }
        };

        fetchReservations();
    }, []);

    useEffect(() => {
        //serach box logic
        const results = reservations.filter(reservation =>
            reservation.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredReservations(results);
    }, [searchTerm, reservations]);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">All Reservations</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="pb-4 bg-slate-300 dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="m-3 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for reservations"
                        />
                    </div>
                </div>
                <div className="overflow-y-auto" style={{ maxHeight: '500px' }}>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Time Slot</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Mobile Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReservations.map((reservation, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {reservation.name}
                                    </th>
                                    <td className="px-6 py-4 text-white">
                                        {new Date(reservation.date).toISOString().split('T')[0]}
                                    </td>
                                    <td className="px-6 py-4 text-white">{reservation.time}</td>
                                    <td className="px-6 py-4 text-white">{reservation.email}</td>
                                    <td className="px-6 py-4 text-white">{reservation.mobile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllReservations;
