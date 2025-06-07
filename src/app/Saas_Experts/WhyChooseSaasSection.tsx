"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { 
  Users, CheckSquare, Puzzle, BarChart2, 
  Target, Zap, Lightbulb, ShieldCheck 
} from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const features = [
  {
    icon: <Users size={36} className="text-purple-500" />,
    title: 'Certified Platform Specialists',
    description: 'Our teams hold certifications in Salesforce, Shopify, and HubSpot, ensuring expert service.'
  },
  {
    icon: <CheckSquare size={36} className="text-pink-500" />,
    title: 'Tailored Customizations',
    description: 'We configure and customize SaaS platforms to perfectly match your unique business processes.'
  },
  {
    icon: <Puzzle size={36} className="text-red-500" />,
    title: 'Seamless Integrations',
    description: 'Connect your SaaS applications with other business systems for a unified data flow.'
  },
  {
    icon: <BarChart2 size={36} className="text-orange-500" />,
    title: 'Data-Driven Optimization',
    description: 'Leverage analytics and insights to continuously improve your SaaS performance and ROI.'
  },
  {
    icon: <Target size={36} className="text-green-500" />,
    title: 'Strategic Process Alignment',
    description: 'We ensure your SaaS tools actively support and enhance your strategic business goals.'
  },
  {
    icon: <Zap size={36} className="text-blue-500" />,
    title: 'Proactive Support & Training',
    description: 'Empower your teams with ongoing support and training to maximize platform adoption.'
  },
  {
    icon: <Lightbulb size={36} className="text-yellow-500" />,
    title: 'Innovative Solutions',
    description: 'Stay ahead with cutting-edge SaaS strategies and custom app development.'
  },
  {
    icon: <ShieldCheck size={36} className="text-teal-500" />,
    title: 'Security & Compliance',
    description: 'Implement robust security measures and ensure compliance within your SaaS ecosystem.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const WhyChooseSaasSection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-white`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Our <span className="text-purple-600">SaaS Experts?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your SaaS investment with our deep platform knowledge and tailored solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-purple-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-purple-100 hover:border-purple-500 transform hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-purple-100 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed min-h-[70px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSaasSection;
