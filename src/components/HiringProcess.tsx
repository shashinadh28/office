"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, FileText, Search, UserCheck } from 'lucide-react';

interface ProcessStepData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const processStepsData: ProcessStepData[] = [
  {
    id: 1,
    title: "Send Job Description",
    subtitle: "Initial Requirements",
    description: "Send your detailed job description to jobs@gatewayworkforce.com. Our team will review your requirements and understand your specific needs within 24 hours.",
    icon: FileText,
  },
  {
    id: 2,
    title: "We Source & Vet Candidates",
    subtitle: "Expert Curation",
    description: "Our experienced recruiters source candidates from our internal team, extensive resume pool, or conduct targeted hiring to find the perfect match for your role.",
    icon: Search,
  },
  {
    id: 3,
    title: "You Interview & Hire",
    subtitle: "Final Selection",
    description: "Review our curated candidates, conduct interviews, and select the best fit. We handle all onboarding processes and ensure seamless integration with your team.",
    icon: UserCheck,
  },
];

const ProcessStep = ({ step, index, isActive, isCompleted }: { 
  step: ProcessStepData; 
  index: number; 
  isActive: boolean; 
  isCompleted: boolean;
}) => {
  const IconComponent = step.icon;
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const isActiveState = isActive || isCompleted;

  return (
    <motion.div
      className="flex-1 min-w-0"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={`p-6 lg:p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 h-full shadow-lg border
                   ${isActiveState ? 'bg-[#12A493] text-white border-[#12A493]' : 'bg-white text-[#00283A] border-gray-200'}
                   hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
        whileHover={{ 
          scale: 1.02, 
          y: -8,
          transition: { duration: 0.3 }
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center h-full flex flex-col">
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              className={`p-4 rounded-2xl shadow-lg group-hover:scale-110 mb-4 w-16 h-16 flex items-center justify-center transition-all duration-300
                         ${isActiveState ? 'bg-white' : 'bg-[#12A493]'}`}
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.4 }}
            >
              <IconComponent 
                className={`w-8 h-8 transition-colors duration-300 ${isActiveState ? 'text-[#12A493]' : 'text-white'}`} 
                strokeWidth={2} 
              />
            </motion.div>
            
            <div className="text-center">
              <motion.div 
                className={`text-sm font-semibold uppercase tracking-wider mb-2 transition-colors duration-300
                           ${isActiveState ? 'text-[#12A493]/80' : 'text-[#12A493]'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {step.subtitle}
              </motion.div>
              
              <motion.h3 
                className={`text-xl lg:text-2xl font-bold leading-tight transition-colors duration-300
                           ${isActiveState ? 'text-white' : 'text-[#00283A]'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {step.title}
              </motion.h3>
            </div>
          </div>
          
          <motion.div
            className={`w-16 h-1 rounded-full mb-4 mx-auto group-hover:w-20 transition-all duration-300
                       ${isActiveState ? 'bg-white' : 'bg-[#12A493]'}`}
            initial={{ width: 0 }}
            whileInView={{ width: isActiveState ? '4rem' : '2rem' }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
          />
          
          <motion.p 
            className={`text-sm lg:text-base leading-relaxed text-center font-medium flex-grow transition-colors duration-300
                       ${isActiveState ? 'text-white/90' : 'text-[#00283A]/80'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            {step.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HiringProcess = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [scrollBlocked, setScrollBlocked] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const stepThreshold = 1 / processStepsData.length;
      const currentStepIndex = Math.floor(progress / stepThreshold);
      
      if (progress > currentStepIndex * stepThreshold + stepThreshold * 0.2) {
        setActiveStep(Math.min(currentStepIndex, processStepsData.length - 1));
      } else {
        setActiveStep(currentStepIndex - 1);
      }

      // Unblock scroll when all steps are completed
      if (currentStepIndex >= 2) {
        setScrollBlocked(false);
      }
    });

    return unsubscribe;
  }, [scrollYProgress]);

  // Block scroll functionality
  useEffect(() => {
    if (scrollBlocked) {
      const handleWheel = (e: WheelEvent) => {
        if (activeStep < 2) {
          e.preventDefault();
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (activeStep < 2 && ['ArrowDown', 'PageDown', 'End'].includes(e.key)) {
          e.preventDefault();
        }
      };

      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('wheel', handleWheel);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [scrollBlocked, activeStep]);

  const timelineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 lg:py-24 bg-[#EAF8F7] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 lg:w-72 h-48 lg:h-72 bg-[#12A493] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 lg:w-96 h-64 lg:h-96 bg-[#12A493] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 lg:w-80 h-56 lg:h-80 bg-[#12A493] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block bg-[#12A493] text-white text-xs lg:text-sm font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-widest mb-6 lg:mb-8 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(18,164,147,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            How It Works
          </motion.span>
          
          <motion.h2 
            className="text-3xl lg:text-5xl xl:text-6xl font-black text-[#00283A] leading-tight mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Hiring{' '}
            <span className="text-[#12A493]">
              Process
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg lg:text-xl text-[#00283A]/80 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A streamlined three-step process designed to connect you with top talent quickly and efficiently
          </motion.p>
          
          <motion.div 
            className="w-24 lg:w-32 h-1.5 bg-[#12A493] mx-auto mt-6 lg:mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 'auto' }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gray-300 rounded-full">
            <motion.div
              className="h-full bg-[#12A493] rounded-full origin-left"
              style={{ width: timelineWidth }}
            />
          </div>

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-8">
            {processStepsData.map((step, index) => (
              <div key={step.id} className="relative flex-1">
                {/* Timeline Circle - Desktop Only */}
                <motion.div
                  className={`hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 z-20 transition-all duration-700 ${
                    index <= activeStep
                      ? 'bg-[#12A493] border-[#12A493] shadow-2xl'
                      : 'bg-white border-gray-300 shadow-lg'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    animate={{
                      scale: index <= activeStep ? 1 : 0,
                      rotate: index <= activeStep ? 360 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Check 
                      className={`w-6 h-6 ${index <= activeStep ? 'text-white' : 'text-gray-400'}`}
                      strokeWidth={3}
                    />
                  </motion.div>
                  
                  {/* Glow effect for active indicators */}
                  {index <= activeStep && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#12A493] opacity-30 animate-pulse"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Step Content */}
                <div className="mt-0 lg:mt-16">
                  <ProcessStep
                    step={step}
                    index={index}
                    isActive={index === activeStep}
                    isCompleted={index < activeStep}
                  />
                </div>

                {/* Arrow for mobile */}
                {index < processStepsData.length - 1 && (
                  <motion.div
                    className="block lg:hidden flex justify-center mt-6"
                    animate={{
                      y: [0, 8, 0],
                      opacity: index < activeStep ? 0.8 : 0.4,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#12A493] rotate-90" strokeWidth={2} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
            {processStepsData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-700 ${
                  index <= activeStep 
                    ? 'bg-[#12A493] shadow-lg' 
                    : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.8 }}
                animate={{ scale: index === activeStep ? 1.3 : 1 }}
                style={{
                  boxShadow: index <= activeStep ? '0 0 15px rgba(18,164,147,0.5)' : 'none'
                }}
              />
            ))}
          </div>
          <motion.p 
            className="text-base lg:text-lg font-semibold text-[#00283A]"
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Step <span className="text-xl lg:text-2xl font-black text-[#12A493]">{Math.max(activeStep + 1, 1)}</span> of {processStepsData.length}
          </motion.p>
          <p className="text-sm lg:text-base text-[#00283A]/70 mt-2 font-medium">
            {processStepsData[Math.max(activeStep, 0)]?.subtitle}
          </p>
          {scrollBlocked && activeStep < 2 && (
            <motion.p 
              className="text-sm text-[#12A493] mt-4 font-semibold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to continue through the process...
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HiringProcess; 