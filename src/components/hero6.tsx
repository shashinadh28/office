"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Montserrat } from 'next/font/google';

// Global impact section with animated stats
const Hero6 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const statCounterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Headline and description */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500"
            variants={itemVariants}
          >
            Gateway Workforce: Beyond Hiring, Global Impact!
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            At Gateway Workforce, we're your outsourcing partner, delivering India's talent to solve your business 
            challenges and creating a global impact with every hire.
          </motion.p>
        </div>

        {/* Stats section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-16"
          variants={itemVariants}
        >
          {/* 70+ Proven Hires */}
          <motion.div 
            className="text-center"
            variants={statCounterVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">70+</div>
            <div className="text-gray-600 font-medium">Proven Hires</div>
          </motion.div>

          {/* 12+ Trusted Clients */}
          <motion.div 
            className="text-center"
            variants={statCounterVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl md:text-6xl font-bold text-teal-500 mb-2">12+</div>
            <div className="text-gray-600 font-medium">Trusted Clients</div>
          </motion.div>
        </motion.div>

        {/* Trusted by companies banner */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="inline-block border-t border-b border-gray-200 py-4 px-8">
            <p className="text-sm font-medium tracking-widest text-gray-500 mb-4">
              TRUSTED BY 12+ COMPANIES FROM STARTUPS TO ENTERPRISE
            </p>
            
            {/* Company logos would go here - using placeholder for now */}
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {/* This would typically contain your client logos */}
              <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
              <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
              <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
              <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero6; 