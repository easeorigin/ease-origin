"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Database, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function Solutions() {
  const solutions = [
    {
      icon: Cloud,
      title: "SaaS Solutions",
      description:
        "Expertise in implementing and managing enterprise platforms such as Salesforce, ServiceNow, SAP, and Microsoft Dynamics.",
    },
    {
      icon: Server,
      title: "Cloud & Infrastructure",
      description:
        "Modern cloud architecture, seamless migrations, infrastructure modernization, and cloud-native application development.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Advanced threat intelligence, compliance (NIST/FISMA), risk management, and securing sensitive federal systems.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description:
        "Data science, predictive business intelligence, and visualization solutions for mission-critical decision making.",
    },
  ];

  return (
    <Section id="solutions" className="relative overflow-hidden">
      {/* Government building photo — very subtle */}
      <div className="absolute inset-0 opacity-[0.9] pointer-events-none">
        <Image
          src={"/images/federal-building-columns.png"}
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </div>
      {/* Gradient wash for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-white/97 via-slate-50/95 to-blue-50/90 pointer-events-none" />
      {/* Soft corner glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-bl from-blue-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-linear-to-tr from-indigo-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-tg-gold font-semibold tracking-wider uppercase text-sm mb-3">
          Capabilities
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-tg-navy mb-6">
          Comprehensive Federal IT Solutions
        </h3>
        <p className="text-lg text-gray-600">
          We provide specialized technical expertise to solve complex challenges
          and modernize infrastructure across the federal government.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-8 md:p-10 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-transparent transition-all duration-300"
          >
            {/* Hover Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-tg-navy to-tg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300">
                <solution.icon className="h-8 w-8 text-tg-blue group-hover:text-tg-gold transition-colors duration-300" />
              </div>

              <h4 className="text-2xl font-bold text-tg-navy mb-4 group-hover:text-white transition-colors duration-300">
                {solution.title}
              </h4>

              <p className="text-gray-600 mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {solution.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-sm font-semibold text-tg-blue group-hover:text-tg-gold transition-colors duration-300"
              >
                Learn more{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
