export type WorkType = "onsite" | "remote" | "hybrid";

export type EmploymentType = "contract" | "part-time" | "full-time";

export type Category =
  | "software engineering"
  | "cloud engineering"
  | "cybersecurity"
  | "data & analytics"
  | "project management"
  | "devOps"
  | "web design"
  | "others";
export interface Job {
  slug: string;
  title: string;
  category: Category;
  location: string;
  workType: WorkType;
  shortDescription?: string;
  aboutRole?: string;
  responsibilities: string[];
  qualifications: string[];
  technologies: string[];
  clearance?: string;
}

export const jobs: Job[] = [
  {
    slug: "senior-cloud-engineer",
    title: "Senior Cloud Engineer",
    category: "cloud engineering",
    location: "United States",
    workType: "remote",
    shortDescription:
      "Design and implement secure, scalable cloud infrastructure for federal agency modernization initiatives.",
    aboutRole:
      "EaseOrigin is seeking a Senior Cloud Engineer to support cloud modernization initiatives for federal agencies. In this role you will architect, deploy, and maintain FedRAMP-compliant cloud environments and guide migration of legacy systems to modern cloud platforms.",
    responsibilities: [
      "Design and implement cloud-native architectures on AWS GovCloud and Azure Government",
      "Lead migration of legacy on-premises workloads to cloud environments",
      "Establish landing zones, security guardrails, and CI/CD pipelines",
      "Ensure environments meet FedRAMP High compliance requirements",
      "Collaborate with security and compliance teams on continuous monitoring",
      "Provide technical leadership and mentorship to junior engineers",
    ],
    qualifications: [
      "5+ years of hands-on cloud engineering experience",
      "Proficiency with AWS GovCloud and/or Azure Government",
      "Experience with infrastructure-as-code tools (Terraform, CloudFormation)",
      "Familiarity with FedRAMP, NIST SP 800-53, and federal compliance frameworks",
      "Active or eligible for U.S. security clearance",
      "AWS or Azure professional certification preferred",
    ],
    technologies: ["AWS GovCloud", "Azure Government", "Terraform", "Kubernetes", "Docker", "Ansible"],
    clearance: "Secret (or ability to obtain)",
  },
  {
    slug: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "cybersecurity",
    location: "United States",
    workType: "hybrid",
    shortDescription:
      "Implement federal cybersecurity frameworks, monitor threats, and support ATO processes for government systems.",
    aboutRole:
      "EaseOrigin is looking for a Cybersecurity Analyst to support federal clients in implementing security compliance programs, continuous monitoring, and incident response. You will play a key role in helping agencies achieve and maintain their Authority to Operate (ATO).",
    responsibilities: [
      "Perform security assessments and gap analyses against NIST SP 800-53 controls",
      "Support ATO package development, including SSP, SAR, and POA&M documentation",
      "Monitor SIEM platforms for threats and anomalies across client environments",
      "Conduct vulnerability scanning and coordinate remediation activities",
      "Develop and deliver security awareness training programs",
      "Respond to and document security incidents",
    ],
    qualifications: [
      "3+ years of cybersecurity experience in federal or government settings",
      "Familiarity with NIST RMF, FedRAMP, and FISMA compliance",
      "Experience with SIEM tools (Splunk, IBM QRadar, or similar)",
      "Strong understanding of vulnerability management practices",
      "CompTIA Security+, CISSP, or CISM certification preferred",
      "Active or eligible for U.S. security clearance",
    ],
    technologies: ["Splunk", "CrowdStrike", "Tenable.io", "Nessus", "Okta", "NIST SP 800-53"],
    clearance: "Public Trust or Secret",
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    category: "data & analytics",
    location: "United States",
    workType: "remote",
    shortDescription:
      "Build data pipelines and analytics infrastructure to help agencies turn complex datasets into actionable insights.",
    aboutRole:
      "EaseOrigin is seeking a Data Engineer to design, build, and maintain scalable data pipelines and analytics platforms for federal agencies. You will work closely with analysts and agency stakeholders to deliver data solutions that support mission-critical decision making.",
    responsibilities: [
      "Design and implement ETL/ELT pipelines across multiple source systems",
      "Build and manage cloud-native data lakes and data warehouses",
      "Develop data quality validation frameworks and monitoring",
      "Collaborate with data analysts and data scientists on analytics solutions",
      "Ensure data governance, lineage, and security compliance",
      "Support self-service analytics tools for agency end users",
    ],
    qualifications: [
      "4+ years of data engineering experience",
      "Proficiency in Python, SQL, and modern data orchestration tools",
      "Experience with cloud-native data platforms (AWS, Azure, GCP government)",
      "Familiarity with dbt, Apache Spark, or Airflow",
      "Understanding of data governance and federal data standards",
      "Active or eligible for U.S. security clearance",
    ],
    technologies: ["Python", "Apache Spark", "dbt", "Apache Airflow", "PostgreSQL", "AWS GovCloud", "Tableau"],
    clearance: "Public Trust",
  },
  {
    slug: "devops-engineer",
    title: "DevOps / Platform Engineer",
    category: "devOps",
    location: "United States",
    workType: "remote",
    shortDescription:
      "Build and maintain CI/CD pipelines, container platforms, and developer tooling for federal IT projects.",
    aboutRole:
      "EaseOrigin is looking for a DevOps / Platform Engineer to accelerate software delivery for federal clients. You will design and operate modern CI/CD infrastructure, container orchestration platforms, and developer tooling that enables secure, high-velocity delivery in government environments.",
    responsibilities: [
      "Design and maintain CI/CD pipelines using GitLab, Jenkins, or GitHub Actions",
      "Manage Kubernetes clusters and containerized workloads in FedRAMP environments",
      "Implement infrastructure-as-code practices across client platforms",
      "Establish monitoring, alerting, and observability stacks",
      "Collaborate with development teams to improve deployment velocity and reliability",
      "Ensure all pipelines and platforms meet federal security and compliance requirements",
    ],
    qualifications: [
      "4+ years of DevOps or platform engineering experience",
      "Strong Kubernetes and container management expertise",
      "Experience with GitLab CI/CD, Jenkins, or GitHub Actions",
      "Proficiency in Terraform and infrastructure-as-code tooling",
      "Understanding of federal compliance requirements for software delivery",
      "Active or eligible for U.S. security clearance",
    ],
    technologies: ["Kubernetes", "Docker", "Terraform", "GitLab CI", "Helm", "Prometheus", "Grafana"],
    clearance: "Secret (or ability to obtain)",
  },
  {
    slug: "federal-project-manager",
    title: "Federal IT Project Manager",
    category: "project management",
    location: "United States",
    workType: "hybrid",
    shortDescription:
      "Lead delivery of complex federal IT programs, managing cross-functional teams and stakeholder relationships.",
    aboutRole:
      "EaseOrigin is seeking an experienced Federal IT Project Manager to lead delivery of technology programs for government agency clients. You will manage scope, schedule, budget, and stakeholder communications across complex multi-team engagements.",
    responsibilities: [
      "Lead planning, execution, and closure of federal IT projects",
      "Manage project scope, schedule, risks, and budget using Agile and waterfall methodologies",
      "Coordinate cross-functional teams of engineers, analysts, and contractors",
      "Build and maintain strong relationships with government contracting officers and program managers",
      "Produce and present project status reports, briefings, and executive dashboards",
      "Ensure deliverables meet contract requirements and quality standards",
    ],
    qualifications: [
      "6+ years of IT project management experience, including federal or government clients",
      "PMP certification required; Agile/Scrum certification preferred",
      "Experience managing projects under FAR and federal acquisition frameworks",
      "Strong written and verbal communication skills",
      "Ability to obtain and maintain U.S. security clearance",
      "Experience with federal reporting tools (Confluence, Jira, MS Project)",
    ],
    technologies: ["Jira", "Confluence", "MS Project", "SharePoint", "Monday.com"],
    clearance: "Public Trust or Secret",
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export const CATEGORIES: Category[] = [
  "software engineering",
  "cloud engineering",
  "cybersecurity",
  "data & analytics",
  "project management",
  "devOps",
];

export const WORK_TYPES: WorkType[] = ["remote", "hybrid", "onsite"];

export const LOCATIONS = [
  "Anywhere",
  "United States",
  "Canada",
  "UK",
  "Nigeria",
  "India",
  "Other",
];
