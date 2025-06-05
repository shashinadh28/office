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
    <ReactLenis root>
      <main className="bg-slate-950">
        {/* Hero Section */}
        <section className="text-white min-h-[70vh] sm:min-h-screen w-full bg-slate-950 flex items-center justify-center sticky top-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="relative z-10 text-center px-4 sm:px-8 w-full max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center tracking-tight leading-tight mb-4 sm:mb-6 px-4">
              Our Healthcare BPO Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive solutions to streamline your healthcare operations and improve patient care through expert business process outsourcing.
            </p>
            <div className="animate-bounce mt-6 sm:mt-8">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="text-white w-full bg-slate-950 py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative grid gap-y-12 md:gap-y-16 max-w-2xl mx-auto py-16">
              {services.map((service, index) => (
                <figure
                  key={service.title}
                  className="sticky min-h-screen grid place-items-center"
                  style={{ top: '5rem' }} // 5rem = 80px
                >
                  <article
                    className={`${service.bgColor} ${service.textColor} w-[90vw] max-w-xl rounded-xl sm:rounded-2xl ${service.rotate} p-6 md:p-8 flex flex-col border-2 ${service.borderColor} overflow-hidden shadow-2xl hover:shadow-slate-900/40 transition-all duration-300`}
                    style={{ minHeight: '480px' }}
                  >
                    {/* Icon/Image Container */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center flex-1 flex flex-col">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto">
                        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-left">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className={`flex-shrink-0 mt-1 ${service.accentColor}`}>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                              <span className="ml-2 text-sm sm:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button 
                          className={`w-full py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                            service.textColor.includes('white') 
                              ? 'bg-white text-[#0d8ec5] hover:bg-gray-100' 
                              : 'bg-[#18C7FF] text-white hover:bg-[#0d8ec5]'
                          }`}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-[#18C7FF] to-transparent opacity-50 mt-3 sm:mt-4"></div>
                  </article>
                </figure>
              ))}
              {/* Spacer to ensure the last card can scroll up fully */}
              <div style={{ height: '50vh' }} aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
};

export default ServicesSection;