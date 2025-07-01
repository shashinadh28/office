'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const EfficiencySection: React.FC = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-gray-50 text-gray-800" // Changed background to light gray
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <span 
            className="inline-block bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
          >
            Streamlined Operations
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
          >
            Enhance <span className="border-b-4 border-red-600">Efficiency</span> & Ensure Compliance with Gateway Workforce
          </h2>
        </motion.div>
        
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-700" // Changed text color
          variants={fadeIn}
          custom={0.2}
        >
          By outsourcing your taxation and accounting needs to Gateway Workforce, you gain a reliable partner dedicated to accuracy, compliance, and efficiency. Our services help reduce workload, minimize errors, and improve profitability for your firm or business.
        </motion.p>
        <motion.p
          className="text-xl font-semibold mb-10 flex items-center justify-center text-blue-700" // Changed text color
          variants={fadeIn}
          custom={0.4}
        >
          <Phone className="w-6 h-6 mr-2" /> Contact us today to discuss how we can support your accounting needs!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          variants={staggerContainer}
        >
          <motion.button
            variants={fadeIn}
            custom={0.6}
            className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 text-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.button>
          <motion.button
            variants={fadeIn}
            custom={0.8}
            className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 text-lg w-full sm:w-auto border-2 border-blue-700 hover:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EfficiencySection;
