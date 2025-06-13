"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
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
    description: 'Advanced language models tailored to your specific domain and business requirements.',
    services: [
      { name: 'Domain-specific LLMs for your industry', icon: Brain },
      { name: 'Fine-tuning OpenAI, Llama 2, Claude & proprietary models', icon: Settings },
      { name: 'Retrieval-Augmented Generation (RAG) systems', icon: Database },
      { name: 'AI chatbots & virtual assistants', icon: Bot },
    ],
  },
  {
    categoryName: 'Intelligent Process Automation',
    icon: Zap,
    color: 'pink',
    description: 'AI-powered automation solutions that streamline workflows and boost productivity.',
    services: [
      { name: 'AI-powered workflow automation', icon: GitBranch },
      { name: 'Document processing & data extraction (IDP)', icon: Database },
      { name: 'Predictive maintenance & anomaly detection', icon: BarChart3 },
      { name: 'Robotic Process Automation (RPA) integration', icon: Cpu },
    ],
  },
  {
    categoryName: 'Data Intelligence & Predictive Analytics',
    icon: BarChart3,
    color: 'purple',
    description: 'Transform your data into actionable insights with advanced analytics and ML.',
    services: [
      { name: 'Advanced data modeling & forecasting', icon: BarChart3 },
      { name: 'Customer behavior & sentiment analysis', icon: Users },
      { name: 'Real-time business intelligence dashboards', icon: Eye },
      { name: 'Recommendation engines & personalization', icon: Lightbulb },
    ],
  },
  {
    categoryName: 'AI Integration & Optimization',
    icon: Settings,
    color: 'pink',
    description: 'Seamless integration and optimization of AI solutions within your enterprise.',
    services: [
      { name: 'API integrations with existing enterprise systems', icon: GitBranch },
      { name: 'AI performance monitoring & continuous learning', icon: BarChart3 },
      { name: 'Responsible AI governance & compliance', icon: CheckCircle },
      { name: 'Staff training & change management', icon: Users },
    ],
  },
];

const AIServicesSection = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  return (
    <motion.section 
      className={`${lexend.className} py-16 md:py-24 bg-gray-50`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <span 
            className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
        >
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our AI & Data Intelligence <span className="border-b-4 border-pink-600">Services</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {aiServiceCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCardIndex === index;
            const isAnotherCardHovered = hoveredCardIndex !== null && !isHovered;
            const colorClasses = {
              purple: {
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-600',
                hoverBorder: 'border-purple-500',
                hoverText: 'text-purple-600',
                hoverIconBg: 'bg-purple-100',
                hoverIconColor: 'text-purple-700'
              },
              pink: {
                iconBg: 'bg-pink-100',
                iconColor: 'text-pink-600',
                hoverBorder: 'border-pink-500',
                hoverText: 'text-pink-600',
                hoverIconBg: 'bg-pink-100',
                hoverIconColor: 'text-pink-700'
              }
            };
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
            <motion.div
                key={index}
                variants={fadeIn}
                custom={index * 0.1 + 0.2}
                className={`bg-white rounded-xl p-6 md:p-8 text-left shadow-lg flex flex-col group border border-gray-200 transition-all duration-300 ease-in-out
                            ${isHovered ? `transform scale-105 shadow-xl ${colors.hoverBorder} z-10` : ''}
                            ${isAnotherCardHovered ? 'filter blur-sm opacity-70' : ''}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
            >
                <div className="flex items-start mb-4">
                  <div className={`${colors.iconBg} p-3 rounded-full mr-4 shrink-0 group-hover:${colors.hoverIconBg} transition-colors duration-300`}>
                    <IconComponent className={`${colors.iconColor} w-6 h-6 sm:w-8 sm:h-8 group-hover:${colors.hoverIconColor} transition-colors duration-300`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 group-hover:${colors.hoverText} transition-colors duration-300`}>
                    {category.categoryName}
                  </h3>
              </div>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 leading-relaxed mb-6 flex-grow space-y-1.5 pl-2">
                {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <service.icon className={`${colors.iconColor} w-4 h-4 mr-2 mt-1 shrink-0`} />
                      <span>{service.name}</span>
                    </li>
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

export default AIServicesSection;
