"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaLaptopCode, FaCloud, FaRobot } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsLayersFill } from 'react-icons/bs';
import { SiSalesforce } from 'react-icons/si';

const Hero3 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
  // Services data
  const services = [
    {
      image: "/outsourcing.png",
      title: "IT Outsourcing",
      description: "Scalable teams for web & mobile development Flexible, expert-driven solutions to speed up your digital growth",
      icon: <FaLaptopCode className="text-white" size={30} />
    },
    {
      image: "/health_bpo.png",
      title: "Healthcare BPO",
      description: "End-to-end medical billing & telehealth support Streamlining patient care and revenue cycle management",
      icon: <MdHealthAndSafety className="text-white" size={30} />
    },
    {
      image: "/tax.png",
      title: "US Taxation",
      description: "Accurate accounting & compliance for firms and CPAs Ensuring financial clarity, regulatory alignment, and peace of mind",
      icon: <AiFillDollarCircle className="text-white" size={30} />
    },
    {
      image: "/cloud.png",
      title: "Cloud Solutions",
      description: "AWS/Azure deployment, migration & management Enabling secure, scalable, and cost-efficient cloud operations",
      icon: <FaCloud className="text-white" size={30} />
    },
    {
      image: "/saas.png",
      title: "SaaS Experts",
      description: "Salesforce, Shopify & HubSpot integration & optimization Unifying platforms to enhance workflows, sales, and customer experience",
      icon: <SiSalesforce className="text-white" size={30} />
    },
    {
      image: "/ai.png",
      title: "AI Solutions",
      description: "Custom LLMs, automation & data intelligence Building AI-driven solutions to unlock insights and streamline operations",
      icon: <FaRobot className="text-white" size={30} />
    }
  ];

  // Triple the array for continuous loop effect
  const loopedServices = [...services, ...services, ...services];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  const marqueeVariants = {
    animate: {
      x: [0, -50 * services.length * 20],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Curved background shape with F4F5FA color */}
      <motion.div 
        initial="hidden"
        animate={controls}
        variants={backgroundVariants}
        className="absolute inset-0 mx-auto w-[95%] h-[95%] bg-[#F4F5FA] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] my-auto"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <motion.div variants={headerVariants} className="inline-block mb-2">
            <span className="text-teal-500 uppercase tracking-[0.13em] font-normal text-xs sm:text-sm" style={{ fontFamily: 'Lexend, sans-serif' }}>
              <BsLayersFill className="inline-block mr-2" /> SOLUTIONS
            </span>
          </motion.div>
          <motion.h2 
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="text-black">Business </span>
            <span className="text-teal-500">Solutions</span>
            <br className="hidden sm:block" />
            <span className="text-black">We Support</span>
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-[#5B5B5B] max-w-2xl mx-auto mb-4 md:mb-6 text-base md:text-lg"
            style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}
          >
            We power global businesses with India's top talent, offering specialized outsourcing solutions across
          </motion.p>
          <motion.div 
            variants={headerVariants}
            className="w-16 md:w-24 h-1 bg-teal-500 mx-auto mt-2 mb-4 md:mb-8"
          ></motion.div>
        </motion.div>

        {/* Cards marquee container */}
        <div className="overflow-hidden max-w-full mx-auto py-4">
          <motion.div 
            className="flex gap-3 md:gap-4"
            variants={marqueeVariants}
            animate="animate"
          >
            {loopedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % services.length), duration: 0.5 }}
                className="relative flex-shrink-0 w-[280px] h-[380px] sm:w-[300px] sm:h-[390px] md:w-[320px] md:h-[410px]"
              >
                {/* Card with drop shadow and border */}
                <motion.div 
                  whileHover={{ 
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15), 0 10px 15px rgba(0,0,0,0.07)',
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute top-0 left-0 w-full h-[95%] sm:h-[96%] md:h-[97%] bg-white rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center transition-all duration-300"
                  style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
                    border: '1px solid black'
                  }}
                >
                  {/* Top image with padding and curved edges */}
                  <div className="relative w-full p-3 h-[160px] md:h-[180px]">
                    <div className="w-full h-full overflow-hidden rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={260}
                        height={140}
                        className="object-cover rounded-[12px] md:rounded-[16px] max-w-full max-h-full"
                      />
                    </div>
                  </div>
                  
                  {/* Icon circle at center of card - teal background with white border */}
                  <div
                    className="absolute top-[150px] sm:top-[160px] md:top-[170px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-teal-500 flex items-center justify-center shadow-lg" 
                    style={{ border: '3px solid white' }}
                  >
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 sm:p-4 md:p-5 text-center flex flex-col items-center justify-center flex-grow mt-[-10px] md:mt-[-15px]">
                    <h3 className="text-xl sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-900" style={{ fontFamily: 'Lexend, sans-serif' }}>{service.title}</h3>
                    <p className="text-gray-500 text-center text-xs sm:text-sm" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>{service.description}</p>
                  </div>
                </motion.div>
                
                {/* Floating button that overlaps the card border */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <button 
                    className="px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-teal-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-teal-600 text-sm md:text-base min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
                    style={{
                      boxShadow: '0 8px 25px rgba(0,139,139,0.3)',
                      fontFamily: 'Lexend, sans-serif'
                    }}
                  >
                    Know More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
 