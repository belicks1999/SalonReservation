import React, { useState, useEffect } from 'react';
import aboutImage from '../assets/images/about.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce:false
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  const imageAnimation = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: {  duration: 1 } },
  };
  

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: {  duration: 1 } },
  };

  return (
    <div className="text-center pt-24 pb-32 border-b border-black bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900">
      <div className="px-6 lg:px-36 flex flex-wrap justify-center items-center">
        {/* About Image */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isAnimated ? "visible" : "hidden"}
          variants={imageAnimation}
          className="w-full lg:w-1/2 p-5 flex justify-center items-center"
        >
          <img className="w-64 lg:w-96" src={aboutImage} alt="About" />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial="hidden"
          animate={isAnimated ? "visible" : "hidden"}
          variants={textAnimation}
          className="w-full lg:w-1/2 p-5"
        >
          <h1 className="text-3xl lg:text-4xl font-bold font-serif mb-5 lg:text-left">About Us</h1>
          <p className="text-sm lg:text-md lg:text-left font-serif text-justify">
            Discover The Barbar Salon, your go-to destination in Colombo for men's hair cutting and styling. Located centrally, we specialize in crafting modern, tailored looks that enhance your style and confidence. Our expert team is dedicated to delivering exceptional service with a focus on precision and personalization. Visit us at No 15, Havelock city and redefine your grooming experience today.
          </p>
          <h2 className="mt-10 lg:text-left font-extrabold font-serif text-lg lg:text-2xl">
            Opening Daily Hours 10:00 am - 10:00 pm
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
