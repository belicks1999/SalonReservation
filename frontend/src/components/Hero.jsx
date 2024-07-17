import React from 'react';

function Hero() {
  return (
    <div className="px-6 lg:px-36 pt-32 lg:pt-34 ">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-4xl lg:text-7xl font-serif font-bold text-white leading-tight text-center lg:text-left bg-black bg-opacity-70 rounded-lg p-2">
          <span className="block">Modern Barber</span>
          <span className="block "> Shop in Center</span>
          <span className="block "> of the City</span>
        </h1>
        <button className="bg-orange-600 p-4 text-white mt-10 rounded-lg text-lg lg:text-xl font-serif w-36">
          Reservation
        </button>
      </div>
    </div>
  );
}

export default Hero;
