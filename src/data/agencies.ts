/**
 * Text only, by design.
 *
 * Government seals are reproduction-restricted under 18 U.S.C. 701 and the
 * agency-specific rules that follow from it, and company logos need written
 * permission from the mark owner. Naming an organization in text is fine;
 * rendering its mark is not. Do not add a `logo` field back to these types.
 */

export interface GovernmentAgency {
  id: string;
  name: string;
  abbr: string;
}

export interface Organization {
  id: string;
  name: string;
  /** Sector, so a reader can see the range without us claiming a range. */
  industry?: string;
}

/** Agencies whose programs EaseOrigin personnel have delivered on. */
export const governmentAgencies: GovernmentAgency[] = [
  { id: "dow", name: "Department of War", abbr: "DoW" },
  { id: "dhs", name: "Department of Homeland Security", abbr: "DHS" },
  { id: "nih", name: "National Institutes of Health", abbr: "NIH" },
  { id: "gsa", name: "General Services Administration", abbr: "GSA" },
  { id: "navy", name: "U.S. Navy", abbr: "Navy" },
  { id: "usaf", name: "U.S. Air Force", abbr: "USAF" },
  { id: "ussf", name: "U.S. Space Force", abbr: "USSF" },
];

/** Federal primes and subcontractors the work above was delivered through. */
export const primeContractors: Organization[] = [
  { id: "ikeda", name: "Ikeda Innovations" },
  { id: "saic", name: "SAIC" },
  { id: "leidos", name: "Leidos" },
  { id: "booz-allen", name: "Booz Allen Hamilton" },
  { id: "tg-federal", name: "TG Federal" },
  { id: "spalding", name: "Spalding Consulting" },
  { id: "saalex", name: "Saalex" },
  { id: "steampunk", name: "SteamPunk" },
  { id: "black-canyon", name: "Black Canyon Consulting" },
];

/**
 * Commercial organizations the same personnel have delivered for.
 *
 * Two Six Technologies sits here because that is where the founder placed it,
 * but it is a national security technology company doing cyber and research
 * work for defense customers. If that engagement was federal program delivery
 * rather than commercial work, move it to `primeContractors` and give it a
 * backing entry in program-experience.ts, because it would then support an
 * agency claim.
 */
export const commercialOrganizations: Organization[] = [
  { id: "google", name: "Google", industry: "Technology" },
  { id: "aws", name: "Amazon Web Services", industry: "Cloud computing" },
  { id: "akamai", name: "Akamai", industry: "Content delivery and cloud security" },
  { id: "bcbs", name: "Blue Cross Blue Shield", industry: "Health insurance" },
  { id: "att", name: "AT&T", industry: "Telecommunications" },
  { id: "capital-one", name: "Capital One", industry: "Financial services" },
  { id: "stellantis", name: "Stellantis", industry: "Automotive" },
  { id: "parloa", name: "Parloa", industry: "Conversational AI" },
  {
    id: "two-six",
    name: "Two Six Technologies",
    industry: "National security technology",
  },
  { id: "datassential", name: "Datassential", industry: "Food industry analytics" },
  { id: "66-degrees", name: "66 Degrees", industry: "Cloud consulting" },
];
