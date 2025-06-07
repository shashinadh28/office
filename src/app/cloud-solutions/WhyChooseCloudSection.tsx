"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { Award, Brain, CheckCircle, Clock, CloudUpload, DollarSign, GitMerge, HardDrive, LifeBuoy, Lock, Repeat, Scaling, Settings2, ShieldCheck, Shuffle, TrendingUp, Users, Zap } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const features = [
  {
    icon: <Brain size={36} className="text-sky-500" />,
    title: 'Certified Experts',
    description: 'Our AWS and Azure certified professionals ensure best-practice solutions.',
    altIcons: [<ShieldCheck key="alt1" size={24} className="text-sky-400 opacity-70" />, <Award key="alt2" size={24} className="text-sky-400 opacity-70" />]
  },
  {
    icon: <DollarSign size={36} className="text-green-500" />,
    title: 'Cost Optimization',
    description: 'We implement strategies to reduce your cloud spend without compromising performance.',
    altIcons: [<TrendingUp key="alt1" size={24} className="text-green-400 opacity-70" />, <Settings2 key="alt2" size={24} className="text-green-400 opacity-70" />]
  },
  {
    icon: <Scaling size={36} className="text-purple-500" />,
    title: 'Scalable & Secure',
    description: 'Architectures designed for growth, built with robust security at their core.',
    altIcons: [<Lock key="alt1" size={24} className="text-purple-400 opacity-70" />, <HardDrive key="alt2" size={24} className="text-purple-400 opacity-70" />]
  },
  {
    icon: <Users size={36} className="text-red-500" />,
    title: '24/7 Proactive Support',
    description: 'Continuous monitoring and expert assistance to keep your cloud environment pristine.',
    altIcons: [<Clock key="alt1" size={24} className="text-red-400 opacity-70" />, <LifeBuoy key="alt2" size={24} className="text-red-400 opacity-70" />]
  },
  {
    icon: <CloudUpload size={36} className="text-orange-500" />,
    title: 'Seamless Migration',
    description: 'Minimize downtime and risk with our proven cloud migration methodologies.',
    altIcons: [<Shuffle key="alt1" size={24} className="text-orange-400 opacity-70" />, <CheckCircle key="alt2" size={24} className="text-orange-400 opacity-70" />]
  },
  {
    icon: <GitMerge size={36} className="text-teal-500" />,
    title: 'DevOps & Automation',
    description: 'Accelerate your development lifecycle with integrated CI/CD and automation.',
    altIcons: [<Zap key="alt1" size={24} className="text-teal-400 opacity-70" />, <Repeat key="alt2" size={24} className="text-teal-400 opacity-70" />]
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const WhyChooseCloudSection = () => {
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
            Why Partner with Gateway for <span className="text-blue-600">Cloud Excellence?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock unparalleled cloud capabilities with a partner dedicated to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center border border-gray-200 hover:border-blue-500"
            >
              <div className="mb-5 p-4 bg-blue-100 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 min-h-[60px]">{feature.description}</p>
              <div className="flex space-x-3 mt-auto pt-3 border-t border-gray-200 w-full justify-center">
                {feature.altIcons.map((altIcon, idx) => (
                  <span key={idx} className="p-2 bg-gray-100 rounded-full shadow-sm">
                    {altIcon}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCloudSection;
