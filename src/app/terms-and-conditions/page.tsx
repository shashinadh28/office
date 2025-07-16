'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto prose prose-lg prose-blue"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.2}
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Gateway Global Workforce ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website located at gatewayworkforce.com and our services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gateway Global Workforce provides professional staffing and outsourcing services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IT Outsourcing and Development Services</li>
                  <li>Healthcare BPO Services</li>
                  <li>US Taxation and Accounting Services</li>
                  <li>Cloud Solutions and Infrastructure</li>
                  <li>SaaS Implementation and Support</li>
                  <li>AI Solutions and Integration</li>
                  <li>Virtual Assistant Services</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">By using our services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Payment terms are defined in individual service agreements. Generally, payments are due within 30 days of invoice date unless otherwise specified. Late payments may incur additional charges as outlined in your service agreement.
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, trademarks, and intellectual property on our website and in our services remain the property of Gateway Global Workforce or our licensors. Work products created specifically for clients under service agreements are governed by the terms of those specific agreements.
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed">
                  We maintain strict confidentiality standards and will protect your sensitive information in accordance with our Privacy Policy and applicable data protection laws. Specific confidentiality terms are outlined in individual service agreements.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Gateway Global Workforce shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate services in accordance with the terms specified in individual service agreements. We reserve the right to suspend or terminate access to our services for violations of these Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, India.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with the effective date. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="text-gray-700 mb-2"><strong>Gateway Global Workforce</strong></p>
                  <p className="text-gray-700 mb-2">Email: info@gatewayworkforce.com</p>
                  <p className="text-gray-700 mb-2">Phone: +91-XXX-XXX-XXXX</p>
                  <p className="text-gray-700">Address: Hyderabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 