"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaCode, FaUserMd, FaCloud, FaRobot, FaShopify, FaCalculator } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BusinessSolutionsOriginal = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Rotate through cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const serviceData: Omit<ServiceCardProps, 'index'>[] = [
    {
      icon: <FaCode className="text-blue-500" size={30} />,
      title: "Web & Mobile Development",
      description: "Full-stack development teams that build and maintain enterprise applications and mobile solutions"
    },
    {
      icon: <FaUserMd className="text-green-500" size={30} />,
      title: "Healthcare BPO",
      description: "Medical billing, coding, claims processing, and healthcare administration specialists"
    },
    {
      icon: <FaShopify className="text-purple-500" size={30} />,
      title: "SaaS Expertise",
      description: "Salesforce, Shopify, HubSpot and other enterprise SaaS implementation and management"
    },
    {
      icon: <FaRobot className="text-red-500" size={30} />,
      title: "AI Solutions",
      description: "Machine learning, data science, and AI implementation specialists to transform your business"
    },
    {
      icon: <FaCloud className="text-teal-500" size={30} />,
      title: "Cloud Services",
      description: "AWS, Azure, and cloud infrastructure experts for migration, management, and optimization"
    },
    {
      icon: <FaCalculator className="text-yellow-500" size={30} />,
      title: "US Taxation Services",
      description: "Tax preparation, filing, and compliance experts for US businesses and individuals"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
    const isActive = index === activeCardIndex;
    
    return (
      <motion.div
        className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 border border-gray-200 ${isActive ? 'scale-105 shadow-xl z-10' : 'scale-95 opacity-70'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotate: isActive ? 0 : (index < activeCardIndex ? -5 : 5),
          scale: isActive ? 1.05 : 0.95
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.1, 0.25, 1.0],
          delay: 0.1 * index
        }}
      >
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="font-bold mb-2 text-xl">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ opacity: 0.15 }}
      >
        <img
          src="/services.png"
          alt="Services Background"
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(0, 50, 20, 0.8)' }} // Dark green overlay
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Business Solutions We Support
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          We power global businesses with India's top talent, offering specialized outsourcing solutions across various domains
        </motion.p>

        {/* Rotating cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSolutionsOriginal;