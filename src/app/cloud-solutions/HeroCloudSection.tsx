"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans, Lexend } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const HeroCloudSection = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${ibmPlexSans.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}
        >
          Expert Cloud Solutions for <span className="text-yellow-300">AWS & Azure</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`${lexend.className} text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10`}
        >
          Seamless Cloud Deployment, Migration & Management
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#cloud-assessment" 
            className={`${lexend.className} px-8 py-3 bg-yellow-400 text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg`}
          >
            Get a Free Cloud Assessment
          </a>
          <a
            href="#speak-to-expert" 
            className={`${lexend.className} px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg`}
          >
            Speak to an Expert
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCloudSection;
