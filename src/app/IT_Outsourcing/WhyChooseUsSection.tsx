'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeDollarSign, ShieldCheck, GitMerge, Globe, UserCog, Replace, Award, Rocket } from 'lucide-react';

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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const whyChooseUsItemsData = [
  {
    title: "Affordable Excellence",
    subtitle: "Top-tier at $15/hour",
    icon: BadgeDollarSign,
    iconColor: 'text-[#1E2939]',
    iconBg: 'bg-[#1E2939]',
    hoverIconColor: 'text-[#1E2939]',
  },
  {
    title: "Pre-Vetted Talent",
    subtitle: "Rigorously Screened Experts",
    icon: ShieldCheck,
    iconColor: 'text-[#FDC700]',
    iconBg: 'bg-[#FDC700]',
    hoverIconColor: 'text-[#FDC700]',
  },
  {
    title: "Seamless Integration",
    subtitle: "Effortless Team Collaboration",
    icon: GitMerge,
    iconColor: 'text-[#1E2939]',
    iconBg: 'bg-[#1E2939]',
    hoverIconColor: 'text-[#1E2939]',
  },
  {
    title: "24/7 Global Support",
    subtitle: "Round-the-Clock Assistance",
    icon: Globe,
    iconColor: 'text-[#FDC700]',
    iconBg: 'bg-[#FDC700]',
    hoverIconColor: 'text-[#FDC700]',
  },
  {
    title: "Dedicated Success Managers",
    subtitle: "Smooth Project Operations",
    icon: UserCog,
    iconColor: 'text-[#1E2939]',
    iconBg: 'bg-[#1E2939]',
    hoverIconColor: 'text-[#1E2939]',
  },
  {
    title: "Quick Developer Replacement",
    subtitle: "Minimal Project Disruption",
    icon: Replace,
    iconColor: 'text-[#FDC700]',
    iconBg: 'bg-[#FDC700]',
    hoverIconColor: 'text-[#FDC700]',
  },
  {
    title: "Proven Track Record",
    subtitle: "Trusted by Global Businesses",
    icon: Award,
    iconColor: 'text-[#1E2939]',
    iconBg: 'bg-[#1E2939]',
    hoverIconColor: 'text-[#1E2939]',
  },
  {
    title: "Fast Turnaround",
    subtitle: "Accelerate Your Timeline",
    icon: Rocket,
    iconColor: 'text-[#FDC700]',
    iconBg: 'bg-[#FDC700]',
    hoverIconColor: 'text-[#FDC700]',
  },
];

const WhyChooseUsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-50 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <span
            className="inline-block bg-[#1E2939] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
          >
            Key Advantages
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
          >
            Why <span className="border-b-4 border-[#FDC700]">Choose</span> Gateway Workforce for IT Outsourcing?
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainer}
        >
          {whyChooseUsItemsData.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg text-center flex flex-col items-center transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer
                            ${isHovered ? `${item.iconBg} text-white` : 'bg-white text-gray-800 border border-gray-200'}`}
                variants={fadeIn}
                custom={index * 0.1 + 0.2} // Staggered delay for cards
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`rounded-full p-4 mb-5 w-16 h-16 flex items-center justify-center shadow-md transition-colors duration-300
                               ${isHovered ? 'bg-white' : item.iconBg}`}>
                  <IconComponent size={32} className={`${isHovered ? item.hoverIconColor : 'text-white'} transition-colors duration-300`} />
                </div>
                <h3 className={`font-semibold text-xl mb-1.5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#1E2939]'}`}>{item.title}</h3>
                <p className={`text-sm mb-5 h-10 transition-colors duration-300 ${isHovered ? 'text-gray-100' : 'text-gray-600'}`}>{item.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
