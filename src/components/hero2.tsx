"use client";

import React, { useRef, useEffect } from 'react';
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
  color: string;
  descColor: string;
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

  // Animation variants
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
      icon: <FaGlobeAmericas size={36} color="black" />,
      title: "Global Impact",
      description: "One job uplifts families, education & local economies",
      delay: 0,
      color: "#14488D",
      descColor: "#3F3B3B"
    },
    {
      icon: <BsFileEarmarkCodeFill size={36} color="black" />,
      title: "Top Skills",
      description: "Millions of STEM graduates with in-demand technical abilities",
      delay: 0.1,
      color: "#14488D",
      descColor: "#3F3B3B"
    },
    {
      icon: <RiMoneyDollarCircleFill size={36} color="black" />,
      title: "Cost-Effective",
      description: "High quality talent at competitive rates for better ROI",
      delay: 0.2,
      color: "#14488D",
      descColor: "#3F3B3B"
    },
    {
      icon: <MdRecordVoiceOver size={36} color="black" />,
      title: "English Proficiency",
      description: "Strong communication skills with excellent English fluency",
      delay: 0.3,
      color: "#14488D",
      descColor: "#3F3B3B"
    },
    {
      icon: <IoMdTime size={36} color="black" />,
      title: "Time Zone Sync",
      description: "Overlaps with US/EU for real-time work",
      delay: 0.4,
      color: "#14488D",
      descColor: "#3F3B3B"
    },
    {
      icon: <IoIosPeople size={36} color="black" />,
      title: "Driven Professionals",
      description: "One job uplifts families, education & local economies",
      delay: 0.5,
      color: "#14488D",
      descColor: "#3F3B3B"
    }
  ];

  const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay, color, descColor }) => {
    return (
      <motion.div
        className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 border border-[#D9D5D5] relative group"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay, 
          ease: [0.25, 0.1, 0.25, 1.0] 
        }}
        whileHover={{ 
          y: -10,
          scale: 1.03,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          transition: { 
            duration: 0.3,
            ease: "easeOut"
          }
        }}
      >
        <div className="p-4 sm:p-6 md:p-8 text-center flex flex-col items-center group relative z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 transition-transform duration-300">
            <motion.span
              whileHover={{ scale: 1.25, rotate: 12, color: '#18CEB9' }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="text-black text-[28px] sm:text-[32px] md:text-[36px] flex items-center justify-center cursor-pointer"
            >
              {icon}
            </motion.span>
          </div>
          <h3 className={`${lexend.className} text-center font-bold mb-1 sm:mb-2 text-base sm:text-lg md:text-xl`} style={{ color: color }}>{title}</h3>
          <p className="text-xs sm:text-sm" style={{ color: descColor }}>{description}</p>
          
          {/* Card shine effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-out pointer-events-none"></div>
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
                color={benefit.color}
                descColor={benefit.descColor}
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
