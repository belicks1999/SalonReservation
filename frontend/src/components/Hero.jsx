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
        className="bg-orange-500 hover:bg-orange-600 p-4 text-white mt-10 rounded-lg text-lg lg:text-xl font-serif w-36">
          Reservation
        </motion.button>
      </div>
      <Reservation
    show={showModal}
    onClose={()=>{setShowModal(false)}} />
    </div>
    
  );
}

export default Hero;
