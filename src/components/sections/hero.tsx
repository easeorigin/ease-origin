"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-eo-navy text-white min-h-[90vh] flex items-center">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={"/images/capitol-building.png"}
          alt=""
          fill
          className="w-full h-full object-cover opacity-[0.4]"
        />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-200 h-200 bg-eo-blue rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-eo-gold rounded-full blur-[150px] opacity-10 -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content - Staggered Entrance */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="max-w-2xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-eo-gold animate-pulse"></span>
                <span>Trusted Technology Partner</span>
              </div>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Enterprise IT Expertise That{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                Delivers Results.
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl"
            >
              EaseOrigin provides specialized technology consultants and
              enterprise IT solutions to U.S. government agencies and prime
              contractors nationwide.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-eo-gold text-eo-navy hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/careers"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                View Careers
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Abstract Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative h-125"
          >
            {/* CSS-based Tech Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-eo-navy border border-eo-gold/50 rounded-full flex items-center justify-center z-20 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                  <div className="w-24 h-24 bg-linear-to-br from-eo-blue to-eo-navy rounded-full border border-white/10 flex items-center justify-center">
                    <Image 
                      src={"/logo/main-logo-2.png"}
                      alt="EaseOrigin Logo"
                      width={80}
                      height={80}
                      
                      />
                  </div>
                </div>

                {/* Orbiting Elements (CSS simulated) */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]"
                  viewBox="0 0 400 400"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                  <circle
                    cx="200"
                    cy="40"
                    r="6"
                    fill="#f05123"
                    className="animate-pulse"
                  />
                  <circle cx="61" cy="280" r="4" fill="#ffffff" />
                  <circle cx="339" cy="280" r="8" fill="#1E3A5F" />
                </svg>

                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite_reverse]"
                  viewBox="0 0 400 400"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="110"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <circle cx="90" cy="200" r="5" fill="#f05123" />
                  <circle cx="280" cy="120" r="4" fill="#ffffff" />
                </svg>

                {/* Connection lines */}
                <div className="absolute inset-0 z-10 opacity-30">
                  <svg className="w-full h-full">
                    <path
                      d="M 200 200 L 350 50"
                      stroke="#1E3A5F"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 200 200 L 50 150"
                      stroke="#1E3A5F"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 200 200 L 150 350"
                      stroke="#1E3A5F"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 200 200 L 320 300"
                      stroke="#1E3A5F"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Floating data cards */}
                <div className="absolute top-[10%] right-[10%] bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg z-30 animate-[bounce_4s_ease-in-out_infinite]">
                  <div className="h-1.5 w-12 bg-eo-gold/70 rounded mb-2"></div>
                  <div className="h-1.5 w-8 bg-white/30 rounded"></div>
                </div>

                <div className="absolute bottom-[20%] left-[5%] bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg z-30 animate-[bounce_5s_ease-in-out_infinite_reverse]">
                  <div className="flex gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <div className="h-2 w-16 bg-white/30 rounded"></div>
                  </div>
                  <div className="h-1.5 w-20 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
