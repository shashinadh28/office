"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { 
  CloudCog, BarChart3, DatabaseZap, ShieldCheck, 
  ServerCog, Rocket, Route, Layers 
} from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const services = [
  {
    icon: <Route size={32} className="text-indigo-500" />,
    title: 'Cloud Strategy & Consulting',
    description: 'Tailored roadmaps to align cloud adoption with your business objectives for maximum ROI.'
  },
  {
    icon: <CloudCog size={32} className="text-orange-500" />,
    title: 'AWS Cloud Solutions',
    description: 'Leverage the full power of Amazon Web Services with our expert design and implementation.'
  },
  {
    icon: <Layers size={32} className="text-blue-500" />,
    title: 'Azure Cloud Solutions',
    description: 'Harness Microsoft Azure’s capabilities for scalable, secure, and innovative applications.'
  },
  {
    icon: <ServerCog size={32} className="text-green-500" />,
    title: 'Cloud Migration Services',
    description: 'Seamlessly transition your workloads to the cloud with minimal disruption and risk.'
  },
  {
    icon: <Rocket size={32} className="text-red-500" />,
    title: 'Cloud-Native Development',
    description: 'Build and deploy resilient, scalable applications designed specifically for the cloud.'
  },
  {
    icon: <DatabaseZap size={32} className="text-yellow-500" />,
    title: 'Managed Cloud Services',
    description: 'Proactive management and optimization of your cloud infrastructure, 24/7.'
  },
  {
    icon: <ShieldCheck size={32} className="text-teal-500" />,
    title: 'Cloud Security Solutions',
    description: 'Robust security strategies to protect your cloud assets, data, and applications.'
  },
  {
    icon: <BarChart3 size={32} className="text-pink-500" />,
    title: 'Data Analytics & BI on Cloud',
    description: 'Unlock insights from your data with powerful cloud-based analytics and business intelligence.'
  }
];

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CloudServicesSection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gradient-to-b from-gray-50 to-sky-50`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Comprehensive <span className="text-sky-600">Cloud Services</span> We Offer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we cover every aspect of your cloud journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start border border-transparent hover:border-sky-400"
            >
              <div className="p-3 mb-4 bg-sky-100 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed min-h-[80px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudServicesSection;
