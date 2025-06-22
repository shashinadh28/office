"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';

import { Phone } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const UnlockPowerSection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gray-50 text-gray-800`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800"
        >
          Unlock the Power of AI for <span className="text-purple-600">Your Business</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8"
        >
          Gateway Workforce helps enterprises deploy AI with precision—whether automating workflows, extracting insights from data, or building custom AI models that give you a strategic edge.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8"
        >
          <Phone size={20} className="mr-2 text-purple-600" />
          <span className="text-lg font-semibold text-gray-800">Ready to transform your business with AI?</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://calendly.com/deepak-teja/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className={`${lexend.className} inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300 text-lg group transform hover:-translate-y-1`}
          >
            <Phone size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
            Schedule 15 Min Call
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 text-sm text-gray-500"
        >
          Gateway Workforce – Your trusted partner for custom LLMs, AI automation & data intelligence solutions.
        </motion.div>
      </div>
    </section>
  );
};

export default UnlockPowerSection; 