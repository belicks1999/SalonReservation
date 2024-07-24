import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import bg from '../../assets/images/bg1.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', 
        { username, password },
        { withCredentials: true } // Include credentials
      );
  
      localStorage.setItem('authToken', response.data.token);
  
      navigate('/admin');
      toast.success('Login Successful');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials and try again.');
      toast.error('Login Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center bg-gray-900 h-screen' style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
    }}>
      <ToastContainer />
      <div className='p-8 md:p-12 rounded-lg shadow-lg max-w-sm w-full backdrop-blur-md bg-white/30'>
        <h1 className='text-center font-serif my-4 font-bold text-2xl text-white outline-black'>ADMIN LOGIN</h1>
        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <label htmlFor="username" className="block text-white font-bold mb-2">Email</label>
          <input 
            type="text" 
            id="username"
            placeholder='Enter Your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='p-3 mb-6 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200'
            required
          />

          <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-3 mb-6 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200'
            required
          />

          <button 
            type="submit"
            className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 w-full mb-4 transition duration-200 transform hover:scale-105'
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          

        </form>
      </div>
    </div>
  )
}

export default AdminLogin;
