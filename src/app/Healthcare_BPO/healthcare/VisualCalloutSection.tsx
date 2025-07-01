import React from 'react';

const VisualCalloutSection = () => (
  <section className="py-16 px-4 flex flex-col md:flex-row items-center bg-white">
    <div className="md:w-1/2 flex justify-center items-center p-4 md:p-8 mb-8 md:mb-0">
      {/* Replace with your SVG/illustration */}
      <div className="relative w-80 h-80">
        {/* Floating decorative element */}
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-2xl animate-float z-0"></div>
        <img src="/optimized/images/hospital.webp" alt="Hospital Illustration" className="w-full h-full object-cover rounded-2xl relative z-10" />
      </div>
    </div>
    <div className="md:w-1/2 md:pl-12">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 animate-fade-in-up">Boost Efficiency & Maximize Revenue</h2>
      <p className="text-gray-700 text-lg mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        By partnering with Gateway Workforce, healthcare providers can focus on delivering quality care while we handle the complexities of billing, coding, and telehealth operations. Our end-to-end solutions ensure faster reimbursements, fewer claim denials, and improved financial performance.
      </p>
      <div className="h-1 w-24 bg-teal-500 rounded-full animate-line-grow" />
    </div>
  </section>
);

export default VisualCalloutSection;

<style jsx global>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-16px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`}</style>