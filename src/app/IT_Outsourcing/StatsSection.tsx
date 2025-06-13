'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Globe, Building } from 'lucide-react'; // Example icons

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

const statsData = [
  {
    id: 1,
    value: "25+",
    label: "Years of Excellence",
    icon: Briefcase,
  },
  {
    id: 2,
    value: "500+",
    label: "Global Clients",
    icon: Users,
  },
  {
    id: 3,
    value: "5+",
    label: "Countries",
    icon: Globe,
  },
  {
    id: 4,
    value: "100+",
    label: "Team Members",
    icon: Building,
  },
];

const StatsSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
          >
            Trusted Global Technology Partner
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Delivering excellence in technology solutions since 1998.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          variants={staggerContainer}
        >
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                variants={fadeIn}
                custom={index * 0.1 + 0.2}
              >
                <IconComponent className="text-white w-8 h-8 mb-3" strokeWidth={1.5} />
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-white">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
