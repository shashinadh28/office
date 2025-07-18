"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const AboutCloudSection = () => {
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
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content section */}
            <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <div className="w-6 h-0.5 bg-blue-600"></div>
                <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">ABOUT US</span>
                <div className="w-6 h-0.5 bg-blue-600"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Seamless Cloud Deployment,<br />
                <span className="text-blue-600">Migration & Management</span>
              </h2>
            <p className="text-gray-600 max-w-3xl mx-auto lg:mx-0 text-lg leading-relaxed">
                At Gateway Workforce, we empower businesses with end-to-end cloud solutions, specializing in AWS and Azure deployment, migration, and management. Our certified cloud architects and engineers help organizations optimize performance, enhance security, and reduce costs through scalable, high-performance cloud infrastructure.
              </p>
              
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {[
                  { number: '7+', label: 'Years of Experience' },
                  { number: '100+', label: 'Clients' },
                  { number: '99.9%', label: 'Uptime Guarantee' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{item.number}</p>
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
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <Image
                src="/images/about_cloud.jpg"
                alt="Cloud Solutions Professional"
                width={600}
                height={500}
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

export default AboutCloudSection; 