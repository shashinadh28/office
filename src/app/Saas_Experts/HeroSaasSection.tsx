"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans, Lexend } from 'next/font/google';
import Link from 'next/link';
import { Zap, MessageSquare, Settings } from 'lucide-react';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const HeroSaasSection = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern, e.g., interconnected gears or abstract shapes */}
        <Settings size={200} className="absolute top-1/4 left-1/4 text-purple-400 animate-spin-slow opacity-50" />
        <Zap size={150} className="absolute bottom-1/4 right-1/4 text-pink-400 opacity-50 transform rotate-12" />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${ibmPlexSans.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`}
        >
          Expert SaaS Solutions: <span className="text-yellow-300">Salesforce, Shopify, HubSpot</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`${lexend.className} text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10`}
        >
          Integration, Optimization & Custom Development by Certified Professionals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="/contact-us?service=saas-optimization" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg group`}
            >
              <Zap size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-[-15deg]" />
              Optimize Your SaaS
            </a>
          </Link>
          <Link href="/contact-us?service=saas-project" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg group`}
            >
              <MessageSquare size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Discuss Your Project
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSaasSection;
