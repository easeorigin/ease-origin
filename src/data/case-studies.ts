export type Sector = "Federal Civilian" | "Defense" | "Healthcare" | "Commercial" | "Enterprise";

export const SECTORS: Sector[] = ["Federal Civilian", "Defense", "Healthcare", "Commercial", "Enterprise"];

export interface Metric {
  value: string;
  label: string;
}

/**
 * Relevant experience, not corporate past performance.
 *
 * Entries describe work performed by EaseOrigin personnel while employed by the
 * organizations named in `clientLabel` and `deliveredUnder`. EaseOrigin LLC was
 * not the contracting entity on any of it. Every page that renders these
 * entries carries `attributionNotice` from company-info above the content.
 *
 * Two rules when editing:
 *
 * 1. Do not write "EaseOrigin designed", "EaseOrigin partnered", "we built".
 *    Describe what was built and what it achieved. The corporate subject is
 *    the thing that turns a true description into a false attribution.
 * 2. Every metric has to survive a contracting officer asking "show me".
 *    Countable facts and system measurements are fine. Client revenue
 *    outcomes, audit verdicts, and delivery-record percentages are not.
 */
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
  /** Scope of work performed, not a claim about who held the contract. */
  role?: string;
  complianceFrameworks?: string[];
  /** The organization that held the contract. Never a vehicle EaseOrigin holds. */
  deliveredUnder?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization & Multi-Account Strategy",
    category: "Cloud Infrastructure",
    shortDescription:
      "A scalable multi-account cloud architecture with fully containerized workloads and automated provisioning.",
    heroDescription:
      "Helping an enterprise organization transition from a monolithic cloud setup to a modern, multi-account architecture built for scale.",
    overview:
      "A large technology organization had outgrown its original cloud footprint and needed the infrastructure redesigned from the ground up. The work covered moving from a single-account environment to a properly segmented multi-account architecture, containerizing critical workloads, and automating provisioning across development, staging, and production.",
    challenge:
      "The client had outgrown their original cloud setup. Services were tightly coupled within a single account, IAM policies lacked segmentation, and deployments relied on manual processes prone to error. Rising costs from over-provisioned resources and inconsistent governance across teams made scaling unsustainable.",
    solution:
      "The delivered architecture separated workloads into dedicated accounts with segmented networking, identity guardrails, and consistent tagging standards. A library of reusable infrastructure-as-code modules brought versioning and drift detection to every environment. Workloads were containerized and deployed behind auto-scaling, load balancing, and CDN distribution for global performance.",
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
      { value: "<100ms", label: "Global Response Time" },
      { value: "200+", label: "Containers in Production" },
      { value: "0", label: "Manual Deploys" },
    ],
    duration: "8 months",
    role: "Cloud Architecture & DevOps Delivery",
    featured: true,
  },
  {
    slug: "hipaa-compliant-infrastructure",
    title: "HIPAA-Compliant Infrastructure for Healthcare",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "Secure, HIPAA-aligned cloud infrastructure with production-grade container orchestration and centralized observability.",
    heroDescription:
      "Building cloud infrastructure that meets the stringent security and compliance demands of modern healthcare organizations.",
    overview:
      "A healthcare organization handling sensitive patient data needed its cloud infrastructure rebuilt without breaking regulatory compliance. The work covered production container orchestration, security hardening, audit trail implementation, and a centralized monitoring stack, all under HIPAA requirements.",
    challenge:
      "The organization needed to modernize aging infrastructure without compromising regulatory compliance. Security controls were inconsistent, audit trails had gaps, and development teams struggled to move quickly under rigid governance requirements. Manual change management processes created bottlenecks and increased the risk of human error.",
    solution:
      "Production container orchestration was deployed with declarative configuration management and Git-based change control. Technical controls were mapped to HIPAA requirements alongside the security and compliance teams, including automated audit trails and change tracking. A centralized observability platform brought together metrics, logging, and alerting tuned for both operational and compliance use.",
    results: [
      "Technical controls implemented and mapped to HIPAA requirements",
      "Production container orchestration with declarative deployments",
      "Unified observability across the entire service footprint",
      "Automated audit trail generation replacing manual evidence collection",
      "Automated change management with complete traceability",
      "Git-based change control across all infrastructure",
    ],
    technologies: ["AWS", "EKS", "Helm", "Kustomize", "Terraform", "Prometheus", "ELK Stack", "OpenTofu"],
    accentColor: "#B45309",
    sector: "Healthcare",
    clientLabel: "Regional Healthcare Provider",
    metrics: [
    ],
    duration: "6 months",
    role: "Security & Compliance Engineering",
    complianceFrameworks: ["HIPAA", "HITECH"],
    featured: true,
  },
  {
    slug: "enterprise-ai-platform",
    title: "Enterprise AI Platform at Scale",
    category: "AI/ML Infrastructure",
    shortDescription:
      "A production AI platform serving thousands of concurrent users with multi-model orchestration and real-time inference.",
    heroDescription:
      "Delivering an enterprise AI platform with intelligent orchestration, knowledge retrieval, and production-grade scalability.",
    overview:
      "A technology organization needed production-grade AI capability at significant scale. The resulting platform handles model orchestration, knowledge retrieval across dozens of data sources, and multi-provider integration for conversational and analytical applications.",
    challenge:
      "The organization needed an AI platform that could reliably serve thousands of simultaneous users while maintaining response quality. Early prototypes failed to scale, lacked proper resource management, and provided no visibility into model performance or cost allocation across providers.",
    solution:
      "The architecture is a multi-agent system with an orchestration layer in front of it. Custom servers handle caching, rate management, and streaming responses for real-time interaction. Multiple providers are integrated with automatic failover, and an observability layer tracks model performance, usage cost, and end-user satisfaction.",
    results: [
      "Thousands of concurrent users served reliably in production",
      "Dozens of data sources integrated into knowledge retrieval pipelines",
      "Real-time inference with intelligent response caching",
      "Multi-provider integration with automatic failover",
      "Extensible agent architecture for rapid capability expansion",
      "Full observability dashboard for performance and cost tracking",
    ],
    technologies: ["LangChain", "LangGraph", "AWS Bedrock", "MCP", "FastAPI", "Python", "MongoDB"],
    accentColor: "#065F46",
    sector: "Enterprise",
    clientLabel: "Enterprise Technology Organization",
    metrics: [
      { value: "3,000+", label: "Concurrent Users" },
      { value: "40+", label: "Data Sources Integrated" },
      { value: "<2s", label: "Avg Response Time" },
    ],
    duration: "10 months",
    role: "AI/ML Platform Architecture & Delivery",
  },
  {
    slug: "devops-pipeline-transformation",
    title: "DevOps Pipeline Transformation",
    category: "DevOps & Platform Engineering",
    shortDescription:
      "Fragmented CI/CD processes unified into a standardized pipeline architecture with automated security scanning and GitOps-driven delivery.",
    heroDescription:
      "Transforming siloed build processes into a cohesive, automated delivery platform that accelerates releases while strengthening security.",
    overview:
      "An enterprise organization with fragmented build and deployment processes needed them consolidated into one pipeline architecture. The result standardized disparate tooling into a single platform supporting multiple programming languages and deployment targets, with security scanning at every stage.",
    challenge:
      "The organization maintained separate, ad-hoc build pipelines across dozens of teams. Each team used different tools, branching strategies, and deployment approaches, resulting in inconsistent quality, unpredictable release cycles, and security vulnerabilities slipping through the cracks. There was no centralized visibility into build health or deployment status.",
    solution:
      "A templated pipeline engine standardized the build, test, scan, and deploy lifecycle across every team. Automated security scanning was wired into each pipeline stage, GitOps-based deployment workflows handled progressive rollouts, and a central dashboard surfaced build health, deployment status, and compliance reporting.",
    results: [
      "Standardized build process across all engineering teams",
      "Automated security scanning integrated into every pipeline",
      "GitOps-driven deployments with progressive rollouts and drift detection",
      "Centralized build and deployment visibility across the organization",
      "Release cadence improved from monthly to weekly cycles",
      "Automated rollback capability reducing deployment-related incidents",
    ],
    technologies: ["Jenkins", "GitLab CI", "ArgoCD", "Docker", "Helm", "SonarCloud", "Snyk", "Terraform"],
    accentColor: "#7C3AED",
    sector: "Enterprise",
    clientLabel: "Enterprise Technology Organization",
    metrics: [
      { value: "30+", label: "Teams Onboarded" },
    ],
    duration: "5 months",
    role: "DevOps & Platform Engineering",
  },
  {
    slug: "multi-cloud-infrastructure",
    title: "Multi-Cloud Infrastructure Strategy",
    category: "Cloud Infrastructure",
    shortDescription:
      "A multi-cloud architecture spanning AWS, Azure, and Oracle Cloud with unified governance and infrastructure automation.",
    heroDescription:
      "Enabling organizational resilience and flexibility through a well-governed multi-cloud infrastructure strategy.",
    overview:
      "An enterprise client concentrated in a single cloud provider needed workloads distributed across AWS, Azure, and Oracle Cloud. The engagement established unified infrastructure-as-code practices, consistent security policies, and centralized observability across all three.",
    challenge:
      "The organization was heavily concentrated in a single cloud provider, creating vendor lock-in risk and cutting them off from better-suited services elsewhere. Different teams had started experimenting with alternative clouds independently, resulting in inconsistent configurations, ungoverned costs, and security policy gaps across environments.",
    solution:
      "A multi-cloud governance framework tied the environments together with unified IaC templates, consistent networking patterns, and centralized identity management. Cloud-agnostic deployment pipelines, cross-provider cost allocation, and a single-pane observability platform covered every environment.",
    results: [
      "Workloads distributed across three major cloud providers",
      "Unified IaC templates ensuring consistent configuration",
      "Centralized identity and access management across all clouds",
      "Cost allocation and optimization applied across providers",
      "Single observability platform for cross-cloud monitoring",
      "Reduced vendor lock-in with portable application architectures",
    ],
    technologies: ["AWS", "Azure", "Oracle Cloud", "Terraform", "Terragrunt", "Kubernetes", "Datadog", "Puppet"],
    accentColor: "#1D4ED8",
    sector: "Enterprise",
    clientLabel: "Enterprise Technology Organization",
    metrics: [
      { value: "3", label: "Cloud Providers Managed" },
      { value: "1", label: "Unified Observability Pane" },
    ],
    duration: "7 months",
    role: "Multi-Cloud Strategy & Architecture",
  },
  {
    slug: "data-platform-consolidation",
    title: "Enterprise Data Platform Consolidation",
    category: "Data & Analytics",
    shortDescription:
      "Fragmented data systems consolidated into a unified platform with automated pipelines, governance frameworks, and self-service analytics.",
    heroDescription:
      "Turning scattered data silos into a unified, governed data platform teams can query themselves.",
    overview:
      "An organization's data was scattered across disconnected operational systems. The work consolidated it into a governed, well-documented data layer with automated pipelines and self-service analytics for business teams.",
    challenge:
      "Critical business data was scattered across disconnected databases, spreadsheets, and application silos. Teams spent excessive time manually extracting and reconciling data, leading to inconsistent reporting and delayed decision-making. There was no data governance framework, and data quality issues undermined stakeholder confidence.",
    solution:
      "A centralized data platform brought automated ingestion pipelines, data quality validation, and governance policies into one place. A self-service analytics layer let business teams build their own reports and dashboards, with data lineage tracking and access controls maintained throughout.",
    results: [
      "Unified data platform replacing multiple disconnected systems",
      "Automated data pipelines with built-in quality validation",
      "Self-service analytics reducing dependence on engineering teams",
      "Comprehensive data governance with lineage tracking",
      "Reporting turnaround reduced from weeks to hours",
      "Data quality validation applied to all critical datasets",
    ],
    technologies: ["AWS", "MongoDB", "Apache Airflow", "dbt", "Tableau", "Python", "PostgreSQL", "Nexus"],
    accentColor: "#059669",
    sector: "Commercial",
    clientLabel: "Commercial Technology Organization",
    metrics: [
      { value: "12", label: "Data Sources Consolidated" },
      { value: "8", label: "Pipelines Deployed" },
    ],
    duration: "6 months",
    role: "Data Engineering & Analytics",
  },
  {
    slug: "government-saas-modernization",
    title: "Government SaaS Modernization",
    category: "SaaS Solutions",
    shortDescription:
      "Legacy ticketing and workflow systems modernized with an enterprise ITSM platform featuring automated workflows and self-service capabilities.",
    heroDescription:
      "Replacing outdated service management systems with a modern, integrated platform that accelerates resolution and improves user experience.",
    overview:
      "A government organization's legacy service management systems could no longer keep pace with demand. Outdated ticketing tools were replaced with a modern enterprise ITSM platform, covering workflow automation, integration with existing systems, a self-service portal, and reporting.",
    challenge:
      "The organization relied on aging ticketing systems that couldn't keep pace with growing service demands. Manual routing, lack of automation, and disconnected tools resulted in slow ticket resolution, frustrated users, and limited visibility into service performance. Compliance reporting required extensive manual effort.",
    solution:
      "The ITSM platform went in with intelligent ticket routing, automated escalation workflows, and a self-service portal for common requests. It was integrated with existing identity management, asset tracking, and communication tools. Automated compliance dashboards replaced the manual reporting effort.",
    results: [
      "Modern ITSM platform replacing legacy ticketing systems",
      "Automated ticket routing and escalation workflows",
      "Self-service portal reducing ticket volume for common requests",
      "Integration with identity, asset, and communication systems",
      "Automated compliance reporting eliminating manual effort",
      "Ticket resolution time and user satisfaction tracked in-platform",
    ],
    technologies: ["ServiceNow", "Salesforce", "Jira", "Confluence", "REST APIs", "SSO", "Power BI"],
    accentColor: "#B45309",
    sector: "Federal Civilian",
    clientLabel: "Federal Civilian Agency",
    metrics: [
      { value: "3", label: "Legacy Systems Retired" },
    ],
    duration: "9 months",
    role: "ITSM Modernization & Delivery",
    complianceFrameworks: ["FISMA", "FedRAMP"],
    featured: true,
  },
  {
    slug: "dod-oracle-cloud",
    title: "DoW Cloud Infrastructure on Oracle Cloud",
    category: "Cloud Infrastructure",
    shortDescription:
      "Secure Oracle Cloud Infrastructure for Department of War workloads with IL5 compliance and automated provisioning.",
    heroDescription:
      "Delivering secure, mission-critical cloud infrastructure for DoW programs on Oracle Cloud with Impact Level 5 compliance.",
    overview:
      "Oracle Cloud Infrastructure environments were deployed and managed for U.S. Air Force and Department of War programs, delivered through Ikeda Innovations as a subcontractor to SAIC on the Cloud One program. The work required secure cloud landing zones, DoW-compliant identity and access controls, and automated provisioning for mission-critical workloads operating at Impact Level 5.",
    challenge:
      "DoW programs required cloud environments that met stringent Impact Level 5 security requirements while enabling rapid provisioning for development and operational teams. Existing manual provisioning processes introduced delays and configuration drift, and the multi-tenant environment demanded strict network segmentation and audit controls to meet DISA STIG compliance.",
    solution:
      "Automated OCI landing zones were built with compartment-based isolation, identity federation, and network segmentation aligned to DoW reference architectures. Terraform provisioning pipelines carried built-in compliance checks. Centralized logging and monitoring handled security event correlation, and STIG compliance scanning ran automatically across deployed resources.",
    results: [
      "Secure OCI landing zones deployed at Impact Level 5",
      "Automated infrastructure provisioning reducing deployment time",
      "Compartment-based tenant isolation with strict network controls",
      "Centralized security event monitoring and audit trail",
      "Automated DISA STIG compliance scanning across environments",
      "Repeatable provisioning patterns for rapid program onboarding",
    ],
    technologies: ["Oracle Cloud (OCI)", "Terraform", "Ansible", "DISA STIGs", "Splunk", "Docker", "Linux"],
    accentColor: "#1E3A5F",
    sector: "Defense",
    clientLabel: "U.S. Air Force / DoW",
    deliveredUnder: "Ikeda Innovations, subcontractor to SAIC on Cloud One",
    metrics: [
      { value: "IL5", label: "Compliance Level" },
      { value: "24/7", label: "Security Monitoring" },
    ],
    duration: "18 months",
    role: "Cloud Infrastructure & Compliance Delivery",
    complianceFrameworks: ["DISA STIGs", "IL5", "RMF", "NIST 800-53"],
    featured: true,
  },
  {
    slug: "space-force-c2",
    title: "Space Command & Control Software Factory",
    category: "DevOps & Platform Engineering",
    shortDescription:
      "Space Force command and control software delivery through DevSecOps pipelines, containerized deployments, and agile software factory practices.",
    heroDescription:
      "Enabling rapid, secure software delivery for U.S. Space Force command and control missions through modern DevSecOps practices.",
    overview:
      "Command and control application delivery for the U.S. Space Force Space Systems Command software factory initiative, performed under Leidos on the Kobayashi Maru program. The work centered on DevSecOps pipelines, containerized deployment environments, and agile delivery processes for space domain awareness applications.",
    challenge:
      "Space Force C2 programs required rapid software delivery cycles while maintaining the security rigor demanded by classified environments. Legacy waterfall processes couldn't keep pace with mission needs, and the lack of automated testing and deployment infrastructure meant releases were slow, error-prone, and difficult to validate against security baselines.",
    solution:
      "A DevSecOps pipeline was established with automated build, test, and security scanning stages feeding a continuous delivery workflow. Applications were containerized for consistent deployment across development, staging, and operational environments, with infrastructure-as-code handling repeatable environment provisioning. Agile ceremonies and delivery metrics were introduced to improve velocity and predictability.",
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
    deliveredUnder: "Leidos, Space Command and Control Software Factory (Kobayashi Maru)",
    metrics: [
    ],
    duration: "12 months",
    role: "DevSecOps Pipeline & Delivery",
    complianceFrameworks: ["RMF", "NIST 800-53", "DISA STIGs"],
  },
  {
    slug: "navy-logistics-support",
    title: "Navy IT Logistics & Enterprise Architecture",
    category: "Cloud Infrastructure",
    shortDescription:
      "Enterprise architecture and IT logistics support for Naval Air Warfare Center operations, modernizing legacy systems and infrastructure.",
    heroDescription:
      "Supporting Navy aviation enterprise IT with modernized infrastructure, logistics automation, and architecture planning.",
    overview:
      "Enterprise architecture and IT logistics support for the Naval Air Warfare Center Aircraft Division, performed under Spalding Consulting. The work covered infrastructure modernization, IT asset lifecycle management, system integration planning, and technical documentation supporting ongoing operations and future capability development across multiple Navy programs.",
    challenge:
      "NAWCAD operations relied on aging IT infrastructure with limited documentation and inconsistent asset tracking. Multiple programs shared resources without clear governance, leading to configuration conflicts, underutilized capacity, and difficulty planning future capability investments. Legacy systems lacked integration points for modern tooling and workflows.",
    solution:
      "Enterprise architecture assessments produced modernization roadmaps aligned to Navy IT standards. IT asset lifecycle management processes and configuration baselines were established, and integration architectures connected legacy systems to modern platforms. Technical documentation was standardized across programs to support knowledge transfer and operational continuity.",
    results: [
      "Enterprise architecture roadmap aligned with Navy IT standards",
      "IT asset lifecycle management reducing waste and improving tracking",
      "Configuration baselines established across supported programs",
      "Integration architectures bridging legacy and modern systems",
      "Standardized technical documentation improving operational continuity",
      "Improved capacity planning and resource allocation across programs",
    ],
    technologies: ["VMware", "Windows Server", "Active Directory", "SCCM", "ServiceNow", "Visio", "SharePoint"],
    accentColor: "#1E3A5F",
    sector: "Defense",
    clientLabel: "U.S. Navy / NAWCAD",
    deliveredUnder: "Spalding Consulting, a Saalex company, contract N0042118D0006",
    duration: "24 months",
    role: "Enterprise Architecture & IT Logistics",
    complianceFrameworks: ["RMF", "NIST 800-171"],
  },
  {
    slug: "gsa-federal-modernization",
    title: "GSA Technology Modernization",
    category: "Cloud Infrastructure",
    shortDescription:
      "Technology modernization supporting the General Services Administration through cloud migration, process automation, and IT governance work.",
    heroDescription:
      "Cloud adoption, automation, and governance work supporting GSA modernization.",
    overview:
      "Technology modernization work supporting the General Services Administration, performed under TG Federal as a subcontractor to Booz Allen Hamilton. The scope spanned cloud migration planning, infrastructure automation, IT governance framework development, and organizational change management, helping agencies adopt modern technology practices while meeting federal compliance mandates.",
    challenge:
      "Federal agencies faced mandates to modernize aging IT systems but lacked the internal expertise and capacity to execute complex migrations. Disconnected governance processes, limited cloud experience, and resistance to change across organizational units created barriers to adoption. Agencies needed to demonstrate compliance with OMB directives and federal security requirements throughout the modernization process.",
    solution:
      "Phased modernization roadmaps were built around each agency's mission requirements and compliance obligations. Cloud readiness assessments fed governance frameworks aligned to FISMA and FedRAMP, and automated provisioning patterns shortened migration timelines. Change management workshops and technical training built internal capability for sustainable operations after migration.",
    results: [
      "Cloud migration roadmaps aligned with agency mission and OMB mandates",
      "Governance frameworks mapped to FISMA and FedRAMP requirements",
      "Automated provisioning reducing migration timeline and manual effort",
      "Change management program increasing organizational readiness",
      "Technical training building sustainable internal cloud capability",
      "Improved IT governance visibility for agency leadership",
    ],
    technologies: ["AWS", "Azure", "Terraform", "ServiceNow", "Power BI", "Jira", "Confluence", "SSO"],
    accentColor: "#065F46",
    sector: "Federal Civilian",
    clientLabel: "Federal Civilian Agencies",
    deliveredUnder: "TG Federal, subcontractor to Booz Allen Hamilton",
    metrics: [
      { value: "3", label: "Agencies Supported" },
    ],
    duration: "14 months",
    role: "Cloud Migration & Governance Delivery",
    complianceFrameworks: ["FISMA", "FedRAMP", "NIST 800-53"],
  },
  {
    slug: "navy-program-governance",
    title: "Navy IT Program Governance & EVM Oversight",
    category: "Program Management",
    shortDescription:
      "PMO governance and earned value management for Navy IT programs, with integrated scheduling and audit-ready documentation.",
    heroDescription:
      "Delivering disciplined program governance, EVM compliance, and integrated scheduling for Navy aviation IT programs.",
    overview:
      "Program management support for Naval Air Warfare Center Aircraft Division IT programs, performed under Spalding Consulting. The work established PMO governance frameworks, implemented earned value management systems, and developed integrated master schedules, bringing structure and accountability to multi-year IT initiatives and supporting consistent reporting to program leadership.",
    challenge:
      "Multiple Navy IT programs lacked standardized governance frameworks, leading to inconsistent cost reporting, schedule variances that went undetected, and difficulty demonstrating program health to oversight bodies. EVM data was manually compiled from disconnected sources, resulting in delayed and unreliable reporting. Programs faced upcoming GAO audits without the documentation rigor or traceability required.",
    solution:
      "A centralized PMO brought standardized governance processes across the supported programs. An earned value management system pulled data automatically from project schedules and financial systems. Integrated master schedules linked technical milestones to contract deliverables, and audit-ready documentation packages provided traceability from requirements through delivery.",
    results: [
      "PMO governance framework standardized across supported Navy IT programs",
      "Earned value management system with automated variance analysis",
      "Integrated master schedules linking milestones to contract deliverables",
      "Audit-ready documentation packages prepared for GAO and IG reviews",
      "Automated data collection replacing manual EVM compilation",
      "Consistent cost and schedule reporting to program leadership",
    ],
    technologies: ["Microsoft Project", "Oracle Primavera P6", "Deltek Cobra", "Power BI", "ServiceNow ITBM", "Jira", "Confluence"],
    accentColor: "#9333EA",
    sector: "Defense",
    clientLabel: "U.S. Navy / NAWCAD",
    deliveredUnder: "Spalding Consulting, a Saalex company, contract N0042118D0006",
    duration: "18 months",
    role: "Program Management & EVM Oversight",
    complianceFrameworks: ["ANSI/EIA-748 (EVM)", "OMB A-11", "FAR/DFARS"],
    featured: true,
  },
  {
    slug: "space-force-agile-delivery",
    title: "Space Force Agile Release Train Coordination",
    category: "Agile Delivery",
    shortDescription:
      "Agile Release Train ceremonies and PI Planning coordinated across multiple Scrum teams for Space Force command and control programs.",
    heroDescription:
      "Accelerating Space Force C2 delivery through SAFe Release Train Engineering, PI Planning facilitation, and cross-team coordination.",
    overview:
      "Release Train Engineering support for U.S. Space Force Space Systems Command programs, performed under Leidos on the Kobayashi Maru program. The work coordinated multiple Agile teams delivering command and control software, facilitated PI Planning events on 10-week cadences, ran ART-level ceremonies, and tracked flow metrics to improve delivery predictability.",
    challenge:
      "Space Force C2 programs had adopted Agile practices at the team level but lacked coordination across teams delivering interdependent capabilities. PI Planning events were inconsistent, cross-team dependencies went unmanaged, and there was no visibility into ART-level flow metrics. The multi-contractor environment added complexity, with teams using different tools and processes that made synchronized delivery difficult.",
    solution:
      "Release Train Engineering practices aligned to SAFe established consistent PI Planning cadences with structured preparation, execution, and follow-through. Scrum of Scrums and ART Sync ceremonies surfaced and managed cross-team dependencies. Executive dashboards tracked flow metrics and PI predictability, and tooling was aligned across the multiple contractors on the train.",
    results: [
      "4 Agile teams coordinated across a unified Agile Release Train",
      "5 PI Planning increments executed on cadence",
      "Cross-team dependency management reducing integration risks",
      "ART-level flow metrics dashboard for executive visibility",
      "Improved PI predictability measure across increments",
      "Standardized Agile ceremonies across multi-contractor teams",
    ],
    technologies: ["Jira Align", "Jira", "Confluence", "Miro", "GitLab", "Power BI", "Azure DevOps"],
    accentColor: "#DC2626",
    sector: "Defense",
    clientLabel: "U.S. Space Force (SSC)",
    deliveredUnder: "Leidos, Space Command and Control Software Factory (Kobayashi Maru)",
    metrics: [
      { value: "4", label: "Agile Teams Coordinated" },
      { value: "5", label: "PI Increments Delivered" },
    ],
    duration: "12 months",
    role: "Release Train Engineering & Agile Delivery",
    complianceFrameworks: ["DoW Software Acquisition Pathway", "TechFAR"],
    featured: true,
  },
  {
    slug: "zero-trust-security-architecture",
    title: "Zero-Trust Security Architecture for Federal Agency",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "A zero-trust security architecture aligned with NIST 800-207, replacing legacy perimeter defenses with identity-centric access controls.",
    heroDescription:
      "Transforming federal cybersecurity posture through zero-trust architecture, identity-centric controls, and continuous verification.",
    overview:
      "A federal civilian agency moving off legacy perimeter-based security needed a zero-trust architecture. The work covered identity provider consolidation, micro-segmentation, continuous authentication, and real-time threat monitoring aligned to NIST 800-207 and OMB M-22-09 zero-trust mandates.",
    challenge:
      "The agency relied on traditional perimeter-based security that assumed trust within the network boundary. Remote work expansion, cloud adoption, and increasing insider threat concerns exposed critical gaps. Multiple identity providers created inconsistent access policies, and lateral movement within the network was largely unmonitored. The agency faced OMB deadlines to adopt zero-trust principles.",
    solution:
      "A phased zero-trust rollout started with identity consolidation and multi-factor authentication enforcement. Micro-segmentation went in across critical network zones, alongside continuous device posture assessment and behavioral analytics for anomaly detection. Policy engines enforced least-privilege access decisions based on user identity, device health, location, and resource sensitivity.",
    results: [
      "Zero-trust architecture deployed across critical systems",
      "Multi-factor authentication enforced for all user accounts",
      "Micro-segmentation limiting lateral movement across network zones",
      "Continuous device posture assessment for all endpoints",
      "Real-time behavioral analytics detecting anomalous access patterns",
      "Controls mapped to OMB M-22-09 zero-trust requirements",
    ],
    technologies: ["Azure AD", "CrowdStrike", "Palo Alto Prisma", "Splunk", "Okta", "Zscaler", "Terraform"],
    accentColor: "#B45309",
    sector: "Federal Civilian",
    clientLabel: "Federal Civilian Agency",
    duration: "10 months",
    role: "Zero-Trust Architecture & Security Engineering",
    complianceFrameworks: ["NIST 800-207", "OMB M-22-09", "NIST 800-53", "FISMA"],
    featured: true,
  },
  {
    slug: "ai-document-processing-platform",
    title: "AI-Powered Document Processing Platform",
    category: "AI/ML Infrastructure",
    shortDescription:
      "An intelligent document processing platform using LLM orchestration and OCR to automate intake, extraction, and classification of federal forms at scale.",
    heroDescription:
      "Automating federal document processing with intelligent extraction, classification, and routing at enterprise scale.",
    overview:
      "A federal agency processing thousands of forms, applications, and pieces of correspondence each month needed the intake automated. The platform combines optical character recognition, large language model orchestration, and custom extraction pipelines to handle intake, data extraction, classification, and routing.",
    challenge:
      "The agency processed over 10,000 documents monthly through manual review, with staff spending significant time on data entry, classification, and routing. Error rates from manual processing caused downstream delays, and peak submission periods created backlogs. The agency needed to maintain accuracy while dramatically reducing processing time and manual labor.",
    solution:
      "A multi-stage processing pipeline uses AWS Textract for OCR, AWS Bedrock for extraction and classification, and custom LangChain agents for routing and validation. A human-in-the-loop review interface catches low-confidence extractions, automated quality scoring runs on every document, and audit trails cover the full path. A React dashboard provides processing metrics and queue management.",
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
    ],
    duration: "7 months",
    role: "AI/ML Platform Architecture & Delivery",
  },
  {
    slug: "realtime-operational-analytics",
    title: "Real-Time Operational Analytics Dashboard",
    category: "Data & Analytics",
    shortDescription:
      "A unified real-time analytics platform consolidating 15 data sources into a single operational dashboard with sub-5-second data latency.",
    heroDescription:
      "Enabling real-time operational awareness through unified data streaming, advanced analytics, and executive dashboards for defense programs.",
    overview:
      "A defense program needed unified situational awareness across systems that did not talk to each other. The platform ingests streaming data from 15 operational systems, applies real-time transformations and anomaly detection, and presents role-based dashboards for operators, analysts, and executive leadership.",
    challenge:
      "Program leadership lacked unified visibility into operational status, with data scattered across 15 disconnected systems each with different formats, update frequencies, and access methods. Analysts spent hours manually compiling reports from multiple sources, and decision-makers often worked with stale data. There was no capability for real-time alerting on critical operational thresholds.",
    solution:
      "The streaming architecture uses Apache Kafka for real-time ingestion, Elasticsearch for indexing and search, and Grafana for visualization. Custom transformation pipelines built with dbt produce the analytical models, anomaly detection drives automated alerting, and role-based dashboards give each stakeholder group the right level of detail. Report generation and historical trend analysis run automatically.",
    results: [
      "15 data sources unified into a single operational platform",
      "Sub-5-second data latency from source to dashboard",
      "Role-based dashboards for operators, analysts, and executives",
      "Automated anomaly detection and threshold alerting",
      "Real-time data access replacing stale manual reports",
      "Automated report generation replacing manual compilation",
    ],
    technologies: ["Apache Kafka", "Elasticsearch", "Grafana", "dbt", "Python", "AWS", "PostgreSQL", "Docker"],
    accentColor: "#059669",
    sector: "Defense",
    clientLabel: "Defense Program Office",
    metrics: [
      { value: "<5s", label: "Data Latency" },
      { value: "15", label: "Sources Unified" },
    ],
    duration: "8 months",
    role: "Data Engineering & Analytics Platform",
    complianceFrameworks: ["NIST 800-53", "RMF"],
  },
  {
    slug: "healthcare-system-integration",
    title: "Healthcare System Integration & Interoperability",
    category: "SaaS Solutions",
    shortDescription:
      "12 disparate healthcare systems integrated using HL7 FHIR standards, enabling patient data exchange under HIPAA.",
    heroDescription:
      "Connecting healthcare systems through FHIR-based interoperability so patient data moves cleanly across providers and platforms.",
    overview:
      "A regional healthcare network operated 12 disconnected clinical, administrative, and billing systems. Using HL7 FHIR interoperability standards, the work established bi-directional data exchange pipelines, patient identity resolution, and a unified API gateway giving authorized applications access to consolidated patient records under HIPAA requirements.",
    challenge:
      "The healthcare network operated 12 disconnected systems including EHR platforms, lab information systems, billing engines, and patient portals. Patient data was duplicated and inconsistent across systems, requiring manual reconciliation that delayed care coordination. No standardized API existed for new application integrations, and each system connection required custom point-to-point interfaces that were costly to maintain.",
    solution:
      "A FHIR-based integration platform with a central API gateway became the hub for every system interconnection. Patient identity resolution used probabilistic matching. Bi-directional synchronization pipelines carried conflict resolution logic, and audit logging covered HIPAA requirements throughout. A ServiceNow service catalog lets clinical teams request new integrations through a governed workflow.",
    results: [
      "12 healthcare systems integrated through a FHIR-based API gateway",
      "Point-to-point interfaces replaced with a single integration hub",
      "Bi-directional data exchange with automated conflict resolution",
      "Patient identity resolution using probabilistic matching",
      "ServiceNow-based integration request workflow",
      "Audit logging covering all data exchanges",
    ],
    technologies: ["HL7 FHIR", "Azure", "ServiceNow", "REST APIs", "Python", "PostgreSQL", "Docker", "Mirth Connect"],
    accentColor: "#B45309",
    sector: "Healthcare",
    clientLabel: "Regional Healthcare Network",
    metrics: [
      { value: "12", label: "Systems Integrated" },
    ],
    duration: "11 months",
    role: "System Integration & Interoperability",
    complianceFrameworks: ["HIPAA", "HITECH", "HL7 FHIR R4"],
  },
  {
    slug: "enterprise-security-operations-center",
    title: "Enterprise Cybersecurity Operations Center",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "A 24/7 Security Operations Center with SIEM deployment, threat hunting playbooks, and automated incident response.",
    heroDescription:
      "Building enterprise-grade security operations with continuous monitoring, automated threat detection, and rapid incident response capabilities.",
    overview:
      "A defense contractor with no centralized security monitoring needed a 24/7 Security Operations Center. The work covered SIEM platform deployment, security orchestration and automated response, threat intelligence integration, and development of detection rules and incident response playbooks aligned to the MITRE ATT&CK framework.",
    challenge:
      "The organization had no centralized security monitoring capability, relying on individual tool alerts that were often missed or delayed. Security events from firewalls, endpoints, cloud environments, and applications were siloed, making correlated threat detection impossible. When incidents were detected, response was ad-hoc with no standardized playbooks, leading to inconsistent containment and lengthy resolution times.",
    solution:
      "Splunk Enterprise Security went in as the central SIEM, pulling log sources from network, endpoint, cloud, and application layers. CrowdStrike handled endpoint detection and response. Automated response playbooks were built on SOAR capabilities, and a threat hunting program ran weekly campaigns mapped to MITRE ATT&CK techniques. A tiered analyst model set clear escalation paths and SLAs for incident classification and response.",
    results: [
      "24/7 security monitoring across all enterprise environments",
      "Correlated detection across network, endpoint, cloud, and application logs",
      "Mean time to detection reduced to under 15 minutes",
      "Automated response playbooks for the top 20 incident types",
      "Threat hunting program with weekly campaigns",
      "Tiered analyst model with defined escalation paths and SLAs",
    ],
    technologies: ["Splunk Enterprise Security", "CrowdStrike", "Palo Alto", "Ansible", "Python", "Jira", "MITRE ATT&CK"],
    accentColor: "#B45309",
    sector: "Defense",
    clientLabel: "Defense Contractor",
    metrics: [
      { value: "24/7", label: "Monitoring Coverage" },
      { value: "50+", label: "Playbooks Deployed" },
    ],
    duration: "9 months",
    role: "SOC Architecture & Security Operations",
    complianceFrameworks: ["NIST 800-53", "CMMC", "MITRE ATT&CK", "NIST 800-171"],
  },
  {
    slug: "cloud-cost-optimization",
    title: "Enterprise Cloud Cost Optimization Platform",
    category: "Cloud Infrastructure",
    shortDescription:
      "A FinOps platform for a financial services firm providing cloud cost visibility, automated rightsizing recommendations, and policy-driven governance.",
    heroDescription:
      "Bringing financial accountability to cloud operations through real-time cost visibility, automated optimization, and FinOps best practices.",
    overview:
      "A mid-market financial services firm had cloud spend growing without clear accountability or cost attribution. The work established a FinOps operating model with real-time cost visibility dashboards, automated rightsizing recommendations, reserved instance management, and policy-driven guardrails across 500+ cloud resources spanning development, staging, and production.",
    challenge:
      "The firm's cloud spend had grown 60% year over year with no clear accountability or cost attribution. Engineering teams provisioned resources without visibility into spending impact, reserved instances were underutilized, and idle resources accumulated across environments. Finance and engineering operated in silos, with monthly billing surprises eroding trust and making budget forecasting unreliable.",
    solution:
      "The FinOps platform was anchored by CloudHealth for cost management and Grafana for visualization. Automated rightsizing pipelines built in Python and Lambda analyzed resource utilization continuously and surfaced optimization recommendations. Terraform modules enforced tagging policies and cost allocation standards, scheduled functions flagged idle resources for review, and a weekly review cadence brought engineering leads and finance stakeholders together.",
    results: [
      "500+ cloud resources profiled, tagged, and optimized",
      "Real-time cost dashboards with team-level spend attribution",
      "Automated rightsizing recommendations delivered weekly",
      "Tagging and cost allocation standards enforced through Terraform",
      "Idle resource detection running on a scheduled cadence",
      "Weekly FinOps review cadence between engineering and finance",
    ],
    technologies: ["AWS", "CloudHealth", "Terraform", "Python", "Grafana", "Lambda", "S3", "CloudWatch"],
    accentColor: "#1E3A5F",
    sector: "Commercial",
    clientLabel: "Financial Services Firm",
    metrics: [
      { value: "500+", label: "Resources Optimized" },
    ],
    duration: "6 months",
    role: "FinOps Strategy & Cloud Optimization",
  },
  {
    slug: "retail-analytics-platform",
    title: "Retail Analytics & Customer Intelligence Platform",
    category: "Data & Analytics",
    shortDescription:
      "A customer intelligence platform unifying behavioral analytics, product recommendations, and real-time inventory optimization across 200+ stores.",
    heroDescription:
      "Transforming retail operations through unified customer analytics, intelligent product recommendations, and real-time inventory visibility.",
    overview:
      "A national retail chain needed fragmented customer data unified, recommendation accuracy improved, and inventory allocation optimized across 200+ store locations. The platform consolidated point-of-sale, e-commerce, loyalty, and supply chain feeds into a governed analytics layer powering real-time operational decisions.",
    challenge:
      "The retailer's customer data was fragmented across six disconnected systems with no unified customer profile. Marketing campaigns relied on broad segmentation rather than behavioral insights, resulting in low conversion rates. Inventory allocation was driven by historical averages rather than demand signals, leading to frequent stockouts on high-demand items and excess inventory on slow movers. No infrastructure existed for real-time data processing or recommendation delivery.",
    solution:
      "The data stack is anchored by Snowflake as the central warehouse, with dbt handling transformation logic and Apache Airflow orchestrating 40+ pipelines. Kafka streams carry real-time events from POS and e-commerce platforms. A customer identity resolution layer unified 2M+ profiles, a recommendation engine runs collaborative filtering, and Tableau dashboards refresh store-level inventory insights every 15 minutes.",
    results: [
      "2M+ customer profiles unified from six disparate data sources",
      "Real-time inventory visibility with 15-minute refresh cycles",
      "Recommendation engine serving personalized product suggestions",
      "40+ automated data pipelines with built-in quality validation",
      "Streaming event ingestion from point-of-sale and e-commerce",
      "Store-level analytics available across 200+ locations",
    ],
    technologies: ["Snowflake", "dbt", "Apache Airflow", "Python", "Tableau", "AWS", "Kafka", "Redis"],
    accentColor: "#059669",
    sector: "Commercial",
    clientLabel: "National Retail Chain",
    metrics: [
      { value: "2M+", label: "Customer Profiles Unified" },
      { value: "200+", label: "Stores Supported" },
    ],
    duration: "8 months",
    role: "Data Platform Architecture & Analytics",
  },
  {
    slug: "enterprise-iam-modernization",
    title: "Enterprise Identity & Access Management Modernization",
    category: "Cybersecurity & Compliance",
    shortDescription:
      "Fragmented identity systems consolidated into a unified IAM platform with SSO, role-based access control, and automated compliance reporting.",
    heroDescription:
      "Modernizing enterprise identity management through unified SSO, automated access governance, and role-based security controls.",
    overview:
      "A professional services organization managing 5,000+ employees across 12 office locations had five legacy identity providers accumulated through acquisitions. The work consolidated them into a unified platform with single sign-on, automated provisioning and deprovisioning, role-based access control aligned to job functions, and privileged access management for sensitive systems.",
    challenge:
      "The organization operated five disconnected identity systems accumulated through acquisitions, with no consistent authentication standard. Employees maintained separate credentials for different applications, leading to password fatigue and security risk. Access reviews were manual and audit-unfriendly, with no clear mapping between job roles and application entitlements. Privileged accounts lacked proper vaulting or session monitoring, creating compliance gaps during annual audits.",
    solution:
      "The IAM architecture uses Okta as the primary identity provider with Azure AD for directory services. SSO was integrated across 85+ enterprise applications, and provisioning and deprovisioning workflows were tied to HR system events. CyberArk handles privileged access with session recording. Terraform automated the IAM infrastructure provisioning, and ServiceNow fronts access request workflows and quarterly access certification campaigns.",
    results: [
      "SSO integrated across 85+ enterprise applications",
      "Five legacy identity providers consolidated into one platform",
      "Role-based access control mapped to job functions",
      "Automated provisioning and deprovisioning tied to HR events",
      "Privileged access vaulted with session recording",
      "Quarterly access certification campaigns automated end-to-end",
    ],
    technologies: ["Okta", "Azure AD", "CyberArk", "Terraform", "Python", "ServiceNow", "SCIM", "SAML"],
    accentColor: "#B45309",
    sector: "Enterprise",
    clientLabel: "Professional Services Organization",
    metrics: [
      { value: "5,000+", label: "Users Migrated" },
      { value: "85+", label: "Applications Integrated" },
    ],
    duration: "7 months",
    role: "IAM Architecture & Security Engineering",
  },
  {
    slug: "intelligent-automation-platform",
    title: "Intelligent Automation & Process Mining",
    category: "AI/ML Infrastructure",
    shortDescription:
      "An intelligent automation platform combining process mining, RPA, and workflow orchestration across 15 core business processes.",
    heroDescription:
      "Accelerating enterprise operations through process mining, robotic process automation, and intelligent workflow orchestration.",
    overview:
      "A large logistics and supply chain company needed manual operational overhead reduced and process consistency improved. The work combined process mining to identify automation candidates, RPA development and deployment for high-volume repetitive tasks, and intelligent workflow orchestration for complex multi-step processes spanning several business systems.",
    challenge:
      "The company's operations teams spent over 60% of their time on manual, repetitive tasks across order processing, vendor onboarding, invoice reconciliation, and compliance reporting. Processes were poorly documented, with significant variation between teams and locations. Previous automation attempts had failed due to lack of process understanding, resulting in bots that broke frequently and required constant maintenance.",
    solution:
      "Celonis process mining analyzed 18 months of event log data to map actual process flows and rank the highest-impact automation candidates. UiPath bots were then built for 15 core processes, split between attended and unattended automation by complexity. Power Automate handled simpler workflow orchestration, a React operations dashboard gave visibility into bot performance and exception handling, and MongoDB stored execution logs for ongoing optimization analysis.",
    results: [
      "15 core business processes fully automated",
      "Process mining analysis covering 18 months of operational data",
      "Attended and unattended automation matched to process complexity",
      "Real-time operations dashboard for bot monitoring and exception management",
      "Execution logs retained for ongoing optimization analysis",
      "Documented process baselines replacing undocumented team variation",
    ],
    technologies: ["UiPath", "Celonis", "Python", "AWS", "Power Automate", "MongoDB", "React", "Docker"],
    accentColor: "#065F46",
    sector: "Enterprise",
    clientLabel: "Logistics & Supply Chain Company",
    metrics: [
      { value: "15", label: "Processes Automated" },
      { value: "18mo", label: "Process Data Analyzed" },
    ],
    duration: "9 months",
    role: "Intelligent Automation & Process Engineering",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
