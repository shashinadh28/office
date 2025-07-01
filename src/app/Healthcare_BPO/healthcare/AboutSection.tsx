import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full py-24 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content taking full width */}
          <div className="w-full text-center space-y-8">
            {/* Section Header */}
            <motion.div 
              className="mb-12" // Reduced bottom margin if no content follows
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-6 h-0.5 bg-[#18C7FF]"></div>
                <span className="text-[#18C7FF] font-medium uppercase tracking-wider text-sm">ABOUT US</span>
                <div className="w-6 h-0.5 bg-[#18C7FF]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Streamline Your Healthcare Operations with Expert BPO Solutions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                At Gateway Workforce, we provide comprehensive Healthcare Business Process Outsourcing (BPO) services, specializing in end-to-end medical billing and telehealth support. Our tailored solutions help healthcare providers, hospitals, and clinics optimize revenue cycles, reduce administrative burdens, and enhance patient care through seamless outsourcing.
              </p>
              
              {/* Additional content to fill height */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {[
                  { number: '3+', label: 'Years of Experience' },
                  { number: '25+', label: 'Clients' },
                  { number: '95%', label: 'Client Satisfaction' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-[#18C7FF] mb-1 sm:mb-2">{item.number}</p>
                    <p className="text-sm sm:text-base text-gray-600">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* All content below this (Features Grid, Checklist Items, CTA Button) is removed as per user request */}
          </div>
        </div>
      </div>
      {/* Hexagon style is removed as the elements using it are removed */}
    </section>
  );
};

export default AboutSection;