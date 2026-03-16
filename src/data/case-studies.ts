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
      { value: "98%", label: "On-Time Delivery" },
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
      { value: "Zero", label: "Critical Findings" },
      { value: "100%", label: "Compliance Score" },
      { value: "99.9%", label: "Uptime SLA Achieved" },
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
      { value: "100%", label: "Say/Do Rate" },
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
      { value: "30+", label: "Teams Onboarded" },
      { value: "Zero", label: "Missed Milestones" },
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
      { value: "3", label: "Cloud Providers Managed" },
      { value: "98%", label: "On-Time Delivery" },
      { value: "1", label: "Unified Observability Pane" },
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
      { value: "12", label: "Data Sources Consolidated" },
      { value: "8", label: "Pipelines Deployed" },
      { value: "100%", label: "Say/Do Rate" },
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
      { value: "3", label: "Legacy Systems Retired" },
      { value: "100%", label: "FISMA Compliance" },
      { value: "Zero", label: "Missed Milestones" },
    ],
    duration: "9 months",
    easeOriginRole: "ITSM Modernization & Delivery",
    complianceFrameworks: ["FISMA", "FedRAMP"],
    featured: true,
  },
  {
    slug: "dod-oracle-cloud",
    title: "DoW Cloud Infrastructure on Oracle Cloud",
    category: "Cloud Infrastructure",
    shortDescription:
      "Deployed and managed secure Oracle Cloud Infrastructure for Department of War workloads with IL5 compliance and automated provisioning.",
    heroDescription:
      "Delivering secure, mission-critical cloud infrastructure for DoW programs on Oracle Cloud with Impact Level 5 compliance.",
    overview:
      "EaseOrigin supported the deployment and ongoing management of Oracle Cloud Infrastructure (OCI) environments for U.S. Air Force and Department of War programs. Working under the SAIC Cloud One contract vehicle, the engagement required standing up secure cloud landing zones, implementing DoW-compliant identity and access controls, and automating infrastructure provisioning for mission-critical workloads operating at Impact Level 5.",
    challenge:
      "DoW programs required cloud environments that met stringent Impact Level 5 security requirements while enabling rapid provisioning for development and operational teams. Existing manual provisioning processes introduced delays and configuration drift, and the multi-tenant environment demanded strict network segmentation and audit controls to meet DISA STIG compliance.",
    solution:
      "EaseOrigin designed and implemented automated OCI landing zones with compartment-based isolation, identity federation, and network segmentation aligned with DoW reference architectures. We built Terraform-based provisioning pipelines with built-in compliance checks, established centralized logging and monitoring for security event correlation, and implemented automated STIG compliance scanning across all deployed resources.",
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
    clientLabel: "U.S. Air Force / DoW (via Ikeda Innovations)",
    contractVehicle: "SAIC Cloud One",
    metrics: [
      { value: "IL5", label: "Compliance Achieved" },
      { value: "100%", label: "STIG Compliance" },
      { value: "24/7", label: "Security Monitoring" },
      { value: "Zero", label: "Critical Findings" },
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
      { value: "Zero", label: "Missed Milestones" },
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
      { value: "100%", label: "Documentation Coverage" },
      { value: "98%", label: "On-Time Delivery" },
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
      { value: "3", label: "Agencies Supported" },
      { value: "100%", label: "FedRAMP Alignment" },
      { value: "Zero", label: "Missed Milestones" },
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
      { value: "Zero", label: "GAO Findings" },
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
      { value: "5", label: "PI Increments Delivered" },
      { value: "92%", label: "PI Objective Completion" },
    ],
    duration: "12 months",
    easeOriginRole: "Release Train Engineering & Agile Delivery",
    complianceFrameworks: ["DoW Software Acquisition Pathway", "TechFAR"],
    featured: true,
  },
  {
    slug: "zero-trust-security-architecture",
    title: "Zero-Trust Security Architecture for Federal Agency",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "Designed and implemented a zero-trust security architecture aligned with NIST 800-207, replacing legacy perimeter-based defenses with identity-centric access controls across a federal civilian agency.",
    heroDescription:
      "Transforming federal cybersecurity posture through zero-trust architecture, identity-centric controls, and continuous verification.",
    overview:
      "EaseOrigin led the design and implementation of a zero-trust security architecture for a federal civilian agency transitioning away from legacy perimeter-based security. The engagement encompassed identity provider consolidation, micro-segmentation, continuous authentication, and real-time threat monitoring aligned with NIST 800-207 and OMB M-22-09 zero-trust mandates.",
    challenge:
      "The agency relied on traditional perimeter-based security that assumed trust within the network boundary. Remote work expansion, cloud adoption, and increasing insider threat concerns exposed critical gaps. Multiple identity providers created inconsistent access policies, and lateral movement within the network was largely unmonitored. The agency faced OMB deadlines to adopt zero-trust principles.",
    solution:
      "EaseOrigin architected a phased zero-trust implementation starting with identity consolidation and multi-factor authentication enforcement. We deployed micro-segmentation across critical network zones, implemented continuous device posture assessment, and established real-time behavioral analytics for anomaly detection. Policy engines were configured to enforce least-privilege access decisions based on user identity, device health, location, and resource sensitivity.",
    results: [
      "Zero-trust architecture deployed across all critical systems",
      "Multi-factor authentication enforced for 100% of user accounts",
      "Micro-segmentation reducing lateral movement risk by 95%",
      "Continuous device posture assessment for all endpoints",
      "Real-time behavioral analytics detecting anomalous access patterns",
      "Full compliance with OMB M-22-09 zero-trust requirements",
    ],
    technologies: ["Azure AD", "CrowdStrike", "Palo Alto Prisma", "Splunk", "Okta", "Zscaler", "Terraform"],
    accentColor: "#B45309",
    sector: "Federal Civilian",
    clientLabel: "Federal Civilian Agency",
    metrics: [
      { value: "100%", label: "MFA Adoption" },
      { value: "Zero", label: "Critical Findings" },
      { value: "90-Day", label: "Full Deployment" },
    ],
    duration: "10 months",
    easeOriginRole: "Zero-Trust Architecture & Security Engineering",
    complianceFrameworks: ["NIST 800-207", "OMB M-22-09", "NIST 800-53", "FISMA"],
    featured: true,
  },
  {
    slug: "ai-document-processing-platform",
    title: "AI-Powered Document Processing Platform",
    category: "AI/ML Infrastructure",
    shortDescription:
      "Built an intelligent document processing platform using LLM orchestration and OCR to automate intake, extraction, and classification of federal forms and correspondence at scale.",
    heroDescription:
      "Automating federal document processing with AI-powered extraction, classification, and intelligent routing at enterprise scale.",
    overview:
      "EaseOrigin designed and deployed an AI-powered document processing platform for a federal agency handling thousands of forms, applications, and correspondence monthly. The platform combines optical character recognition, large language model orchestration, and custom extraction pipelines to automate document intake, data extraction, classification, and routing, reducing manual processing time and improving accuracy.",
    challenge:
      "The agency processed over 10,000 documents monthly through manual review, with staff spending significant time on data entry, classification, and routing. Error rates from manual processing caused downstream delays, and peak submission periods created backlogs. The agency needed to maintain accuracy while dramatically reducing processing time and manual labor.",
    solution:
      "EaseOrigin built a multi-stage processing pipeline using AWS Textract for OCR, AWS Bedrock for LLM-powered extraction and classification, and custom LangChain agents for intelligent routing and validation. The platform includes a human-in-the-loop review interface for low-confidence extractions, automated quality scoring, and comprehensive audit trails for compliance. A React-based dashboard provides real-time processing metrics and queue management.",
    results: [
      "Automated processing of 10,000+ documents per month",
      "Extraction accuracy exceeding 95% across all document types",
      "Processing time reduced by 80% compared to manual review",
      "Human-in-the-loop interface for quality assurance on edge cases",
      "Complete audit trail for all processed documents",
      "Real-time dashboard for processing metrics and queue management",
    ],
    technologies: ["AWS Bedrock", "AWS Textract", "LangChain", "Python", "FastAPI", "PostgreSQL", "React", "S3"],
    accentColor: "#065F46",
    sector: "Federal Civilian",
    clientLabel: "Federal Civilian Agency",
    metrics: [
      { value: "95%", label: "Extraction Accuracy" },
      { value: "10,000+", label: "Documents per Month" },
      { value: "12-Week", label: "Production Delivery" },
    ],
    duration: "7 months",
    easeOriginRole: "AI/ML Platform Architecture & Delivery",
  },
  {
    slug: "realtime-operational-analytics",
    title: "Real-Time Operational Analytics Dashboard",
    category: "Data & Analytics",
    shortDescription:
      "Designed and delivered a unified real-time analytics platform consolidating 15 data sources into a single operational dashboard with sub-5-second data latency for defense program decision-making.",
    heroDescription:
      "Enabling real-time operational awareness through unified data streaming, advanced analytics, and executive dashboards for defense programs.",
    overview:
      "EaseOrigin architected and deployed a real-time operational analytics platform for a defense program requiring unified situational awareness across multiple data sources. The platform ingests streaming data from 15 operational systems, applies real-time transformations and anomaly detection, and presents actionable insights through role-based dashboards tailored for operators, analysts, and executive leadership.",
    challenge:
      "Program leadership lacked unified visibility into operational status, with data scattered across 15 disconnected systems each with different formats, update frequencies, and access methods. Analysts spent hours manually compiling reports from multiple sources, and decision-makers often worked with stale data. There was no capability for real-time alerting on critical operational thresholds.",
    solution:
      "EaseOrigin implemented a streaming data architecture using Apache Kafka for real-time ingestion, Elasticsearch for indexing and search, and Grafana for visualization. We built custom data transformation pipelines with dbt for analytical models, implemented anomaly detection algorithms for automated alerting, and designed role-based dashboards providing appropriate detail for each stakeholder level. The platform includes automated report generation and historical trend analysis.",
    results: [
      "15 data sources unified into a single operational platform",
      "Sub-5-second data latency from source to dashboard",
      "Role-based dashboards for operators, analysts, and executives",
      "Automated anomaly detection and threshold alerting",
      "70% faster decision-making through real-time data access",
      "Automated report generation replacing manual compilation",
    ],
    technologies: ["Apache Kafka", "Elasticsearch", "Grafana", "dbt", "Python", "AWS", "PostgreSQL", "Docker"],
    accentColor: "#059669",
    sector: "Defense",
    clientLabel: "Defense Program Office",
    metrics: [
      { value: "<5s", label: "Data Latency" },
      { value: "15", label: "Sources Unified" },
      { value: "99.9%", label: "Platform Uptime" },
    ],
    duration: "8 months",
    easeOriginRole: "Data Engineering & Analytics Platform",
    complianceFrameworks: ["NIST 800-53", "RMF"],
  },
  {
    slug: "healthcare-system-integration",
    title: "Healthcare System Integration & Interoperability",
    category: "SaaS Solutions",
    shortDescription:
      "Integrated 12 disparate healthcare systems using HL7 FHIR standards, enabling seamless patient data exchange and reducing data reconciliation time by 40% while maintaining full HIPAA compliance.",
    heroDescription:
      "Connecting healthcare systems through FHIR-based interoperability, enabling seamless patient data exchange across providers and platforms.",
    overview:
      "EaseOrigin delivered a healthcare system integration initiative connecting 12 disparate clinical, administrative, and billing systems for a regional healthcare network. Using HL7 FHIR interoperability standards, the engagement established bi-directional data exchange pipelines, patient identity resolution, and a unified API gateway that enables authorized applications to access consolidated patient records while maintaining strict HIPAA compliance.",
    challenge:
      "The healthcare network operated 12 disconnected systems including EHR platforms, lab information systems, billing engines, and patient portals. Patient data was duplicated and inconsistent across systems, requiring manual reconciliation that delayed care coordination. No standardized API existed for new application integrations, and each system connection required custom point-to-point interfaces that were costly to maintain.",
    solution:
      "EaseOrigin designed and deployed a FHIR-based integration platform with a centralized API gateway serving as the hub for all system interconnections. We implemented patient identity resolution using probabilistic matching algorithms, built bi-directional data synchronization pipelines with conflict resolution logic, and established comprehensive audit logging for HIPAA compliance. A ServiceNow-based service catalog enables clinical teams to request new integrations through a governed workflow.",
    results: [
      "12 healthcare systems integrated through FHIR-based API gateway",
      "Patient data reconciliation time reduced by 40%",
      "Bi-directional data exchange with automated conflict resolution",
      "Patient identity resolution with 99.2% match accuracy",
      "ServiceNow-based integration request workflow",
      "Full HIPAA compliance maintained across all data exchanges",
    ],
    technologies: ["HL7 FHIR", "Azure", "ServiceNow", "REST APIs", "Python", "PostgreSQL", "Docker", "Mirth Connect"],
    accentColor: "#B45309",
    sector: "Healthcare",
    clientLabel: "Regional Healthcare Network",
    metrics: [
      { value: "12", label: "Systems Integrated" },
      { value: "100%", label: "HIPAA Compliance" },
      { value: "Zero", label: "Data Incidents" },
    ],
    duration: "11 months",
    easeOriginRole: "System Integration & Interoperability",
    complianceFrameworks: ["HIPAA", "HITECH", "HL7 FHIR R4"],
  },
  {
    slug: "enterprise-security-operations-center",
    title: "Enterprise Cybersecurity Operations Center",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "Stood up a 24/7 Security Operations Center with SIEM deployment, threat hunting playbooks, and automated incident response, achieving 85% faster mean time to response across the enterprise.",
    heroDescription:
      "Building enterprise-grade security operations with continuous monitoring, automated threat detection, and rapid incident response capabilities.",
    overview:
      "EaseOrigin designed and operationalized a Security Operations Center (SOC) for a defense contractor requiring 24/7 threat monitoring and incident response capabilities. The engagement encompassed SIEM platform deployment, security orchestration and automated response (SOAR), threat intelligence integration, and development of detection rules and incident response playbooks aligned with MITRE ATT&CK framework.",
    challenge:
      "The organization had no centralized security monitoring capability, relying on individual tool alerts that were often missed or delayed. Security events from firewalls, endpoints, cloud environments, and applications were siloed, making correlated threat detection impossible. When incidents were detected, response was ad-hoc with no standardized playbooks, leading to inconsistent containment and lengthy resolution times.",
    solution:
      "EaseOrigin deployed Splunk Enterprise Security as the central SIEM platform, integrating log sources across network, endpoint, cloud, and application layers. We implemented CrowdStrike for endpoint detection and response, built automated response playbooks using SOAR capabilities, and established a threat hunting program with weekly campaigns aligned to MITRE ATT&CK techniques. A tiered analyst model was established with clear escalation paths and SLAs for incident classification and response.",
    results: [
      "24/7 security monitoring across all enterprise environments",
      "Mean time to detection reduced to under 15 minutes",
      "Mean time to response improved by 85%",
      "Automated response playbooks for top 20 incident types",
      "Threat hunting program with weekly campaigns",
      "99.9% detection rate for known attack patterns",
    ],
    technologies: ["Splunk Enterprise Security", "CrowdStrike", "Palo Alto", "Ansible", "Python", "Jira", "MITRE ATT&CK"],
    accentColor: "#B45309",
    sector: "Defense",
    clientLabel: "Defense Contractor",
    metrics: [
      { value: "24/7", label: "Monitoring Coverage" },
      { value: "99.9%", label: "Detection Rate" },
      { value: "50+", label: "Playbooks Deployed" },
    ],
    duration: "9 months",
    easeOriginRole: "SOC Architecture & Security Operations",
    complianceFrameworks: ["NIST 800-53", "CMMC", "MITRE ATT&CK", "NIST 800-171"],
  },
  {
    slug: "cloud-cost-optimization",
    title: "Enterprise Cloud Cost Optimization Platform",
    category: "Cloud Infrastructure",
    shortDescription:
      "Delivered a comprehensive FinOps platform for a financial services firm, providing full cloud cost visibility, automated rightsizing recommendations, and policy-driven governance that reduced annual cloud spend by 35%.",
    heroDescription:
      "Bringing financial accountability to cloud operations through real-time cost visibility, automated optimization, and FinOps best practices.",
    overview:
      "EaseOrigin partnered with a mid-market financial services firm to design and implement an enterprise cloud cost optimization platform. The engagement established a FinOps operating model with real-time cost visibility dashboards, automated rightsizing recommendations, reserved instance management, and policy-driven guardrails to prevent cost overruns across 500+ cloud resources spanning development, staging, and production environments.",
    challenge:
      "The firm's cloud spend had grown 60% year over year with no clear accountability or cost attribution. Engineering teams provisioned resources without visibility into spending impact, reserved instances were underutilized, and idle resources accumulated across environments. Finance and engineering operated in silos, with monthly billing surprises eroding trust and making budget forecasting unreliable.",
    solution:
      "EaseOrigin implemented a FinOps platform anchored by CloudHealth for cost management and Grafana for real-time visualization. We built automated rightsizing pipelines using Python and Lambda that continuously analyzed resource utilization and surfaced optimization recommendations. Terraform modules enforced tagging policies and cost allocation standards, while scheduled Lambda functions identified and flagged idle resources for review. A weekly FinOps review cadence was established between engineering leads and finance stakeholders.",
    results: [
      "35% reduction in overall cloud spend within the first quarter",
      "$2M+ in annualized cost savings identified and implemented",
      "500+ cloud resources profiled, tagged, and optimized",
      "Real-time cost dashboards with team-level spend attribution",
      "Automated rightsizing recommendations delivered weekly",
      "Reserved instance utilization improved from 45% to 92%",
    ],
    technologies: ["AWS", "CloudHealth", "Terraform", "Python", "Grafana", "Lambda", "S3", "CloudWatch"],
    accentColor: "#1E3A5F",
    sector: "Commercial",
    clientLabel: "Financial Services Firm",
    metrics: [
      { value: "500+", label: "Resources Optimized" },
      { value: "98%", label: "On-Time Delivery" },
      { value: "6-Month", label: "Full Deployment" },
    ],
    duration: "6 months",
    easeOriginRole: "FinOps Strategy & Cloud Optimization",
  },
  {
    slug: "retail-analytics-platform",
    title: "Retail Analytics & Customer Intelligence Platform",
    category: "Data & Analytics",
    shortDescription:
      "Built a customer intelligence platform for a national retailer that unified behavioral analytics, product recommendations, and real-time inventory optimization, driving a 25% increase in targeted campaign revenue.",
    heroDescription:
      "Transforming retail operations through unified customer analytics, intelligent product recommendations, and real-time inventory visibility.",
    overview:
      "EaseOrigin designed and delivered a customer intelligence platform for a national retail chain seeking to unify fragmented customer data, improve product recommendation accuracy, and optimize inventory allocation across 200+ store locations. The platform consolidated data from point-of-sale systems, e-commerce, loyalty programs, and supply chain feeds into a governed analytics layer powering real-time operational decisions.",
    challenge:
      "The retailer's customer data was fragmented across six disconnected systems with no unified customer profile. Marketing campaigns relied on broad segmentation rather than behavioral insights, resulting in low conversion rates. Inventory allocation was driven by historical averages rather than demand signals, leading to frequent stockouts on high-demand items and excess inventory on slow movers. No infrastructure existed for real-time data processing or recommendation delivery.",
    solution:
      "EaseOrigin implemented a modern data stack anchored by Snowflake as the central warehouse, with dbt for transformation logic and Apache Airflow orchestrating 40+ data pipelines. Kafka streams provided real-time event ingestion from POS and e-commerce platforms. We built a customer identity resolution layer that unified 2M+ customer profiles, a recommendation engine powered by collaborative filtering, and Tableau dashboards providing store-level inventory optimization insights updated every 15 minutes.",
    results: [
      "25% revenue increase from targeted marketing campaigns",
      "40% improvement in inventory turnover across 200+ locations",
      "2M+ customer profiles unified from six disparate data sources",
      "Real-time inventory visibility with 15-minute refresh cycles",
      "Recommendation engine serving personalized product suggestions",
      "40+ automated data pipelines with built-in quality validation",
    ],
    technologies: ["Snowflake", "dbt", "Apache Airflow", "Python", "Tableau", "AWS", "Kafka", "Redis"],
    accentColor: "#059669",
    sector: "Commercial",
    clientLabel: "National Retail Chain",
    metrics: [
      { value: "2M+", label: "Customer Profiles Unified" },
      { value: "200+", label: "Stores Supported" },
      { value: "100%", label: "Say/Do Rate" },
    ],
    duration: "8 months",
    easeOriginRole: "Data Platform Architecture & Analytics",
  },
  {
    slug: "enterprise-iam-modernization",
    title: "Enterprise Identity & Access Management Modernization",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "Consolidated fragmented identity systems into a unified IAM platform with SSO, role-based access control, and automated compliance reporting, achieving 90% SSO adoption across a 5,000-user enterprise.",
    heroDescription:
      "Modernizing enterprise identity management through unified SSO, automated access governance, and role-based security controls.",
    overview:
      "EaseOrigin led an IAM modernization initiative for a large professional services organization managing 5,000+ employees across 12 office locations. The engagement consolidated five legacy identity providers into a unified platform with single sign-on, automated provisioning and deprovisioning, role-based access control aligned to job functions, and privileged access management for sensitive systems.",
    challenge:
      "The organization operated five disconnected identity systems accumulated through acquisitions, with no consistent authentication standard. Employees maintained separate credentials for different applications, leading to password fatigue and security risk. Access reviews were manual and audit-unfriendly, with no clear mapping between job roles and application entitlements. Privileged accounts lacked proper vaulting or session monitoring, creating compliance gaps during annual audits.",
    solution:
      "EaseOrigin designed a unified IAM architecture with Okta as the primary identity provider and Azure AD for directory services. We implemented SSO integration across 85+ enterprise applications, built an automated provisioning and deprovisioning workflow tied to HR system events, and deployed CyberArk for privileged access management with session recording. Terraform automated the IAM infrastructure provisioning, while ServiceNow provided the front-end for access request workflows and quarterly access certification campaigns.",
    results: [
      "90% SSO adoption across 85+ enterprise applications",
      "70% reduction in access-related service desk tickets",
      "100% role-based access control coverage for all job functions",
      "Automated provisioning and deprovisioning tied to HR events",
      "Privileged access fully vaulted with session recording",
      "Quarterly access certification campaigns automated end-to-end",
    ],
    technologies: ["Okta", "Azure AD", "CyberArk", "Terraform", "Python", "ServiceNow", "SCIM", "SAML"],
    accentColor: "#B45309",
    sector: "Enterprise",
    clientLabel: "Professional Services Organization",
    metrics: [
      { value: "5,000+", label: "Users Migrated" },
      { value: "100%", label: "RBAC Coverage" },
      { value: "Zero", label: "Audit Findings" },
    ],
    duration: "7 months",
    easeOriginRole: "IAM Architecture & Security Engineering",
  },
  {
    slug: "intelligent-automation-platform",
    title: "Intelligent Automation & Process Mining",
    category: "AI/ML Infrastructure",
    shortDescription:
      "Deployed an intelligent automation platform combining process mining, RPA, and workflow orchestration that automated 15 core business processes and reduced manual operations effort by 60%.",
    heroDescription:
      "Accelerating enterprise operations through process mining, robotic process automation, and intelligent workflow orchestration.",
    overview:
      "EaseOrigin designed and implemented an intelligent automation platform for a large logistics and supply chain company seeking to reduce manual operational overhead and improve process consistency. The engagement combined process mining to identify automation candidates, RPA development and deployment for high-volume repetitive tasks, and intelligent workflow orchestration for complex multi-step processes spanning multiple business systems.",
    challenge:
      "The company's operations teams spent over 60% of their time on manual, repetitive tasks across order processing, vendor onboarding, invoice reconciliation, and compliance reporting. Processes were poorly documented, with significant variation between teams and locations. Previous automation attempts had failed due to lack of process understanding, resulting in bots that broke frequently and required constant maintenance.",
    solution:
      "EaseOrigin deployed Celonis for process mining, analyzing 18 months of event log data to map actual process flows and identify the highest-impact automation candidates. We then built and deployed UiPath bots for 15 core processes, implementing attended and unattended automation based on process complexity. Power Automate handled simpler workflow orchestration, while a React-based operations dashboard provided real-time visibility into bot performance, exception handling, and process throughput. MongoDB stored process execution logs for ongoing optimization analysis.",
    results: [
      "60% reduction in manual operations effort across targeted processes",
      "45% faster end-to-end process cycle times",
      "15 core business processes fully automated",
      "Process mining analysis covering 18 months of operational data",
      "Real-time operations dashboard for bot monitoring and exception management",
      "Estimated $1.5M annual labor cost avoidance",
    ],
    technologies: ["UiPath", "Celonis", "Python", "AWS", "Power Automate", "MongoDB", "React", "Docker"],
    accentColor: "#065F46",
    sector: "Enterprise",
    clientLabel: "Logistics & Supply Chain Company",
    metrics: [
      { value: "15", label: "Processes Automated" },
      { value: "98%", label: "On-Time Delivery" },
      { value: "Zero", label: "Missed Milestones" },
    ],
    duration: "9 months",
    easeOriginRole: "Intelligent Automation & Process Engineering",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
