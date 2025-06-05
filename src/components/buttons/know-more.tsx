'use client';

import React from 'react';
import { motion } from 'motion/react';

const KnowMoreButton = () => {
  return (
    <div className="relative inline-block">
      <motion.button 
        className="group relative inline-flex items-center justify-center px-10 py-3 border-2 border-[#282936] bg-transparent text-[#282936] text-base font-bold uppercase cursor-pointer overflow-hidden transition-colors duration-700 hover:text-white hover:border-transparent"
        whileHover={{ scale: 1.02, transition: { duration: 0.7 } }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center gap-2.5">
          Know More
          <span 
            className="w-3.5 h-0.5 bg-[#282936] relative transition-all duration-700 group-hover:bg-white group-hover:translate-x-1.5"
          >
            <span className="absolute w-1.5 h-1.5 border-r-2 border-t-2 border-[#282936] transform rotate-45 right-0 top-1/2 -translate-y-1/2 transition-colors duration-700 group-hover:border-white"></span>
          </span>
        </span>
        <div 
          className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#282936] rounded-full -translate-x-1/2 -translate-y-1/2 z-0 transition-all duration-1000 ease-in-out group-hover:w-[300%] group-hover:h-[300%]"
        />
      </motion.button>
    </div>
  );
};

export default KnowMoreButton;