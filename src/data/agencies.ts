export interface GovernmentAgency {
  id: string;
  name: string;
  abbr: string;
  logo: string;
}

export interface IndustryPartner {
  id: string;
  name: string;
  logo: string;
}

export const governmentAgencies: GovernmentAgency[] = [
  {
    id: "dod",
    name: "Department of Defense",
    abbr: "DoD",
    logo: "/logos/dod.svg",
  },
  {
    id: "dhs",
    name: "Department of Homeland Security",
    abbr: "DHS",
    logo: "/logos/dhs.svg",
  },
  {
    id: "nih",
    name: "National Institutes of Health",
    abbr: "NIH",
    logo: "/logos/nih.svg",
  },
  {
    id: "gsa",
    name: "General Services Administration",
    abbr: "GSA",
    logo: "/logos/gsa.svg",
  },
  {
    id: "navy",
    name: "U.S. Navy",
    abbr: "Navy",
    logo: "/logos/navy.svg",
  },
  {
    id: "usaf",
    name: "U.S. Air Force",
    abbr: "USAF",
    logo: "/logos/usaf.svg",
  },
  {
    id: "ussf",
    name: "U.S. Space Force",
    abbr: "USSF",
    logo: "/logos/ussf.svg",
  },
];

export const industryPartners: IndustryPartner[] = [
  { id: "capital-one", name: "Capital One", logo: "/logos/capital-one.svg" },
  { id: "stellantis", name: "Stellantis", logo: "/logos/stellantis.svg" },
  { id: "aws", name: "Amazon Web Services", logo: "/logos/aws.svg" },
  { id: "att", name: "AT&T", logo: "/logos/att.svg" },
  { id: "booz-allen", name: "Booz Allen Hamilton", logo: "/logos/booz-allen.svg" },
  { id: "spalding", name: "Spalding Consulting", logo: "/logos/spalding.svg" },
  { id: "saalex", name: "Saalex", logo: "/logos/saalex.svg" },
  { id: "steampunk", name: "SteamPunk", logo: "/logos/steampunk.svg" },
  { id: "tg-federal", name: "TG Federal", logo: "/logos/tg-federal.svg" },
  { id: "ikeda", name: "Ikeda Innovations", logo: "/logos/ikeda.svg" },
  { id: "saic", name: "SAIC", logo: "/logos/saic.svg" },
  { id: "leidos", name: "Leidos", logo: "/logos/leidos.svg" },
  { id: "black-canyon", name: "Black Canyon Consulting", logo: "/logos/black-canyon.svg" },
  { id: "datassential", name: "Datassential", logo: "/logos/datassential.svg" },
  { id: "google", name: "Google", logo: "/logos/google.svg" },
  { id: "66-degrees", name: "66 Degrees", logo: "/logos/66-degrees.svg" },
  { id: "northeastern", name: "Northeastern University", logo: "/logos/northeastern.svg" },
];
