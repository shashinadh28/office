"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Image from 'next/image';
import { 
  Cloud, ShoppingCart, Target as HubSpotIcon, CheckCircle, 
  Settings, Zap, Users, BarChartHorizontal, Database,
  Smartphone, TrendingUp, GitBranch, Brain, Globe, ArrowRight
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

const servicesData = [
  {
    title: "Salesforce Solutions",
    icon: Cloud,
    description: [
      "Implementation & customization",
      "CRM migration & data integration",
      "Sales Cloud & Service Cloud optimization",
      "Lightning migration & app development",
      "Analytics & AI (Einstein) integration"
    ],
    iconColor: "text-[#F35120]",
    imagePath: "/optimized/images/salesforce_services.jpg"
  },
  {
    title: "Shopify E-Commerce Excellence",
    icon: ShoppingCart,
    description: [
      "Store setup & theme customization",
      "App integration & API development",
      "Migration from other platforms",
      "Performance optimization & SEO",
      "Multi-channel sales integration"
    ],
    iconColor: "text-[#F35120]",
    imagePath: "/optimized/images/Shopify_E_Commerce_Excellence.jpg"
  },
  {
    title: "HubSpot Growth Stack",
    icon: HubSpotIcon,
    description: [
      "CRM implementation & automation",
      "Marketing Hub setup & campaign strategy",
      "Sales Hub pipeline optimization",
      "Service Hub customer support solutions",
      "Data sync & system integrations"
    ],
    iconColor: "text-[#F35120]",
    imagePath: "/optimized/images/HubSpot_Growth_Stack.jpg"
  },
  {
    title: "SaaS Integration & Support",
    icon: CheckCircle,
    description: [
      "Multi-platform SaaS integration",
      "Custom API development",
      "Data migration & synchronization",
      "Ongoing maintenance & support",
      "User training & adoption programs"
    ],
    iconColor: "text-[#F35120]",
    imagePath: "/optimized/images/SaaS_Integration_&_Support.jpg"
  }
];

const SaasServicesSection = () => {
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
            className="inline-block bg-[#F35120] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
          >
            Our Services
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-black leading-tight"
          >
            Our SaaS <span className="border-b-4 border-[#F35120]">Expertise</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
          Our team of experienced SaaS specialists combines industry knowledge, cutting-edge technology, and innovative strategies to guide you towards optimized business operations.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCardIndex === index;
            const isAnotherCardHovered = hoveredCardIndex !== null && !isHovered;
            
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index * 0.1 + 0.2}
                className={`bg-white rounded-xl text-left shadow-lg group border border-gray-200 transition-all duration-300 ease-in-out overflow-hidden
                            ${isHovered ? 'transform scale-105 shadow-xl border-[#F35120] z-10' : ''}
                            ${isAnotherCardHovered ? 'filter blur-sm opacity-70' : ''}`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className={`flex flex-col lg:flex-row h-auto lg:h-80 overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image section - no background color, just white/transparent */}
                  <div className="lg:w-2/5 relative bg-white flex items-center justify-center p-4">
                    <Image
                      src={service.imagePath}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Content section */}
                  <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
                    <div className="flex items-start mb-6">
                      <div className={`bg-white p-3 rounded-full mr-4 shrink-0 group-hover:bg-orange-100 transition-colors duration-300 shadow-md`}>
                        <IconComponent className={`text-[#F35120] w-6 h-6 sm:w-8 sm:h-8 group-hover:text-[#F35120] transition-colors duration-300`} />
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold text-black group-hover:text-[#F35120] transition-colors duration-300`}>
                        {service.title}
                      </h3>
                    </div>
                    <ul className={`list-disc list-inside text-sm sm:text-base text-gray-600 leading-relaxed space-y-2 pl-2`}>
                      {service.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#F35120] mr-2 mt-0.5 shrink-0" />
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

export default SaasServicesSection;
