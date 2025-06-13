"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { 
  CloudCog, BarChart3, DatabaseZap, ShieldCheck, 
  ServerCog, Rocket, Route, Layers, Settings, 
  Database, GitBranch, Lock, Users, CheckCircle
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
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const serviceCategories = [
  {
    categoryName: 'Cloud Deployment & Architecture',
    icon: CloudCog,
    description: [
      'AWS & Azure infrastructure setup',
      'Hybrid & multi-cloud strategy',
      'Kubernetes & container orchestration',
      'Serverless computing (AWS Lambda, Azure Functions)'
    ],
    iconColor: "text-blue-600",
  },
  {
    categoryName: 'Cloud Migration Services',
    icon: Route,
    description: [
      'Lift-and-shift & refactoring strategies',
      'Database migration (SQL, NoSQL, Oracle to cloud)',
      'Application re-platforming & modernization',
      'Post-migration optimization'
    ],
    iconColor: "text-cyan-600",
  },
  {
    categoryName: 'Cloud Management & DevOps',
    icon: ServerCog,
    description: [
      '24/7 monitoring & incident response',
      'Cost governance & FinOps optimization',
      'CI/CD pipeline automation',
      'Infrastructure as Code (Terraform, CloudFormation)'
    ],
    iconColor: "text-blue-600",
  },
  {
    categoryName: 'Security & Compliance',
    icon: ShieldCheck,
    description: [
      'Identity & Access Management (IAM)',
      'Data encryption & threat detection',
      'Compliance audits & remediation',
      'Disaster recovery & backup solutions'
    ],
    iconColor: "text-cyan-600",
  }
];

const CloudServicesSection = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <motion.section 
      className={`${lexend.className} py-16 md:py-24 bg-gray-100 text-gray-800`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <span 
            className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
        >
            Our Services
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
          >
            Our Cloud <span className="border-b-4 border-cyan-500">Services</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {serviceCategories.map((service, index) => {
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
                  <div className={`bg-gray-100 p-3 rounded-full mr-4 shrink-0 group-hover:bg-blue-100 transition-colors duration-300`}>
                    <IconComponent className={`${service.iconColor} w-6 h-6 sm:w-8 sm:h-8 group-hover:text-blue-700 transition-colors duration-300`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300`}>
                    {service.categoryName}
                  </h3>
              </div>
                <ul className={`list-disc list-inside text-sm sm:text-base text-gray-600 leading-relaxed mb-6 flex-grow space-y-1.5 pl-2`}>
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CloudServicesSection;
