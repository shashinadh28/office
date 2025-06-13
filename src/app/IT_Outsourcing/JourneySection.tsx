'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowDown, Sparkles, Users, Rocket, Search } from 'lucide-react';

interface JourneyStepData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  themeColor: 'blue' | 'indigo' | 'purple' | 'emerald' | 'yellow' | 'dark' | 'lightblue';
  position: "left" | "right";
  gradient: string;
}

const journeyStepsData: JourneyStepData[] = [
  {
    id: 1,
    title: "Discovery Phase",
    subtitle: "Strategic Foundation",
    description: "We begin with a comprehensive analysis of your project requirements, conducting stakeholder interviews and technical assessments to identify the optimal technology stack and talent architecture for your success.",
    icon: Search,
    themeColor: "yellow",
    position: "right",
    gradient: "from-yellow-400 via-yellow-500 to-yellow-600"
  },
  {
    id: 2,
    title: "Talent Matching",
    subtitle: "Precision Curation",
    description: "Our senior consultants leverage advanced matching algorithms and cultural fit assessments to curate elite developers. We conduct rigorous technical interviews and handle all legal documentation seamlessly.",
    icon: Users,
    themeColor: "dark",
    position: "left",
    gradient: "from-gray-700 via-gray-800 to-gray-900"
  },
  {
    id: 3,
    title: "Build Your Dream Team",
    subtitle: "Excellence Assembly",
    description: "Select from our thoroughly vetted talent pool of top-tier professionals. We ensure comprehensive onboarding, premium tooling, and seamless integration with your existing workflows and systems.",
    icon: Sparkles,
    themeColor: "lightblue",
    position: "right",
    gradient: "from-sky-500 via-sky-600 to-sky-700"
  },
  {
    id: 4,
    title: "Launch & Thrive",
    subtitle: "Sustained Excellence",
    description: "Your premium development team accelerates from day one while our dedicated success managers handle operations, provide strategic insights, and deliver comprehensive performance analytics.",
    icon: Rocket,
    themeColor: "emerald",
    position: "left",
    gradient: "from-emerald-600 via-emerald-700 to-emerald-800"
  },
];

const TimelineStep = ({ step, index, isActive, isCompleted }: { 
  step: JourneyStepData; 
  index: number; 
  isActive: boolean; 
  isCompleted: boolean;
}) => {
  const IconComponent = step.icon;
  const isLeft = step.position === "left";
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -120 : 120,
      scale: 0.85,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getThemeColors = (themeName: JourneyStepData['themeColor'], isActive: boolean, isCompleted: boolean) => {
    const colors = {
      blue: {
        bg: isActive || isCompleted ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 'bg-white',
        text: isActive || isCompleted ? 'text-white' : 'text-blue-800',
        subtitle: isActive || isCompleted ? 'text-blue-100' : 'text-blue-600',
        desc: isActive || isCompleted ? 'text-blue-50' : 'text-gray-600',
        border: isActive || isCompleted ? 'border-blue-400' : 'border-blue-200',
        icon: isActive || isCompleted ? 'bg-blue-600' : 'bg-blue-100',
        iconText: isActive || isCompleted ? 'text-white' : 'text-blue-700',
        accent: 'bg-blue-500'
      },
      indigo: {
        bg: isActive || isCompleted ? 'bg-gradient-to-br from-indigo-500 to-indigo-700' : 'bg-white',
        text: isActive || isCompleted ? 'text-white' : 'text-indigo-800',
        subtitle: isActive || isCompleted ? 'text-indigo-100' : 'text-indigo-600',
        desc: isActive || isCompleted ? 'text-indigo-50' : 'text-gray-600',
        border: isActive || isCompleted ? 'border-indigo-400' : 'border-indigo-200',
        icon: isActive || isCompleted ? 'bg-indigo-600' : 'bg-indigo-100',
        iconText: isActive || isCompleted ? 'text-white' : 'text-indigo-700',
        accent: 'bg-indigo-500'
      },
      purple: {
        bg: isActive || isCompleted ? 'bg-gradient-to-br from-purple-500 to-purple-700' : 'bg-white',
        text: isActive || isCompleted ? 'text-white' : 'text-purple-800',
        subtitle: isActive || isCompleted ? 'text-purple-100' : 'text-purple-600',
        desc: isActive || isCompleted ? 'text-purple-50' : 'text-gray-600',
        border: isActive || isCompleted ? 'border-purple-400' : 'border-purple-200',
        icon: isActive || isCompleted ? 'bg-purple-600' : 'bg-purple-100',
        iconText: isActive || isCompleted ? 'text-white' : 'text-purple-700',
        accent: 'bg-purple-500'
      },
      emerald: {
        bg: isActive || isCompleted ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' : 'bg-white',
        text: isActive || isCompleted ? 'text-white' : 'text-emerald-800',
        subtitle: isActive || isCompleted ? 'text-emerald-100' : 'text-emerald-600',
        desc: isActive || isCompleted ? 'text-emerald-50' : 'text-gray-600',
        border: isActive || isCompleted ? 'border-emerald-400' : 'border-emerald-200',
        icon: isActive || isCompleted ? 'bg-emerald-600' : 'bg-emerald-100',
        iconText: isActive || isCompleted ? 'text-white' : 'text-emerald-700',
        accent: 'bg-emerald-500'
      },
      yellow: {
        bg: isActive || isCompleted ? 'bg-[#FDC703]' : 'bg-white',
        text: isActive || isCompleted ? 'text-white' : 'text-yellow-800',
        subtitle: isActive || isCompleted ? 'text-yellow-100' : 'text-yellow-600',
        desc: isActive || isCompleted ? 'text-yellow-50' : 'text-gray-600',
        border: isActive || isCompleted ? 'border-yellow-400' : 'border-yellow-200',
        icon: isActive || isCompleted ? 'bg-yellow-600' : 'bg-yellow-100',
        iconText: isActive || isCompleted ? 'text-white' : 'text-yellow-700',
        accent: 'bg-[#FDC703]'
      },
      dark: {
        bg: isActive || isCompleted ? 'bg-[#1E2939]' : 'bg-white',
        text: isActive || isCompleted ? 'text-white' : 'text-gray-800',
        subtitle: isActive || isCompleted ? 'text-gray-300' : 'text-gray-600',
        desc: isActive || isCompleted ? 'text-gray-200' : 'text-gray-600',
        border: isActive || isCompleted ? 'border-gray-600' : 'border-gray-200',
        icon: isActive || isCompleted ? 'bg-gray-700' : 'bg-gray-100',
        iconText: isActive || isCompleted ? 'text-white' : 'text-gray-700',
        accent: 'bg-[#1E2939]'
      },
      lightblue: {
        bg: isActive || isCompleted ? 'bg-[#00A6F4]' : 'bg-white',
        text: isActive || isCompleted ? 'text-white' : 'text-blue-800',
        subtitle: isActive || isCompleted ? 'text-blue-100' : 'text-blue-600',
        desc: isActive || isCompleted ? 'text-blue-50' : 'text-gray-600',
        border: isActive || isCompleted ? 'border-blue-400' : 'border-blue-200',
        icon: isActive || isCompleted ? 'bg-blue-600' : 'bg-blue-100',
        iconText: isActive || isCompleted ? 'text-white' : 'text-blue-700',
        accent: 'bg-[#00A6F4]'
      }
    };
    return colors[themeName];
  };

  const theme = getThemeColors(step.themeColor, isActive, isCompleted);

  return (
    <div className={`flex items-center w-full ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col lg:gap-8`}>
      {/* Card - Now responsive */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ 
          scale: 1.02, 
          y: -4,
          transition: { duration: 0.3 }
        }}
        className={`w-full lg:w-[28rem] xl:w-[32rem] p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-2 backdrop-blur-sm ${theme.bg} ${theme.border} 
                   hover:shadow-2xl cursor-pointer group relative overflow-hidden transition-all duration-500`}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl ${theme.icon} shadow-lg group-hover:scale-110 mb-4`}
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.4 }}
            >
              <IconComponent className={`w-6 h-6 lg:w-8 lg:h-8 ${theme.iconText}`} strokeWidth={2} />
            </motion.div>
            
            <div className="text-center">
              <motion.div 
                className={`text-xs lg:text-sm font-semibold uppercase tracking-wider mb-2 ${theme.subtitle}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {step.subtitle}
              </motion.div>
              
              <motion.h3 
                className={`text-xl lg:text-2xl font-bold ${theme.text} leading-tight`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {step.title}
              </motion.h3>
            </div>
          </div>
          
          <motion.div 
            className={`w-12 lg:w-16 h-1 rounded-full ${theme.accent} mb-4 mx-auto group-hover:w-16 lg:group-hover:w-20`}
            initial={{ width: 0 }}
            whileInView={{ width: isActive || isCompleted ? '4rem' : '2rem' }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
          />
          
          <motion.p 
            className={`text-sm lg:text-base ${theme.desc} leading-relaxed text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            {step.description}
          </motion.p>
        </div>
      </motion.div>
      
      {/* Spacer for larger screens */}
      <div className="hidden lg:block w-6 flex-shrink-0" />
    </div>
  );
};

const JourneySection = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      try {
        // More precise calculation - each step needs 25% of scroll progress
        const stepThreshold = 1 / journeyStepsData.length;
        const currentStepIndex = Math.floor(progress / stepThreshold);
        
        // Only activate when we're truly at that step
        if (progress > currentStepIndex * stepThreshold + stepThreshold * 0.3) {
          setActiveStep(Math.min(currentStepIndex, journeyStepsData.length - 1));
        } else {
          setActiveStep(currentStepIndex - 1);
        }
      } catch (error) {
        console.warn('Error in journey scroll progress handler:', error);
      }
    });

    return unsubscribe;
  }, [scrollYProgress]);

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Smooth scroll setup
  useEffect(() => {
    try {
      const style = document.createElement('style');
      style.textContent = `
        html {
          scroll-behavior: smooth;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        try {
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
        } catch (error) {
          console.warn('Error removing scroll style:', error);
        }
      };
    } catch (error) {
      console.warn('Error setting up smooth scroll:', error);
    }
  }, []);

      return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-48 lg:w-72 h-48 lg:h-72 bg-blue-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 lg:w-96 h-64 lg:h-96 bg-purple-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 lg:w-80 h-56 lg:h-80 bg-emerald-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs lg:text-sm font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-widest mb-6 lg:mb-8 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            Our Methodology
          </motion.span>
          
          <motion.h2 
            className="text-3xl lg:text-5xl xl:text-7xl font-black text-blue-900 leading-tight mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Strategic{' '}
            <span className="text-blue-900">
              Journey
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A meticulously crafted process designed to deliver exceptional results through strategic planning and flawless execution
          </motion.p>
          
          <motion.div 
            className="w-24 lg:w-32 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6 lg:mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 'auto' }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>

        {/* Timeline Container - Responsive */}
        <div ref={containerRef} className="relative">
          {/* Central Timeline Line - Hidden on mobile, visible on lg+ screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-gray-200 to-gray-300 transform -translate-x-1/2 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full origin-top"
              style={{ height: timelineHeight }}
            />
          </div>

          {/* Timeline Steps */}
          <motion.div 
            className="space-y-12 lg:space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {journeyStepsData.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Timeline Circle - Positioned above cards on mobile, centered on desktop */}
                <motion.div
                  className={`absolute left-1/2 -top-8 lg:top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 z-20 transition-all duration-700 ${
                    index <= activeStep
                      ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 border-emerald-300 shadow-2xl shadow-emerald-500/50'
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
                      className={`w-5 h-5 lg:w-8 lg:h-8 ${index <= activeStep ? 'text-white' : 'text-gray-400'}`}
                      strokeWidth={3}
                    />
                  </motion.div>
                  
                  {/* Glow effect */}
                  {index <= activeStep && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-pulse"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Dotted Line Connectors - Only on desktop */}
                <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 z-10 ${
                  step.position === 'left' ? 'left-1/2 ml-8' : 'right-1/2 mr-8'
                }`}>
                  <motion.div
                    className="w-16 xl:w-20 h-0.5 border-t-2 border-dotted border-gray-400"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ 
                      width: index <= activeStep ? 80 : 60, 
                      opacity: index <= activeStep ? 0.8 : 0.4 
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>

                {/* Step Content */}
                <div className="mt-8 lg:mt-0">
                  <TimelineStep
                    step={step}
                    index={index}
                    isActive={index === activeStep}
                    isCompleted={index < activeStep}
                  />
                </div>

                {/* Connecting Arrows - Hidden on mobile */}
                {index < journeyStepsData.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 z-10"
                    animate={{
                      y: [0, 8, 0],
                      opacity: index < activeStep ? 0.8 : 0.4,
                      scale: index < activeStep ? 1.1 : 1
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowDown className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500" strokeWidth={2} />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Progress Indicator */}
        <motion.div
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
            {journeyStepsData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-700 ${
                  index <= activeStep 
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/50' 
                    : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.8 }}
                animate={{ scale: index === activeStep ? 1.3 : 1 }}
              />
            ))}
          </div>
          <motion.p 
            className="text-base lg:text-lg font-semibold text-gray-700"
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Phase <span className="text-xl lg:text-2xl font-black text-gray-900">{Math.max(activeStep + 1, 1)}</span> of {journeyStepsData.length}
          </motion.p>
          <p className="text-sm lg:text-base text-gray-500 mt-2 font-medium">
            {journeyStepsData[Math.max(activeStep, 0)]?.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;