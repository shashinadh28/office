"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Quote, User, Users } from 'lucide-react';
import Image from 'next/image';

const ClientStories = () => {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

  const testimonialData = [
    {
      id: 0,
      company: "Adobe Systems",
      position: "CIO @ Adobe Inc",
      rating: 5,
      quote: "You have to figure out how to really democratize capability, which means you have to have a platform where people can easily access data",
      description: "The team at Gateway Workforce exceeded our expectations with their design and development expertise, delivering a beautiful website that truly reflects our brand and goals.",
      avatar: "/avatars/person1.jpg",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 1,
      company: "Microsoft Corporation",
      position: "VP Engineering @ Microsoft",
      rating: 5,
      quote: "Gateway Workforce transformed our development process with their exceptional talent pool and seamless integration capabilities",
      description: "Working with Gateway Workforce has been a game-changer for our team. Their developers integrated perfectly with our existing workflows and delivered outstanding results.",
      avatar: "/avatars/person2.jpg",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 2,
      company: "Google LLC",
      position: "Head of Operations @ Google",
      rating: 5,
      quote: "The quality of work and professionalism demonstrated by Gateway Workforce is truly remarkable and has accelerated our project timelines",
      description: "Gateway Workforce provided us with skilled professionals who not only met our technical requirements but also brought innovative solutions to complex challenges.",
      avatar: "/avatars/person3.jpg",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      company: "Amazon Web Services",
      position: "Director of Engineering @ AWS",
      rating: 5,
      quote: "Their ability to scale teams quickly while maintaining quality standards is exactly what we needed for our growing business",
      description: "The partnership with Gateway Workforce has enabled us to expand our capabilities rapidly while ensuring consistent quality across all deliverables.",
      avatar: "/avatars/person4.jpg",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      company: "Meta Platforms",
      position: "Senior Director @ Meta",
      rating: 5,
      quote: "Gateway Workforce has been instrumental in helping us build scalable solutions with their top-tier development talent",
      description: "The expertise and dedication shown by Gateway Workforce team members have been exceptional, contributing significantly to our project success.",
      avatar: "/avatars/person5.jpg",
      color: "from-pink-500 to-rose-600",
    }
  ];

  // Enhanced floating elements data
  const floatingElements = [
    { icon: Sparkles, position: "top-20 left-16", delay: 0, color: "text-cyan-400", size: "w-8 h-8" },
    { icon: Quote, position: "top-32 right-20", delay: 1, color: "text-purple-400", size: "w-6 h-6" },
    { icon: Star, position: "bottom-32 left-20", delay: 2, color: "text-yellow-400", size: "w-7 h-7" },
    { icon: Sparkles, position: "bottom-20 right-16", delay: 3, color: "text-blue-400", size: "w-8 h-8" },
    { icon: Quote, position: "top-1/2 left-8", delay: 4, color: "text-emerald-400", size: "w-5 h-5" },
    { icon: Star, position: "top-1/4 right-8", delay: 5, color: "text-pink-400", size: "w-6 h-6" },
    { icon: Sparkles, position: "bottom-1/4 left-12", delay: 6, color: "text-orange-400", size: "w-7 h-7" },
    { icon: Quote, position: "bottom-1/3 right-12", delay: 7, color: "text-indigo-400", size: "w-5 h-5" },
    { icon: Star, position: "top-1/3 left-1/4", delay: 8, color: "text-teal-400", size: "w-6 h-6" },
    { icon: Sparkles, position: "bottom-1/2 right-1/4", delay: 9, color: "text-rose-400", size: "w-8 h-8" },
    { icon: Quote, position: "top-16 left-1/2", delay: 10, color: "text-violet-400", size: "w-5 h-5" },
    { icon: Star, position: "bottom-16 right-1/2", delay: 11, color: "text-amber-400", size: "w-7 h-7" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Glass Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Enhanced Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.color} opacity-30 hidden md:block`}
          animate={{
            y: [0, -15, 0],
            x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
            rotate: index % 3 === 0 ? [0, 360] : [0, -180, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            delay: element.delay * 0.5,
            ease: "easeInOut"
          }}
        >
          <element.icon className={element.size} />
        </motion.div>
      ))}
      
      {/* Additional Floating Particles */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40 hidden lg:block`}
          style={{
            top: `${20 + (index * 10)}%`,
            left: `${10 + (index * 12)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (index % 2),
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

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
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Client Stories</span>: Why They Chose Us
          </motion.h2>
        </motion.div>

        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Profile Circles */}
          <div className="relative">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-3 gap-6 justify-items-center">
              {testimonialData.map((profile, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: hoveredProfile === index ? 1.3 : 1.2,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setActiveProfileIndex(index)}
                  onHoverStart={() => {
                    setHoveredProfile(index);
                    setActiveProfileIndex(index);
                  }}
                  onHoverEnd={() => setHoveredProfile(null)}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${profile.color} opacity-0 blur-xl group-hover:opacity-50 transition-opacity duration-300`}
                    animate={{
                      scale: activeProfileIndex === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: activeProfileIndex === index ? Infinity : 0,
                    }}
                  />
                  
                  {/* Profile Image */}
                  <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                    activeProfileIndex === index 
                      ? `border-transparent bg-gradient-to-r ${profile.color} p-1` 
                      : 'border-white/30'
                  }`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                      {index % 2 === 0 ? (
                        <User className="w-12 h-12 text-gray-600" />
                      ) : (
                        <Users className="w-12 h-12 text-gray-600" />
                      )}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeProfileIndex === index && (
                    <motion.div
                      className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${profile.color} shadow-lg`}
                      layoutId="activeProfileIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.4 }}
                    />
                  )}

                  {/* Company Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <span className="text-xs font-bold text-gray-800">{profile.company.split(' ')[0]}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Right Side - Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfileIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glass Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonialData[activeProfileIndex].color} opacity-5 rounded-3xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <Quote className={`w-12 h-12 bg-gradient-to-r ${testimonialData[activeProfileIndex].color} bg-clip-text text-transparent`} />
                    </motion.div>

                    {/* Company and Position */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <h3 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${testimonialData[activeProfileIndex].color} bg-clip-text text-transparent mb-2`}>
                        {testimonialData[activeProfileIndex].company}
                      </h3>
                      <p className="text-white/70 text-lg">
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
                          transition={{ delay: i * 0.1 + 0.3, duration: 0.3 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <motion.blockquote
                      className="text-xl lg:text-2xl font-medium text-white leading-relaxed mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      "{testimonialData[activeProfileIndex].quote}"
                    </motion.blockquote>
                    
                    {/* Description */}
                    <motion.p
                      className="text-white/80 leading-relaxed text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {testimonialData[activeProfileIndex].description}
                    </motion.p>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <motion.div
          className="flex justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {testimonialData.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProfileIndex === index 
                  ? `bg-gradient-to-r ${testimonialData[index].color} shadow-lg` 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveProfileIndex(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientStories; 