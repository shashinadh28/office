"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { 
  Award, Zap, Palette, TrendingUp, Headphones
} from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const whyPartnerItemsData = [
  { 
    title: "Certified Cloud Specialists", 
    subtitle: "AWS & Azure Certified Pros", 
    icon: Award, 
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-600',
    hoverIconColor: 'text-blue-600',
  },
  {
    title: "Seamless Integrations", 
    subtitle: "Connect Critical Systems", 
    icon: Zap, 
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-600',
    hoverIconColor: 'text-cyan-600',
  },
  {
    title: "Customization & Scalability", 
    subtitle: "Tailored Solutions", 
    icon: Palette, 
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-600',
    hoverIconColor: 'text-blue-600',
  },
  { 
    title: "Performance Optimization", 
    subtitle: "Enhanced Efficiency", 
    icon: TrendingUp, 
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-600',
    hoverIconColor: 'text-cyan-600',
  },
  { 
    title: "End-to-End Support", 
    subtitle: "Implementation to Management", 
    icon: Headphones, 
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-600',
    hoverIconColor: 'text-blue-600',
    },
];

const WhyChooseCloudSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gray-50`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span 
            className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
          >
            Key Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Partner with Gateway Workforce for <span className="border-b-4 border-cyan-500">Cloud Solutions?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We understand that every organization has unique cloud requirements. We take the time to assess your current infrastructure, analyze your business needs, and deliver scalable cloud solutions that drive innovation and reduce costs.
          </p>
        </motion.div>

          <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
            viewport={{ once: true }}
        >
          {whyPartnerItemsData.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg text-center flex flex-col items-center transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer
                           ${isHovered ? `${item.iconBg} text-white` : 'bg-white text-gray-800 border border-gray-200'}`}
                variants={fadeIn}
                custom={index * 0.1 + 0.2}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`rounded-full p-4 mb-5 w-16 h-16 flex items-center justify-center shadow-md transition-colors duration-300
                              ${isHovered ? 'bg-white' : item.iconBg}`}>
                  <IconComponent size={32} className={`${isHovered ? item.hoverIconColor : 'text-white'} transition-colors duration-300`} />
                </div>
                <h3 className={`font-semibold text-xl mb-1.5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-blue-600'}`}>{item.title}</h3>
                <p className={`text-sm mb-5 h-10 transition-colors duration-300 ${isHovered ? 'text-gray-100' : 'text-gray-600'}`}>{item.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseCloudSection;
