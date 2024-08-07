import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [isTitleAnimated, setIsTitleAnimated] = useState(false);
  const [isGridAnimated, setIsGridAnimated] = useState(false);
  
  const { ref: titleRef, inView: titleInView } = useInView({ });
  const { ref: gridRef, inView: gridInView } = useInView({ });

  useEffect(() => {
    if (titleInView) setIsTitleAnimated(true);
  }, [titleInView]);

  useEffect(() => {
    if (gridInView) setIsGridAnimated(true);
  }, [gridInView]);

  const h1animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };
  

  const gridAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: {  duration: 1 } },
  };
  return (
    <div className='flex flex-col justify-center border-b border-black'>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <motion.h2
              ref={titleRef}
              initial="hidden"
              animate={isTitleAnimated ? "visible" : "hidden"}
              variants={h1animation}
              className="text-3xl font-extrabold text-gray-900">
              Visit Our Location
            </motion.h2>
          </div>
          <div className="mt-16 lg:mt-20">
            <motion.div
              ref={gridRef}
              initial="hidden"
              animate={isGridAnimated ? "visible" : "hidden"}
              variants={gridAnimation}
              className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                  width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                    <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <p className="mt-1 text-gray-600">Email: info@example.com</p>
                    <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
