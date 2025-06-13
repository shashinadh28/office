"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactButton from "./ContactButton";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image for faster loading
    const img = new window.Image();
    img.onload = () => setIsLoaded(true);
    img.src = '/home6.png';
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  // Simple animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-50">
      
      {/* Background image - optimized loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home6.png"
          alt="Gateway Workforce Background"
          fill
          sizes="100vw"
          priority={true}
          className={`object-cover object-center transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        
        {/* Logo - simple fade in */}
        <motion.div
          className="absolute top-6 left-6 md:top-8 md:left-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/optimized/images/gateway_workforce.webp"
            alt="Gateway Workforce Logo"
            width={80}
            height={80}
            className="h-auto w-[70px] sm:w-[80px] md:w-[90px]"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center h-full pt-16">
          <motion.div 
            className="max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Main headline - reduced size */}
            <motion.div 
              className="mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-4">
                Connecting Global Businesses To India's Educated & Motivated Talent
              </h1>
              
              {/* Simple underline */}
              <motion.div
                className="h-1 w-32 bg-teal-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            {/* Description */}
            <motion.div
              className="mb-8 sm:mb-10"
              variants={fadeInUp}
            >
              <p className="font-montserrat text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-700 leading-relaxed">
                We connect{" "}
                <span className="text-teal-600 font-semibold">global companies</span>{" "}
                with{" "}
                <span className="text-blue-600 font-semibold">India's skilled talent</span>
                , enabling business growth and global career opportunities.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mb-12"
              variants={fadeInUp}
            >
              {/* Primary CTA */}
              <Link href="/contact" passHref>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <ContactButton />
                </motion.div>
              </Link>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 px-6 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-800 font-medium hover:bg-white transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Services</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Stats section - simplified */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {[
                { number: "500+", label: "Global Clients" },
                { number: "2000+", label: "Skilled Professionals" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/70 rounded-lg border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Simple scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            onClick={scrollDown}
            className="flex flex-col items-center gap-2 p-3"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm text-gray-600 font-medium tracking-wide">
              DISCOVER MORE
            </span>
            
            <motion.div 
              className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white/50"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}