'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, Users, DollarSign, Clock, Shield, Award, 
  Brain, Calculator, Building, ShoppingCart, CheckCircle, 
  Globe, Heart, Target, Zap, TrendingUp, Mail, Star,
  ArrowRight, Sparkles
} from 'lucide-react';

const WhyUsePage = () => {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 600);
  }, []);

  const differentiators = [
    {
      icon: MapPin,
      title: "Proven Hyderabad Roots",
      description: "We understand India's talent landscape inside out, from tech hubs to emerging specialists.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "US & UK Trusted",
      description: "Already serving AI startups, tax firms, IT giants, medical manufacturers, and eCommerce leaders with dedicated teams.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "Transparent & Affordable",
      description: "No hidden fees, just honest pricing that saves clients up to 70% vs. local hires.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Speed Without Sacrifice",
      description: "Deploy pre-vetted, skilled teams in under 3 weeks—faster than hiring locally.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "End-to-End Care",
      description: "We handle hiring, payroll, compliance, and retention so you can focus on growth.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const expertise = [
    {
      icon: Brain,
      title: "AI & Tech",
      description: "Developers, data scientists, cloud experts",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Calculator,
      title: "US Taxation & Accounting",
      description: "CPAs, bookkeepers, auditors",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Building,
      title: "Medical Manufacturing Support",
      description: "Back-office, operations, compliance",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: ShoppingCart,
      title: "eCommerce & SaaS",
      description: "Customer support, platform specialists",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const missionPoints = [
    {
      icon: Target,
      title: "Bridging Global Demand with Local Excellence",
      description: "We identify and deliver top 10% professionals in IT, healthcare, finance, and beyond."
    },
    {
      icon: Heart,
      title: "Ethical & Transparent Partnerships",
      description: "No hidden fees, no shortcuts—just fair pricing and measurable results."
    },
    {
      icon: TrendingUp,
      title: "Accelerating Growth",
      description: "We enable companies to scale faster, smarter, and more affordably than traditional hiring allows."
    },
    {
      icon: Users,
      title: "Creating Opportunity",
      description: "Every role we fill strengthens livelihoods, fuels education, and drives economic progress in India."
    }
  ];

  const visionPoints = [
    {
      icon: Globe,
      title: "Global Impact, Local Roots",
      description: "Be the #1 choice for companies seeking high-performing, cost-efficient teams in India."
    },
    {
      icon: Brain,
      title: "Innovation-Driven",
      description: "Continuously evolve with AI, automation, and upskilling to future-proof our talent pool."
    },
    {
      icon: Shield,
      title: "A Model for Ethical Outsourcing",
      description: "Redefine the industry with transparency, fairness, and shared success."
    },
    {
      icon: TrendingUp,
      title: "Scaling Potential",
      description: "Empower 10,000+ professionals by 2030 to build careers that transform lives."
    }
  ];

  const values = [
    {
      number: "1",
      title: "Integrity First",
      subtitle: "Honesty isn't a policy—it's our foundation.",
      points: [
        "Transparent pricing, no hidden fees",
        "Ethical hiring practices",
        "Data security & compliance guaranteed"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2",
      title: "Talent Excellence",
      subtitle: "We recruit the top 10% so you don't have to.",
      points: [
        "Rigorous 5-stage vetting process",
        "Continuous upskilling programs",
        "Cultural fit matching"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      title: "Impact-Driven",
      subtitle: "Every hire changes lives.",
      points: [
        "1 local job = 4 family members uplifted",
        "Community education initiatives",
        "Sustainable career growth paths"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "4",
      title: "Agile Innovation",
      subtitle: "Tomorrow's solutions, today.",
      points: [
        "AI-driven talent matching",
        "Dynamic workforce scaling",
        "Future-skills forecasting"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Elements */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`bg-${index}`}
            className={`absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20`}
            style={{
              top: `${15 + (index * 12)}%`,
              left: `${10 + (index * 11)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="overflow-hidden mb-4">
              <motion.div
                className="text-cyan-400 text-sm sm:text-base font-semibold uppercase tracking-wider"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                  opacity: textAnimated ? 1 : 0,
                  transition: 'all 1s ease-out',
                }}
              >
                Get to know us
              </motion.div>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(40px)',
                  opacity: textAnimated ? 1 : 0,
                  transition: 'all 1s ease-out 200ms',
                }}
              >
                Why Choose{' '}
                <span className="text-purple-600">
                  Gateway Workforce
                </span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-12">
              <motion.p
                className="text-blue-100 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
                style={{
                  transform: textAnimated ? 'translateY(0)' : 'translateY(20px)',
                  opacity: textAnimated ? 1 : 0,
                  transition: 'all 1s ease-out 600ms',
                }}
              >
                Born in Hyderabad, India, Gateway Workforce began with a simple mission: to connect global businesses with India's finest talent—quickly, affordably, and ethically. Today, we're proud to be the trusted offshore hiring partner for US and UK companies, delivering top-tier talent at unbeatable value.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What Makes Us <span className="text-cyan-400">Different?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-cyan-400">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full hover:border-cyan-400/50 transition-all duration-300 text-center group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    🔹 {item.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our <span className="text-cyan-400">Mission</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Connecting businesses with educated, motivated and trusted Indian talent.
                </p>
                <h3 className="text-2xl font-bold text-white mb-6">How We Do It:</h3>
              </motion.div>

              <div className="space-y-6">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {point.title}
                        </h4>
                        <p className="text-blue-100 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                  <Building className="w-24 h-24 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-medium italic text-center">
                    "gray concrete wall inside building"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Vision</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              To become the most trusted gateway between global businesses and India's top talent—where opportunity meets excellence, and growth knows no borders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      <point.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        🌍 {point.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              At Gateway Workforce, our values define how we work, who we hire, and why partners trust us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-white font-bold text-2xl">{value.number}</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-cyan-400 text-sm italic mb-4">
                        "{value.subtitle}"
                      </p>
                      <ul className="space-y-2">
                        {value.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center space-x-2 text-blue-100">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why roll the dice with agencies when you can have a <span className="text-cyan-400">partner</span>?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              📩 Let's build your dream India team—efficiently and ethically.
            </p>
            <p className="text-cyan-400 text-xl font-semibold mb-12">
              Hyderabad-grown. Globally proven. Committed to your success.
            </p>
            <motion.a
              href="https://calendly.com/deepak-teja/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-xl overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Start Building Your Dream Team</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsePage; 