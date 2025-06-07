'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Importing a few representative icons. For a real app, use SVG logos.

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
      staggerChildren: 0.05, // Faster stagger for smaller items
      delayChildren: 0.2,
    },
  },
};

const technologiesData = [
  { name: 'Angular', svgPath: '/svg/angular.svg' },
  { name: 'React', svgPath: '/svg/react.svg' },
  { name: 'Node.js', svgPath: '/svg/nodejs.svg' },
  { name: 'Laravel', svgPath: '/svg/laravel.svg' },
  { name: 'Python', svgPath: '/svg/pythonn.svg' }, // Matched with pythonn.svg
  { name: 'Flutter', svgPath: '/svg/flutter.svg' },
  { name: 'Electron', svgPath: '/svg/electron.svg' },
  { name: 'iOS/Swift', svgPath: '/svg/swift.svg' }, // Matched with swift.svg
  { name: 'MongoDB', svgPath: '/svg/mongodb.svg' },
  { name: 'MySQL', svgPath: '/svg/mysql.svg' },
  { name: 'PostgreSQL', svgPath: '/svg/postgresql.svg' },
  { name: 'DigitalOcean', svgPath: '/svg/digitalocean.svg' },
  { name: 'Azure', svgPath: '/svg/azure.svg' },
  { name: 'AWS', svgPath: '/svg/aws.svg' },
  { name: 'Strapi', svgPath: '/svg/strapi.svg' },
  { name: 'Other', svgPath: '/svg/other.svg' },
  // Vue.js and WordPress removed as no direct SVG name match was found in public/svg
];

const TechnologiesSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Technologies We <span className="border-b-4 border-blue-900">Work With</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our developers are experts in modern tech stacks.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
          variants={staggerContainer}
        >
          {technologiesData.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-slate-50 transition-all duration-300 border border-gray-200 cursor-pointer"
                variants={fadeIn}
                custom={index * 0.05 + 0.2} // Staggered delay
              >
                <img src={tech.svgPath} alt={`${tech.name} logo`} className="w-14 h-14 mb-4 object-contain" />
                <p className="text-base font-medium text-gray-700 text-center">{tech.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnologiesSection;
