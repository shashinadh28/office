"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, UsersRound, UserCheck, ArrowDown } from 'lucide-react';

const Hero4 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1, duration: 0.8 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const processStepsData = [
    {
      id: 1,
      icon: FileText,
      title: "Step 1: Send Job Description",
      description: "Send a JD to jobs@gatewayworkforce.com",
      iconBgColor: "bg-sky-100",
      iconTextColor: "text-sky-700",
    },
    {
      id: 2,
      icon: UsersRound,
      title: "Step 2: We Source & Vet Candidates",
      description: "From our internal team, resume pool, or new hires",
      iconBgColor: "bg-teal-100",
      iconTextColor: "text-teal-700",
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Step 3: You Interview & Hire",
      description: "You select the best fit, and we onboard them",
      iconBgColor: "bg-indigo-100",
      iconTextColor: "text-indigo-700",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 sm:mb-16 md:mb-20"
          variants={itemVariants}
        >
          Our Hiring Process
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-stretch justify-center md:justify-between gap-8 md:gap-6 lg:gap-10">
          {processStepsData.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={step.id}>
                <motion.div 
                  className="flex-1 flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1.5 transform transition-all duration-300 ease-in-out"
                  variants={itemVariants}
                >
                  <div className={`p-4 sm:p-5 rounded-full ${step.iconBgColor} mb-5 sm:mb-6 shadow-md w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center`}>
                    <IconComponent className={`${step.iconTextColor} w-10 h-10 sm:w-12 sm:h-12`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                </motion.div>

                {index < processStepsData.length - 1 && (
                  <>
                    {/* Desktop Connector */}
                    <motion.div 
                      variants={itemVariants}
                      className="hidden md:flex items-center justify-center flex-shrink-0 mx-2 lg:mx-4"
                      style={{ minWidth: '50px', maxWidth: '100px', flexBasis: 'auto' }} // Adjusted for better spacing
                    >
                      <div className="w-full h-1 bg-gray-300 rounded-full"></div>
                    </motion.div>
                    {/* Mobile Connector */}
                    <motion.div 
                      variants={itemVariants}
                      className="flex md:hidden items-center justify-center my-6 sm:my-8 w-full"
                    >
                      <ArrowDown className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10" />
                    </motion.div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero4; 