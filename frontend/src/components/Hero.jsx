import React,{useState} from 'react';
import Reservation from './Reservation';
import { motion } from "framer-motion";


function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="px-6 lg:px-36 pt-32 lg:pt-34 ">
      <div className="flex flex-col items-center lg:items-start">
        <motion.h1
       initial={{opacity:0,y:-20}}
       animate={{opacity:1, y:0}}
       transition={{delay:0.3,duration:0.6}}
       
       
      
        className="text-4xl lg:text-7xl font-serif font-bold text-white leading-tight text-center lg:text-left bg-black bg-opacity-70 rounded-lg p-2">
          <span className="block">Modern Barber</span>
          <span className="block "> Shop in Center</span>
          <span className="block "> of the City</span>
        </motion.h1>
        <motion.button
        initial={{opacity:0,x:-30}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.3, duration:0.6}}
        onClick={() => setShowModal(true)}
        className="mt-8  text-lg font-serif rounded-lg before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
          Booking
        </motion.button>
      </div>
      <Reservation
    show={showModal}
    onClose={()=>{setShowModal(false)}} />
    </div>
    
  );
}

export default Hero;
