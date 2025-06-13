"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, Brain, Search } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const UnlockPowerSection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Unlock the Power of AI for <span className="text-yellow-300">Your Business</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-8"
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
          <Phone size={20} className="mr-2 text-yellow-300" />
          <span className="text-lg font-semibold">Ready to transform your business with AI?</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="/contact-us?service=ai-consultation" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg group`}
            >
              <MessageCircle size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Get a Free AI Consultation
            </a>
          </Link>
          <Link href="/contact-us?service=ai-solutions" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg group`}
            >
              <Brain size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-6" />
              Explore Our AI Solutions
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 text-sm text-purple-200"
        >
          Gateway Workforce – Your trusted partner for custom LLMs, AI automation & data intelligence solutions.
        </motion.div>
      </div>
    </section>
  );
};

export default UnlockPowerSection; 