"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { 
  Brain, Cog, ShieldCheck, TrendingUp, 
  FlaskConical, Users, Lightbulb, Scale 
} from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const features = [
  {
    icon: <Brain size={36} className="text-teal-500" />,
    title: 'Deep AI Expertise',
    description: 'Our team comprises experienced AI researchers, data scientists, and ML engineers.'
  },
  {
    icon: <Cog size={36} className="text-sky-500" />,
    title: 'Custom-Tailored Solutions',
    description: 'We develop bespoke AI models and applications that align perfectly with your unique requirements.'
  },
  {
    icon: <ShieldCheck size={36} className="text-green-500" />,
    title: 'Ethical & Responsible AI',
    description: 'We are committed to building fair, transparent, and accountable AI systems.'
  },
  {
    icon: <TrendingUp size={36} className="text-purple-500" />,
    title: 'Scalable & Future-Proof',
    description: 'Our AI solutions are designed for scalability and adaptability to evolving business needs.'
  },
  {
    icon: <FlaskConical size={36} className="text-orange-500" />,
    title: 'Cutting-Edge Research',
    description: 'We stay at the forefront of AI advancements to deliver innovative and impactful solutions.'
  },
  {
    icon: <Users size={36} className="text-red-500" />,
    title: 'Collaborative Partnership',
    description: 'We work closely with you at every stage, ensuring alignment and transparency.'
  },
  {
    icon: <Lightbulb size={36} className="text-yellow-500" />,
    title: 'Focus on Business Value',
    description: 'Our AI solutions are geared towards solving real-world problems and delivering tangible ROI.'
  },
  {
    icon: <Scale size={36} className="text-indigo-500" />,
    title: 'Robust Deployment & Support',
    description: 'Ensuring seamless integration and ongoing support for your AI applications.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Custom ease for a more dynamic feel
    },
  }),
};

const WhyChooseAISection = () => {
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
            Why Gateway for <span className="text-teal-600">AI Innovation?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage our expertise to build transformative AI solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" style={{ perspective: '1000px' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-teal-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-teal-100 hover:border-teal-500 transform hover:scale-105"
            >
              <div className="mb-4 p-3 bg-teal-100 rounded-full inline-block">
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

export default WhyChooseAISection;
