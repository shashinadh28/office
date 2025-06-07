"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { Brain, Zap, BarChart3, MessageSquareText, Eye, Lightbulb } from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const aiServices = [
  {
    title: 'Custom LLM Development',
    description: 'Build and fine-tune Large Language Models tailored to your specific domain and business needs for enhanced text generation, summarization, and Q&A.',
    icon: <Brain size={32} className="text-teal-500" />,
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-500',
  },
  {
    title: 'AI-Powered Automation',
    description: 'Streamline complex workflows and automate repetitive tasks using intelligent bots and AI agents, boosting efficiency and reducing operational costs.',
    icon: <Zap size={32} className="text-sky-500" />,
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-500',
  },
  {
    title: 'Predictive Analytics & ML',
    description: 'Leverage machine learning to uncover hidden patterns, predict future trends, and make data-driven decisions for strategic advantage.',
    icon: <BarChart3 size={32} className="text-indigo-500" />,
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-500',
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'Develop applications that understand, interpret, and generate human language, enabling advanced sentiment analysis, chatbots, and content processing.',
    icon: <MessageSquareText size={32} className="text-purple-500" />,
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Implement AI systems that can interpret and understand visual information from images and videos for tasks like object detection and image recognition.',
    icon: <Eye size={32} className="text-green-500" />,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
  },
  {
    title: 'AI Strategy & Consulting',
    description: 'Partner with our experts to define your AI roadmap, identify high-impact use cases, and ensure successful AI adoption across your organization.',
    icon: <Lightbulb size={32} className="text-yellow-600" />,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-600',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const AIServicesSection = () => {
  return (
    <section className={`${lexend.className} py-16 md:py-24 bg-gradient-to-b from-gray-50 to-teal-50`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our AI Development <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From custom Large Language Models to intelligent automation and predictive analytics, we empower your business with AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {aiServices.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className={`rounded-xl shadow-xl p-6 md:p-8 flex flex-col ${service.bgColor} border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-5">
                <span className={`p-3 rounded-full mr-4 ${service.bgColor === 'bg-teal-50' ? 'bg-teal-100' : service.bgColor === 'bg-sky-50' ? 'bg-sky-100' : service.bgColor === 'bg-indigo-50' ? 'bg-indigo-100' : service.bgColor === 'bg-purple-50' ? 'bg-purple-100' : service.bgColor === 'bg-green-50' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow min-h-[100px]">{service.description}</p>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: service.borderColor.replace('border-', 'bg-').replace('-500', '-600'), color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full py-2 px-4 rounded-lg font-semibold border-2 ${service.borderColor} ${service.borderColor.replace('border-', 'text-')} transition-colors duration-300`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;
