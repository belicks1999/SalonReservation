import React, { useEffect, useState } from 'react';
import cut from '../assets/images/cutting.jpg';
import shave from '../assets/images/shave.jpg';
import coloring from '../assets/images/coloring.jpeg';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Services() {

  const [isAnimated, setIsAnimated] = useState(false);

  // Use separate refs for each element
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView1 || inView2 || inView3) {
      setIsAnimated(true);
    }
  }, [inView1, inView2, inView3]);

  const h1animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="mt-16 px-6 lg:px-36 flex flex-col items-center pb-32 border-b border-black">
      <motion.h1
        ref={ref1}
        initial="hidden"
        animate={isAnimated ? "visible" : "hidden"}
        variants={h1animation}
        className="text-center text-3xl lg:text-4xl font-bold mb-20"
      >
        Our Services
      </motion.h1>
      <div className="flex flex-wrap justify-center w-full gap-8 text-center">

        <motion.div
          ref={ref1}
          initial="hidden"
          animate={isAnimated ? "visible" : "hidden"}
          variants={itemAnimation}
          className="w-full sm:w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img className="rounded-t-lg h-64 w-full object-cover" src={cut} alt="Hair Cutting" />
          </motion.div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hair Cutting</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore a variety of haircut styles crafted to suit your personality and preferences, leaving you looking sharp and stylish.</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial="hidden"
          animate={isAnimated ? "visible" : "hidden"}
          variants={itemAnimation}
          className="w-full sm:w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img className="rounded-t-lg h-64 w-full object-cover" src={shave} alt="Smooth Shave" />
          </motion.div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Smooth Shave</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience the ultimate smooth shave with precision and care, ensuring a clean and refreshed look.</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref3}
          initial="hidden"
          animate={isAnimated ? "visible" : "hidden"}
          variants={itemAnimation}
          className="w-full sm:w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img className="rounded-t-lg h-64 w-full object-cover" src={coloring} alt="Hair Styles" />
          </motion.div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hair Styles</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover an array of hair styles, from trendy cuts to vibrant colors and sleek ironing, designed to suit your personality and preferences.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Services;
