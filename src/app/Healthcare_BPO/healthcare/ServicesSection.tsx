'use client';

import { ReactLenis } from "lenis/react";
import dynamic from 'next/dynamic';

// Lazy load icons to improve initial load performance
const ClipboardList = dynamic(() => import('lucide-react').then(mod => mod.ClipboardList), { 
  ssr: false,
  loading: () => <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full animate-pulse" />
});

const Monitor = dynamic(() => import('lucide-react').then(mod => mod.Monitor), { 
  ssr: false,
  loading: () => <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full animate-pulse" />
});

const UserCheck = dynamic(() => import('lucide-react').then(mod => mod.UserCheck), { 
  ssr: false,
  loading: () => <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full animate-pulse" />
});

const ChevronRight = dynamic(() => import('lucide-react').then(mod => mod.ChevronRight), { 
  ssr: false,
  loading: () => <div className="w-3 h-3 bg-gray-400 rounded-full" />
});

const Database = dynamic(() => import('lucide-react').then(mod => mod.Database), { 
  ssr: false,
  loading: () => <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full animate-pulse" />
});

const services = [
  {
    title: "End-to-End Medical Billing & RCM",
    description: "Maximize revenue with our comprehensive billing solutions that ensure accuracy, compliance, and faster reimbursements.",
    features: [
      "Claims submission & denial management",
      "Payment posting & reconciliation",
      "A/R follow-ups & reporting",
      "Compliance with latest regulations"
    ],
    icon: <ClipboardList className="w-12 h-12 mb-6" />,
    bgColor: "bg-white",
    textColor: "text-slate-800",
    borderColor: "border-[#18C7FF]",
    rotate: "rotate-1",
    accentColor: "text-[#18C7FF]"
  },
  {
    title: "Telehealth Support Services",
    description: "Seamlessly integrate virtual care into your practice with our end-to-end telehealth solutions.",
    features: [
      "Virtual appointment scheduling",
      "Secure patient documentation",
      "Telemedicine billing & coding",
      "HIPAA-compliant platform"
    ],
    icon: <div className="w-12 h-12 mb-6 flex items-center justify-center">
      <Monitor className="w-10 h-10 md:w-12 md:h-12 text-white" />
    </div>,
    bgColor: "bg-gradient-to-br from-[#0d8ec5] to-[#18C7FF]",
    textColor: "text-white",
    borderColor: "border-white/20",
    rotate: "-rotate-1",
    accentColor: "text-white"
  },
  {
    title: "Healthcare BPO Solutions",
    description: "Comprehensive back-office support to streamline your healthcare operations and improve efficiency.",
    features: [
      "Medical coding & auditing",
      "Provider credentialing",
      "Patient support services",
      "EHR/EMR management"
    ],
    icon: <div className="w-12 h-12 mb-6 flex items-center justify-center">
      <UserCheck className="w-10 h-10 md:w-12 md:h-12" />
    </div>,
    bgColor: "bg-white",
    textColor: "text-slate-800",
    borderColor: "border-[#18C7FF]",
    rotate: "rotate-1",
    accentColor: "text-[#18C7FF]"
  },
  {
    title: "Healthcare Data Management",
    description: "Transform your data into actionable insights with our secure and compliant data solutions.",
    features: [
      "EHR management & migration",
      "Data analytics & reporting",
      "Interoperability solutions",
      "HIPAA-compliant storage"
    ],
    icon: <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
      <Database className="w-10 h-10 md:w-12 md:h-12 text-white" />
    </div>,
    bgColor: "bg-gradient-to-br from-[#0a6e96] to-[#18C7FF]",
    textColor: "text-white",
    borderColor: "border-white/20",
    rotate: "-rotate-1",
    accentColor: "text-white"
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our Healthcare BPO Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to streamline your healthcare operations and improve patient care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#18C7FF]/50 transition-all duration-300 ${index % 2 === 0 ? 'sm:mt-0' : 'sm:mt-8'}`}
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-[#18C7FF]/20 to-[#18C7FF]/10">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h2 className="text-xl font-bold text-white mb-2 text-center">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4 text-center">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-[#18C7FF] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <button className="w-full py-2.5 px-4 bg-[#18C7FF]/10 hover:bg-[#18C7FF]/20 text-[#18C7FF] rounded-lg text-sm font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;