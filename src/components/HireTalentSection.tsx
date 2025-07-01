"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lexend } from 'next/font/google';
import Link from 'next/link';
import { 
  ArrowRight, Users, Star, Briefcase, Clock, CheckCircle, 
  MessageCircle, User, Mail, Building2, PhoneCall
} from 'lucide-react';

const lexend = Lexend({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap' });

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  gradientFrom: string;
  gradientTo: string;
}

interface HireTalentSectionProps {
  theme?: ThemeColors;
  useSpecialColor?: boolean; // For AI Solutions page to use #E60076
  customColor?: string; // For specific color override (SaaS, Taxation, etc.)
}

const defaultTheme: ThemeColors = {
  primary: "blue-600",
  secondary: "purple-600", 
  accent: "blue-500",
  background: "from-gray-50 via-white to-blue-50",
  gradientFrom: "blue-600",
  gradientTo: "purple-600"
};

const HireTalentSection: React.FC<HireTalentSectionProps> = ({ theme = defaultTheme, useSpecialColor = false, customColor }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  // Define colors based on props
  const getHighlightColor = () => {
    if (customColor) return customColor;
    if (useSpecialColor) return '#E60076';
    return '#3B82F6'; // Blue default
  };
  
  const getButtonColor = () => {
    if (customColor) return customColor;
    if (useSpecialColor) return '#E60076';
    return '#3B82F6';
  };
  
  const getButtonHoverColor = () => {
    if (customColor) {
      // Generate a darker version of the custom color
      if (customColor === '#F35120') return '#D63E02'; // Darker orange for SaaS
      if (customColor === '#DC2626') return '#B91C1C'; // Darker red for US Taxation
      return customColor;
    }
    if (useSpecialColor) return '#D1006B';
    return '#2563EB';
  };

  const benefits = [
    { icon: Users, text: "Pre-vetted talent pool" },
    { icon: Clock, text: "Quick turnaround time" },
    { icon: Star, text: "Proven track record" },
    { icon: CheckCircle, text: "Quality guarantee" }
  ];

  const services = [
    "AI & Machine Learning Development",
    "Cloud Solutions & Architecture", 
    "SaaS Integration & Support",
    "Healthcare BPO Services",
    "IT Outsourcing",
    "US Taxation Services",
    "Custom Software Development",
    "Other (Please specify)"
  ];

  if (isFormOpen) {
    return (
      <section className={`${lexend.className} py-16 md:py-20 bg-gradient-to-br ${theme.background} relative overflow-hidden`}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-${theme.primary}/10 to-${theme.secondary}/10 rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-${theme.secondary}/10 to-${theme.accent}/10 rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Let's <span style={{ color: getHighlightColor() }}>Build Something Amazing</span> Together
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tell us about your project and we'll connect you with the perfect talent to bring your vision to life.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/40 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm`}
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm`}
                      placeholder="your.email@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm`}
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <PhoneCall className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm`}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-${theme.primary} focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none`}
                    placeholder="Please describe your project requirements, timeline, and any specific skills needed..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    type="submit"
                    className="flex-1 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:brightness-90 flex items-center justify-center"
                    style={{ backgroundColor: getButtonColor() }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Hire Our Talent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${lexend.className} py-16 md:py-20 bg-gradient-to-br ${theme.background} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-${theme.primary}/8 to-${theme.secondary}/8 rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-${theme.secondary}/8 to-${theme.accent}/8 rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Ready to <span style={{ color: getHighlightColor() }}>Hire Top Talent?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied clients who have transformed their businesses with our expert professionals. Start your project today!
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className={`w-8 h-8 text-${theme.primary} mx-auto mb-2`} />
                <p className="text-sm font-medium text-gray-700">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setIsFormOpen(true)}
              className="text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:brightness-90 flex items-center mx-auto"
              style={{ backgroundColor: getButtonColor() }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-6 h-6 mr-3" />
              <span className="text-lg">Hire Our Talent Now</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">
              Free consultation • Quick response • No hidden costs
            </p>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HireTalentSection; 