"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Zap, Sparkles } from 'lucide-react';
import Image from 'next/image';

const ClientStories = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

  // Profile images data for scattered layout
  const profileImages = [
    { id: 1, src: "/avatars/person1.jpg", x: "10%", y: "15%", size: "w-16 h-16", neonColor: "border-cyan-400 shadow-cyan-400/50" },
    { id: 2, src: "/avatars/person2.jpg", x: "25%", y: "35%", size: "w-20 h-20", neonColor: "border-emerald-400 shadow-emerald-400/50" },
    { id: 3, src: "/avatars/person3.jpg", x: "15%", y: "65%", size: "w-14 h-14", neonColor: "border-purple-400 shadow-purple-400/50" },
    { id: 4, src: "/avatars/person4.jpg", x: "5%", y: "45%", size: "w-18 h-18", neonColor: "border-pink-400 shadow-pink-400/50" },
    { id: 5, src: "/avatars/person5.jpg", x: "30%", y: "75%", size: "w-16 h-16", neonColor: "border-yellow-400 shadow-yellow-400/50" },
    { id: 6, src: "/avatars/person6.jpg", x: "35%", y: "20%", size: "w-12 h-12", neonColor: "border-blue-400 shadow-blue-400/50" },
  ];

  // Enhanced floating elements scattered throughout
  const floatingElements = [
    { icon: Sparkles, position: "top-20 left-16", delay: 0, color: "text-blue-400", size: "w-8 h-8" },
    { icon: Heart, position: "top-32 right-20", delay: 1, color: "text-red-400", size: "w-6 h-6" },
    { icon: Star, position: "bottom-32 left-20", delay: 2, color: "text-yellow-400", size: "w-7 h-7" },
    { icon: Sparkles, position: "bottom-20 right-16", delay: 3, color: "text-cyan-400", size: "w-8 h-8" },
    { icon: Zap, position: "top-1/2 left-8", delay: 4, color: "text-emerald-400", size: "w-5 h-5" },
    { icon: Star, position: "top-1/4 right-8", delay: 5, color: "text-pink-400", size: "w-6 h-6" },
    { icon: Sparkles, position: "bottom-1/4 left-12", delay: 6, color: "text-orange-400", size: "w-7 h-7" },
    { icon: Heart, position: "bottom-1/3 right-12", delay: 7, color: "text-indigo-400", size: "w-5 h-5" },
    { icon: Star, position: "top-1/3 left-1/4", delay: 8, color: "text-teal-400", size: "w-6 h-6" },
    { icon: Sparkles, position: "bottom-1/2 right-1/4", delay: 9, color: "text-rose-400", size: "w-8 h-8" },
    { icon: Zap, position: "top-16 left-1/2", delay: 10, color: "text-violet-400", size: "w-5 h-5" },
    { icon: Star, position: "bottom-16 right-1/2", delay: 11, color: "text-amber-400", size: "w-7 h-7" },
  ];

  const testimonials = [
    {
      id: 0,
      company: "Adobe Systems",
      position: "CIO @ Adobe Inc",
      quote: "You have to figure out how to really democratize capability, which means you have to have a platform where people can easily access data",
      description: "The team at Gateway Workforce exceeded our expectations with their design and development expertise, delivering a beautiful website that truly reflects our brand and goals.",
      rating: 5,
      verified: true,
      headerColor: "from-teal-500 to-teal-600",
    },
    {
      id: 1,
      company: "Microsoft Corporation",
      position: "VP Engineering @ Microsoft",
      quote: "Outstanding Development Team with Seamless Integration",
      description: "Working with Gateway Workforce has been a game-changer for our team. Their developers integrated perfectly with our existing workflows and delivered outstanding results.",
      rating: 5,
      verified: true,
      headerColor: "from-emerald-500 to-emerald-600",
    },
    {
      id: 2,
      company: "Google LLC",
      position: "Head of Operations @ Google",
      quote: "Remarkable Quality and Professionalism That Accelerated Our Growth",
      description: "Gateway Workforce provided us with skilled professionals who not only met our technical requirements but also brought innovative solutions to complex challenges.",
      rating: 5,
      verified: true,
      headerColor: "from-cyan-500 to-cyan-600",
    },
    {
      id: 3,
      company: "Amazon Web Services",
      position: "Director of Engineering @ AWS",
      quote: "Perfect Scaling Solution with Consistent Quality Standards",
      description: "The partnership with Gateway Workforce has enabled us to expand our capabilities rapidly while ensuring consistent quality across all deliverables.",
      rating: 5,
      verified: true,
      headerColor: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      company: "Meta Platforms",
      position: "Senior Director @ Meta",
      quote: "Top-Tier Development Talent for Scalable Solutions",
      description: "The expertise and dedication shown by Gateway Workforce team members have been exceptional, contributing significantly to our project success.",
      rating: 5,
      verified: true,
      headerColor: "from-pink-500 to-pink-600",
    },
    {
      id: 5,
      company: "Tesla Inc",
      position: "Chief Technology Officer @ Tesla",
      quote: "Innovation and Excellence in Every Project Delivery",
      description: "Gateway Workforce consistently delivers cutting-edge solutions that drive our technology initiatives forward with remarkable efficiency.",
      rating: 5,
      verified: true,
      headerColor: "from-blue-500 to-blue-600",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Glass Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Enhanced Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.color} opacity-20 hidden md:block`}
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
          className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 hidden lg:block`}
          style={{
            top: `${20 + (index * 10)}%`,
            left: `${10 + (index * 12)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1],
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
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Client Stories</span>
            <span className="text-gray-800">: Why They Chose Us</span>
          </h2>
        </motion.div>

        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Scattered Profile Images */}
          <div className="lg:col-span-4 relative h-96 lg:h-[500px]">
            
            {/* Profile Images */}
            {profileImages.map((profile, index) => (
              <motion.div
                key={profile.id}
                className={`absolute ${profile.size} rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeTestimonial === index 
                    ? `border-4 ${profile.neonColor} shadow-lg`
                    : hoveredProfile === index
                    ? `border-4 ${profile.neonColor} shadow-lg`
                    : 'border-4 border-white shadow-lg'
                }`}
                style={{ left: profile.x, top: profile.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0],
                  scale: activeTestimonial === index ? 1.1 : 1,
                  opacity: activeTestimonial === index ? 1 : 0.8,
                  transition: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                onClick={() => setActiveTestimonial(index)}
                onHoverStart={() => {
                  setHoveredProfile(index);
                  setActiveTestimonial(index);
                }}
                onHoverEnd={() => setHoveredProfile(null)}
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300`}
                  animate={{
                    opacity: activeTestimonial === index ? 0.3 : 0,
                    scale: activeTestimonial === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeTestimonial === index ? Infinity : 0,
                  }}
                  style={{
                    background: activeTestimonial === index ? profile.neonColor.split(' ')[0].replace('border-', '') : 'transparent'
                  }}
                />

                {/* Placeholder avatar */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                
                {/* Active Indicator */}
                {activeTestimonial === index && (
                  <motion.div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 shadow-lg`}
                    layoutId="activeProfileIndicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-100 rounded-full -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-50 rounded-full -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Center - Responsive Progress Bar */}
          <div className="lg:col-span-1 flex items-center justify-center">
            {/* Vertical Bar for Desktop */}
            <div className="hidden lg:block relative">
              <div className="w-1 h-80 bg-gray-200 rounded-full relative">
                <motion.div
                  className="w-1 bg-teal-500 rounded-full absolute top-0"
                  initial={{ height: "0%" }}
                  animate={{ height: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                
                {testimonials.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-6 h-6 rounded-full border-2 -left-2.5 cursor-pointer transition-all duration-300 ${
                      index <= activeTestimonial 
                        ? 'bg-teal-500 border-teal-500 shadow-lg shadow-teal-500/30' 
                        : 'bg-white border-gray-200'
                    }`}
                    style={{ top: `${(index / (testimonials.length - 1)) * 100}%`, transform: 'translateY(-50%)' }}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: index <= activeTestimonial ? "0 0 20px rgba(20, 184, 166, 0.5)" : "0 0 15px rgba(0, 0, 0, 0.1)"
                    }}
                    onClick={() => setActiveTestimonial(index)}
                    animate={{
                      scale: index === activeTestimonial ? 1.2 : 1,
                    }}
                  >
                    {index <= activeTestimonial && (
                      <motion.div
                        className="absolute inset-1 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Horizontal Bar for Mobile/Tablet */}
            <div className="lg:hidden w-full max-w-md">
              <div className="h-1 w-full bg-gray-200 rounded-full relative">
                <motion.div
                  className="h-1 bg-teal-500 rounded-full absolute left-0"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                
                {testimonials.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-6 h-6 rounded-full border-2 -top-2.5 cursor-pointer transition-all duration-300 ${
                      index <= activeTestimonial 
                        ? 'bg-teal-500 border-teal-500 shadow-lg shadow-teal-500/30' 
                        : 'bg-white border-gray-200'
                    }`}
                    style={{ left: `${(index / (testimonials.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: index <= activeTestimonial ? "0 0 20px rgba(20, 184, 166, 0.5)" : "0 0 15px rgba(0, 0, 0, 0.1)"
                    }}
                    onClick={() => setActiveTestimonial(index)}
                    animate={{
                      scale: index === activeTestimonial ? 1.2 : 1,
                    }}
                  >
                    {index <= activeTestimonial && (
                      <motion.div
                        className="absolute inset-1 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Card with New Design */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                {/* Enhanced Speech Bubble Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[400px]">
                  
                  {/* Colored Header Section */}
                  <div className={`bg-gradient-to-r ${testimonials[activeTestimonial].headerColor} px-10 py-8 relative`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <motion.h3 
                          className="text-3xl font-bold text-white mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {testimonials[activeTestimonial].company}
                        </motion.h3>
                        <motion.p 
                          className="text-white/90 text-xl font-medium"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {testimonials[activeTestimonial].position}
                        </motion.p>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-2 ml-6">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.3 }}
                          >
                            <Star className="w-7 h-7 fill-yellow-300 text-yellow-300 drop-shadow-sm" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative Elements in Header */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full opacity-50"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full opacity-30"></div>
                  </div>

                  {/* White Content Section */}
                  <div className="px-10 py-10 min-h-[280px] flex flex-col justify-between">
                    
                    {/* Main Quote */}
                    <div className="mb-8">
                      <motion.h4
                        className="text-2xl lg:text-3xl font-bold text-teal-700 leading-tight mb-6 relative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <span className="text-5xl text-teal-500 absolute -left-4 -top-2 opacity-30">"</span>
                        {testimonials[activeTestimonial].quote}
                        <span className="text-5xl text-teal-500 opacity-30">"</span>
                      </motion.h4>
                    </div>
                    
                    {/* Description */}
                    <div className="flex-1">
                      <motion.p
                        className="text-gray-600 leading-relaxed text-lg lg:text-xl font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {testimonials[activeTestimonial].description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Enhanced Speech Bubble Pointer */}
                  <div className="absolute left-10 top-full">
                    <div className="relative">
                      <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-white drop-shadow-lg"></div>
                      <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-gray-100 absolute top-[-25px] left-[5px]"></div>
                    </div>
                  </div>

                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-teal-50/20 pointer-events-none"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientStories; 