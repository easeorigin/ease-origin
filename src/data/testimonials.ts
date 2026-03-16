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
    id: "healthcare-cloud-migration",
    quote:
      "We were running critical patient data systems on aging on-prem infrastructure, and the risk of downtime was becoming unacceptable. EaseOrigin's engineers migrated our entire platform to AWS with zero unplanned outages. They also helped us redesign our data pipeline so our analytics team could access real-time insights for the first time.",
    author: "Michael Torres",
    title: "VP of Technology",
    organization: "National Healthcare Provider",
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
    id: "finserv-platform-engineering",
    quote:
      "Our deployment process was manual, error-prone, and slowing down every release cycle. EaseOrigin built us a fully automated CI/CD platform on Kubernetes that cut our release time from two weeks to under a day. Their team also embedded with our engineers to make sure we could maintain and evolve the platform on our own.",
    author: "Rachel Gutierrez",
    title: "Director of Platform Engineering",
    organization: "Financial Services Firm",
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
