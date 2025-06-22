"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { Phone } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const TransformBusinessSection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gray-800 text-white`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Transform Your Business with <span className="text-white">Optimized IT Outsourcing Solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8"
        >
          Gateway Workforce connects you with India's top-tier developers to scale your team efficiently. From custom software development to complete project delivery, our experts ensure you get premium talent at competitive rates with seamless collaboration.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8"
        >
          <Phone size={20} className="mr-2 text-white" />
          <span className="text-lg font-semibold">Let's discuss how we can scale your development team!</span>
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
            className={`${lexend.className} inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-600 hover:shadow-xl transition-all duration-300 text-lg group transform hover:-translate-y-1`}
          >
            <Phone size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
            Schedule 15 Min Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformBusinessSection; 