'use client';

import { ReactLenis } from "lenis/react";

const services = [
  {
    title: "End-to-End Medical Billing & Revenue Cycle Management",
    description:
      "Claims submission & processing, Denial management & appeals, Payment posting & reconciliation, Patient billing & collections, A/R follow-ups & reporting",
    color: "bg-green-500",
    rotate: "rotate-6",
    link: "#",
  },
  {
    title: "Telehealth Support Services",
    description:
      "Virtual appointment scheduling, Patient intake & documentation, Remote care coordination, Telemedicine billing & coding, Compliance & data security",
    color: "bg-red-400",
    rotate: "",
    link: "#",
  },
  {
    title: "Additional Healthcare BPO Solutions",
    description:
      "Medical coding & auditing, Credentialing & provider enrollment, Customer service & patient support, EHR/EMR management",
    color: "bg-orange-400",
    rotate: "-rotate-6",
    link: "#",
  },
  {
    title: "Healthcare Data Management",
    description:
      "Electronic health record management, Data entry and validation, Healthcare analytics, HIPAA-compliant data storage",
    color: "bg-blue-400",
    rotate: "",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <ReactLenis root>
      <main className="bg-slate-950">
        <div className="wrapper">
          <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Our Healthcare BPO Services
            </h1>
          </section>
        </div>
        <section className="text-white w-full bg-slate-950">
          <div className="flex justify-center px-4 md:px-16">
            <div className="grid gap-2">
              {services.map((service) => (
                <figure key={service.title} className="sticky top-0 h-screen grid place-content-center">
                  <article className={`${service.color} h-80 w-[35rem] rounded-lg ${service.rotate} p-4 grid place-content-center gap-4`}>
                    <h2 className="text-3xl font-bold text-center">{service.title}</h2>
                    <p className="text-base md:text-lg text-center">{service.description}</p>
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