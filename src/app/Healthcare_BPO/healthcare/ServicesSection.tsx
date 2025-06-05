'use client';

import { ReactLenis } from "lenis/react";

import { ClipboardList, Monitor, UserCheck, Database, ChevronRight } from 'lucide-react';

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
    icon: <Monitor className="w-12 h-12 mb-6 text-white" />,
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
    icon: <UserCheck className="w-12 h-12 mb-6" />,
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
    icon: <Database className="w-12 h-12 mb-6 text-white" />,
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
        <div className="wrapper">
          <section className="text-white min-h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10 text-center px-8">
              <h1 className="2xl:text-8xl text-6xl font-bold text-center tracking-tight leading-tight mb-8">
                Our Healthcare BPO Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                Comprehensive solutions to streamline your healthcare operations and improve patient care through expert business process outsourcing.
              </p>
              <div className="animate-bounce mt-16">
                <svg className="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </section>
        </div>
        <section className="text-white w-full bg-slate-950">
          <div className="flex justify-center px-4 md:px-16">
            <div className="grid gap-2">
              {services.map((service) => (
                <figure key={service.title} className="sticky top-0 h-screen grid place-content-center p-8">
                  <article 
                    className={`${service.bgColor} ${service.textColor} h-[30rem] w-[48rem] rounded-3xl ${service.rotate} p-10 grid grid-cols-1 gap-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-10 border-2 ${service.borderColor} overflow-hidden`}
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold mt-4 mb-3 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-lg max-w-2xl mx-auto opacity-90">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="mt-2 space-y-3 max-w-md mx-auto w-full">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          <div className={`p-1.5 rounded-full ${service.accentColor} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-200`}>
                            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.5} />
                          </div>
                          <span className="text-base text-center">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#18C7FF] to-transparent opacity-50"></div>
                  </article>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
};

export default ServicesSection;