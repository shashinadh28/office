"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight, SearchCheck, MessageCircle, Phone } from 'lucide-react';

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
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="/contact-us?service=cloud-assessment" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg group`}
            >
              <SearchCheck size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-6" />
              Get a Free Cloud Assessment
            </a>
          </Link>
          <Link href="/contact-us?service=cloud-consultation" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg group`}
            >
              <MessageCircle size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Speak to an Expert
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AccelerateJourneySection; 