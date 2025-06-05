import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content taking full width */}
          <div className="w-full text-center">
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Streamline Your Healthcare Operations with Expert BPO Solutions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At Gateway Workforce, we provide comprehensive Healthcare Business Process Outsourcing (BPO) services, specializing in end-to-end medical billing and telehealth support. Our tailored solutions help healthcare providers, hospitals, and clinics optimize revenue cycles, reduce administrative burdens, and enhance patient care through seamless outsourcing.
              </p>
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