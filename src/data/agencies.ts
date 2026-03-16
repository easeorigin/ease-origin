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
    id: "dow",
    name: "Department of War",
    abbr: "DoW",
    logo: "/logos/dow.svg",
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
    logo: "/logos/nih.png",
  },
  {
    id: "gsa",
    name: "General Services Administration",
    abbr: "GSA",
    logo: "/logos/gsa.png",
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
  { id: "66-degrees", name: "66 Degrees", logo: "/logos/66-degrees.jpeg" },
  { id: "aws", name: "Amazon Web Services", logo: "/logos/aws.svg" },
  { id: "att", name: "AT&T", logo: "/logos/att.svg" },
  { id: "black-canyon", name: "Black Canyon Consulting", logo: "/logos/black-canyon.jpeg" },
  { id: "booz-allen", name: "Booz Allen Hamilton", logo: "/logos/booz-allen.png" },
  { id: "capital-one", name: "Capital One", logo: "/logos/capital-one.png" },
  { id: "datassential", name: "Datassential", logo: "/logos/datassential.png" },
  { id: "google", name: "Google", logo: "/logos/google.svg" },
  { id: "ikeda", name: "Ikeda Innovations", logo: "/logos/ikeda.png" },
  { id: "leidos", name: "Leidos", logo: "/logos/leidos.png" },
  { id: "northeastern", name: "Northeastern University", logo: "/logos/northeastern.jpg" },
  { id: "saalex", name: "Saalex", logo: "/logos/saalex.png" },
  { id: "saic", name: "SAIC", logo: "/logos/saic.jpeg" },
  { id: "spalding", name: "Spalding Consulting", logo: "/logos/spalding.jpg" },
  { id: "steampunk", name: "SteamPunk", logo: "/logos/steampunk.png" },
  { id: "stellantis", name: "Stellantis", logo: "/logos/stellantis.jpg" },
  { id: "tg-federal", name: "TG Federal", logo: "/logos/tg-federal.svg" },
];
