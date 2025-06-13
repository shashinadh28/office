"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lexend, IBM_Plex_Sans } from 'next/font/google';
import { 
  TrendingUp, Users, Globe, Zap, Brain, Rocket,
  Award, Clock, GraduationCap, BarChart3, Building,
  Star, Target, Code, Database, CloudCog, Lightbulb,
  MapPin, Briefcase, TrendingUpIcon
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

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
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
    color: "from-orange-500 to-red-500",
    companies: [
      { name: "Amazon", employees: "100,000+", note: "Largest workforce outside the US", location: "Bengaluru, Hyderabad" },
      { name: "IBM", employees: "130,000+", note: "Professionals in India", location: "Mumbai, Bengaluru, Chennai" },
      { name: "Microsoft", employees: "18,000+", note: "Engineers in Bengaluru (largest R&D hub outside US)", location: "Bengaluru, Hyderabad" },
      { name: "Google", employees: "10,000+", note: "Across Hyderabad & Bengaluru", location: "Bengaluru, Hyderabad, Mumbai" }
    ]
  },
  {
    category: "Consulting & Professional Services",
    icon: Briefcase,
    color: "from-green-600 to-emerald-600",
    companies: [
      { name: "Accenture", employees: "300,000+", note: "Largest global hub", location: "Mumbai, Bengaluru, Hyderabad" },
      { name: "Deloitte", employees: "75,000+", note: "Largest workforce outside the US", location: "Mumbai, Delhi, Bengaluru" },
      { name: "KPMG", employees: "40,000+", note: "Professionals in major metros", location: "Mumbai, Delhi, Chennai" }
    ]
  },
  {
    category: "Banking & Finance",
    icon: TrendingUpIcon,
    color: "from-blue-600 to-indigo-600",
    companies: [
      { name: "Goldman Sachs", employees: "10,000+", note: "2nd largest global office in Bengaluru", location: "Bengaluru, Mumbai" },
      { name: "JP Morgan", employees: "50,000+", note: "Mumbai & Bengaluru", location: "Mumbai, Bengaluru" },
      { name: "Barclays", employees: "20,000+", note: "Pune & Chennai", location: "Pune, Chennai" }
    ]
  },
  {
    category: "Pharma & Healthcare",
    icon: Lightbulb,
    color: "from-purple-600 to-pink-600",
    companies: [
      { name: "Novartis", employees: "12,000+", note: "Largest R&D center in Hyderabad", location: "Hyderabad, Mumbai" },
      { name: "Pfizer", employees: "5,000+", note: "Mumbai & Hyderabad", location: "Mumbai, Hyderabad" }
    ]
  }
];

const WhyIndiaPage = () => {
  return (
    <div className={`${lexend.className} min-h-screen bg-white`}>
      {/* Hero Section - Updated with Indian flag colors */}
      <section className="relative bg-gradient-to-br from-orange-500 via-white to-green-600 text-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-white/95 to-green-600/90" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-lg font-semibold border border-orange-200 shadow-lg">
                🇮🇳 BHARAT - THE LAND OF OPPORTUNITY
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
        
        {/* Decorative elements with Indian flag colors */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse" />
      </section>

      {/* By the Numbers Section - Updated with saffron theme */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
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
              By the <span className="text-orange-600">Numbers</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <stat.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.text}</h3>
                  <p className="text-gray-600">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Dominance Section - Updated with blue theme */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
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
              The Tech <span className="text-cyan-300">Dominance</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-cyan-300" />
                  </div>
                  <div className="text-4xl font-bold mb-4">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.text}</h3>
                  {stat.subtext && <p className="text-blue-100">{stat.subtext}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Advantages Section - Updated with green theme */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
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
              Business <span className="text-green-600">Advantages</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300 bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <advantage.icon className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future-Ready Economy Section - Updated with saffron theme */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
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
                  <div className="text-4xl font-bold mb-4">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.text}</h3>
                  <p className="text-orange-100">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Beyond Business Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <motion.h2 
                className={`${ibmPlexSans.className} text-4xl md:text-6xl font-bold text-gray-900 mb-6`}
              >
                Beyond <span className="bg-gradient-to-r from-orange-600 via-green-600 to-blue-600 bg-clip-text text-transparent">Business</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Global Fortune 500 companies have made India their strategic hub. Here's how they're scaling with Indian talent:
              </motion.p>
            </motion.div>
            
            <div className="space-y-16">
              {companies.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={slideInFromLeft}
                  className="relative"
                >
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${category.color} text-white rounded-full shadow-lg mb-4`}>
                      <category.icon className="w-8 h-8 mr-3" />
                      <span className={`${ibmPlexSans.className} text-2xl font-bold`}>{category.category}</span>
                    </div>
                  </div>

                  {/* Companies Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.companies.map((company, companyIndex) => (
                      <motion.div
                        key={companyIndex}
                        variants={companyIndex % 2 === 0 ? slideInFromLeft : slideInFromRight}
                        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden"
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className={`w-32 h-32 bg-gradient-to-br ${category.color} rounded-full absolute -top-16 -right-16`} />
                          <div className={`w-24 h-24 bg-gradient-to-br ${category.color} rounded-full absolute -bottom-12 -left-12`} />
                        </div>
                        
                        <div className="relative z-10">
                          {/* Company Header */}
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <h4 className={`${ibmPlexSans.className} text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text transition-all duration-300`}>
                                {company.name}
                              </h4>
                              <div className="flex items-center text-gray-500 mb-3">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm">{company.location}</span>
                              </div>
                            </div>
                            <div className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg text-center min-w-[100px]`}>
                              <div className="text-lg font-bold">{company.employees}</div>
                              <div className="text-xs opacity-90">employees</div>
                            </div>
                          </div>
                          
                          {/* Company Description */}
                          <div className="space-y-3">
                            <p className="text-gray-700 leading-relaxed">{company.note}</p>
                            
                            {/* Impact Metrics */}
                            <div className="flex items-center pt-4 border-t border-gray-100">
                              <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full mr-3 animate-pulse`} />
                              <span className="text-sm text-gray-500 font-medium">Strategic Global Hub</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  {categoryIndex < companies.length - 1 && (
                    <div className="flex justify-center mt-16">
                      <div className="w-24 h-1 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 rounded-full" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
              variants={fadeIn}
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 p-1 rounded-2xl inline-block">
                <div className="bg-white rounded-xl px-12 py-8">
                  <h3 className={`${ibmPlexSans.className} text-2xl font-bold text-gray-900 mb-4`}>
                    Ready to Join These Global Leaders?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Discover how Indian talent can transform your business operations and drive unprecedented growth.
                  </p>
                  <button className="bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                    Get Started Today
                  </button>
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