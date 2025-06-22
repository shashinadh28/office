'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardHover = {
  scale: 1.02,
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

const testimonialsData = [
  {
    id: 1,
    quote: "The team at Gateway Workforce exceeded our expectations with their design and development expertise, delivering a beautiful website that truly reflects our brand and goals.",
    name: "Jesse Alfonzo",
    position: "CEO",
    company: "TechVision Inc.",
    location: "Los Angeles, CA",
    avatar: "/avatars/jesse.jpg",
    stars: 5,
    featured: true,
  },
  {
    id: 2,
    quote: "Gateway Workforce transformed our website into a stunning and functional platform. Their attention to detail and commitment to excellence is unmatched.",
    name: "Phani Ram",
    position: "Creative Director",
    company: "Design Studio",
    location: "Milan, Italy",
    avatar: "/avatars/phani.jpg",
    stars: 5,
  },
  {
    id: 3,
    quote: "Working with Gateway Workforce on our new web platform was a game-changer. Their technical expertise and commitment to our project's success were evident from day one.",
    name: "Emily Thomas",
    position: "Product Manager",
    company: "Innovation Labs",
    location: "San Francisco, CA",
    avatar: "/avatars/emily.jpg",
    stars: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-emerald-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20" 
          variants={fadeIn} 
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
                            <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-sm font-bold px-6 py-3 rounded-full uppercase tracking-widest shadow-lg">
              Client Stories
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
            variants={fadeIn}
            custom={0.2}
          >
            What Our{' '}
            <span className="text-[#FDC703]">
              Customers
            </span>{' '}
            Say
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            variants={fadeIn}
            custom={0.3}
          >
            Discover why businesses worldwide trust Gateway Workforce to deliver exceptional results and transform their digital presence.
          </motion.p>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer ${
                testimonial.featured ? 'lg:row-span-1 lg:transform lg:scale-105' : ''
              }`}
              variants={fadeIn}
              custom={index * 0.1 + 0.4}
              whileHover={cardHover}
            >
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[2px] bg-white rounded-2xl" />
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-gray-200 group-hover:text-blue-300 transition-colors duration-300" />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 + 0.5 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed font-medium flex-grow mb-8">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-6 right-6">
                  <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">
                    {testimonial.location}
                  </span>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">View More Success Stories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
