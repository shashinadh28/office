"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Hero4 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.1,
        duration: 0.8 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12"
          variants={itemVariants}
        >
          Our Hiring Process
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Step 1 */}
          <motion.div 
            className="flex flex-col items-center text-center w-full md:w-auto"
            variants={itemVariants}
          >
            <div className="bg-blue-100 p-4 sm:p-5 md:p-6 rounded-full text-3xl sm:text-4xl shadow-md">📄</div>
            <h3 className="font-bold mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl">Step 1: Send Job Description</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 max-w-xs text-sm sm:text-base">Send a JD to jobs@gatewayworkforce.com</p>
          </motion.div>

          {/* Line between steps (desktop only) */}
          <motion.div 
            className="hidden md:block h-1 bg-gray-300 w-24 relative"
            variants={itemVariants}
            style={{
              background: "linear-gradient(90deg, transparent, #d1d5db 30%, #d1d5db 70%, transparent)"
            }}
          >
            <div className="absolute -top-2 right-0 text-2xl">→</div>
          </motion.div>

          {/* Mobile arrow (mobile only) */}
          <div className="flex md:hidden justify-center w-full my-2">
            <div className="text-gray-400 text-xl">↓</div>
          </div>

          {/* Step 2 */}
          <motion.div 
            className="flex flex-col items-center text-center w-full md:w-auto"
            variants={itemVariants}
          >
            <div className="bg-green-100 p-4 sm:p-5 md:p-6 rounded-full text-3xl sm:text-4xl shadow-md">🔍</div>
            <h3 className="font-bold mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl">Step 2: We Source & Vet Candidates</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 max-w-xs text-sm sm:text-base">From our internal team, resume pool, or new hires</p>
          </motion.div>

          <motion.div 
            className="hidden md:block h-1 bg-gray-300 w-24 relative"
            variants={itemVariants}
            style={{
              background: "linear-gradient(90deg, transparent, #d1d5db 30%, #d1d5db 70%, transparent)"
            }}
          >
            <div className="absolute -top-2 right-0 text-2xl">→</div>
          </motion.div>

          {/* Mobile arrow (mobile only) */}
          <div className="flex md:hidden justify-center w-full my-2">
            <div className="text-gray-400 text-xl">↓</div>
          </div>

          {/* Step 3 */}
          <motion.div 
            className="flex flex-col items-center text-center w-full md:w-auto"
            variants={itemVariants}
          >
            <div className="bg-purple-100 p-4 sm:p-5 md:p-6 rounded-full text-3xl sm:text-4xl shadow-md">✅</div>
            <h3 className="font-bold mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl">Step 3: You Interview & Hire</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 max-w-xs text-sm sm:text-base">You select the best fit, and we onboard them</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero4; 