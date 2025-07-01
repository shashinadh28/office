"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const ClientReviews = () => {
  const [activeProfile, setActiveProfile] = useState(0);

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

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          custom={0.1}
        >
          <motion.div 
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-6 py-3 rounded-full uppercase tracking-widest shadow-lg">
              Client Stories
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-6"
            variants={fadeIn}
            custom={0.2}
          >
            <span className="text-cyan-500">Client Stories</span>: Why They Chose Us
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            variants={fadeIn}
            custom={0.3}
          >
            Discover why businesses worldwide trust Gateway Workforce to deliver exceptional results and transform their digital presence.
          </motion.p>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Profile Circles and Vertical Indicator */}
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Vertical Indicator Bar */}
            <div className="relative mb-8 lg:mb-0 lg:mr-8">
              <div className="w-1 h-80 bg-gray-200 rounded-full relative">
                <motion.div
                  className="w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full absolute top-0"
                  initial={{ height: "20%" }}
                  animate={{ height: `${20 + (activeProfile * 20)}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Indicator Dots */}
                {testimonialData.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-3 h-3 rounded-full -left-1 cursor-pointer transition-all duration-300 ${
                      index <= activeProfile ? 'bg-cyan-500 shadow-lg' : 'bg-gray-300'
                    }`}
                    style={{ top: `${index * 20}%` }}
                    whileHover={{ scale: 1.5 }}
                    onClick={() => setActiveProfile(index)}
                  />
                ))}
              </div>
            </div>

            {/* Profile Circles */}
            <div className="flex flex-row lg:flex-col gap-4 lg:gap-6">
              {testimonialData.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    index === activeProfile ? 'scale-125 z-10' : 'scale-100 opacity-70 hover:opacity-100'
                  }`}
                  onHoverStart={() => setActiveProfile(index)}
                  whileHover={{ scale: index === activeProfile ? 1.25 : 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                    index === activeProfile 
                      ? 'border-cyan-500 shadow-xl shadow-cyan-500/25' 
                      : 'border-gray-300 hover:border-cyan-300'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg lg:text-xl">
                      {testimonial.company.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Active indicator glow */}
                  {index === activeProfile && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 animate-pulse"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Review Card */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100 to-transparent rounded-bl-3xl opacity-50" />
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-cyan-200 opacity-30">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonialData[activeProfile].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote 
                  className="text-2xl lg:text-3xl font-bold text-gray-900 leading-relaxed mb-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  "{testimonialData[activeProfile].quote}"
                </motion.blockquote>

                {/* Description */}
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {testimonialData[activeProfile].description}
                </motion.p>

                {/* Author info */}
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    {testimonialData[activeProfile].company.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonialData[activeProfile].company}</p>
                    <p className="text-cyan-600 font-medium">{testimonialData[activeProfile].position}</p>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-tr-3xl opacity-30" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom navigation dots */}
        <motion.div 
          className="flex justify-center items-center gap-3 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.5}
        >
          {testimonialData.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProfile 
                  ? 'bg-cyan-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveProfile(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReviews;
