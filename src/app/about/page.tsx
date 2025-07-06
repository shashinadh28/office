'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, Award, Users, TrendingUp, Heart, Sparkles, 
  Globe, Star, CheckCircle, ArrowRight, Target, Zap, Briefcase,
  GraduationCap, Building2
} from 'lucide-react';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

const AboutPage = () => {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimated(true);
    }, 300);
  }, []);

  const achievements = [
    { icon: Users, label: "10+ Professionals Placed", value: "500+", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, label: "Global Clients", value: "25+", color: "from-purple-500 to-pink-500" },
    { icon: Award, label: "Client Satisfaction", value: "95%", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, label: "Growth in 2 Years", value: "30%", color: "from-orange-500 to-red-500" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for People",
      description: "Every placement is a life changed, every partnership a success story written together."
    },
    {
      icon: Target,
      title: "Excellence First",
      description: "We don't just meet expectations—we exceed them with unwavering commitment to quality."
    },
    {
      icon: Zap,
      title: "Innovation Drive",
      description: "Pioneering the future of global workforce solutions with cutting-edge technology and insights."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${lexend.className}`}>
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={textAnimated ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200 mb-6"
              variants={fadeIn}
            >
              <Building2 className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">About Gateway Workforce</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              variants={fadeIn}
            >
              Connecting Global <span className="text-purple-600">Opportunities</span><br />
              with Indian <span className="text-purple-600">Excellence</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              We bridge the gap between world-class businesses and India's finest talent, 
              creating meaningful partnerships that drive success across continents.
            </motion.p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={textAnimated ? "visible" : "hidden"}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-purple-600">Founder</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The visionary behind Gateway Workforce's mission to connect global talent
            </p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Founder Image */}
                <div className="lg:w-2/5 p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
                  <div className="relative">
                    <div className="w-64 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/optimized/images/Founder.jpg"
                        alt="Deepak Teja - Founder & CEO"
                        width={320}
                        height={400}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900">Deepak Teja</h3>
                        <p className="text-sm text-purple-600 font-medium">Founder & CEO</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Founder Story */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="space-y-8">
                    {/* Education & Background */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Educational Journey</h4>
                        <p className="text-gray-600">
                          MBA from Cal Baptist University, California, USA. After gaining valuable experience in the US business landscape, 
                          I returned to India with a vision to bridge global opportunities with local talent.
                        </p>
                      </div>
                    </div>

                    {/* Company Vision */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Building Gateway Workforce</h4>
                        <p className="text-gray-600">
                          Together with my US colleagues, I founded Gateway Workforce to help businesses in the US and UK 
                          access India's exceptional talent pool. Our mission is to create meaningful partnerships that 
                          transform both businesses and careers.
                        </p>
                      </div>
                    </div>

                    {/* Social Impact */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Social Impact</h4>
                        <p className="text-gray-600">
                          Beyond business, I run an NGO providing educational support to orphans, children with special needs, 
                          and those from single-parent households. I believe education is the foundation of opportunity.
                        </p>
                      </div>
                    </div>

                    {/* Personal */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-orange-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Beyond Work</h4>
                      </div>
                      <p className="text-gray-600">
                        When not building businesses or supporting communities, I'm a thrill-seeker who loves adventurous activities 
                        and exploring new challenges!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Gateway Workforce
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of companies who have discovered the power of Indian talent through Gateway Workforce.
            </p>
            <motion.a
              href="https://calendly.com/deepak-teja/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 