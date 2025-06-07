'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Star, UserCircle } from 'lucide-react';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const testimonialsData = [
  {
    id: 1,
    quote: "The team at Gateway Workforce exceeded our expectations with their design and development expertise, delivering a beautiful website that truly reflects our brand and goals. A laptop displays a webpage titled '150 ChatGPT copywriting prompts' with a logo above the text. It suggests using AI to improve copywriting skills. On the left, part of a colorful sandwich is partially visible, adding a contrast to the academic theme on the screen.",
    name: "Jesse Alfonzo",
    location: "Los Angeles",
    avatar: "UserCircle", // Placeholder for icon logic
    stars: 5,
  },
  {
    id: 2,
    quote: "Gateway Workforce transformed our website into a stunning and functional platform.",
    name: "Phani Ram",
    location: "Italy",
    avatar: "UserCircle",
    stars: 5,
    quoteSize: "text-base", // Special size for this quote
  },
  {
    id: 3,
    quote: "Working with Gateway Workforce on our new web platform was a game-changer. Their technical expertise and commitment to our project's success were evident from day one. They delivered a robust and scalable solution that has significantly improved our online presence. Their dedication and skill are truly top-notch. Highly recommended!",
    name: "Emily Thomas",
    location: "USA", // Assuming a default location
    avatar: "UserCircle",
    stars: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title, Description, Button */}
        <motion.div className="text-center max-w-2xl mx-auto mb-12 md:mb-16" variants={fadeIn} custom={0.1}>
          <div className="relative inline-block mb-4">
            {/* Adjusted Sparkles to be relative to centered text */}
            <Sparkles className="absolute -top-6 -left-12 sm:-top-8 sm:-left-16 w-12 h-12 sm:w-16 sm:h-16 text-purple-500 opacity-70 transform rotate-[30deg]" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              What Our Customers Says
            </h2>
          </div>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.
          </p>
          <motion.button
            variants={fadeIn} custom={0.3}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            View More
          </motion.button>
        </motion.div>

        {/* Testimonial Cards in a Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`bg-white rounded-xl shadow-lg p-6 flex flex-col h-full items-center text-center relative overflow-hidden border border-gray-200 border-l-4 border-l-transparent hover:border-l-purple-500 transition-all duration-300 ease-in-out`}
              variants={fadeIn}
              custom={index * 0.15 + 0.2}
              whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.2 } }}
            >
              <UserCircle className="w-14 h-14 text-gray-400 mb-3" />
              <p className={`font-semibold text-gray-800 text-lg`}>{testimonial.name}</p>
              <p className="text-gray-500 text-xs mb-1">{testimonial.location}</p>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className={`text-gray-600 ${testimonial.quoteSize || 'text-sm'} leading-relaxed flex-grow`}>
                {testimonial.quote}
              </p>
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-300 opacity-70 transform rotate-[15deg]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
