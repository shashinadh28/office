"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const ClientStories = () => {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);

  const testimonialData = [
    {
      id: 0,
      company: "Adobe Systems",
      position: "CIO @ Adobe Inc",
      rating: 5,
      quote: "You have to figure out how to really democratize capability, which means you have to have a platform where people can easily access data",
      description: "The team at Gateway Workforce exceeded our expectations with their design and development expertise, delivering a beautiful website that truly reflects our brand and goals.",
      avatar: "/avatars/person1.jpg",
    },
    {
      id: 1,
      company: "Microsoft Corporation",
      position: "VP Engineering @ Microsoft",
      rating: 5,
      quote: "Gateway Workforce transformed our development process with their exceptional talent pool and seamless integration capabilities",
      description: "Working with Gateway Workforce has been a game-changer for our team. Their developers integrated perfectly with our existing workflows and delivered outstanding results.",
      avatar: "/avatars/person2.jpg",
    },
    {
      id: 2,
      company: "Google LLC",
      position: "Head of Operations @ Google",
      rating: 5,
      quote: "The quality of work and professionalism demonstrated by Gateway Workforce is truly remarkable and has accelerated our project timelines",
      description: "Gateway Workforce provided us with skilled professionals who not only met our technical requirements but also brought innovative solutions to complex challenges.",
      avatar: "/avatars/person3.jpg",
    },
    {
      id: 3,
      company: "Amazon Web Services",
      position: "Director of Engineering @ AWS",
      rating: 5,
      quote: "Their ability to scale teams quickly while maintaining quality standards is exactly what we needed for our growing business",
      description: "The partnership with Gateway Workforce has enabled us to expand our capabilities rapidly while ensuring consistent quality across all deliverables.",
      avatar: "/avatars/person4.jpg",
    },
    {
      id: 4,
      company: "Meta Platforms",
      position: "Senior Director @ Meta",
      rating: 5,
      quote: "Gateway Workforce has been instrumental in helping us build scalable solutions with their top-tier development talent",
      description: "The expertise and dedication shown by Gateway Workforce team members have been exceptional, contributing significantly to our project success.",
      avatar: "/avatars/person5.jpg",
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-48 h-48 bg-cyan-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-500">Client Stories</span>: Why They Chose Us
          </motion.h2>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          
          {/* Left Side - Profile Circles */}
          <div className="relative flex flex-wrap justify-center gap-3 lg:gap-6">
            {testimonialData.map((profile, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveProfileIndex(index)}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 ${
                  activeProfileIndex === index ? 'border-cyan-500 shadow-lg shadow-cyan-200' : 'border-gray-200'
                }`}>
                  <Image
                    src={profile.avatar}
                    alt={`${profile.company} representative`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {activeProfileIndex === index && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2"
                    layoutId="activeProfileIndicator"
                  />
                )}
              </motion.div>
            ))}
            
            {/* Additional decorative elements */}
            <motion.div 
              className="absolute -z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-200 rounded-full opacity-50" />
            </motion.div>
          </div>
          
          {/* Middle - Vertical Indicator Bar */}
          <div className="relative h-72 flex items-center justify-center">
            <div className="w-1 h-full bg-gray-200 rounded-full">
              <motion.div
                className="w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full absolute top-0"
                initial={{ height: "0%" }}
                animate={{ height: `${(activeProfileIndex + 1) * (100 / testimonialData.length)}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              {/* Indicator Dots */}
              {testimonialData.map((_, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-3 h-3 rounded-full -left-1 cursor-pointer transition-all duration-300 ${
                    index <= activeProfileIndex ? 'bg-cyan-500 shadow-lg' : 'bg-gray-300'
                  }`}
                  style={{ top: `${index * (100 / (testimonialData.length - 1))}%` }}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => setActiveProfileIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Right Side - Testimonial Card */}
          <div className="flex-1 max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfileIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
              >
                {/* Company and Position */}
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-cyan-600">
                    {testimonialData[activeProfileIndex].company}
                  </h3>
                  <p className="text-gray-500">
                    {testimonialData[activeProfileIndex].position}
                  </p>
                </motion.div>
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonialData[activeProfileIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote
                  className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  "{testimonialData[activeProfileIndex].quote}"
                </motion.blockquote>
                
                {/* Description */}
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {testimonialData[activeProfileIndex].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStories; 