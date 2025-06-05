'use client';

import React, { useState } from 'react'; // Added useState
import { motion } from 'framer-motion';
import { DollarSign, FileText, Users, Briefcase } from 'lucide-react'; // Removed ArrowRight

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
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const servicesData = [
  {
    title: "Tax Preparation & Compliance",
    icon: FileText,
    description: [
      "Individual & business tax returns (1040, 1120, 1065, 1120S, etc.)",
      "State & federal tax filings",
      "Tax planning & strategy",
      "IRS audit support & resolution",
    ],
    iconColor: "text-red-600",
  },
  {
    title: "Accounting & Bookkeeping",
    icon: DollarSign,
    description: [
      "General ledger management",
      "Accounts payable/receivable (AP/AR)",
      "Bank & credit card reconciliation",
      "Financial statement preparation (P&L, balance sheets, cash flow)",
    ],
    iconColor: "text-blue-700",
  },
  {
    title: "CPA & Accounting Firm Support",
    icon: Users,
    description: [
      "Outsourced tax return preparation",
      "Client accounting & payroll processing",
      "Month-end & year-end closing",
      "Financial analysis & reporting",
    ],
    iconColor: "text-red-600", 
  },
  {
    title: "Payroll & Business Advisory",
    icon: Briefcase,
    description: [
      "Payroll processing & tax filings (941, W-2, 1099)",
      "Sales tax compliance",
      "CFO advisory & financial consulting",
    ],
    iconColor: "text-blue-700",
  },
];

const ServicesSection: React.FC = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <motion.section 
      className="py-16 md:py-24 bg-gray-100 text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <span 
            className="inline-block bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
          >
            Our Services
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
          >
            Our Taxation & Accounting <span className="border-b-4 border-red-600">Services</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCardIndex === index;
            const isAnotherCardHovered = hoveredCardIndex !== null && !isHovered;

            return (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index * 0.1 + 0.2}
                className={`bg-white rounded-xl p-6 md:p-8 text-left shadow-lg flex flex-col group border border-gray-200 transition-all duration-300 ease-in-out 
                            ${isHovered ? 'transform scale-105 shadow-xl border-blue-500 z-10' : ''}
                            ${isAnotherCardHovered ? 'filter blur-sm opacity-70' : ''}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className="flex items-start mb-4">
                  <div className={`bg-gray-100 p-3 rounded-full mr-4 shrink-0 group-hover:bg-red-100 transition-colors duration-300`}>
                    <IconComponent className={`${service.iconColor} w-6 h-6 sm:w-8 sm:h-8 group-hover:text-red-700 transition-colors duration-300`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300`}>
                    {service.title}
                  </h3>
                </div>
                <ul className={`list-disc list-inside text-sm sm:text-base text-gray-600 leading-relaxed mb-6 flex-grow space-y-1.5 pl-2`}>
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {/* Learn More link removed as per request */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
