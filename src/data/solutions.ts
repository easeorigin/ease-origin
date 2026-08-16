export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  image: string;
  imageAlt: string;
  overview: string;
  keyCapabilities: string[];
  technologies: string[];
  complianceFrameworks?: string[];
  relatedCaseStudySlugs: string[];
  accentColor: string;
}

export const solutions: Solution[] = [
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortDescription:
      "Enterprise cloud architecture across AWS, Azure, GCP, and Oracle Cloud",
    heroDescription:
      "Scalable, secure cloud infrastructure designed for mission-critical government and enterprise workloads.",
    icon: "Server",
    image: "images/cloud-infrastructure.jpg",
    imageAlt: "Cloud infrastructure data center",
    overview:
      "EaseOrigin delivers enterprise cloud architecture and infrastructure services spanning migration strategy, multi-account governance, containerization, and full-scale automation. We help organizations move from legacy environments to modern, well-governed cloud platforms across AWS, Azure, GCP, and Oracle Cloud.",
    keyCapabilities: [
      "Multi-account cloud architecture and governance",
      "Cloud migration strategy and execution",
      "Container orchestration (ECS, EKS, Kubernetes)",
      "Infrastructure as Code (Terraform, Terragrunt, OpenTofu)",
      "Cost optimization and resource right-sizing",
      "Multi-cloud strategy and workload distribution",
      "CDN optimization and global performance",
      "Disaster recovery and high availability design",
    ],
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Oracle Cloud",
      "Terraform",
      "Terragrunt",
      "Docker",
      "Kubernetes",
      "ECS Fargate",
      "CloudFront",
    ],
    complianceFrameworks: ["FedRAMP", "IL5", "DISA STIGs", "NIST 800-53"],
    relatedCaseStudySlugs: [
      "cloud-modernization",
      "dod-oracle-cloud",
      "multi-cloud-infrastructure",
      "cloud-cost-optimization",
    ],
    accentColor: "#1E3A5F",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    shortDescription:
      "Protect critical systems with compliance frameworks and zero-trust architectures",
    heroDescription:
      "Comprehensive cybersecurity services that protect mission-critical systems while maintaining regulatory compliance.",
    icon: "Shield",
    image: "images/cybersecurity.jpg",
    imageAlt: "Cybersecurity operations center",
    overview:
      "EaseOrigin provides end-to-end cybersecurity services including compliance framework implementation, zero-trust architecture design, security automation, and continuous monitoring. We specialize in federal compliance requirements including NIST RMF, FISMA, FedRAMP, and HIPAA.",
    keyCapabilities: [
      "NIST RMF and FISMA compliance implementation",
      "FedRAMP authorization support",
      "Zero-trust architecture design",
      "Security scanning and vulnerability management",
      "HIPAA compliance for healthcare systems",
      "DISA STIG compliance and automation",
      "Security event monitoring and incident response",
      "Identity and access management",
    ],
    technologies: [
      "Snyk",
      "SonarCloud",
      "Vanta",
      "Splunk",
      "Fortify",
      "DISA STIGs",
      "AWS Security Hub",
      "Azure Sentinel",
    ],
    complianceFrameworks: [
      "NIST 800-53",
      "FISMA",
      "FedRAMP",
      "HIPAA",
      "HITECH",
      "RMF",
      "CMMC",
    ],
    relatedCaseStudySlugs: [
      "hipaa-compliant-infrastructure",
      "zero-trust-security-architecture",
      "enterprise-security-operations-center",
      "dod-oracle-cloud",
      "enterprise-iam-modernization",
    ],
    accentColor: "#B45309",
  },
  {
    slug: "devops-platform",
    title: "DevOps & Platform Engineering",
    shortDescription:
      "Modern CI/CD, GitOps, and platform engineering at enterprise scale",
    heroDescription:
      "Accelerate software delivery with standardized pipelines, automated security scanning, and GitOps-driven deployments.",
    icon: "GitBranch",
    image: "images/devops-pipeline.jpg",
    imageAlt: "DevOps platform engineering dashboard",
    overview:
      "EaseOrigin designs and implements unified CI/CD pipeline architectures, DevSecOps practices, and platform engineering solutions. We help organizations standardize build and deployment processes across teams with automated security scanning at every stage.",
    keyCapabilities: [
      "CI/CD pipeline design and standardization",
      "DevSecOps pipeline integration",
      "GitOps-based deployment workflows",
      "Container orchestration and Kubernetes management",
      "Infrastructure as Code automation",
      "Progressive rollout and canary deployments",
      "Build health and deployment observability",
      "Multi-environment provisioning",
    ],
    technologies: [
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "ArgoCD",
      "Kubernetes",
      "Helm",
      "Docker",
      "Terraform",
      "SonarCloud",
      "Snyk",
    ],
    relatedCaseStudySlugs: [
      "devops-pipeline-transformation",
      "space-force-c2",
      "cloud-modernization",
    ],
    accentColor: "#7C3AED",
  },
  {
    slug: "ai-ml",
    title: "AI/ML & Intelligent Automation",
    shortDescription:
      "Production AI platforms with multi-model orchestration and knowledge retrieval",
    heroDescription:
      "Enterprise AI platforms built for scale, with intelligent orchestration, real-time inference, and comprehensive observability.",
    icon: "BrainCircuit",
    image: "images/ai-ml-platform.jpg",
    imageAlt: "AI and machine learning infrastructure",
    overview:
      "EaseOrigin architects and deploys production language model platforms with model orchestration, knowledge retrieval pipelines, and multi-provider integration. The part most teams underestimate is everything around the model: request routing, caching, rate limiting, streaming, and the observability that tells you what a feature actually costs per user. We build that layer, and we build it on the same landing zones and pipelines we use for everything else.",
    keyCapabilities: [
      "Multi-agent orchestration with LangChain and LangGraph",
      "Retrieval augmented generation pipelines with many-source connectors",
      "Multi-provider model integration with failover across OpenAI and AWS Bedrock",
      "Custom Model Context Protocol servers with tool calling and streaming",
      "Real-time inference with intelligent caching and rate limiting",
      "Model performance, cost, and quality observability",
      "FastAPI services for language model workflow orchestration",
      "Vector search and local retrieval for air-gapped or latency-sensitive use",
    ],
    technologies: [
      "LangChain",
      "LangGraph",
      "AWS Bedrock",
      "OpenAI",
      "MCP",
      "FastMCP",
      "FastAPI",
      "Langfuse",
      "FAISS",
      "Vector Databases",
      "Python",
    ],
    relatedCaseStudySlugs: ["enterprise-ai-platform", "ai-document-processing-platform", "intelligent-automation-platform"],
    accentColor: "#065F46",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortDescription:
      "Unified data platforms with automated pipelines and self-service analytics",
    heroDescription:
      "Transform fragmented data landscapes into governed, unified platforms that empower teams with self-service insights.",
    icon: "BarChart3",
    image: "images/data-dashboard.jpg",
    imageAlt: "Data analytics dashboards and charts",
    overview:
      "EaseOrigin leads data platform consolidation and modernization engagements, bringing together data from multiple systems into governed, well-documented platforms with automated pipelines and self-service analytics capabilities.",
    keyCapabilities: [
      "Data platform architecture and consolidation",
      "Automated ETL/ELT pipeline design",
      "Data quality validation and governance",
      "Self-service analytics and dashboarding",
      "Data lineage tracking and cataloging",
      "Real-time data streaming and processing",
      "Business intelligence and reporting",
      "Data migration and system integration",
    ],
    technologies: [
      "Apache Airflow",
      "dbt",
      "Tableau",
      "Power BI",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Snowflake",
    ],
    relatedCaseStudySlugs: ["data-platform-consolidation", "realtime-operational-analytics", "retail-analytics-platform"],
    accentColor: "#059669",
  },
  {
    slug: "saas-solutions",
    title: "SaaS Solutions",
    shortDescription:
      "Enterprise ITSM, workflow automation, and platform integration",
    heroDescription:
      "Modern service management platforms with intelligent automation, self-service portals, and seamless system integration.",
    icon: "Layers",
    image: "images/saas-solutions.png",
    imageAlt: "Enterprise SaaS platform implementation",
    overview:
      "EaseOrigin implements and modernizes enterprise SaaS platforms including ITSM, CRM, and workflow automation tools. We specialize in replacing legacy ticketing systems with modern platforms featuring intelligent routing, automated escalation, and self-service capabilities.",
    keyCapabilities: [
      "ITSM platform implementation and migration",
      "Workflow automation and intelligent routing",
      "Self-service portal development",
      "System integration (identity, assets, communications)",
      "Automated compliance reporting",
      "CRM configuration and customization",
      "Knowledge base and documentation platforms",
      "User adoption and change management",
    ],
    technologies: [
      "ServiceNow",
      "Salesforce",
      "Jira",
      "Confluence",
      "Power BI",
      "REST APIs",
      "SSO",
      "Power Automate",
    ],
    complianceFrameworks: ["FISMA", "FedRAMP"],
    relatedCaseStudySlugs: [
      "government-saas-modernization",
      "healthcare-system-integration",
      "gsa-federal-modernization",
    ],
    accentColor: "#B45309",
  },
  {
    slug: "forward-deployment",
    title: "Forward Deployment & Implementation",
    shortDescription:
      "Discovery through production rollout, working inside the customer's own environment",
    heroDescription:
      "We embed with your teams to turn an ambiguous requirement into a deployed, documented, supportable system.",
    icon: "Compass",
    image: "images/about-team.jpg",
    imageAlt: "Technical discovery and implementation planning session",
    overview:
      "Software that works in a demo and software that works in a customer's environment are different problems. Forward deployment is the second one. We run technical discovery, assess the target environment, translate what stakeholders actually need into an architecture, then plan and execute the rollout and hand it over with runbooks the operating team can use. The engagement ends when your team can run it without us, not when the code ships.",
    keyCapabilities: [
      "Technical discovery and customer environment assessment",
      "Requirements translation into architecture and implementation plans",
      "Deployment planning and stakeholder alignment",
      "Production rollout with staged cutover",
      "Implementation runbooks and environment checklists",
      "Adoption support and troubleshooting",
      "Operational handoff to the customer's team",
      "Post-deployment optimization",
    ],
    technologies: [
      "Terraform",
      "Helm",
      "Kubernetes",
      "Ansible",
      "Python",
      "Playwright",
    ],
    relatedCaseStudySlugs: [
      "enterprise-ai-platform",
      "healthcare-system-integration",
      "cloud-modernization",
    ],
    accentColor: "#0369A1",
  },
  {
    slug: "enterprise-packaging",
    title: "Enterprise Packaging & Delivery",
    shortDescription:
      "Air-gapped installs, hardened images, and license-aware customer builds",
    heroDescription:
      "Package software so it installs cleanly in environments with no internet, strict image policy, and an auditor watching.",
    icon: "Package",
    image: "images/server-room.jpg",
    imageAlt: "Secure infrastructure and packaging environment",
    overview:
      "Shipping into a classified or air-gapped environment is its own discipline. There is no package registry to pull from, the base images must come from an approved source, and every upgrade needs a rollback that works offline. We build install artifacts that survive those constraints, using hardened base images, versioned charts published as registry artifacts, and upgrade paths tested against the customer's actual starting version.",
    keyCapabilities: [
      "Air-gapped deployment patterns and offline install bundles",
      "Iron Bank hardened base images and DoD supply-chain packaging",
      "Versioned Helm charts published as registry artifacts",
      "Customer install workflows and environment prerequisites",
      "Upgrade and rollback planning tested against real starting versions",
      "License and entitlement-aware packaging",
      "Image promotion and digest pinning across environments",
      "Software bill of materials and vulnerability burndown",
    ],
    technologies: [
      "Replicated",
      "Helm",
      "Kustomize",
      "Podman",
      "Iron Bank",
      "Renovate",
      "Trivy",
      "Harbor",
    ],
    complianceFrameworks: ["DISA STIGs", "IL4 / IL5 / IL6", "C2Ops", "RMF"],
    relatedCaseStudySlugs: ["dod-oracle-cloud", "space-force-c2"],
    accentColor: "#475569",
  },
  {
    slug: "program-management",
    title: "Program Management",
    shortDescription:
      "Federal PMO governance, earned value management, and integrated schedule delivery",
    heroDescription:
      "End-to-end program management for federal IT initiatives, from PMO standup to EVM compliance and OMB reporting.",
    icon: "ClipboardList",
    image: "images/program-management.jpg",
    imageAlt: "Program management governance",
    overview:
      "EaseOrigin delivers program management for federal IT initiatives, from initiation through closeout. We stand up PMOs, implement earned value management, develop integrated master schedules, and put in place the governance that keeps a program legible to the people funding it. That includes CPIC and TBM alignment, OMB Exhibit 300 and 53 reporting, and audit readiness for GAO and Inspector General reviews.",
    keyCapabilities: [
      "PMO standup and governance frameworks",
      "Earned Value Management (EVM) implementation and reporting",
      "Integrated Master Schedule (IMS) development",
      "Risk management and mitigation planning",
      "Cost performance analysis and forecasting",
      "OMB reporting and CPIC compliance",
      "Acquisition strategy and contract support",
      "GAO/IG audit readiness",
    ],
    technologies: [
      "Microsoft Project",
      "Oracle Primavera P6",
      "Deltek Cobra",
      "Jira",
      "Power BI",
      "ServiceNow ITBM",
      "Confluence",
    ],
    complianceFrameworks: ["ANSI/EIA-748 (EVM)", "OMB A-11", "FAR/DFARS", "PMIAA"],
    relatedCaseStudySlugs: [
      "navy-program-governance",
      "dod-oracle-cloud",
      "gsa-federal-modernization",
      "navy-logistics-support",
    ],
    accentColor: "#9333EA",
  },
  {
    slug: "agile-delivery",
    title: "Agile Delivery & Release Train Management",
    shortDescription:
      "SAFe Release Train Engineering, PI Planning, and Agile transformation for federal programs",
    heroDescription:
      "Accelerate federal program delivery through SAFe Release Train Engineering, PI Planning facilitation, and Lean-Agile transformation.",
    icon: "Workflow",
    image: "images/agile-delivery.jpg",
    imageAlt: "Agile delivery and release train management",
    overview:
      "EaseOrigin provides Release Train Engineering as a service, launching and sustaining Agile Release Trains across federal and enterprise programs. We facilitate PI Planning on 8 to 12 week cadences, run Scrum of Scrums and ART Sync, track flow metrics, and coordinate multi-ART and Solution Train delivery. The useful part is fitting SAFe to how federal acquisition actually works, including cATO processes, multi-contractor environments, and TechFAR-aligned contract strategy.",
    keyCapabilities: [
      "Release Train Engineering (RTE-as-a-Service)",
      "PI Planning facilitation and coordination",
      "Agile Release Train launch and design",
      "Scrum of Scrums and ART Sync facilitation",
      "Agile metrics and executive dashboards",
      "Value stream mapping and flow optimization",
      "SAFe transformation roadmaps",
      "Lean-Agile contract strategy (TechFAR-aligned)",
    ],
    technologies: [
      "Jira Align",
      "Jira",
      "Rally",
      "Azure DevOps",
      "Miro",
      "Confluence",
      "GitLab",
      "Power BI",
    ],
    complianceFrameworks: [
      "DoW Software Acquisition Pathway",
      "TechFAR",
      "cATO",
    ],
    relatedCaseStudySlugs: [
      "space-force-agile-delivery",
      "space-force-c2",
      "devops-pipeline-transformation",
    ],
    accentColor: "#DC2626",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
