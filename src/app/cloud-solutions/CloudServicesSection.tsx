"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Image from 'next/image';
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
    hasImage: true,
    imagePath: "/optimized/images/cloud_architecture.webp"
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
    hasImage: true,
    imagePath: "/optimized/images/cloud_migration_services.webp"
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
    hasImage: true,
    imagePath: "/optimized/images/cloud_management _&_devOps.webp"
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
    hasImage: true,
    imagePath: "/optimized/images/Security_&_Compliance.webp"
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
          className="flex flex-col gap-8 max-w-5xl mx-auto"
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
                className={`bg-white rounded-xl text-left shadow-lg group border border-gray-200 transition-all duration-300 ease-in-out overflow-hidden
                            ${isHovered ? 'transform scale-105 shadow-xl border-blue-500 z-10' : ''}
                            ${isAnotherCardHovered ? 'filter blur-sm opacity-70' : ''}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
            >
              {/* All cards now have the same layout with image */}
              <div className={`flex flex-col lg:flex-row h-auto lg:h-80 overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image section */}
                <div className="lg:w-2/5 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
                  <Image
                    src={service.imagePath!}
                    alt={service.categoryName}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                {/* Content section */}
                <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
                  <div className="flex items-start mb-6">
                    <div className={`bg-white p-3 rounded-full mr-4 shrink-0 group-hover:bg-blue-100 transition-colors duration-300 shadow-md`}>
                      <IconComponent className={`${service.iconColor} w-6 h-6 sm:w-8 sm:h-8 group-hover:text-blue-700 transition-colors duration-300`} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300`}>
                      {service.categoryName}
                    </h3>
                  </div>
                  <ul className={`list-disc list-inside text-sm sm:text-base text-gray-600 leading-relaxed space-y-2 pl-2`}>
                    {service.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                        <span className="list-none">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CloudServicesSection;
