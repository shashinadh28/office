"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans, Lexend } from 'next/font/google';
import Link from 'next/link';
import { BrainCircuit, Zap, BarChartBig } from 'lucide-react';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const HeroAISection = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-teal-600 via-cyan-500 to-sky-600 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Abstract AI/neural network background visuals */}
        <BrainCircuit size={250} className="absolute top-1/4 left-1/4 text-teal-400 opacity-50 animate-pulse-slow" />
        <Zap size={180} className="absolute bottom-1/3 right-1/4 text-cyan-400 opacity-50 transform -rotate-12" />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${ibmPlexSans.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}
        >
          Pioneering AI Solutions for <span className="text-yellow-300">Future-Ready Businesses</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`${lexend.className} text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10`}
        >
          Custom LLMs, Intelligent Automation & Advanced Data Analytics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="/contact-us?service=ai-consultation" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-teal-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg group`}
            >
              <BrainCircuit size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Explore AI Possibilities
            </a>
          </Link>
          {/* Assuming a relevant case studies page */}
          <Link href="/case-studies/ai" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg group`}
            >
              <BarChartBig size={20} className="mr-2 transition-transform duration-300 group-hover:animate-pulse" />
              See AI Use Cases
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAISection;
