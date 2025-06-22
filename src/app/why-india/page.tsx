"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend, IBM_Plex_Sans } from 'next/font/google';
import { 
  TrendingUp, Users, Globe, Zap, Brain, Rocket,
  Award, Clock, GraduationCap, BarChart3, Building,
  Star, Target, Code, Database, CloudCog, Lightbulb,
  MapPin, CheckCircle, ArrowRight, Briefcase
} from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], display: 'swap' });

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const stats = [
  { icon: GraduationCap, number: "4.7M+", text: "Fresh graduates annually", subtext: "1.5M+ engineering/tech talent" },
  { icon: Globe, number: "50%", text: "World's outsourcing market", subtext: "Served by India" },
  { icon: Award, number: "#1", text: "Global IT & BPO destination", subtext: "IBEF 2023" },
  { icon: Users, number: "#2", text: "English-speaking workforce", subtext: "Worldwide" },
  { icon: TrendingUp, number: "7.5%", text: "Average GDP growth", subtext: "2021-2024" },
  { icon: Target, number: "60%", text: "Cost savings", subtext: "Without quality compromise" }
];

const techStats = [
  { icon: CloudCog, number: "40%", text: "Global cloud computing workforce" },
  { icon: Brain, number: "#3", text: "Worldwide AI talent pool", subtext: "WEF 2023" },
  { icon: Building, number: "70%", text: "Fortune 500 companies", subtext: "Outsource to India" }
];

const businessAdvantages = [
  { icon: Clock, title: "12-hour time zone overlap", description: "With US business hours" },
  { icon: GraduationCap, title: "90%+ graduate professionals", description: "Highly educated workforce" },
  { icon: BarChart3, title: "35% higher productivity", description: "In tech/services sectors" }
];

const futureStats = [
  { icon: Rocket, number: "3rd", text: "Largest startup ecosystem", subtext: "100+ unicorns" },
  { icon: Zap, number: "#1", text: "Digital talent", subtext: "Emerging technologies" },
  { icon: Users, number: "500M+", text: "Skilled workers", subtext: "Projected by 2030" }
];

const companies = [
  {
    category: "Tech & IT Giants",
    icon: Code,
    color: "from-orange-500 to-red-500", // Saffron gradient
    companies: [
      { name: "Amazon", employees: "100,000+", note: "Largest workforce outside the US", location: "Hyderabad, Bengaluru" },
      { name: "IBM", employees: "130,000+", note: "Professionals in India", location: "Pune, Bengaluru, Mumbai" },
      { name: "Microsoft", employees: "18,000+", note: "Engineers in Bengaluru (largest R&D hub outside US)", location: "Bengaluru, Hyderabad" },
      { name: "Google", employees: "10,000+", note: "Across Hyderabad & Bengaluru", location: "Hyderabad, Bengaluru, Mumbai" }
    ]
  },
  {
    category: "Consulting & Professional Services",
    icon: Briefcase,
    color: "from-green-600 to-green-800", // Green gradient
    companies: [
      { name: "Accenture", employees: "300,000+", note: "Largest global hub", location: "Bengaluru, Mumbai, Chennai" },
      { name: "Deloitte", employees: "75,000+", note: "Largest workforce outside the US", location: "Mumbai, Bengaluru, Hyderabad" },
      { name: "KPMG", employees: "40,000+", note: "Professionals in major metros", location: "Mumbai, Bengaluru, Chennai" }
    ]
  },
  {
    category: "Banking & Finance",
    icon: Building,
    color: "from-blue-600 to-indigo-700", // Blue gradient (representing the wheel)
    companies: [
      { name: "Goldman Sachs", employees: "10,000+", note: "2nd largest global office in Bengaluru", location: "Bengaluru, Mumbai" },
      { name: "JP Morgan", employees: "50,000+", note: "Mumbai & Bengaluru", location: "Mumbai, Bengaluru, Chennai" },
      { name: "Barclays", employees: "20,000+", note: "Pune & Chennai", location: "Pune, Chennai, Mumbai" }
    ]
  },
  {
    category: "Pharma & Healthcare",
    icon: Lightbulb,
    color: "from-orange-400 to-yellow-500", // Saffron to white gradient
    companies: [
      { name: "Novartis", employees: "12,000+", note: "Largest R&D center in Hyderabad", location: "Hyderabad, Mumbai" },
      { name: "Pfizer", employees: "5,000+", note: "Mumbai & Hyderabad", location: "Mumbai, Hyderabad, Chennai" }
    ]
  }
];

const WhyIndiaPage = () => {
  return (
    <div className={`${lexend.className} min-h-screen bg-white`}>
      {/* Hero Section with Indian Flag Colors */}
      <section className="relative bg-gradient-to-br from-orange-500 via-white to-green-600 text-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-white/80 to-green-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full text-lg font-semibold border-2 border-orange-500 shadow-lg">
                🇮🇳 भारत - INDIA
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className={`${ibmPlexSans.className} text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-green-700 to-blue-600 bg-clip-text text-transparent`}
            >
              The Strategic Powerhouse
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
            >
              India isn't just an outsourcing destination - it's a strategic powerhouse transforming global businesses. 
              Here's why leading companies choose India:
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className={`${ibmPlexSans.className} text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16`}
            >
              By the <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">Numbers</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-lg flex items-center justify-center mr-4">
                      <stat.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">{stat.number}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.text}</h3>
                  <p className="text-gray-600">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Dominance Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className={`${ibmPlexSans.className} text-4xl md:text-5xl font-bold text-center mb-16`}
            >
              The Tech <span className="text-orange-300">Dominance</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-4 text-orange-300">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.text}</h3>
                  {stat.subtext && <p className="text-blue-100">{stat.subtext}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className={`${ibmPlexSans.className} text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16`}
            >
              Business <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Advantages</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <advantage.icon className="w-10 h-10 text-green-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future-Ready Economy Section */}
      <section className="py-20 bg-gradient-to-br from-orange-400 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className={`${ibmPlexSans.className} text-4xl md:text-5xl font-bold text-center mb-8`}
            >
              Future-Ready <span className="text-yellow-300">Economy</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-center text-orange-100 mb-16 max-w-3xl mx-auto"
            >
              Every role created in India supports 4+ family members, drives local development, and builds global capability.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futureStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                  <div className="text-4xl font-bold mb-4 text-yellow-300">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.text}</h3>
                  <p className="text-orange-100">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Beyond Business Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className={`${ibmPlexSans.className} text-4xl md:text-6xl font-bold text-center text-white mb-8`}
            >
              Beyond <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">Business</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto"
            >
              Leading global companies have established their most significant operations in India, creating innovation hubs that drive worldwide growth.
            </motion.p>
            
            <div className="space-y-8">
              {companies.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={fadeIn}
                  className="relative"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`${ibmPlexSans.className} text-2xl md:text-3xl font-bold text-white mb-2`}>
                        {category.category}
                      </h3>
                      <div className={`w-24 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    </div>
                  </div>

                  {/* Companies Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.companies.map((company, companyIndex) => (
                      <motion.div
                        key={companyIndex}
                        className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <h4 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                              {company.name}
                            </h4>
                            <ArrowRight className="w-5 h-5 text-gray-400 ml-2 group-hover:text-orange-300 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          <span className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {company.employees}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">{company.note}</p>
                        
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="w-4 h-4 mr-2 text-green-400" />
                          <span>{company.location}</span>
                        </div>
                        
                        <div className="mt-4 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-sm text-gray-400">Active Operations</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Statistics */}
            <motion.div
              variants={fadeIn}
              className="mt-16 bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-2xl p-8 border border-orange-500/30"
            >
              <h4 className="text-2xl font-bold text-white text-center mb-6">
                Collective Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">600,000+</div>
                  <div className="text-gray-300">Total Employees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">₹2.5L Cr+</div>
                  <div className="text-gray-300">Annual Revenue Impact</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300">Major Cities</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="text-center"
          >
            <p className="text-gray-400">
              <strong>Sources:</strong> NASSCOM 2023, McKinsey GCC Report 2024, PwC CEO Survey, Company Reports
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyIndiaPage; 