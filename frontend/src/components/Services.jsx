import React from 'react';
import cut from '../assets/images/cutting.jpg';
import shave from '../assets/images/shave.jpg';
import coloring from '../assets/images/coloring.jpeg';

function Services() {
  return (
    <div className="mt-24 px-6 lg:px-36 flex flex-col items-center pb-32 border-b border-black">
      <h1 className="text-center text-3xl lg:text-5xl font-bold mb-20">Our Services</h1>
      <div className="flex flex-wrap justify-center w-full gap-8 text-center">
        
        <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-64 w-full object-cover" src={cut} alt="Hair Cutting" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hair Cutting</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore a variety of haircut styles crafted to suit your personality and preferences, leaving you looking sharp and stylish.</p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Reserve
            </button>
          </div>
        </div>

        <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-64 w-full object-cover" src={shave} alt="Smooth Shave" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Smooth Shave</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience the ultimate smooth shave with precision and care, ensuring a clean and refreshed look.</p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Reserve
            </button>
          </div>
        </div>

        <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-64 w-full object-cover" src={coloring} alt="Hair Styles" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hair Styles</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover an array of hair styles, from trendy cuts to vibrant colors and sleek ironing, designed to suit your personality and preferences.</p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Reserve
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
