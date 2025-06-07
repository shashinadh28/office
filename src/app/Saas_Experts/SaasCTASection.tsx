"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight, SearchCheck, MessageCircle } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const SaasCTASection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Supercharge Your <span className="text-yellow-300">SaaS Platforms?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-10"
        >
          Connect with our SaaS experts today to unlock new efficiencies, streamline workflows, and drive significant growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="/contact-us?service=saas-audit" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg group`}
            >
              <SearchCheck size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-6" />
              Request a SaaS Audit
            </a>
          </Link>
          <Link href="/contact-us?service=saas-consultation" passHref legacyBehavior>
            <a
              className={`${lexend.className} inline-flex items-center justify-center px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg group`}
            >
              <MessageCircle size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Discuss Your Project
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SaasCTASection;
