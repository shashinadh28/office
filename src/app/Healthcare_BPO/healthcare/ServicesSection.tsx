'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Laptop, Briefcase, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: "End-to-End Medical Billing & Revenue Cycle Management",
    description: [
      "Claims submission & processing",
      "Denial management & appeals",
      "Payment posting & reconciliation",
      "Patient billing & collections",
      "A/R follow-ups & reporting"
    ],
    icon: DollarSign,
    bgColor: "bg-slate-700",
    iconColor: "text-sky-500",
    textColor: "text-white",
  },
  {
    title: "Telehealth Support Services",
    description: [
      "Virtual appointment scheduling",
      "Patient intake & documentation",
      "Remote care coordination",
      "Telemedicine billing & coding",
      "Compliance & data security"
    ],
    icon: Laptop,
    bgColor: "bg-slate-700",
    iconColor: "text-sky-500",
    textColor: "text-white",
  },
  {
    title: "Additional Healthcare BPO Solutions",
    description: [
      "Medical coding & auditing",
      "Credentialing & provider enrollment",
      "Customer service & patient support",
      "EHR/EMR management"
    ],
    icon: Briefcase,
    bgColor: "bg-slate-700",
    iconColor: "text-sky-500",
    textColor: "text-white",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-24 bg-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative mb-8">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-slate-700 text-white text-sm font-semibold px-3 py-1 rounded-full z-10"
          >
            Our Service
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 relative inline-block pt-8"
          >
            Our Healthcare BPO Services
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: "circOut" }}
              className="block w-1/3 h-1 bg-sky-500 absolute bottom-[-10px] left-1/2 -translate-x-1/2 origin-left"
            ></motion.span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-6 mb-12 sm:mb-16"
        >
          Our team of experienced consultants combines industry knowledge, cutting-edge technology, and innovative strategies to guide you towards a brighter and greener future.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 sm:mb-16"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className={`bg-slate-700 ${service.textColor} rounded-xl p-6 md:p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group hover:bg-sky-500`}
              >
                <div className="flex items-start mb-4">
                  <div className={`bg-white p-3 rounded-full mr-4 shrink-0`}>
                    <IconComponent className={`${service.iconColor} w-6 h-6 sm:w-8 sm:h-8 group-hover:text-black transition-colors duration-300`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold ${service.textColor}">
                    {service.title}
                  </h3>
                </div>
                <ul className={`list-disc list-inside text-sm sm:text-base ${service.textColor === 'text-white' ? 'text-slate-300' : 'text-slate-100'} group-hover:text-slate-100 leading-relaxed mb-4 flex-grow transition-colors duration-300 space-y-1`}>
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
