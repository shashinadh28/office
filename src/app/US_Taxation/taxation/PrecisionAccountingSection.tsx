'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const PrecisionAccountingSection: React.FC = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-white text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Column: Image */}
          <motion.div 
            className="w-full md:w-1/2 lg:w-5/12 rounded-lg overflow-hidden shadow-xl"
            variants={fadeIn}
            custom={0.1}
          >
            <img 
              src="/optimized/images/usaa.webp"
              alt="Precision Accounting Services"
              width={600}
              height={450}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="w-full md:w-1/2 lg:w-7/12"
            variants={fadeIn}
            custom={0.3}
          >
            <motion.span 
              className="inline-block bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
              variants={fadeIn}
              custom={0.4}
            >
              U.S. Taxation
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight"
              variants={fadeIn}
              custom={0.5}
            >
              Precision Accounting & <span className="border-b-4 border-red-600">Compliance</span> Solutions for Financial Success
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed"
              variants={fadeIn}
              custom={0.6}
            >
              At Gateway Workforce, we provide comprehensive US taxation and accounting services tailored for accounting firms, CPAs, and financial professionals. Our expert team ensures accurate bookkeeping, tax compliance, and financial reporting, allowing you to focus on strategic growth while we handle the complexities of numbers and regulations.
            </motion.p>
            <motion.button
              className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              variants={fadeIn}
              custom={0.7}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PrecisionAccountingSection;
