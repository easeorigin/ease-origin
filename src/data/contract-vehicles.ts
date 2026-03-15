export interface ContractVehicle {
  slug: string;
  vehicleName: string;
  contractNumber: string;
  agency: string;
  prime: string;
  role: "Subcontractor" | "Contract Delivery" | "Direct";
  description: string;
  scope: string[];
  relatedCaseStudySlugs: string[];
  relatedSolutionSlugs: string[];
}

export const contractVehicles: ContractVehicle[] = [
  {
    slug: "saic-cloud-one",
    vehicleName: "SAIC Cloud One",
    contractNumber: "U.S. Air Force / DoD-wide",
    agency: "U.S. Air Force / DoD",
    prime: "Ikeda Innovations (under SAIC)",
    role: "Subcontractor",
    description:
      "Oracle Cloud Infrastructure engineering for the DoD Common Computing Environment through Ikeda Innovations under the SAIC Cloud One program.",
    scope: [
      "Oracle Cloud Infrastructure architecture and management",
      "IL5 security compliance and STIG automation",
      "Compartment-based tenant isolation",
      "Automated provisioning and infrastructure as code",
      "24/7 security monitoring and incident response",
    ],
    relatedCaseStudySlugs: ["dod-oracle-cloud"],
    relatedSolutionSlugs: ["cloud-infrastructure", "cybersecurity", "devops-platform"],
  },
  {
    slug: "leidos-kobayashi-maru",
    vehicleName: "Leidos Kobayashi Maru",
    contractNumber: "U.S. Space Force (SSC)",
    agency: "U.S. Space Force",
    prime: "Leidos",
    role: "Contract Delivery",
    description:
      "Cloud engineering and software delivery for the Space Command and Control Software Factory supporting U.S. Space Force operations.",
    scope: [
      "DevSecOps pipeline architecture and automation",
      "Containerized application deployment",
      "Continuous integration and delivery workflows",
      "Security scanning integration at every stage",
      "Agile Release Train coordination",
    ],
    relatedCaseStudySlugs: ["space-force-c2"],
    relatedSolutionSlugs: ["devops-platform", "cybersecurity", "agile-delivery"],
  },
  {
    slug: "nawcad-navy",
    vehicleName: "NAWCAD N0042118D0006",
    contractNumber: "NAWCAD N0042118D0006",
    agency: "U.S. Navy",
    prime: "Spalding Consulting (Saalex)",
    role: "Contract Delivery",
    description:
      "Navy Logistics Support Services through Spalding Consulting supporting NAWCAD with IT logistics, cybersecurity, and enterprise architecture.",
    scope: [
      "IT logistics and supply chain support",
      "Cybersecurity compliance and RMF support",
      "Enterprise architecture and modernization",
      "System integration and data migration",
      "Program management and oversight",
    ],
    relatedCaseStudySlugs: ["navy-logistics-support"],
    relatedSolutionSlugs: ["cloud-infrastructure", "cybersecurity", "program-management"],
  },
  {
    slug: "tg-federal-gsa",
    vehicleName: "TG Federal / Booz Allen Hamilton",
    contractNumber: "GSA Schedule",
    agency: "GSA / Federal Civilian Agencies",
    prime: "TG Federal (under Booz Allen Hamilton)",
    role: "Subcontractor",
    description:
      "Technology consulting delivery through TG Federal under Booz Allen Hamilton on GSA-scheduled contracts supporting federal agency modernization initiatives.",
    scope: [
      "Federal agency modernization consulting",
      "Cloud migration strategy and execution",
      "Enterprise platform implementation",
      "Data analytics and business intelligence",
      "Program management and delivery oversight",
    ],
    relatedCaseStudySlugs: ["gsa-federal-modernization"],
    relatedSolutionSlugs: ["cloud-infrastructure", "saas-solutions", "program-management"],
  },
];

export interface NAICSCode {
  code: string;
  description: string;
  sizeStandard: string;
}

export const naicsCodes: NAICSCode[] = [
  {
    code: "541511",
    description: "Custom Computer Programming Services",
    sizeStandard: "$34M",
  },
  {
    code: "541512",
    description: "Computer Systems Design Services",
    sizeStandard: "$34M",
  },
  {
    code: "541519",
    description: "Other Computer Related Services",
    sizeStandard: "$34M",
  },
  {
    code: "541611",
    description: "Administrative Management and General Management Consulting Services",
    sizeStandard: "$24.5M",
  },
];

export const registrationInfo = {
  uei: "GTWUARASDLN5",
  cage: "8DUE2",
  businessType: "Small Business",
  samStatus: "Active",
};
