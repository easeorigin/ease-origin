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
    image: "images/cloud-infrastructure.png",
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
    image: "images/cybersecurity.png",
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
      "dod-oracle-cloud",
      "space-force-c2",
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
      "EaseOrigin architects and deploys production-grade AI/ML platforms with sophisticated model orchestration, knowledge retrieval pipelines, and multi-provider integration. We build systems that serve thousands of concurrent users with real-time inference and full cost/performance observability.",
    keyCapabilities: [
      "Multi-agent AI system architecture",
      "Knowledge retrieval pipeline design (RAG)",
      "Multi-provider AI integration with failover",
      "Real-time inference with intelligent caching",
      "Model performance and cost observability",
      "Custom MCP server development",
      "Conversational and analytical AI applications",
      "AI governance and responsible deployment",
    ],
    technologies: [
      "LangChain",
      "LangGraph",
      "AWS Bedrock",
      "OpenAI",
      "MCP",
      "FastAPI",
      "Python",
      "MongoDB",
      "Vector Databases",
    ],
    relatedCaseStudySlugs: ["enterprise-ai-platform"],
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
    relatedCaseStudySlugs: ["data-platform-consolidation"],
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
      "gsa-federal-modernization",
    ],
    accentColor: "#B45309",
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
      "EaseOrigin delivers disciplined program management for federal IT initiatives, bringing structure, transparency, and accountability from initiation through closeout. Our PM practitioners stand up PMOs, implement earned value management systems, develop integrated master schedules, and provide the governance frameworks that keep programs on track. We specialize in CPIC/TBM alignment, OMB Exhibit 300/53 reporting, and audit readiness for GAO and Inspector General reviews.",
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
      "EaseOrigin provides Release Train Engineering as a service, launching and sustaining Agile Release Trains across federal and enterprise programs. Our RTE practitioners facilitate PI Planning on 8-12 week cadences, run Scrum of Scrums and ART Sync ceremonies, track flow metrics, and coordinate multi-ART and Solution Train delivery. We integrate SAFe practices with the realities of federal acquisition, cATO processes, and multi-contractor environments, using TechFAR-aligned Lean-Agile contract strategies.",
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
      "DoD Software Acquisition Pathway",
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
