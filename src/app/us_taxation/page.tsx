'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import { ServiceCardGrid } from '@/components/ui/service-card';

const lexend = Lexend({ subsets: ['latin'], weight: ['700'], display: 'swap' });

// Define Element type
interface Element {
  id: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  x: number;
  y: number;
  color: string;
  type: 'hexagon' | 'circle' | 'triangle';
}

export default function USTaxationPage() {
  const [elements, setElements] = useState<Element[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set client-side flag on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // No random element generation in the main component to avoid hydration errors

  return (
    <div className="relative min-h-screen bg-[#E9EDF4] overflow-hidden font-sans">
      {/* Background elements */}
      {/* Small Triangle 1 - Matches Big Triangle Animation */}
      <motion.div
        className="absolute top-10 left-233 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          rotate: [0, 180, 360],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.2
        }}
      >
        <Image src="/svg/small_triangle.svg" alt="" width={25} height={25} />
      </motion.div>

      {/* Small Triangle 2 - Matches Big Triangle Animation */}
      <motion.div
        className="absolute top-80 left-365 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          rotate: [0, -180, -360],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.4
        }}
      >
        <Image src="/svg/small_triangle.svg" alt="" width={25} height={25} />
      </motion.div>

      {/* Big Triangle */}
      <motion.div
        className="absolute top-30 right-175 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          rotate: [0, 180, 360],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.3
        }}
      >
        <Image src="/svg/big_triangle.svg" alt="" width={100} height={100} />
      </motion.div>

      {/* Small Circle */}
      <motion.div
        className="absolute bottom-10 left-3/4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [0.9, 1.1, 0.9],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.4
        }}
      >
        <Image src="/svg/small_circle.svg" alt="" width={100} height={100} />
      </motion.div>

      {/* Big Circle - Matches Small Circle Animation */}
      <motion.div
        className="absolute bottom-110 right-30 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [0.9, 1.1, 0.9],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.5
        }}
      >
        <Image src="/svg/big_circle.svg" alt="" width={250} height={250} />
      </motion.div>

      {/* Small Dots */}
      <motion.div
        className="absolute top-8 left-8 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: [0, 360]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.3
        }}
      >
        <Image src="/svg/small_dots.svg" alt="" width={40} height={40} />
      </motion.div>

      {/* Big Dots */}
      <motion.div
        className="absolute bottom-8 right-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, -360]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.4
        }}
      >
        <Image src="/svg/big_dots.svg" alt="" width={120} height={120} />
      </motion.div>

      {/* Main content container with fade-in animation */}
      <motion.div
        className="container mx-auto px-4 min-h-[90vh] md:h-screen py-20 md:py-0 flex flex-col md:flex-row items-center justify-between relative z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        {/* Left side content */}
        <div className="w-full md:w-1/2 space-y-6 px-4 sm:px-6 md:px-8 lg:pl-20 xl:pl-40">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-1 bg-[#4E2FBA] rounded-full"></div>
            <span className="text-[#4E2FBA] font-medium">US TAXATION</span>
          </div>

          <div className="space-y-6 overflow-hidden">
            <motion.h1
              className={`${lexend.className} text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
            >
              <span className="relative inline-block">
                <span className="relative z-10">Expert US Taxation & Accounting Services for Firms & CPAs</span>
                <motion.span
                  className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    ease: [0.8, 0, 0.2, 1],
                    delay: 0.3
                  }}
                />
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg max-w-2xl"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Expert US tax and accounting support for CPAs and firms — accurate, compliant, and scalable.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
            <Link href="/contact" className="bg-[#4E2FBA] text-white px-8 py-3 rounded-full font-medium hover:bg-[#3d2595] transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="flex items-center text-[#4E2FBA] font-medium hover:underline">
              Learn More
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center pt-8 space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Expert CPA Team</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>100% Compliance</span>
            </div>
          </div>
        </div>

        {/* Right side image with overlay text */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-full mt-12 md:mt-0 flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-3/4">
            <Image
              src="/taxx.svg"
              alt="US Taxation Services"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="relative z-0"
            />
             
          </div>
        </div>

      </motion.div>

      {/* Accounting & Compliance Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}

          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 max-w-7xl mx-auto py-12 sm:py-16 px-4 relative overflow-visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {/* Background elements */}
            {isClient && (
              <motion.div 
                className="absolute -z-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -left-20 -top-20"
                animate={{
                  scale: [1, 1.1, 1],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center relative group z-10"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <Image 
                  src="/accouning_solutions.svg" 
                  alt="Accounting Solutions" 
                  width={650}
                  height={550}
                  className="w-full max-w-2xl h-auto relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 lg:pl-12 relative z-10"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
            >
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <motion.span 
                    className="mr-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    ✨
                  </motion.span>
                  Expert Accounting Solutions
                </span>
              </motion.div>

              <motion.h2
                className={`${lexend.className} text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight text-left`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    delay: 0.3
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  Precision Accounting & 
                </motion.span>
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 inline-block"
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    transition: { 
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                >
                  Compliance Solutions
                </motion.span>
              </motion.h2>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.4,
                    duration: 0.6
                  }
                }}
                viewport={{ once: true }}
              >
                <div className="space-y-4 pl-6 border-l-2 border-gray-100 group-hover:border-indigo-200 transition-colors duration-500">
                  {[
                    {
                      icon: '📊',
                      title: 'Comprehensive US Taxation',
                      description: 'Expert tax services tailored for accounting firms, CPAs, and financial professionals.'
                    },
                    {
                      icon: '📋',
                      title: 'Precision Bookkeeping',
                      description: 'Accurate and detailed bookkeeping services to keep your financial records impeccable.'
                    },
                    {
                      icon: '⚖️',
                      title: 'Regulatory Compliance',
                      description: 'Ensuring full compliance with all US tax laws and financial regulations.'
                    },
                    {
                      icon: '📈',
                      title: 'Financial Reporting',
                      description: 'Comprehensive financial reporting to support your business decisions.'
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 rounded-xl bg-white/50 backdrop-blur-sm group-hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 0.4 + (index * 0.1),
                          duration: 0.5
                        }
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div 
            className="mb-12 sm:mb-16 md:mb-24 pt-12 sm:pt-16 md:pt-24 relative bg-gradient-to-b from-indigo-50/50 to-purple-50/30 pb-12 sm:pb-16 md:pb-20 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-inner"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20 rounded-full blur-sm"></div>
            <div className="text-center mb-12">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Why Partner with <span className="text-indigo-600">Gateway Workforce</span>?
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-500 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We combine expertise, technology, and personalized service to deliver exceptional results.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* 
                Note: The following cards reference image files that should be placed in the public directory:
                - /certified.png
                - /cost_efficiency.jpg
                - /scalable_solutions.jpg
                - /advance_technology.jpg
                - /timely_accurate.jpg
                - /guaranteed_compliance.jpg
                
                If these images are not available, the cards will fall back to using color gradients.
              */}
              <ServiceCardGrid
                items={[
                  {
                    icon: "🎯",
                    title: "Certified Expertise",
                    description: "Our team of skilled accountants and tax professionals are well-versed in US GAAP, IRS regulations, and state tax laws, ensuring your financial matters are handled with precision and expertise.",
                    color: "from-indigo-50 to-indigo-100",
                    imageSrc: "/certified.png"
                  },
                  {
                    icon: "💰",
                    title: "Cost Efficiency",
                    description: "Reduce operational costs by up to 60% with our outsourced accounting solutions. Our streamlined processes and economies of scale translate to significant savings for your firm.",
                    color: "from-green-50 to-green-100",
                    imageSrc: "/cost_efficiency.jpg"
                  },
                  {
                    icon: "📈",
                    title: "Scalable Solutions",
                    description: "Our flexible services grow seamlessly with your firm, from small practices to large enterprises. Scale up or down based on your needs without the overhead of hiring or training new staff.",
                    color: "from-purple-50 to-purple-100",
                    imageSrc: "/scalable_solutions.jpg"
                  },
                  {
                    icon: "🔐",
                    title: "Advanced Technology",
                    description: "Leverage secure, cloud-based accounting software including QuickBooks, Xero, Drake, and UltraTax for seamless workflows. Our tech-forward approach ensures efficiency and data security.",
                    color: "from-blue-50 to-blue-100",
                    imageSrc: "/advance_technology.jpg"
                  },
                  {
                    icon: "⏱️",
                    title: "Timely & Accurate",
                    description: "With our 99.97% accuracy rate and guaranteed on-time delivery for all tax filings, you can trust that your deadlines will be met with precision. Our quality control processes ensure error-free deliverables.",
                    color: "from-amber-50 to-amber-100",
                    imageSrc: "/timely_accurate.jpg"
                  },
                  {
                    icon: "✅",
                    title: "Guaranteed Compliance",
                    description: "Stay compliant with constantly changing tax laws and regulations. Our dedicated team monitors regulatory changes and ensures your financial practices remain fully compliant with all applicable laws.",
                    color: "from-emerald-50 to-emerald-100",
                    imageSrc: "/guaranteed_compliance.jpg"
                  }
                ]}
                className="max-w-6xl mx-auto"
              />
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Taxation & Accounting Services
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Tax Preparation & Compliance</h4>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {["Individual & business tax returns (1040, 1120, 1065, 1120S, etc.)",
                      "State & federal tax filings",
                      "Tax planning & strategy",
                      "IRS audit support & resolution"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Accounting & Bookkeeping</h4>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {["General ledger management",
                      "Accounts payable/receivable (AP/AR)",
                      "Bank & credit card reconciliation",
                      "Financial statement preparation (P&L, balance sheets, cash flow)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <motion.div 
                  className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">CPA & Accounting Firm Support</h4>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {["Outsourced tax return preparation",
                      "Client accounting & payroll processing",
                      "Month-end & year-end closing",
                      "Financial analysis & reporting"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Payroll & Business Advisory</h4>
                  </div>
                  <ul className="space-y-2 pl-4">
                    {["Payroll processing & tax filings (941, W-2, 1099)",
                      "Sales tax compliance",
                      "CFO advisory & financial consulting"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Enhance Efficiency & Ensure Compliance with Gateway Workforce</h3>
            <p className="text-lg text-indigo-100 mb-8 max-w-3xl mx-auto">
              By outsourcing your taxation and accounting needs to Gateway Workforce, you gain a reliable partner dedicated to accuracy, compliance, and efficiency. Our services help reduce workload, minimize errors, and improve profitability for your firm or business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/contact"
                className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Get a Free Consultation
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-gray-500">
            <p>Gateway Workforce – Your trusted partner for US taxation, accounting, and financial compliance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}