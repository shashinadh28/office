"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Image from 'next/image';
import { 
  Brain, Zap, BarChart3, Settings, Database, GitBranch, 
  Users, CheckCircle, Cpu, Bot, Eye, Lightbulb
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

const aiServiceCategories = [
  {
    categoryName: 'Custom LLM Development & Fine-Tuning',
    icon: Brain,
    color: 'purple',
    iconColor: 'text-purple-600',
    description: 'Advanced language models tailored to your specific domain and business requirements.',
    imagePath: '/optimized/images/Custom-LLM-Development-&-Fine-Tuning.webp',
    services: [
      'Domain-specific LLMs for your industry',
      'Fine-tuning OpenAI, Llama 2, Claude & proprietary models',
      'Retrieval-Augmented Generation (RAG) systems',
      'AI chatbots & virtual assistants',
    ],
  },
  {
    categoryName: 'Intelligent Process Automation',
    icon: Zap,
    color: 'pink',
    iconColor: 'text-pink-600',
    description: 'AI-powered automation solutions that streamline workflows and boost productivity.',
    imagePath: '/optimized/images/Intelligent-Process-Automation.webp',
    services: [
      'AI-powered workflow automation',
      'Document processing & data extraction (IDP)',
      'Predictive maintenance & anomaly detection',
      'Robotic Process Automation (RPA) integration',
    ],
  },
  {
    categoryName: 'Data Intelligence & Predictive Analytics',
    icon: BarChart3,
    color: 'purple',
    iconColor: 'text-purple-600',
    description: 'Transform your data into actionable insights with advanced analytics and ML.',
    imagePath: '/optimized/images/Data-Intelligence-&-Predictive-Analytics.webp',
    services: [
      'Advanced data modeling & forecasting',
      'Customer behavior & sentiment analysis',
      'Real-time business intelligence dashboards',
      'Recommendation engines & personalization',
    ],
  },
  {
    categoryName: 'AI Integration & Optimization',
    icon: Settings,
    color: 'pink',
    iconColor: 'text-pink-600',
    description: 'Seamless integration and optimization of AI solutions within your enterprise.',
    imagePath: '/optimized/images/AI-Integration-&-Optimization.webp',
    services: [
      'API integrations with existing enterprise systems',
      'AI performance monitoring & continuous learning',
      'Responsible AI governance & compliance',
      'Staff training & change management',
    ],
  },
];

const AIServicesSection = () => {
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
            className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
        >
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Our AI & Data Intelligence <span className="border-b-4 border-pink-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Our team of experienced AI specialists combines industry knowledge, cutting-edge technology, and innovative strategies to guide you towards intelligent business solutions.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {aiServiceCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCardIndex === index;
            const isAnotherCardHovered = hoveredCardIndex !== null && !isHovered;

            return (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index * 0.1 + 0.2}
                className={`bg-white rounded-xl text-left shadow-lg group border border-gray-200 transition-all duration-300 ease-in-out overflow-hidden
                            ${isHovered ? 'transform scale-105 shadow-xl border-purple-500 z-10' : ''}
                            ${isAnotherCardHovered ? 'filter blur-sm opacity-70' : ''}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className={`flex flex-col lg:flex-row h-auto lg:h-80 overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image section */}
                  <div className="lg:w-2/5 relative bg-white flex items-center justify-center p-4">
                    <Image
                      src={category.imagePath}
                      alt={category.categoryName}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Content section */}
                  <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
                    <div className="flex items-start mb-6">
                      <div className={`bg-white p-3 rounded-full mr-4 shrink-0 group-hover:bg-purple-100 transition-colors duration-300 shadow-md`}>
                        <IconComponent className={`${category.iconColor} w-6 h-6 sm:w-8 sm:h-8 group-hover:text-purple-700 transition-colors duration-300`} />
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300`}>
                        {category.categoryName}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <ul className={`list-disc list-inside text-sm sm:text-base text-gray-600 leading-relaxed space-y-2 pl-2`}>
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 shrink-0" />
                          <span className="list-none">{service}</span>
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

export default AIServicesSection;
