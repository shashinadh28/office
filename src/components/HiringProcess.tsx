"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ProcessStepData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const processStepsData: ProcessStepData[] = [
  {
    id: 1,
    title: "Send A Job Description",
    description: "Send A Job Description to jobs@gatewayworkforce.com",
    image: "/optimized/images/description.jpg",
  },
  {
    id: 2,
    title: "Candidate Sourcing",
    description: "Gateway Workforce finds qualified candidates from current staff, vetted resumes or the recruiting process",
    image: "/optimized/images/recruitment.jpg",
  },
  {
    id: 3,
    title: "Interview & Selection",
    description: "You meet, interview and select the candidate, and Gateway Workforce onboards",
    image: "/optimized/images/select.jpg",
  },
];

const HiringProcess = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-56 pb-48 lg:pt-64 lg:pb-56 relative overflow-hidden" style={{ backgroundColor: '#021533' }}>
      {/* Simplified Background Pattern - Reduced for performance */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block bg-blue-500 text-white text-sm font-bold px-6 py-3 rounded-full uppercase tracking-widest mb-6 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59,130,246,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            Our Hiring Process
          </motion.span>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-blue-400">Hiring</span> Gateway Workforce is as simple as:{' '}
          </motion.h2>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 items-center max-w-6xl mx-auto">
          {processStepsData.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Process Card */}
              <motion.div
                className="flex-1 relative"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Simplified Circle with Fixed Number */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    {/* Rotating dotted border */}
                    <motion.div 
                      className="w-48 h-48 rounded-full border-3 border-dashed border-blue-400/50 absolute inset-0"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Static inner circle with image */}
                    <div className="w-48 h-48 rounded-full flex items-center justify-center relative">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden relative">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover rounded-full"
                          priority={index === 0}
                        />
                      </div>
                    
                      {/* Fixed Step Number */}
                      <div
                        className="absolute -top-3 -left-3 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-white"
                    >
                      {String(step.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <motion.h3 
                    className="text-lg lg:text-xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      color: "#60A5FA"
                    }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-blue-100 leading-relaxed text-sm lg:text-base max-w-xs mx-auto"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Desktop Horizontal Arrow - positioned between circles */}
              {index < processStepsData.length - 1 && (
                <motion.div
                  className="hidden lg:flex items-center justify-center px-2 -mt-16"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15 + 0.6, 
                    duration: 0.4,
                    type: "spring",
                    bounce: 0.3
                  }}
                >
                  <div className="relative">
                    {/* Simplified animated arrow */}
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-8 h-8 text-blue-400" strokeWidth={2} />
                    </motion.div>
                    
                    {/* Simplified glow effect */}
                    <motion.div
                      className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full opacity-15 blur-lg"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.15, 0.4, 0.15]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Mobile Vertical Arrow - positioned between cards */}
              {index < processStepsData.length - 1 && (
                <motion.div
                  className="lg:hidden flex justify-center my-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.8 }}
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        y: [0, 6, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-6 h-6 text-blue-400 rotate-90" strokeWidth={2} />
                    </motion.div>
                    
                    {/* Mobile arrow glow effect */}
                    <motion.div
                      className="absolute inset-0 w-6 h-6 bg-blue-400 rounded-full opacity-15 blur-lg"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.15, 0.4, 0.15]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess; 