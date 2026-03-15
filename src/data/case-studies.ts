export type Sector = "Federal Civilian" | "Defense" | "Healthcare" | "Commercial" | "Enterprise";

export const SECTORS: Sector[] = ["Federal Civilian", "Defense", "Healthcare", "Commercial", "Enterprise"];

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  accentColor: string;
  sector?: Sector;
  clientLabel?: string;
  metrics?: Metric[];
  duration?: string;
  easeOriginRole?: string;
  complianceFrameworks?: string[];
  contractVehicle?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization & Multi-Account Strategy",
    category: "Cloud Infrastructure",
    shortDescription:
      "Designed and delivered a scalable multi-account cloud architecture with fully containerized workloads and automated provisioning.",
    heroDescription:
      "Helping an enterprise organization transition from a monolithic cloud setup to a modern, multi-account architecture built for scale.",
    overview:
      "EaseOrigin partnered with a large technology organization to redesign their cloud infrastructure from the ground up. The engagement involved transitioning from a single-account environment to a properly segmented multi-account architecture, containerizing critical workloads, and implementing automated provisioning across development, staging, and production environments.",
    challenge:
      "The client had outgrown their original cloud setup. Services were tightly coupled within a single account, IAM policies lacked segmentation, and deployments relied on manual processes prone to error. Rising costs from over-provisioned resources and inconsistent governance across teams made scaling unsustainable.",
    solution:
      "EaseOrigin established a multi-account cloud architecture with segmented networking, identity guardrails, and consistent tagging standards. We built a comprehensive library of reusable infrastructure-as-code modules with versioning and drift detection. Workloads were containerized and deployed with auto-scaling, load balancing, and CDN distribution for global performance optimization.",
    results: [
      "Multi-account architecture with proper segmentation and governance",
      "Hundreds of containerized services running in production",
      "Comprehensive IaC module library with automated provisioning",
      "Sub-100ms global response times through CDN optimization",
      "High availability across multiple availability zones",
      "Eliminated manual deployment processes entirely",
    ],
    technologies: ["AWS", "ECS Fargate", "Terraform", "Terragrunt", "CloudFront", "Docker", "ArgoCD"],
    accentColor: "#1E3A5F",
    sector: "Enterprise",
    clientLabel: "Enterprise Technology Organization",
    metrics: [
      { value: "40%", label: "Cost Reduction" },
      { value: "<100ms", label: "Global Response Time" },
      { value: "200+", label: "Containers in Production" },
      { value: "0", label: "Manual Deploys" },
    ],
    duration: "8 months",
    easeOriginRole: "Cloud Architecture & DevOps Delivery",
    featured: true,
  },
  {
    slug: "hipaa-compliant-infrastructure",
    title: "HIPAA-Compliant Infrastructure for Healthcare",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "Delivered secure, HIPAA-compliant cloud infrastructure with production-grade container orchestration and centralized observability.",
    heroDescription:
      "Building cloud infrastructure that meets the stringent security and compliance demands of modern healthcare organizations.",
    overview:
      "EaseOrigin designed and implemented cloud infrastructure for a healthcare organization handling sensitive patient data. The project encompassed production container orchestration, security hardening, audit trail implementation, and a centralized monitoring stack, all while maintaining strict HIPAA compliance and enabling faster development cycles.",
    challenge:
      "The organization needed to modernize aging infrastructure without compromising regulatory compliance. Security controls were inconsistent, audit trails had gaps, and development teams struggled to move quickly under rigid governance requirements. Manual change management processes created bottlenecks and increased the risk of human error.",
    solution:
      "EaseOrigin deployed production container orchestration with declarative configuration management and Git-based change control. We worked closely with security and compliance teams to implement technical controls aligned with HIPAA requirements, including automated audit trails and change tracking. A centralized observability platform was established with metrics, logging, and alerting tuned for both operational and compliance needs.",
    results: [
      "Full HIPAA compliance achieved and sustained through audits",
      "Production container orchestration with declarative deployments",
      "Unified observability across the entire service footprint",
      "Audit preparation time reduced by over 70%",
      "Automated change management with complete traceability",
      "Clean compliance record across all subsequent reviews",
    ],
    technologies: ["AWS", "EKS", "Helm", "Kustomize", "Terraform", "Prometheus", "ELK Stack", "OpenTofu"],
    accentColor: "#B45309",
    sector: "Healthcare",
    clientLabel: "Regional Healthcare Provider",
    metrics: [
      { value: "70%", label: "Faster Audit Prep" },
      { value: "100%", label: "Compliance Score" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    duration: "6 months",
    easeOriginRole: "Security & Compliance Engineering",
    complianceFrameworks: ["HIPAA", "HITECH"],
    featured: true,
  },
  {
    slug: "enterprise-ai-platform",
    title: "Enterprise AI Platform at Scale",
    category: "AI/ML Infrastructure",
    shortDescription:
      "Built a production AI platform serving thousands of concurrent users with multi-model orchestration and real-time inference capabilities.",
    heroDescription:
      "Delivering an enterprise AI platform with intelligent orchestration, knowledge retrieval, and production-grade scalability.",
    overview:
      "EaseOrigin designed and deployed an enterprise AI platform for a technology organization requiring production-grade AI capabilities at significant scale. The platform features sophisticated model orchestration, knowledge retrieval pipelines connected to dozens of data sources, and multi-provider AI integration for conversational and analytical applications.",
    challenge:
      "The organization needed an AI platform that could reliably serve thousands of simultaneous users while maintaining response quality. Early prototypes failed to scale, lacked proper resource management, and provided no visibility into model performance or cost allocation across providers.",
    solution:
      "EaseOrigin architected a multi-agent AI system with intelligent orchestration, implementing custom servers with built-in caching, rate management, and streaming responses for real-time interaction. The platform integrates multiple AI providers with automatic failover, and includes a comprehensive observability layer for tracking model performance, usage costs, and end-user satisfaction.",
    results: [
      "Thousands of concurrent users served reliably in production",
      "Dozens of data sources integrated into knowledge retrieval pipelines",
      "Real-time AI inference with intelligent response caching",
      "Multi-provider integration with seamless failover",
      "Extensible agent architecture for rapid capability expansion",
      "Full observability dashboard for performance and cost tracking",
    ],
    technologies: ["LangChain", "LangGraph", "AWS Bedrock", "OpenAI", "MCP", "FastAPI", "Python", "MongoDB"],
    accentColor: "#065F46",
    sector: "Enterprise",
    clientLabel: "Enterprise Technology Organization",
    metrics: [
      { value: "3,000+", label: "Concurrent Users" },
      { value: "40+", label: "Data Sources Integrated" },
      { value: "<2s", label: "Avg Response Time" },
    ],
    duration: "10 months",
    easeOriginRole: "AI/ML Platform Architecture & Delivery",
  },
  {
    slug: "devops-pipeline-transformation",
    title: "DevOps Pipeline Transformation",
    category: "DevOps & Platform Engineering",
    shortDescription:
      "Unified fragmented CI/CD processes into a standardized pipeline architecture with automated security scanning and GitOps-driven delivery.",
    heroDescription:
      "Transforming siloed build processes into a cohesive, automated delivery platform that accelerates releases while strengthening security.",
    overview:
      "EaseOrigin designed and implemented a unified CI/CD pipeline architecture for an enterprise organization struggling with fragmented build and deployment processes. The engagement consolidated disparate tooling into a standardized platform supporting multiple programming languages and deployment targets with consistent security scanning at every stage.",
    challenge:
      "The organization maintained separate, ad-hoc build pipelines across dozens of teams. Each team used different tools, branching strategies, and deployment approaches, resulting in inconsistent quality, unpredictable release cycles, and security vulnerabilities slipping through the cracks. There was no centralized visibility into build health or deployment status.",
    solution:
      "EaseOrigin introduced a templated pipeline engine that standardized the build, test, scan, and deploy lifecycle across all teams. We integrated automated security scanning into every pipeline stage, implemented GitOps-based deployment workflows with progressive rollouts, and established a centralized dashboard for build health, deployment tracking, and compliance reporting.",
    results: [
      "Standardized build process across all engineering teams",
      "Automated security scanning integrated into every pipeline",
      "GitOps-driven deployments with progressive rollouts and drift detection",
      "Centralized build and deployment visibility across the organization",
      "Release cadence improved from monthly to weekly cycles",
      "Reduced deployment-related incidents through automated rollback capability",
    ],
    technologies: ["Jenkins", "GitLab CI", "ArgoCD", "Docker", "Helm", "SonarCloud", "Snyk", "Terraform"],
    accentColor: "#7C3AED",
    sector: "Enterprise",
    clientLabel: "Enterprise Technology Organization",
    metrics: [
      { value: "4x", label: "Release Frequency" },
      { value: "90%", label: "Fewer Incidents" },
      { value: "30+", label: "Teams Onboarded" },
    ],
    duration: "5 months",
    easeOriginRole: "DevOps & Platform Engineering",
  },
  {
    slug: "multi-cloud-infrastructure",
    title: "Multi-Cloud Infrastructure Strategy",
    category: "Cloud Infrastructure",
    shortDescription:
      "Designed and delivered a multi-cloud architecture spanning AWS, Azure, and Oracle Cloud with unified governance and infrastructure automation.",
    heroDescription:
      "Enabling organizational resilience and flexibility through a well-governed multi-cloud infrastructure strategy.",
    overview:
      "EaseOrigin partnered with an enterprise client to design and implement a multi-cloud infrastructure strategy that distributed workloads across AWS, Azure, and Oracle Cloud. The engagement established unified infrastructure-as-code practices, consistent security policies, and centralized observability across all cloud environments.",
    challenge:
      "The organization was heavily concentrated in a single cloud provider, creating vendor lock-in risk and limiting their ability to leverage best-of-breed services. Different teams had started experimenting with alternative clouds independently, resulting in inconsistent configurations, ungoverned costs, and security policy gaps across environments.",
    solution:
      "EaseOrigin designed a multi-cloud governance framework with unified IaC templates, consistent networking patterns, and centralized identity management. We established cloud-agnostic deployment pipelines, implemented cost allocation and optimization across providers, and built a single-pane observability platform covering all environments.",
    results: [
      "Workloads distributed across three major cloud providers",
      "Unified IaC templates ensuring consistent configuration",
      "Centralized identity and access management across all clouds",
      "Cost optimization reducing overall cloud spend",
      "Single observability platform for cross-cloud monitoring",
      "Reduced vendor lock-in with portable application architectures",
    ],
    technologies: ["AWS", "Azure", "Oracle Cloud", "Terraform", "Terragrunt", "Kubernetes", "Datadog", "Puppet"],
    accentColor: "#1D4ED8",
    sector: "Enterprise",
    clientLabel: "Enterprise Technology Organization",
    metrics: [
      { value: "3", label: "Cloud Providers" },
      { value: "30%", label: "Cost Optimization" },
      { value: "1", label: "Single-Pane Observability" },
    ],
    duration: "7 months",
    easeOriginRole: "Multi-Cloud Strategy & Architecture",
  },
  {
    slug: "data-platform-consolidation",
    title: "Enterprise Data Platform Consolidation",
    category: "Data & Analytics",
    shortDescription:
      "Consolidated fragmented data systems into a unified platform with automated pipelines, governance frameworks, and self-service analytics.",
    heroDescription:
      "Turning scattered data silos into a unified, governed data platform that empowers teams with self-service insights.",
    overview:
      "EaseOrigin led the consolidation of an organization's fragmented data landscape into a unified enterprise data platform. The engagement brought together data from multiple operational systems into a governed, well-documented data layer with automated pipelines and self-service analytics capabilities for business teams.",
    challenge:
      "Critical business data was scattered across disconnected databases, spreadsheets, and application silos. Teams spent excessive time manually extracting and reconciling data, leading to inconsistent reporting and delayed decision-making. There was no data governance framework, and data quality issues undermined stakeholder confidence.",
    solution:
      "EaseOrigin architected a centralized data platform with automated ingestion pipelines, data quality validation, and comprehensive governance policies. We implemented a self-service analytics layer enabling business teams to build their own reports and dashboards, while maintaining data lineage tracking and access controls throughout.",
    results: [
      "Unified data platform replacing multiple disconnected systems",
      "Automated data pipelines with built-in quality validation",
      "Self-service analytics reducing dependence on engineering teams",
      "Comprehensive data governance with lineage tracking",
      "Reporting turnaround reduced from weeks to hours",
      "Improved data quality scores across all critical datasets",
    ],
    technologies: ["AWS", "MongoDB", "Apache Airflow", "dbt", "Tableau", "Python", "PostgreSQL", "Nexus"],
    accentColor: "#059669",
    sector: "Commercial",
    clientLabel: "Commercial Technology Organization",
    metrics: [
      { value: "85%", label: "Faster Reporting" },
      { value: "12", label: "Data Sources Consolidated" },
      { value: "40%", label: "Better Data Quality" },
    ],
    duration: "6 months",
    easeOriginRole: "Data Engineering & Analytics",
  },
  {
    slug: "government-saas-modernization",
    title: "Government SaaS Modernization",
    category: "SaaS Solutions",
    shortDescription:
      "Modernized legacy ticketing and workflow systems with an enterprise ITSM platform featuring automated workflows and self-service capabilities.",
    heroDescription:
      "Replacing outdated service management systems with a modern, integrated platform that accelerates resolution and improves user experience.",
    overview:
      "EaseOrigin led the modernization of a government organization's legacy service management systems, replacing outdated ticketing tools with a modern enterprise ITSM platform. The engagement included workflow automation, integration with existing systems, self-service portal development, and comprehensive reporting to improve both operational efficiency and end-user satisfaction.",
    challenge:
      "The organization relied on aging ticketing systems that couldn't keep pace with growing service demands. Manual routing, lack of automation, and disconnected tools resulted in slow ticket resolution, frustrated users, and limited visibility into service performance. Compliance reporting required extensive manual effort.",
    solution:
      "EaseOrigin implemented a modern ITSM platform with intelligent ticket routing, automated escalation workflows, and a self-service portal for common requests. We integrated the platform with existing identity management, asset tracking, and communication tools, and built automated compliance dashboards that eliminated manual reporting.",
    results: [
      "Modern ITSM platform replacing legacy ticketing systems",
      "Automated ticket routing and escalation workflows",
      "Self-service portal reducing ticket volume for common requests",
      "Integration with identity, asset, and communication systems",
      "Automated compliance reporting eliminating manual effort",
      "Measurable improvement in ticket resolution time and user satisfaction",
    ],
    technologies: ["ServiceNow", "Salesforce", "Jira", "Confluence", "REST APIs", "SSO", "Power BI"],
    accentColor: "#B45309",
    sector: "Federal Civilian",
    clientLabel: "Federal Civilian Agency",
    metrics: [
      { value: "60%", label: "Faster Ticket Resolution" },
      { value: "95%", label: "User Adoption Rate" },
      { value: "3", label: "Legacy Systems Retired" },
    ],
    duration: "9 months",
    easeOriginRole: "ITSM Modernization & Delivery",
    complianceFrameworks: ["FISMA", "FedRAMP"],
    featured: true,
  },
  {
    slug: "dod-oracle-cloud",
    title: "DoD Cloud Infrastructure on Oracle Cloud",
    category: "Cloud Infrastructure",
    shortDescription:
      "Deployed and managed secure Oracle Cloud Infrastructure for Department of Defense workloads with IL5 compliance and automated provisioning.",
    heroDescription:
      "Delivering secure, mission-critical cloud infrastructure for DoD programs on Oracle Cloud with Impact Level 5 compliance.",
    overview:
      "EaseOrigin supported the deployment and ongoing management of Oracle Cloud Infrastructure (OCI) environments for U.S. Air Force and Department of Defense programs. Working under the SAIC Cloud One contract vehicle, the engagement required standing up secure cloud landing zones, implementing DoD-compliant identity and access controls, and automating infrastructure provisioning for mission-critical workloads operating at Impact Level 5.",
    challenge:
      "DoD programs required cloud environments that met stringent Impact Level 5 security requirements while enabling rapid provisioning for development and operational teams. Existing manual provisioning processes introduced delays and configuration drift, and the multi-tenant environment demanded strict network segmentation and audit controls to meet DISA STIG compliance.",
    solution:
      "EaseOrigin designed and implemented automated OCI landing zones with compartment-based isolation, identity federation, and network segmentation aligned with DoD reference architectures. We built Terraform-based provisioning pipelines with built-in compliance checks, established centralized logging and monitoring for security event correlation, and implemented automated STIG compliance scanning across all deployed resources.",
    results: [
      "Secure OCI landing zones deployed at Impact Level 5",
      "Automated infrastructure provisioning reducing deployment time",
      "Compartment-based tenant isolation with strict network controls",
      "Centralized security event monitoring and audit trail",
      "DISA STIG compliance maintained across all environments",
      "Repeatable provisioning patterns for rapid program onboarding",
    ],
    technologies: ["Oracle Cloud (OCI)", "Terraform", "Ansible", "DISA STIGs", "Splunk", "Docker", "Linux"],
    accentColor: "#1E3A5F",
    sector: "Defense",
    clientLabel: "U.S. Air Force / DoD (via Ikeda Innovations)",
    contractVehicle: "SAIC Cloud One",
    metrics: [
      { value: "IL5", label: "Security Compliance" },
      { value: "60%", label: "Faster Provisioning" },
      { value: "100%", label: "STIG Compliance" },
      { value: "24/7", label: "Security Monitoring" },
    ],
    duration: "18 months",
    easeOriginRole: "Cloud Infrastructure & Compliance Delivery",
    complianceFrameworks: ["DISA STIGs", "IL5", "RMF", "NIST 800-53"],
    featured: true,
  },
  {
    slug: "space-force-c2",
    title: "Space Command & Control Software Factory",
    category: "DevOps & Platform Engineering",
    shortDescription:
      "Supported Space Force command and control software delivery through DevSecOps pipelines, containerized deployments, and agile software factory practices.",
    heroDescription:
      "Enabling rapid, secure software delivery for U.S. Space Force command and control missions through modern DevSecOps practices.",
    overview:
      "EaseOrigin contributed to the U.S. Space Force Space Systems Command (SSC) software factory initiative, supporting the development and delivery of command and control applications. Under the Leidos Kobayashi Maru contract, the engagement focused on establishing DevSecOps pipelines, containerized deployment environments, and agile delivery processes for mission-critical space domain awareness applications.",
    challenge:
      "Space Force C2 programs required rapid software delivery cycles while maintaining the security rigor demanded by classified environments. Legacy waterfall processes couldn't keep pace with mission needs, and the lack of automated testing and deployment infrastructure meant releases were slow, error-prone, and difficult to validate against security baselines.",
    solution:
      "EaseOrigin helped establish a DevSecOps pipeline with automated build, test, and security scanning stages integrated into a continuous delivery workflow. We containerized applications for consistent deployment across development, staging, and operational environments, and implemented infrastructure-as-code patterns for repeatable environment provisioning. Agile ceremonies and delivery metrics were introduced to improve velocity and predictability.",
    results: [
      "DevSecOps pipeline delivering continuous integration and delivery",
      "Containerized C2 applications deployed across multiple environments",
      "Automated security scanning integrated into every build",
      "Infrastructure-as-code enabling repeatable environment provisioning",
      "Agile delivery processes improving release predictability",
      "Reduced time from code commit to operational deployment",
    ],
    technologies: ["Kubernetes", "Docker", "GitLab CI", "Helm", "Terraform", "SonarQube", "Fortify", "Python"],
    accentColor: "#1D4ED8",
    sector: "Defense",
    clientLabel: "U.S. Space Force (SSC)",
    contractVehicle: "Leidos Kobayashi Maru",
    metrics: [
      { value: "3x", label: "Faster Release Cycles" },
      { value: "100%", label: "Automated Security Scans" },
      { value: "50%", label: "Reduced Deploy Time" },
    ],
    duration: "12 months",
    easeOriginRole: "DevSecOps Pipeline & Delivery",
    complianceFrameworks: ["RMF", "NIST 800-53", "DISA STIGs"],
  },
  {
    slug: "navy-logistics-support",
    title: "Navy IT Logistics & Enterprise Architecture",
    category: "Cloud Infrastructure",
    shortDescription:
      "Provided enterprise architecture and IT logistics support for Naval Air Warfare Center operations, modernizing legacy systems and infrastructure.",
    heroDescription:
      "Supporting Navy aviation enterprise IT with modernized infrastructure, logistics automation, and architecture planning.",
    overview:
      "EaseOrigin delivered enterprise architecture and IT logistics support for the Naval Air Warfare Center Aircraft Division (NAWCAD). The engagement encompassed infrastructure modernization, IT asset lifecycle management, system integration planning, and technical documentation to support ongoing operations and future capability development across multiple Navy programs.",
    challenge:
      "NAWCAD operations relied on aging IT infrastructure with limited documentation and inconsistent asset tracking. Multiple programs shared resources without clear governance, leading to configuration conflicts, underutilized capacity, and difficulty planning future capability investments. Legacy systems lacked integration points for modern tooling and workflows.",
    solution:
      "EaseOrigin conducted enterprise architecture assessments and developed modernization roadmaps aligned with Navy IT standards. We implemented IT asset lifecycle management processes, established configuration baselines, and created integration architectures to connect legacy systems with modern platforms. Technical documentation was standardized across programs to improve knowledge transfer and operational continuity.",
    results: [
      "Enterprise architecture roadmap aligned with Navy IT standards",
      "IT asset lifecycle management reducing waste and improving tracking",
      "Configuration baselines established across multiple programs",
      "Integration architectures bridging legacy and modern systems",
      "Standardized technical documentation improving operational continuity",
      "Improved capacity planning and resource allocation across programs",
    ],
    technologies: ["VMware", "Windows Server", "Active Directory", "SCCM", "ServiceNow", "Visio", "SharePoint"],
    accentColor: "#1E3A5F",
    sector: "Defense",
    clientLabel: "U.S. Navy / NAWCAD (via Spalding/Saalex)",
    contractVehicle: "NAWCAD N0042118D0006",
    metrics: [
      { value: "5+", label: "Programs Supported" },
      { value: "35%", label: "Better Asset Utilization" },
      { value: "100%", label: "Documentation Coverage" },
    ],
    duration: "24 months",
    easeOriginRole: "Enterprise Architecture & IT Logistics",
    complianceFrameworks: ["RMF", "NIST 800-171"],
  },
  {
    slug: "gsa-federal-modernization",
    title: "Federal Agency Technology Modernization",
    category: "Cloud Infrastructure",
    shortDescription:
      "Led technology modernization initiatives for federal civilian agencies through cloud migration, process automation, and IT governance improvements.",
    heroDescription:
      "Driving federal agency modernization through strategic cloud adoption, automation, and governance frameworks.",
    overview:
      "EaseOrigin supported technology modernization engagements for federal civilian agencies, working through prime contractors TG Federal and Booz Allen Hamilton under GSA Schedule contract vehicles. The work spanned cloud migration planning, infrastructure automation, IT governance framework development, and organizational change management to help agencies adopt modern technology practices while maintaining compliance with federal mandates.",
    challenge:
      "Federal agencies faced mandates to modernize aging IT systems but lacked the internal expertise and capacity to execute complex migrations. Disconnected governance processes, limited cloud experience, and resistance to change across organizational units created barriers to adoption. Agencies needed to demonstrate compliance with OMB directives and federal security requirements throughout the modernization process.",
    solution:
      "EaseOrigin developed phased modernization roadmaps tailored to each agency's mission requirements and compliance obligations. We led cloud readiness assessments, established governance frameworks aligned with FISMA and FedRAMP requirements, and implemented automated provisioning patterns to accelerate migration timelines. Change management workshops and technical training were delivered to build internal capability and ensure sustainable operations post-migration.",
    results: [
      "Cloud migration roadmaps aligned with agency mission and OMB mandates",
      "Governance frameworks meeting FISMA and FedRAMP requirements",
      "Automated provisioning reducing migration timeline and manual effort",
      "Change management program increasing organizational readiness",
      "Technical training building sustainable internal cloud capability",
      "Improved IT governance visibility for agency leadership",
    ],
    technologies: ["AWS", "Azure", "Terraform", "ServiceNow", "Power BI", "Jira", "Confluence", "SSO"],
    accentColor: "#065F46",
    sector: "Federal Civilian",
    clientLabel: "Federal Civilian Agency (via TG Federal / BAH)",
    contractVehicle: "GSA Schedule",
    metrics: [
      { value: "45%", label: "Faster Migration Timeline" },
      { value: "100%", label: "FedRAMP Alignment" },
      { value: "3", label: "Agencies Supported" },
    ],
    duration: "14 months",
    easeOriginRole: "Cloud Migration & Governance Delivery",
    complianceFrameworks: ["FISMA", "FedRAMP", "NIST 800-53"],
  },
  {
    slug: "navy-program-governance",
    title: "Navy IT Program Governance & EVM Oversight",
    category: "Program Management",
    shortDescription:
      "Stood up PMO governance and earned value management for Navy IT programs, achieving full audit readiness and accelerating program reporting cycles.",
    heroDescription:
      "Delivering disciplined program governance, EVM compliance, and integrated scheduling for Navy aviation IT programs.",
    overview:
      "EaseOrigin provided program management support for Naval Air Warfare Center Aircraft Division (NAWCAD) IT programs, establishing PMO governance frameworks, implementing earned value management systems, and developing integrated master schedules. The engagement brought structure and accountability to multi-year IT initiatives, enabling consistent reporting to program leadership and readiness for GAO and Inspector General audits.",
    challenge:
      "Multiple Navy IT programs lacked standardized governance frameworks, leading to inconsistent cost reporting, schedule variances that went undetected, and difficulty demonstrating program health to oversight bodies. EVM data was manually compiled from disconnected sources, resulting in delayed and unreliable reporting. Programs faced upcoming GAO audits without the documentation rigor or traceability required.",
    solution:
      "EaseOrigin stood up a centralized PMO with standardized governance processes across all supported programs. We implemented an earned value management system with automated data collection from project schedules and financial systems, developed integrated master schedules linking technical milestones to contract deliverables, and established audit-ready documentation packages with full traceability from requirements through delivery.",
    results: [
      "PMO governance framework standardized across 5+ Navy IT programs",
      "Earned value management system with automated variance analysis",
      "Integrated master schedules linking milestones to contract deliverables",
      "Full audit readiness achieved for GAO and IG reviews",
      "Program reporting cycle reduced by 40% through automation",
      "Cost performance index maintained above 0.95 across all programs",
    ],
    technologies: ["Microsoft Project", "Oracle Primavera P6", "Deltek Cobra", "Power BI", "ServiceNow ITBM", "Jira", "Confluence"],
    accentColor: "#9333EA",
    sector: "Defense",
    clientLabel: "U.S. Navy / NAWCAD",
    contractVehicle: "NAWCAD N0042118D0006",
    metrics: [
      { value: "5+", label: "Programs Managed" },
      { value: "100%", label: "Audit Readiness" },
      { value: "40%", label: "Faster Reporting" },
    ],
    duration: "18 months",
    easeOriginRole: "Program Management & EVM Oversight",
    complianceFrameworks: ["ANSI/EIA-748 (EVM)", "OMB A-11", "FAR/DFARS"],
    featured: true,
  },
  {
    slug: "space-force-agile-delivery",
    title: "Space Force Agile Release Train Coordination",
    category: "Agile Delivery",
    shortDescription:
      "Coordinated Agile Release Train ceremonies and PI Planning across multiple Scrum teams for Space Force command and control programs, improving delivery predictability.",
    heroDescription:
      "Accelerating Space Force C2 delivery through SAFe Release Train Engineering, PI Planning facilitation, and cross-team coordination.",
    overview:
      "EaseOrigin provided Release Train Engineering support for U.S. Space Force Space Systems Command (SSC) programs under the Leidos Kobayashi Maru contract. The engagement focused on coordinating multiple Agile teams delivering command and control software, facilitating PI Planning events on 10-week cadences, running ART-level ceremonies, and tracking flow metrics to improve delivery predictability across the Agile Release Train.",
    challenge:
      "Space Force C2 programs had adopted Agile practices at the team level but lacked coordination across teams delivering interdependent capabilities. PI Planning events were inconsistent, cross-team dependencies went unmanaged, and there was no visibility into ART-level flow metrics. The multi-contractor environment added complexity, with teams using different tools and processes that made synchronized delivery difficult.",
    solution:
      "EaseOrigin deployed Release Train Engineering practices aligned with SAFe, establishing consistent PI Planning cadences with structured preparation, execution, and follow-through. We implemented Scrum of Scrums and ART Sync ceremonies to surface and manage cross-team dependencies, built executive dashboards tracking flow metrics and PI predictability, and coordinated with multiple contractors to align tools and processes across the ART.",
    results: [
      "4 Agile teams coordinated across a unified Agile Release Train",
      "5 successful PI Planning increments executed on cadence",
      "Cross-team dependency management reducing integration risks",
      "ART-level flow metrics dashboard for executive visibility",
      "30% improvement in PI predictability measure",
      "Standardized Agile ceremonies across multi-contractor teams",
    ],
    technologies: ["Jira Align", "Jira", "Confluence", "Miro", "GitLab", "Power BI", "Azure DevOps"],
    accentColor: "#DC2626",
    sector: "Defense",
    clientLabel: "U.S. Space Force (SSC)",
    contractVehicle: "Leidos Kobayashi Maru",
    metrics: [
      { value: "4", label: "Agile Teams Coordinated" },
      { value: "5", label: "PI Increments" },
      { value: "30%", label: "Better Predictability" },
    ],
    duration: "12 months",
    easeOriginRole: "Release Train Engineering & Agile Delivery",
    complianceFrameworks: ["DoD Software Acquisition Pathway", "TechFAR"],
    featured: true,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
