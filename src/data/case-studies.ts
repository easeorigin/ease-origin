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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization for Federal Agency",
    category: "Cloud Infrastructure",
    shortDescription:
      "Migrated legacy systems to a secure cloud architecture, improving scalability and operational efficiency.",
    heroDescription:
      "Helping a federal agency modernize legacy systems through secure cloud migration and infrastructure optimization.",
    overview:
      "EaseOrigin partnered with a federal agency to modernize legacy infrastructure and transition mission-critical systems to a scalable cloud platform. The engagement spanned 18 months and involved migrating over 40 on-premises applications to a FedRAMP-authorized cloud environment while ensuring zero disruption to agency operations.",
    challenge:
      "The agency relied on outdated on-premises infrastructure that had grown beyond its original capacity. Systems were siloed, difficult to maintain, and increasingly unable to support modern interoperability requirements. Operational costs were rising as legacy hardware required frequent maintenance, and the agency faced mounting pressure to meet federal cloud mandates under the Cloud Smart initiative.",
    solution:
      "EaseOrigin implemented a cloud-first architecture using a phased migration approach. We conducted a thorough application portfolio assessment, categorized workloads for lift-and-shift versus re-platforming, and established secure landing zones within a FedRAMP High authorized environment. We deployed automated compliance monitoring, continuous integration pipelines, and cloud-native disaster recovery — reducing recovery time objectives from hours to minutes.",
    results: [
      "40+ applications migrated with zero downtime",
      "42% reduction in annual infrastructure operating costs",
      "99.97% uptime achieved post-migration",
      "FedRAMP High authorization maintained throughout",
      "Deployment frequency improved from quarterly to weekly",
      "Incident response time reduced by 65%",
    ],
    technologies: ["AWS GovCloud", "Azure Government", "Terraform", "Kubernetes", "Docker", "Ansible", "Python"],
    accentColor: "#1E3A5F",
  },
  {
    slug: "cybersecurity-compliance",
    title: "Cybersecurity Compliance Implementation",
    category: "Cybersecurity",
    shortDescription:
      "Implemented federal cybersecurity frameworks and compliance programs to strengthen system security posture.",
    heroDescription:
      "Building a robust NIST-aligned cybersecurity compliance program for a federal civilian agency.",
    overview:
      "EaseOrigin was engaged to design and implement a comprehensive cybersecurity compliance program for a large federal civilian agency. The engagement covered NIST SP 800-53 controls implementation, continuous monitoring, penetration testing, and an agency-wide security awareness training rollout across 3,200+ personnel.",
    challenge:
      "The agency had received an IG audit finding identifying critical gaps in its security control implementation. Systems lacked consistent patching schedules, access controls were not aligned with the principle of least privilege, and there was no mature incident response capability. Achieving Authority to Operate (ATO) renewals was at risk.",
    solution:
      "EaseOrigin performed a gap analysis against NIST SP 800-53 Rev. 5 controls and developed a remediation roadmap prioritized by risk severity. We deployed a SIEM solution for continuous monitoring, implemented zero-trust network segmentation, enforced multi-factor authentication agency-wide, and built a Security Operations Center (SOC) capability. We also delivered a role-based security awareness training curriculum.",
    results: [
      "100% ATO renewals achieved on schedule",
      "Zero critical vulnerabilities remaining at program close",
      "SIEM deployed covering 15,000+ endpoints",
      "Mean time to detect (MTTD) reduced by 71%",
      "Agency security score improved from 58 to 94 (out of 100)",
      "3,200+ personnel completed security awareness training",
    ],
    technologies: ["Splunk", "CrowdStrike", "Tenable.io", "Okta", "AWS Security Hub", "NIST SP 800-53", "SIEM"],
    accentColor: "#B45309",
  },
  {
    slug: "data-analytics-platform",
    title: "Data Analytics Platform for Decision Support",
    category: "Data & Analytics",
    shortDescription:
      "Developed analytics dashboards enabling agencies to transform large datasets into actionable insights.",
    heroDescription:
      "Delivering a modern data analytics platform that turns complex federal datasets into clear, actionable intelligence.",
    overview:
      "EaseOrigin designed and deployed an enterprise data analytics platform for a federal agency managing large volumes of program performance data. The solution consolidated data from 12 disparate source systems into a unified data lake and provided analysts and executives with self-service dashboards and automated reporting capabilities.",
    challenge:
      "Agency analysts spent an estimated 60% of their time manually extracting and reconciling data from disconnected systems. Leadership lacked real-time visibility into program performance metrics, and reporting cycles took three to four weeks to complete. Data quality issues were common, undermining confidence in reported outcomes.",
    solution:
      "EaseOrigin architected a cloud-native data lake on AWS GovCloud, implemented ETL pipelines to ingest and normalize data from all 12 source systems, and deployed a Tableau-based analytics layer with role-based access control. We built automated data quality validation rules, created executive-level KPI dashboards, and established a DataOps practice to support continuous improvement of the analytics environment.",
    results: [
      "12 source systems integrated into a single data lake",
      "Reporting cycle reduced from 4 weeks to 2 hours",
      "60% reduction in manual analyst data preparation time",
      "Executive dashboards delivering real-time KPI visibility",
      "Data quality error rate reduced from 18% to under 0.5%",
      "40+ automated reports replacing manual processes",
    ],
    technologies: ["AWS GovCloud", "Apache Spark", "dbt", "Tableau", "Python", "PostgreSQL", "Apache Airflow"],
    accentColor: "#065F46",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
