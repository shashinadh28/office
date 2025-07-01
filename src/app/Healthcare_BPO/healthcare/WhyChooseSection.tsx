import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Briefcase, DollarSign, Users, Cpu, Clock } from 'lucide-react';

const whyChooseItems = [
  {
    icon: <Briefcase className="w-10 h-10 mb-3 text-[#18C7FF]" />,
    title: "Industry Expertise",
    description: "Skilled professionals with deep knowledge of medical billing, coding (ICD-10, CPT, HCPCS), and compliance (HIPAA, CMS).",
    link: "#",
  },
  {
    icon: <DollarSign className="w-10 h-10 mb-3 text-[#18C7FF]" />,
    title: "Cost-Effective Solutions",
    description: "Reduce overhead costs while improving billing accuracy and collections.",
    link: "#",
  },
  {
    icon: <Users className="w-10 h-10 mb-3 text-[#18C7FF]" />,
    title: "Scalable Support",
    description: "Flexible services tailored to practices of all sizes.",
    link: "#",
  },
  {
    icon: <Cpu className="w-10 h-10 mb-3 text-[#18C7FF]" />,
    title: "Advanced Technology",
    description: "Secure, AI-driven platforms for efficient claims processing and telehealth management.",
    link: "#",
  },
  {
    icon: <Clock className="w-10 h-10 mb-3 text-[#18C7FF]" />,
    title: "24/7 Support",
    description: "Dedicated teams ensuring uninterrupted operations.",
    link: "#", 
  },
  // You can add a sixth item here if you want to maintain a 2x3 grid, or adjust the grid columns in card-hover-effect.tsx
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-[#18C7FF]"></div>
            <span className="text-[#18C7FF] font-medium uppercase tracking-wider text-sm">WHY CHOOSE US</span>
            <div className="w-6 h-0.5 bg-[#18C7FF]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
            Why Choose Gateway Workforce for Healthcare BPO?
          </h2>
        </motion.div>

        {/* Two-column layout for SVG and Cards */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mt-6">
          {/* Left Column: SVG Image */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Added a slight delay
            variants={fadeIn}
          >
            <div className="group relative w-full h-[400px] md:h-[500px] rounded-lg">
              <Image 
                src="/optimized/images/healthcare.webp" 
                alt="Healthcare BPO Illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="relative z-10 object-contain object-center transition-all duration-300 ease-in-out group-hover:scale-105"
              />
              {/* Sunburst Effect */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-120 transition-all duration-500 ease-in-out transform origin-center pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at center, rgba(24,199,255,0.6) 0%, rgba(24,199,255,0) 70%)`,
                }}
              ></div>
            </div>
          </motion.div>

          {/* Right Column: HoverEffect Cards */}
          <div className="lg:w-1/2 w-full">
            <HoverEffect items={whyChooseItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;