"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const TransformAISection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`${lexend.className} w-full py-24 md:py-32 px-4 bg-white relative overflow-hidden`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Content section */}
            <motion.div 
            className="w-full lg:w-3/5 text-center lg:text-left space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <div className="w-6 h-0.5 bg-purple-600"></div>
                <span className="text-purple-600 font-medium uppercase tracking-wider text-sm">ABOUT US</span>
                <div className="w-6 h-0.5 bg-purple-600"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700 bg-clip-text text-transparent">
                  Custom AI, Automation & Data-Driven Insights
                </span>
              </h2>
            <p className="text-gray-600 max-w-3xl mx-auto lg:mx-0 text-lg leading-relaxed">
                At Gateway Workforce, we build cutting-edge AI solutions that empower enterprises to harness the full potential of artificial intelligence. From custom Large Language Models (LLMs) to intelligent automation and predictive analytics, we deliver tailored AI strategies that drive efficiency, innovation, and competitive advantage.
              </p>
              
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {[
                  { number: '10+', label: 'AI Models Deployed' },
                  { number: '75+', label: 'Clients' },
                  { number: '95%', label: 'Accuracy Rate' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-indigo-700 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-1 sm:mb-2">{item.number}</p>
                    <p className="text-sm sm:text-base text-gray-600">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5"
          >
            <div className="relative">
              <Image
                src="/optimized/images/ai-hero.jpg"
                alt="AI Solutions Professional"
                width={400}
                height={350}
                className="rounded-2xl shadow-xl object-cover"
                priority
              />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransformAISection; 