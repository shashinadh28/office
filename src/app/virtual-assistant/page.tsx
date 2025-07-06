"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, Shield, Calendar, Mail, Plane, FileText, Users2, Building, BarChart3, TrendingUp, CreditCard, DollarSign, Gift, Heart, Megaphone, Share2, Phone, Search, UserCheck, PlayCircle, Settings, Handshake } from "lucide-react";
import { useState } from "react";
import { IBM_Plex_Sans } from 'next/font/google';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import FooterSection from '@/components/footer';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], display: 'swap' });

export default function VirtualAssistantPage() {

  const [activeCard, setActiveCard] = useState("administrative");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const featureCards = [
    {
      icon: Users,
      title: "INDIA-BASED",
      description: "We search the entire country for a Virtual Assistant to find the right person for your organization.",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "HIGHLY VETTED",
      description: "Our exhaustive recruiting process includes – but isn't limited to – several video interviews and skills assessments to find talented, hard-working candidates.",
      delay: 0.4
    }
  ];

  const taskCategories = [
    {
      id: "administrative",
      title: "ADMINISTRATIVE TASKS",
      icon: FileText,
      activeColor: "from-emerald-400 to-teal-500",
      activeHoverColor: "from-emerald-500 to-teal-600",
      image: "/optimized/images/virtual-assistance/administrative-tasks.webp"
    },
    {
      id: "operational",
      title: "OPERATIONAL TASKS",
      icon: Building,
      activeColor: "from-emerald-400 to-teal-500",
      activeHoverColor: "from-emerald-500 to-teal-600",
      image: "/optimized/images/virtual-assistance/Operational-tasks.webp"
    },
    {
      id: "financial",
      title: "FINANCIAL TASKS",
      icon: DollarSign,
      activeColor: "from-emerald-400 to-teal-500",
      activeHoverColor: "from-emerald-500 to-teal-600",
      image: "/optimized/images/virtual-assistance/Financial-Tasks.webp"
    },
    {
      id: "personal",
      title: "PERSONAL TASKS",
      icon: Heart,
      activeColor: "from-emerald-400 to-teal-500",
      activeHoverColor: "from-emerald-500 to-teal-600",
      image: "/optimized/images/virtual-assistance/Personal-Tasks.webp"
    },
    {
      id: "marketing",
      title: "MARKETING TASKS",
      icon: Megaphone,
      activeColor: "from-emerald-400 to-teal-500",
      activeHoverColor: "from-emerald-500 to-teal-600",
      image: "/optimized/images/virtual-assistance/marketing-tasks.webp"
    }
  ];

  const taskContent = {
    administrative: [
      "Calendar & schedule management",
      "Email management",
      "Travel coordination",
      "Meeting confirmation, preparation & notes",
      "Event planning & coordination",
      "Project assistance, research & reporting powered by AI tools",
      "Employee candidate pre-screening & interviews",
      "Return calls & voicemails"
    ],
    operational: [
      "Client intake",
      "Project coordination",
      "HR-related tasks",
      "CRM management and updating",
      "Industry research",
      "Report generation",
      "Data analysis enhanced by AI-powered insights",
      "Project management assistance"
    ],
    financial: [
      "Calendar & schedule management",
      "Email management",
      "Travel coordination",
      "Meeting confirmation, preparation & notes",
      "Event planning & coordination",
      "Project assistance, research & reporting powered by AI tools",
      "Employee candidate pre-screening & interviews",
      "Return calls & voicemails",
      "Client intake",
      "Project coordination",
      "HR-related tasks",
      "CRM management and updating",
      "Industry research",
      "Report generation",
      "Data analysis enhanced by AI-powered insights",
      "Project management assistance"
    ],
    personal: [
      "Gift purchases",
      "Send personal cards",
      "Set personal appointments",
      "AI-enhanced vendor research",
      "Vacation planning"
    ],
    marketing: [
      "Schedule pre-written & pre-approved social media content",
      "Report generation with AI-enhanced insights",
      "Manage social calendar & library",
      "eNewsletters, blogs & eBlasts",
      "Compile free or licensed stock photos",
      "Responding to social media posts"
    ]
  };

  const howItWorksSteps = [
    {
      title: "Step 1. Sales Call",
      description: "Meet with your Solutions Consultant to identify your exact needs and pain points and determine the right hire for you. If Gateway is a good fit, we'll send you an agreement to sign, and you'll be paired with a Client Success Consultant.",
      link: "#",
      icon: <div className="flex justify-center mb-4"><Phone className="w-8 h-8 text-teal-600" /></div>
    },
    {
      title: "Step 2. Discovery Call", 
      description: "Meet with your Client Success Consultant to deep dive into your tasks, tools, culture, and personality requirements to ensure we match you with the right Gateway Professional.",
      link: "#",
      icon: <div className="flex justify-center mb-4"><Search className="w-8 h-8 text-teal-600" /></div>
    },
    {
      title: "Step 3. Placement Process",
      description: "Now for our Secret Sauce: Your Client Success Consultant will vet and interview top candidates from our bench of nearly 2,000 Indian-based Professionals. They'll select the best match for you—in an average of just one week.",
      link: "#",
      icon: <div className="flex justify-center mb-4"><UserCheck className="w-8 h-8 text-teal-600" /></div>
    },
    {
      title: "Step 4. Kickoff Call",
      description: "You, your Client Success Consultant, and your new teammate will have a kickoff call—the official start to your partnership—to meet each other, set initial goals, discuss communication plans, and set yourselves up for success.",
      link: "#",
      icon: <div className="flex justify-center mb-4"><PlayCircle className="w-8 h-8 text-teal-600" /></div>
    },
    {
      title: "Step 5. Onboarding",
      description: "Your Client Success Consultant stays close to provide our signature exceptional service and guide you through our proven onboarding process",
      link: "#",
      icon: <div className="flex justify-center mb-4"><Settings className="w-8 h-8 text-teal-600" /></div>
    },
    {
      title: "Step 6. Nurturing",
      description: "You will have ongoing check-ins to support both you and your Gateway Professional throughout your partnership with Gateway.",
      link: "#",
      icon: <div className="flex justify-center mb-4"><Handshake className="w-8 h-8 text-teal-600" /></div>
    }
  ];

  const gatewayDifference = [
    {
      title: "Indian-Based Professionals",
      description: "Our Professionals are all based in India with vetted and proven experience."
    },
    {
      title: "No Overhead Costs",
      description: "Keep costs low by hiring someone remotely and skipping the overhead."
    },
    {
      title: "Fully Managed Onboarding & Support",
      description: "Our team guides you through every step of the process—as you onboard and beyond."
    },
    {
      title: "Flexible Service Plans",
      description: "Only pay for what you need. And if your needs change, so can your commitment."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-white">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/optimized/background_images/virtual-assestent.webp"
            alt="Virtual Assistant Background"
            fill
            sizes="100vw"
            priority={true}
            className="object-cover object-center"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 pt-32 md:pt-28">
            <div className="max-w-4xl">
              
              {/* Main Content */}
              <motion.div
                className="mb-12"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                {/* Title */}
                <motion.h1 
                  className={`${ibmPlexSans.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6`}
                  variants={fadeInUp}
                >
                  Hire a Virtual Assistant Expert at just{' '}
                  <span className="text-teal-400">$5</span>
                </motion.h1>
                
                {/* Underline */}
                <motion.div
                  className="h-1 w-32 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 rounded-full mb-8"
                  variants={fadeInUp}
                />

                {/* Description */}
                <motion.p 
                  className={`${ibmPlexSans.className} text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed mb-10`}
                  variants={fadeInUp}
                >
                  Accomplish More. Juggle Less.
                </motion.p>

                {/* CTA Button */}
                <motion.div variants={fadeInUp}>
                  <motion.a
                    href="https://calendly.com/deepak-teja/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Hire Gateway
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Feature Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.8
                    }
                  }
                }}
              >
                {featureCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { 
                          duration: 0.6, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: card.delay 
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                          <card.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-sm">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>


        </div>
      </section>

      {/* What's holding you back? Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${ibmPlexSans.className} text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight`}>
              What's holding you back?
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            
            {/* Lack of Time Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/optimized/images/Lack-of-Time.webp"
                  alt="Lack of Time"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`${ibmPlexSans.className} text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300`}>
                  Lack of Time
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Are you stretched so thin that you don't have time to hire the help you need—let alone take a vacation?
                </p>
              </div>
            </motion.div>

            {/* Unanswered Calls & Emails Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/Unanswered-Calls-&-Emails.jpg"
                  alt="Unanswered Calls & Emails"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`${ibmPlexSans.className} text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300`}>
                  Unanswered Calls & Emails
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Have you missed information critical for growing your organization or serving your clients?
                </p>
              </div>
            </motion.div>

            {/* Missed Projects & Deadlines Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/Missed-Projects-&-Deadlines.jpg"
                  alt="Missed Projects & Deadlines"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`${ibmPlexSans.className} text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300`}>
                  Missed Projects & Deadlines
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  How many opportunities do you miss because of your chaos? It's time to hire a Virtual Assistant!
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* What Is a Virtual Assistant? Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${ibmPlexSans.className} text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight mb-8`}>
              What Is a Virtual Assistant?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Gateway's Virtual Assistant services provide a variety of solutions, including:
            </p>
            
            {/* Horizontal Line */}
            <motion.div
              className="w-full max-w-4xl mx-auto h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Interactive Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Side - Interactive Cards */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {taskCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                      activeCard === category.id 
                        ? 'shadow-2xl transform scale-105' 
                        : 'shadow-lg hover:shadow-xl hover:scale-102'
                    }`}
                    onClick={() => setActiveCard(category.id)}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                                                              <div className={`${
                       activeCard === category.id 
                         ? `bg-gradient-to-r ${category.activeColor} text-white` 
                         : 'bg-white text-gray-800 border-2 border-gray-200'
                     } p-4 relative overflow-hidden transition-all duration-300`}>
                       
                       {/* Background Pattern - Only for active cards */}
                       {activeCard === category.id && (
                         <div className="absolute inset-0 opacity-10">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                           <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-4 translate-y-4"></div>
                         </div>
                       )}
                       
                       <div className="relative z-10 flex items-center space-x-4">
                         <motion.div
                           className={`w-12 h-12 rounded-full flex items-center justify-center ${
                             activeCard === category.id 
                               ? 'bg-white/20 backdrop-blur-sm' 
                               : 'bg-gray-100 border border-gray-300'
                           } transition-all duration-300`}
                           animate={{
                             scale: activeCard === category.id ? 1.1 : 1,
                             rotate: activeCard === category.id ? 360 : 0
                           }}
                           transition={{ duration: 0.5 }}
                         >
                           <category.icon className={`w-6 h-6 ${
                             activeCard === category.id ? 'text-white' : 'text-gray-600'
                           }`} />
                         </motion.div>
                         
                         <div className="flex-1">
                           <h3 className={`text-lg md:text-xl font-bold tracking-wide ${
                             activeCard === category.id ? 'text-white' : 'text-gray-800'
                           }`}>
                             {category.title}
                           </h3>
                         </div>
                         
                         {/* Active Indicator */}
                         <motion.div
                           className={`w-4 h-4 rounded-full ${
                             activeCard === category.id ? 'bg-white' : 'bg-gray-300'
                           }`}
                           animate={{
                             scale: activeCard === category.id ? 1.5 : 1,
                             opacity: activeCard === category.id ? 1 : 0.5
                           }}
                           transition={{ duration: 0.3 }}
                         />
                       </div>
                     </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Side - Dynamic Content */}
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full transform -translate-x-12 translate-y-12 opacity-50"></div>
                
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCard}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {/* Header with Image */}
                      <div className="mb-8">
                        <motion.h3 
                          className={`${ibmPlexSans.className} text-3xl md:text-4xl font-bold text-gray-800 mb-6`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {taskCategories.find(cat => cat.id === activeCard)?.title}
                        </motion.h3>
                        
                        {/* Image */}
                        <motion.div
                          className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-lg mb-6"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <Image
                            src={taskCategories.find(cat => cat.id === activeCard)?.image || ""}
                            alt={taskCategories.find(cat => cat.id === activeCard)?.title || ""}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>
                        
                        {/* Divider Line */}
                        <motion.div
                          className="w-full h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        {taskContent[activeCard as keyof typeof taskContent].map((task, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3 group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.05) }}
                          >
                            <motion.div
                              className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-1"
                              whileHover={{ scale: 1.2, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                            <motion.p 
                              className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              {task}
                            </motion.p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 25 Things You Can Delegate Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-gray-900 to-teal-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Centered Content Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`${ibmPlexSans.className} text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8`}>
                21 Things You Can Delegate to Our Virtual Assistants Today
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Delegation is one of the most effective tools in a leader's tool kit because it helps you grow your business. We're confident we can help your business become more productive. Still researching the benefits of hiring a virtual assistant or how this would improve your workflows? To get started, here's a list of commonly delegated tasks that you can hand over today!
              </p>

              {/* Key Benefits Bar */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-3xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8 text-center">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-medium">Save Time</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-white font-medium">Cut Costs</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-white font-medium">Increase Efficiency</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tasks Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { id: 1, title: "Calendar management", description: "Prioritize high-impact meetings and ruthlessly protect your time so you're focused on what moves the needle in a resource-constrained environment." },
                { id: 2, title: "Inbox management", description: "Triage and organize emails to ensure critical opportunities aren't missed, reporting times they reply, and you're not constantly task-switching when clarity matters most." },
                { id: 3, title: "Meeting prep and follow-up", description: "Maximize the value of every meeting by serving prepared and capturing action items—so nothing gets lost, and every minute counts when time and focus are in short supply." },
                { id: 4, title: "Travel coordination", description: "Book efficient, budget-conscious travel that supports business-critical trips and relationship building—because every dollar matters more now." },
                { id: 5, title: "Competitive and market intelligence", description: "Monitor competitor shifts, gather client feedback, and track industry changes so leadership can quickly identify threats or pivot toward emerging opportunities." },
                { id: 6, title: "Recession-specific strategy support", description: "Assist with gathering internal and external insights to shape your response plan—whether it's identifying new services, doubling down on the basics, or innovating offerings." },
                { id: 7, title: "Process documentation", description: "Build up SOPs to make operations more efficient, reduce training time, and protect against disruptions—especially important when teams are leaner or roles shift." },
                { id: 8, title: "Expense Tracking", description: "Track budget details and flag unnecessary or redundant costs—helping everyone save and avoid death by a thousand minor budget cuts." },
                { id: 9, title: "Cold email outreach", description: "Support relationship generation with targeted, personalized email outreach—creating new revenue opportunities without increasing your marketing spend." },
                { id: 10, title: "Research and vendor support", description: "Source budget-friendly vendors and summarize relevant market data to accelerate smarter decisions and spend wisely and stay ahead of the curve." },
                { id: 11, title: "Project coordination", description: "Keep cross-functional initiatives on track and within budget as business priorities continue—even as your team priorities competing priorities." },
                { id: 12, title: "Relationship management", description: "Maintain clean CRM records and proactively schedule check-ins to strengthen client relationships and improve retention and referrals." },
                { id: 13, title: "File and document organization", description: "Keep files efficiently organized across digital systems so teams can access what they need—fast—without wasting time hunting for info." },
                { id: 14, title: "Light bookkeeping support", description: "Help advisors compile and generate simple reports that give leadership quick visibility into spend patterns, helping spot leaks before they tip." },
                { id: 15, title: "Task tracking and reminders", description: "Prevent details from slipping through the cracks—especially when teams are juggling more with less." },
                { id: 16, title: "Gift or appreciation coordination", description: "Support morale and relationship building in cost-conscious ways, fulfilling loyalty among clients and internal networks." },
                { id: 17, title: "Internal dashboard updates", description: "Keep KPIs and financial snapshots current so leaders can see at a glance how it's working—and what needs attention—at all times." },
                { id: 18, title: "Software/tool vetting", description: "Audit current tools and compare alternatives to eliminate redundancy, cut costs, and boost team efficiency without sacrificing performance." },
                { id: 19, title: "Social Media Scheduling", description: "Maintain a consistent online presence that supports visibility and brand trust—without needing to invest in paid campaigns." },
                { id: 20, title: "Team Communication Support", description: "Help distribute updates, share important messages, and keep team aligned—even if everyone's moving fast and bandwidth is tight." },
                { id: 21, title: "Document editing and proofreading", description: "Polish internal and external communications to professionals—so your messaging stays sharp and credible when it matters most." }
              ].map((task, index) => (
                <motion.div
                  key={task.id}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:border-teal-400/50 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {task.id}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {task.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {task.description}
                    </p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-teal-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`${ibmPlexSans.className} text-3xl md:text-4xl font-bold text-white mb-6`}>
                Ready to Delegate and Focus on What Matters Most?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't let administrative tasks consume your valuable time. 
                Let our skilled virtual assistants handle these 21 critical tasks so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://calendly.com/deepak-teja/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.a>
                <motion.button
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Our Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${ibmPlexSans.className} text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight mb-8`}>
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Our streamlined process ensures you get matched with the perfect virtual assistant quickly and efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HoverEffect items={howItWorksSteps} className="max-w-7xl mx-auto" />
          </motion.div>

          {/* Hire Gateway Button */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://calendly.com/deepak-teja/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Gateway
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* The Gateway Difference Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-gray-900 to-teal-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side - Title and Button */}
              <motion.div
                className="space-y-8 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.div
                    className="inline-block px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-semibold mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Why Choose Us
                  </motion.div>
                  
                  <h2 className={`${ibmPlexSans.className} text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6`}>
                    The Gateway <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Difference</span>
                  </h2>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Experience the advantages that set us apart from traditional staffing solutions.
                  </p>
                </div>
                
                <motion.a
                  href="https://calendly.com/deepak-teja/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10">Hire Gateway</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </motion.a>
              </motion.div>

              {/* Right Side - Feature Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {gatewayDifference.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="relative h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white/20 hover:border-teal-400/50 transition-all duration-500 cursor-pointer overflow-hidden"
                      whileHover={{ y: -8, scale: 1.05 }}
                    >
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      
                      {/* Icon based on index */}
                      <motion.div
                        className="w-14 h-14 mb-6 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className="text-white text-2xl">
                          {index === 0 && <Users className="w-7 h-7" />}
                          {index === 1 && <DollarSign className="w-7 h-7" />}
                          {index === 2 && <Shield className="w-7 h-7" />}
                          {index === 3 && <Settings className="w-7 h-7" />}
                        </div>
                      </motion.div>
                      
                      <div className="relative z-10">
                        <h3 className={`${ibmPlexSans.className} text-xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {feature.description}
                        </p>
                        
                        {/* Decorative line */}
                        <motion.div
                          className="w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 mt-6 group-hover:w-16 transition-all duration-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: 64 }}
                          transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>

                      {/* Floating particles effect */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                      <div className="absolute bottom-8 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Who Can Use Our Services */}
            <motion.div
              className="mt-32 md:mt-40 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`${ibmPlexSans.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12`}>
                Who can use our Virtual Assistant Services?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  "Executives", "Small Businesses", "Church Leaders",
                  "Sales Teams", "Attorneys", "Consultants", 
                  "Entrepreneurs", "Photographers", "Authors"
                ].map((role, index) => (
                  <motion.div
                    key={role}
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 px-6 py-4 hover:bg-white/20 hover:border-teal-400/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <p className="text-gray-200 font-semibold group-hover:text-white transition-colors duration-300">
                      {role}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                className="text-2xl font-bold text-teal-300 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                And you, probably!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stop Spending Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Content */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`${ibmPlexSans.className} text-2xl sm:text-3xl lg:text-4xl font-black text-gray-800 leading-tight`}>
                Stop spending countless hours every week on tasks someone else can do for you.
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Contact us today to discover how you can reclaim your schedule, focus on what matters, and achieve the growth you deserve.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://calendly.com/deepak-teja/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire Gateway</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Hire a Virtual Assistant Section - MOVED TO END */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${ibmPlexSans.className} text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight mb-16 text-center`}>
              Why Hire a Virtual Assistant?
            </h2>
            
            {/* Two Cards Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
              
              {/* Left Card - Problem Statement */}
              <motion.div
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Problem Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p>As a busy leader, there are a lot of things on your plate.</p>
                    
                    <p>Whether it's managing email, staying on top of project updates, or keeping up with an overloaded schedule, there are so many details required to run a successful organization.</p>
                    
                    <p className="font-semibold text-orange-600">But those details come at a heavy cost: your focus.</p>
                    
                    <p>The important details of your organization have to be handled, but who says you're the best person to handle them?</p>
                    
                    <p>We all want to focus on things that make the biggest impact—professionally and personally. But too often, the demanding details steal our time and attention.</p>
                    
                    <p className="font-bold text-2xl text-red-600 mt-6">It's time to take it back with Gateway.</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Card - Solution Statement */}
              <motion.div
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Solution Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p>Gateway's AI-empowered Virtual Assistant services are pre-vetted and intentionally matched with you and your organization, saving you countless hours of managing job postings, filtering candidates, and checking references.</p>
                    
                    <p>By combining human expertise with powerful AI-enhanced tools, our assistants bring greater efficiency and insight to every task.</p>
                    
                    <p className="font-semibold text-teal-600">Our standards are high, and our acceptance rate is lower than Harvard's, ensuring you get the right Virtual Assistant for your needs.</p>
                    
                    <p>So, instead of accomplishing those important (but time-consuming) administrative tasks, work with Gateway.</p>
                     
                    <p className="font-bold text-xl text-teal-600">We are a flexible staffing company you can trust—powered by people, enhanced by AI, giving you more time to focus on what matters most.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hire Gateway Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://calendly.com/deepak-teja/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Gateway
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
} 