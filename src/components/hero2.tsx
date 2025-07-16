"use client";

import React, { useRef, useEffect, useState } from 'react'; // Added useState
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';
import { IBM_Plex_Sans, Noto_Sans_JP, Lexend } from 'next/font/google';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { MdRecordVoiceOver } from 'react-icons/md';
import { IoMdTime, IoIosPeople } from 'react-icons/io';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'], display: 'swap' });
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  imageUrl: string; // Added for background image
  // color and descColor are no longer needed as props here, will be fixed by new design
}

const Hero2 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants (can be simplified if complex card animation is removed)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8 
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };
  
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  const benefitData: BenefitCardProps[] = [
    {
      icon: <FaGlobeAmericas />, 
      title: "Global Impact",
      description: "One job uplifts families, education & local economies",
      delay: 0,
      imageUrl: "/optimized/card-artwork/global.webp", 
    },
    {
      icon: <BsFileEarmarkCodeFill />,
      title: "Top Skills",
      description: "Millions of STEM graduates with in-demand technical abilities",
      delay: 0.1,
      imageUrl: "/optimized/card-artwork/top_skills.webp", 
    },
    {
      icon: <RiMoneyDollarCircleFill />,
      title: "Cost-Effective",
      description: "High quality talent at competitive rates for better ROI",
      delay: 0.2,
      imageUrl: "/optimized/card-artwork/cost_effectve.webp",
    },
    {
      icon: <MdRecordVoiceOver />,
      title: "English Proficiency",
      description: "Strong communication skills with excellent English fluency",
      delay: 0.3,
      imageUrl: "/optimized/card-artwork/english.webp", 
    },
    {
      icon: <IoMdTime />,
      title: "Time Zone Sync",
      description: "Overlaps with US/EU for real-time work",
      delay: 0.4,
      imageUrl: "/optimized/card-artwork/time.webp", 
    },
    {
      icon: <IoIosPeople />,
      title: "Driven Professionals",
      description: "One job uplifts families, education & local economies",
      delay: 0.5,
      imageUrl: "/optimized/card-artwork/driven.webp", 
    }
  ];

  const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay, imageUrl }) => {
    let finalIcon = icon;
    if (React.isValidElement(icon)) {
      const typedIcon = icon as React.ReactElement<{color?: string; size?: number}>; 
      finalIcon = React.cloneElement(typedIcon, {
        ...typedIcon.props,
        color: 'white', // Icon color is white
        size: 32, // Standardize icon size
      });
    }

    return (
      <motion.div
        className="bg-white rounded-xl rounded-tl-[30px] shadow-lg overflow-hidden group relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay, 
          ease: [0.25, 0.1, 0.25, 1.0] 
        }}
        // Removed whileHover scale/lift to match image example's static appearance
      >
        {/* Image Section */}
        <div className="relative h-40 w-full">
          <img 
            src={imageUrl} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover" 
            onError={(e) => (e.currentTarget.src = '/optimized/images/placeholder-default.webp')} // Fallback image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0FB7B0]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Gradient hover overlay */}
        </div>

        {/* Icon Section - Overlapping */}
        <div className="absolute left-1/2 -translate-x-1/2 top-40 -translate-y-1/2 z-10">
          <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-white" style={{ backgroundColor: '#0FB7B0' }}>
            {finalIcon}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 pt-14 text-center"> {/* Increased pt for overlapping icon, text-center */}
          <h3 
            className={`${lexend.className} font-bold text-xl mb-2`} style={{ color: '#0FB7B0' }}
          >
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 min-h-[60px]">{/* min-h for consistent card height */}
            {description}
          </p>

        </div>
      </motion.div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden relative"
    >
      {/* Enhanced background effects */}
      <div className="absolute top-20 left-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/3 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col">
          {/* Enhanced title section with decorative elements */}
          <div className="mb-6 sm:mb-8 md:mb-10 relative mx-auto text-center max-w-3xl">
            <motion.h2 
              className={`${ibmPlexSans.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4`}
              variants={titleVariants}
            >
              Why Hire Indian <br />
              <span className="text-teal-500">Talent?</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-sm sm:text-base md:text-lg px-4"
              variants={descriptionVariants}
            >
              Access India's highly skilled, educated, and motivated workforce. Our talent pool offers exceptional value with tech expertise, cultural alignment, and cost-effectiveness.
            </motion.p>
          </div>
          
          {/* Cards grid with enhanced layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {benefitData.map((benefit, index) => (
              <BenefitCard 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={benefit.delay}
                imageUrl={benefit.imageUrl}
              />
            ))}
          </div>
        </div>
    </div>
      
      {/* Enhanced blob animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 12s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero2;
