import React from 'react'
import bg from '../../assets/images/bg1.jpg';

function AdminLogin() {
  return (
    <div className='flex justify-center items-center bg-gray-900 h-screen'  style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
    }}>
    <div className='p-8 md:p-12 rounded-lg shadow-lg max-w-sm w-full backdrop-blur-md bg-white/30'>
      <h1 className='text-center font-serif my-4 font-bold text-2xl text-white outline-black'>ADMIN LOGIN</h1>
      <form>
  
        <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
        <input type="email" placeholder='Enter Your Email' className='p-3 mb-6 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200' />
  
        <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
        <input type="password" placeholder='Enter Your Password' className='p-3 mb-6 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200' />
  
        <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 w-full mb-4 transition duration-200 transform hover:scale-105'>Login</button>
  
        <div className='text-center'>
          <a href="#" className='text-white hover:text-blue-700 transition duration-200'>Forgot Password?</a>
        </div>
  
      </form>
    </div>
  </div>
  )
}

export default AdminLogin