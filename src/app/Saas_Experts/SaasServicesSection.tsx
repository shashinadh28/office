"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { Cloud, ShoppingCart, Target as HubSpotIcon, CheckCircle, Settings, Zap, Users, BarChartHorizontal } from 'lucide-react'; // Renamed Target to HubSpotIcon

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const platformServices = [
  {
    platformName: 'Salesforce Solutions',
    icon: <Cloud size={40} className="text-blue-500" />,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    description: 'Maximize CRM effectiveness with our comprehensive Salesforce services, from implementation to custom app development.',
    services: [
      { name: 'Sales & Service Cloud', icon: <Users size={18} className="text-blue-600" /> },
      { name: 'Custom App Development', icon: <Settings size={18} className="text-blue-600" /> },
      { name: 'Lightning Migration', icon: <Zap size={18} className="text-blue-600" /> },
      { name: 'Third-Party Integrations', icon: <CheckCircle size={18} className="text-blue-600" /> },
    ],
  },
  {
    platformName: 'Shopify Expertise',
    icon: <ShoppingCart size={40} className="text-green-500" />,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    description: 'Build and scale your e-commerce business with our expert Shopify store setup, customization, and app integration.',
    services: [
      { name: 'Store Setup & Design', icon: <Settings size={18} className="text-green-600" /> },
      { name: 'Theme Customization', icon: <Zap size={18} className="text-green-600" /> },
      { name: 'App Integration & Development', icon: <CheckCircle size={18} className="text-green-600" /> },
      { name: 'Shopify Plus Solutions', icon: <Users size={18} className="text-green-600" /> },
    ],
  },
  {
    platformName: 'HubSpot Services',
    icon: <HubSpotIcon size={40} className="text-orange-500" />,
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-500',
    description: 'Unify your marketing, sales, and service efforts with our HubSpot CRM setup, integration, and optimization services.',
    services: [
      { name: 'CRM Setup & Migration', icon: <Settings size={18} className="text-orange-600" /> },
      { name: 'Marketing & Sales Hubs', icon: <Users size={18} className="text-orange-600" /> },
      { name: 'CMS & Operations Hubs', icon: <Zap size={18} className="text-orange-600" /> },
      { name: 'Custom Integrations', icon: <CheckCircle size={18} className="text-orange-600" /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.3, // Stagger after card appears
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const SaasServicesSection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gradient-to-b from-gray-50 to-purple-50`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our SaaS Platform <span className="text-pink-600">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for Salesforce, Shopify, and HubSpot to elevate your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {platformServices.map((platform, index) => (
            <motion.div
              key={platform.platformName}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className={`rounded-xl shadow-xl p-6 md:p-8 flex flex-col ${platform.bgColor} border-2 ${platform.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center mb-5">
                <span className={`p-3 rounded-full mr-4 ${platform.bgColor === 'bg-blue-50' ? 'bg-blue-100' : platform.bgColor === 'bg-green-50' ? 'bg-green-100' : 'bg-orange-100'}`}>
                  {platform.icon}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800">{platform.platformName}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6 min-h-[60px]">{platform.description}</p>
              <ul className="space-y-3 flex-grow">
                {platform.services.map((service, serviceIndex) => (
                  <motion.li 
                    key={service.name}
                    custom={serviceIndex} 
                    variants={listItemVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex items-center text-gray-700 text-sm">
                    <span className={`mr-3 p-1 rounded-full ${platform.bgColor === 'bg-blue-50' ? 'bg-blue-200' : platform.bgColor === 'bg-green-50' ? 'bg-green-200' : 'bg-orange-200'}`}>{service.icon}</span>
                    {service.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasServicesSection;
