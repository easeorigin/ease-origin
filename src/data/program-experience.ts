/**
 * Program experience, not contract vehicles.
 *
 * A "contract vehicle" is a contract your own company can take orders against.
 * EaseOrigin holds none. What follows is engineering work performed by
 * EaseOrigin personnel while employed by the organizations named, published
 * under `attributionNotice` from company-info.
 *
 * Before adding an entry, check it against the employment agreements, NDAs,
 * and separation agreements covering that work. A program name being public on
 * USAspending is not permission to describe what you built on it.
 */

export type ExperienceRole =
  /** Performed by a person now at EaseOrigin, as a W-2 employee of the prime or sub named. */
  | "Founder Experience (W-2)"
  /** EaseOrigin LLC held a subcontract. None yet. */
  | "Company Subcontract"
  /** EaseOrigin LLC held the prime contract. None yet. */
  | "Company Prime";

export interface ProgramExperience {
  slug: string;
  programName: string;
  /** Public contract number where one exists. Never a schedule or vehicle name. */
  contractNumber?: string;
  agency: string;
  /** The organization that actually held the contract. */
  prime: string;
  role: ExperienceRole;
  description: string;
  scope: string[];
  relatedCaseStudySlugs: string[];
  relatedSolutionSlugs: string[];
}

export const programExperience: ProgramExperience[] = [
  {
    slug: "saic-cloud-one",
    programName: "DoW Common Computing Environment",
    agency: "U.S. Air Force / DoW",
    prime: "Ikeda Innovations, subcontractor to SAIC on Cloud One",
    role: "Founder Experience (W-2)",
    description:
      "Oracle Cloud Infrastructure architecture and operations for the Department of War Common Computing Environment, delivered through Ikeda Innovations under SAIC's Cloud One program.",
    scope: [
      "Oracle Cloud Infrastructure architecture and management",
      "IL5 security compliance and STIG automation",
      "Compartment-based tenant isolation",
      "Automated provisioning and infrastructure as code",
    ],
    relatedCaseStudySlugs: ["dod-oracle-cloud"],
    relatedSolutionSlugs: ["cloud-infrastructure", "cybersecurity", "devops-platform"],
  },
  {
    slug: "leidos-kobayashi-maru",
    programName: "Space Command and Control Software Factory (Kobayashi Maru)",
    agency: "U.S. Space Force (SSC)",
    prime: "Leidos",
    role: "Founder Experience (W-2)",
    description:
      "Cloud engineering and DevSecOps delivery for the Space Command and Control Software Factory supporting U.S. Space Force operations, performed under Leidos.",
    scope: [
      "DevSecOps pipeline architecture and automation",
      "Containerized application deployment",
      "Continuous integration and delivery workflows",
      "Security scanning integrated at every pipeline stage",
    ],
    relatedCaseStudySlugs: ["space-force-c2"],
    relatedSolutionSlugs: ["devops-platform", "cybersecurity", "agile-delivery"],
  },
  {
    slug: "nawcad-navy",
    programName: "Navy Logistics Support Services (NAWCAD)",
    contractNumber: "N0042118D0006",
    agency: "U.S. Navy",
    prime: "Spalding Consulting, a Saalex company",
    role: "Founder Experience (W-2)",
    description:
      "IT logistics, cybersecurity compliance, and enterprise architecture support to NAWCAD, performed under Spalding Consulting.",
    scope: [
      "IT logistics and supply chain support",
      "Cybersecurity compliance and RMF support",
      "Enterprise architecture and modernization",
      "System integration and data migration",
    ],
    relatedCaseStudySlugs: ["navy-logistics-support"],
    relatedSolutionSlugs: ["cloud-infrastructure", "cybersecurity", "program-management"],
  },
  {
    slug: "tg-federal-gsa",
    programName: "GSA Modernization Support",
    agency: "General Services Administration",
    prime: "TG Federal, subcontractor to Booz Allen Hamilton",
    role: "Founder Experience (W-2)",
    description:
      "Cloud migration and enterprise platform delivery supporting GSA modernization work, performed under TG Federal as a subcontractor to Booz Allen Hamilton.",
    scope: [
      "Cloud migration strategy and execution",
      "Enterprise platform implementation",
      "Data analytics and business intelligence",
      "Delivery oversight and program reporting",
    ],
    relatedCaseStudySlugs: ["gsa-federal-modernization"],
    relatedSolutionSlugs: ["cloud-infrastructure", "saas-solutions", "program-management"],
  },
  {
    slug: "steampunk-dhs",
    programName: "DHS Technology Modernization",
    agency: "Department of Homeland Security",
    prime: "SteamPunk",
    role: "Founder Experience (W-2)",
    description:
      "Cloud and platform engineering supporting Department of Homeland Security technology modernization, performed under SteamPunk.",
    scope: [
      "Cloud infrastructure engineering",
      "Security control implementation",
      "Delivery automation",
    ],
    relatedCaseStudySlugs: [],
    relatedSolutionSlugs: ["cloud-infrastructure", "cybersecurity", "devops-platform"],
  },
  {
    slug: "black-canyon-nih",
    programName: "NIH Research Computing Support",
    agency: "National Institutes of Health",
    prime: "Black Canyon Consulting",
    role: "Founder Experience (W-2)",
    description:
      "Cloud infrastructure and data platform engineering supporting National Institutes of Health research computing, performed under Black Canyon Consulting.",
    scope: [
      "Cloud infrastructure engineering",
      "Data platform and pipeline support",
      "Automated provisioning",
    ],
    relatedCaseStudySlugs: [],
    relatedSolutionSlugs: ["cloud-infrastructure", "data-analytics"],
  },
];

export interface NAICSCode {
  code: string;
  description: string;
  /** SBA size standard. Verify against the current SBA table before a bid. */
  sizeStandard: string;
  primary?: boolean;
}

export const naicsCodes: NAICSCode[] = [
  {
    code: "541512",
    description: "Computer Systems Design Services",
    sizeStandard: "$34M",
    primary: true,
  },
  { code: "541511", description: "Custom Computer Programming Services", sizeStandard: "$34M" },
  {
    code: "541513",
    description: "Computer Facilities Management Services",
    sizeStandard: "$34M",
  },
  { code: "541519", description: "Other Computer Related Services", sizeStandard: "$34M" },
  {
    code: "518210",
    description: "Computing Infrastructure Providers, Data Processing, Web Hosting",
    sizeStandard: "$40M",
  },
  {
    code: "541611",
    description: "Administrative Management and General Management Consulting Services",
    sizeStandard: "$24.5M",
  },
];

/** Product service codes to watch and to cite on a capability statement. */
export const pscCodes: { code: string; description: string }[] = [
  { code: "DF01", description: "IT and Telecom, Cloud Application Services (SaaS)" },
  { code: "DA01", description: "IT and Telecom, Business Application Development Support Services" },
  { code: "DA10", description: "IT and Telecom, Business Application Development Support" },
  { code: "DE02", description: "IT and Telecom, Cloud Infrastructure Services (IaaS)" },
  { code: "D302", description: "IT and Telecom, Systems Development" },
  { code: "D307", description: "IT and Telecom, IT Strategy and Architecture" },
  { code: "D310", description: "IT and Telecom, Cyber Security and Data Backup" },
  { code: "D399", description: "IT and Telecom, Other IT and Telecommunications" },
];

/**
 * What EaseOrigin is seeking, aimed at prime small business liaison officers.
 * Contract vehicles held: none. That is stated plainly because it is the
 * predicate for a neutral past performance rating under FAR 15.305(a)(2)(iv),
 * not something to work around.
 */
export const teamingProfile = {
  seeking: [
    "Subcontract scope on prime-held vehicles across cloud, platform, and DevSecOps",
    "Small business subcontracting plan credit on federal IT programs",
    "Compliance-heavy workstreams: STIG automation, RMF packages, NIST 800-53 control implementation",
    "Task order support on cleared programs, staffed without a hiring cycle",
  ],
  /**
   * Rates are deliberately not published here. Publishing a range is a strong
   * signal to a prime's small business liaison, but it has to be the rate the
   * firm will actually honor. Add a `rate` field per category once those
   * numbers are set, and render them on the teaming block.
   */
  laborCategories: [
    { title: "Cloud Platform Engineer, Senior" },
    { title: "DevSecOps Engineer, Senior" },
    { title: "Cloud Solutions Architect" },
    { title: "Infrastructure Automation Engineer" },
  ],
  vehiclesHeld: "None. Available as a subcontractor on prime-held vehicles.",
} as const;
