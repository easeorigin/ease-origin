"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Database, ArrowRight, GitBranch, BrainCircuit, ClipboardList, Workflow } from "lucide-react";
import { Section } from "@/components/ui/section";
import Image from "next/image";

export function Solutions() {
  const technologySolutions = [
    {
      slug: "cloud-infrastructure",
      icon: Server,
      title: "Cloud & Infrastructure",
      description:
        "Enterprise cloud architecture across AWS, Azure, GCP, and Oracle Cloud, spanning migration strategy, containerization, and full-scale infrastructure automation.",
    },
    {
      slug: "devops-platform",
      icon: GitBranch,
      title: "DevOps & Platform Engineering",
      description:
        "Accelerate delivery with modern CI/CD powered by Jenkins, GitLab CI, and GitHub Actions, plus Kubernetes orchestration, infrastructure as code, and end-to-end observability.",
    },
    {
      slug: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect critical systems with compliance frameworks (NIST, FISMA, FedRAMP, HIPAA), zero-trust architectures, and integrated tooling including Snyk, SonarCloud, and Vanta.",
    },
    {
      slug: "ai-ml",
      icon: BrainCircuit,
      title: "AI/ML Infrastructure",
      description:
        "Production AI platforms, model orchestration, knowledge retrieval pipelines, intelligent automation, and scalable inference systems.",
    },
    {
      slug: "data-analytics",
      icon: Database,
      title: "Data & Analytics",
      description:
        "Data engineering, business intelligence, visualization, and governance solutions for mission-critical decision making.",
    },
    {
      slug: "saas-solutions",
      icon: Cloud,
      title: "SaaS Solutions",
      description:
        "Implementing and managing enterprise platforms such as Salesforce, ServiceNow, SAP, and Microsoft Dynamics for government and commercial clients.",
    },
  ];

  const advisorySolutions = [
    {
      slug: "program-management",
      icon: ClipboardList,
      title: "Program Management",
      description:
        "Federal PMO governance, earned value management, integrated master scheduling, and OMB reporting for mission-critical IT programs.",
    },
    {
      slug: "agile-delivery",
      icon: Workflow,
      title: "Agile Delivery & RTM",
      description:
        "SAFe Release Train Engineering, PI Planning facilitation, and Lean-Agile transformation for federal programs and multi-contractor environments.",
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
      <div className="absolute inset-0 bg-linear-to-b from-white/90 via-slate-50/88 to-blue-50/82 dark:from-gray-900/90 dark:via-gray-900/88 dark:to-gray-800/82 pointer-events-none" />
      {/* Soft corner glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-linear-to-tr from-indigo-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-100/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-eo-gold font-semibold tracking-wider uppercase text-sm mb-3">
          Capabilities
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          Comprehensive Solutions
        </h3>
        <p className="text-lg text-text-tertiary">
          We provide specialized technical expertise and program delivery to solve complex challenges
          and modernize infrastructure across government and enterprise environments.
        </p>
      </div>

      {/* Technology Solutions */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologySolutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-8 md:p-10 bg-surface border border-border-default rounded-2xl overflow-hidden hover:border-transparent transition-all duration-300"
          >
            {/* Hover Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-eo-navy to-eo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-surface-muted border border-border-subtle flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300">
                <solution.icon className="h-8 w-8 text-eo-blue group-hover:text-eo-gold transition-colors duration-300" />
              </div>

              <h4 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
                {solution.title}
              </h4>

              <p className="text-text-tertiary mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {solution.description}
              </p>

              <a
                href={`/solutions/${solution.slug}`}
                className="inline-flex items-center text-sm font-semibold text-eo-blue group-hover:text-eo-gold transition-colors duration-300"
              >
                Learn more{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Program Delivery & Advisory */}
      <div className="relative z-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Program Delivery</h3>
          <h4 className="text-2xl md:text-3xl font-bold text-text-primary">Program Delivery & Advisory</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advisorySolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 bg-surface border border-border-default rounded-2xl overflow-hidden hover:border-transparent transition-all duration-300"
            >
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-eo-navy to-eo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-purple-50 dark:bg-purple-950 border border-purple-100 dark:border-purple-900 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300">
                  <solution.icon className="h-8 w-8 text-purple-600 group-hover:text-eo-gold transition-colors duration-300" />
                </div>

                <h4 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
                  {solution.title}
                </h4>

                <p className="text-text-tertiary mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {solution.description}
                </p>

                <a
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-eo-blue group-hover:text-eo-gold transition-colors duration-300"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
