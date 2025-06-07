"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, FileText } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const AICTASection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gradient-to-r from-teal-700 via-cyan-600 to-sky-700 text-white`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Transform Your Business with <span className="text-yellow-300">AI?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto mb-10"
        >
          Let's discuss how our AI expertise can drive innovation, optimize operations, and create new value for your organization.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="/contact-us?service=ai-workshop" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-teal-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg group`}
            >
              <CalendarCheck size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-6" />
              Schedule an AI Workshop
            </a>
          </Link>
          <Link href="/contact-us?service=ai-quote" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg group`}
            >
              <FileText size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Get a Custom AI Quote
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AICTASection;
