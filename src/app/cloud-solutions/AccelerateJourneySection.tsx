"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';

import { Phone } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const AccelerateJourneySection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-700 text-white`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Accelerate Your Cloud Journey with <span className="text-yellow-300">Gateway Workforce</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8"
        >
          Whether you're migrating to the cloud, optimizing existing workloads, or managing infrastructure, Gateway Workforce provides reliable, scalable, and secure cloud solutions tailored to your business needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8"
        >
          <Phone size={20} className="mr-2 text-yellow-300" />
          <span className="text-lg font-semibold">Contact us today to transform your cloud strategy!</span>
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
            className={`${lexend.className} inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-lg group transform hover:-translate-y-1`}
          >
            <Phone size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
            Schedule 15 Min Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AccelerateJourneySection; 