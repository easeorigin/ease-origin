export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  avatar?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "dhs-cloud-migration",
    quote:
      "EaseOrigin's team brought deep expertise in AWS GovCloud and helped us navigate a complex migration with minimal disruption to operations. Their engineers understood the compliance requirements from day one.",
    author: "Michael Torres",
    title: "Chief Technology Officer",
    organization: "Federal Civilian Agency",
    rating: 5,
  },
  {
    id: "dod-devsecops",
    quote:
      "We needed a partner who could stand up a DevSecOps pipeline that met DoD security standards without slowing down delivery. EaseOrigin delivered exactly that, on time and within budget.",
    author: "Sarah Jennings",
    title: "Program Director",
    organization: "Defense Sector Prime Contractor",
    rating: 5,
  },
  {
    id: "civilian-program-mgmt",
    quote:
      "Their program management consultants integrated seamlessly with our team. They brought structure and accountability to a program that was behind schedule, and we hit every milestone after they came on board.",
    author: "David Park",
    title: "Deputy Director of IT",
    organization: "Federal Health Agency",
    rating: 5,
  },
  {
    id: "prime-staffing",
    quote:
      "Finding cleared, qualified engineers is one of the hardest challenges in GovCon. EaseOrigin consistently provides top-tier talent who are productive from week one. They have become our go-to staffing partner.",
    author: "Rachel Gutierrez",
    title: "Vice President of Delivery",
    organization: "Mid-Tier Systems Integrator",
    rating: 5,
  },
  {
    id: "oracle-cloud-modernization",
    quote:
      "EaseOrigin helped us modernize our legacy Oracle environment and migrate critical workloads to Oracle Cloud Infrastructure. Their depth of knowledge in both legacy and cloud-native systems was exactly what we needed.",
    author: "James Whitfield",
    title: "Infrastructure Manager",
    organization: "Federal Financial Agency",
    rating: 5,
  },
];
