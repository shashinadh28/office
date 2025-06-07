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
  themeColor: 'slate' | 'indigo' | 'violet' | 'emerald';
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
    themeColor: "slate",
    position: "right",
    gradient: "from-slate-700 via-slate-800 to-slate-900"
  },
  {
    id: 2,
    title: "Talent Matching",
    subtitle: "Precision Curation",
    description: "Our senior consultants leverage advanced matching algorithms and cultural fit assessments to curate elite developers. We conduct rigorous technical interviews and handle all legal documentation seamlessly.",
    icon: Users,
    themeColor: "indigo",
    position: "left",
    gradient: "from-indigo-600 via-indigo-700 to-indigo-800"
  },
  {
    id: 3,
    title: "Build Your Dream Team",
    subtitle: "Excellence Assembly",
    description: "Select from our thoroughly vetted talent pool of top-tier professionals. We ensure comprehensive onboarding, premium tooling, and seamless integration with your existing workflows and systems.",
    icon: Sparkles,
    themeColor: "violet",
    position: "right",
    gradient: "from-violet-600 via-violet-700 to-violet-800"
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

const glowStyles = {
  inactive: {
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    scale: 1
  },
  active: {
    boxShadow: "0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)",
    scale: 1.02
  }
};

const TimelineStep = ({ step, index, isActive, progress }: { step: JourneyStepData; index: number; isActive: boolean; progress: any }) => {
  const IconComponent = step.icon;
  const isLeft = step.position === "left";
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -120 : 120,
      scale: 0.85,
      rotateY: isLeft ? -15 : 15,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        delay: index * 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getThemeColors = (themeName: JourneyStepData['themeColor'], isActive: boolean, currentStep: JourneyStepData) => {
    const colors = {
      slate: {
        bg: isActive ? `bg-gradient-to-br ${currentStep.gradient}` : 'bg-white',
        text: isActive ? 'text-white' : 'text-slate-800',
        subtitle: isActive ? 'text-slate-200' : 'text-slate-500',
        desc: isActive ? 'text-slate-100' : 'text-slate-600',
        border: 'border-slate-200',
        icon: isActive ? 'bg-slate-600' : 'bg-slate-100',
        iconText: isActive ? 'text-white' : 'text-slate-700',
        accent: 'bg-slate-600'
      },
      indigo: {
        bg: isActive ? `bg-gradient-to-br ${currentStep.gradient}` : 'bg-white',
        text: isActive ? 'text-white' : 'text-indigo-800',
        subtitle: isActive ? 'text-indigo-200' : 'text-indigo-500',
        desc: isActive ? 'text-indigo-100' : 'text-slate-600',
        border: 'border-indigo-200',
        icon: isActive ? 'bg-indigo-600' : 'bg-indigo-100',
        iconText: isActive ? 'text-white' : 'text-indigo-700',
        accent: 'bg-indigo-600'
      },
      violet: {
        bg: isActive ? `bg-gradient-to-br ${currentStep.gradient}` : 'bg-white',
        text: isActive ? 'text-white' : 'text-violet-800',
        subtitle: isActive ? 'text-violet-200' : 'text-violet-500',
        desc: isActive ? 'text-violet-100' : 'text-slate-600',
        border: 'border-violet-200',
        icon: isActive ? 'bg-violet-600' : 'bg-violet-100',
        iconText: isActive ? 'text-white' : 'text-violet-700',
        accent: 'bg-violet-600'
      },
      emerald: {
        bg: isActive ? `bg-gradient-to-br ${currentStep.gradient}` : 'bg-white',
        text: isActive ? 'text-white' : 'text-emerald-800',
        subtitle: isActive ? 'text-emerald-200' : 'text-emerald-500',
        desc: isActive ? 'text-emerald-100' : 'text-slate-600',
        border: 'border-emerald-200',
        icon: isActive ? 'bg-emerald-600' : 'bg-emerald-100',
        iconText: isActive ? 'text-white' : 'text-emerald-700',
        accent: 'bg-emerald-600'
      }
    };
    return colors[themeName];
  };

  const theme = getThemeColors(step.themeColor, isActive, step);

  return (
    <div className={`flex items-center w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Enhanced Card with increased width */}
      <motion.div
        variants={cardVariants}
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.05, 
          y: -8,
          transition: { duration: 0.3 }
        }}
        className={`w-[40rem] p-8 rounded-3xl border-2 backdrop-blur-sm ${theme.bg} ${theme.border} 
                   hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
        style={isActive ? glowStyles.active : glowStyles.inactive}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              className={`p-4 rounded-2xl ${theme.icon} shadow-lg group-hover:scale-110 mb-4`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <IconComponent className={`w-8 h-8 ${theme.iconText}`} strokeWidth={2} />
            </motion.div>
            
            <div className="text-center">
              <motion.div 
                className={`text-sm font-semibold uppercase tracking-wider mb-2 ${theme.subtitle}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {step.subtitle}
              </motion.div>
              
              <motion.h3 
                className={`text-2xl font-bold ${theme.text} leading-tight`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {step.title}
              </motion.h3>
            </div>
          </div>
          
          <motion.div 
            className={`w-16 h-1 rounded-full ${theme.accent} mb-4 mx-auto group-hover:w-24`}
            initial={{ width: 0 }}
            animate={{ width: isActive ? 64 : 32 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
          />
          
          <motion.p 
            className={`text-sm ${theme.desc} leading-relaxed text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.8 }}
          >
            {step.description}
          </motion.p>
        </div>
      </motion.div>
      
      {/* Spacer */}
      <div className="w-6 flex-shrink-0" />
    </div>
  );
};

const JourneySection = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const stepIndex = Math.floor(progress * journeyStepsData.length);
      setActiveStep(Math.min(stepIndex, journeyStepsData.length - 1));
    });

    return unsubscribe;
  }, [scrollYProgress]);

  // Smooth scroll functionality
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      * {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm font-bold px-6 py-3 rounded-full uppercase tracking-widest mb-8 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            Our Methodology
          </motion.span>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Strategic{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A meticulously crafted process designed to deliver exceptional results through strategic planning and flawless execution
          </motion.p>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-emerald-600 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 w-2 h-full bg-gradient-to-b from-slate-200 to-slate-300 transform -translate-x-1/2 rounded-full shadow-inner">
            <motion.div
              className="w-full bg-gradient-to-b from-slate-700 via-indigo-600 via-violet-600 to-emerald-600 rounded-full origin-top shadow-lg"
              style={{ height: timelineHeight }}
            />
          </div>

          {/* Timeline Steps with reduced spacing */}
          <motion.div 
            className="space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {journeyStepsData.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Professional Timeline Circle with Tick Icon */}
                <motion.div
                  className={`absolute left-1/2 top-1/2 w-16 h-16 rounded-full border-4 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ${
                    index <= activeStep
                      ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400 shadow-2xl shadow-emerald-500/50'
                      : 'bg-white border-slate-300 shadow-lg'
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
                      className={`w-8 h-8 ${index <= activeStep ? 'text-white' : 'text-slate-400'}`}
                      strokeWidth={3}
                    />
                  </motion.div>
                  
                  {/* Professional glow effect */}
                  {index <= activeStep && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-pulse"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Dotted Line Connectors */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${
                  step.position === 'left' ? 'left-1/2 ml-8' : 'right-1/2 mr-8'
                }`}>
                  <motion.div
                    className="w-20 h-0.5 border-t-2 border-dotted border-slate-400"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: index <= activeStep ? 80 : 60, 
                      opacity: index <= activeStep ? 0.8 : 0.4 
                    }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                </div>

                {/* Step Content */}
                <TimelineStep
                  step={step}
                  index={index}
                  isActive={index <= activeStep}
                  progress={scrollYProgress}
                />

                {/* Enhanced Connecting Arrows */}
                {index < journeyStepsData.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-10 z-10"
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
                    <ArrowDown className="w-6 h-6 text-slate-500" strokeWidth={2} />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Progress Indicator - brought closer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            {journeyStepsData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-700 ${
                  index <= activeStep 
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/50' 
                    : 'bg-slate-300'
                }`}
                whileHover={{ scale: 1.8 }}
                animate={{ scale: index === activeStep ? 1.3 : 1 }}
              />
            ))}
          </div>
          <motion.p 
            className="text-lg font-semibold text-slate-700"
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Phase <span className="text-2xl font-black text-slate-900">{activeStep + 1}</span> of {journeyStepsData.length}
          </motion.p>
          <p className="text-slate-500 mt-2 font-medium">
            {journeyStepsData[activeStep]?.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;