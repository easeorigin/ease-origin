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

/** Commercial organizations the same personnel have delivered for. */
export const commercialOrganizations: Organization[] = [
  { id: "google", name: "Google" },
  { id: "aws", name: "Amazon Web Services" },
  { id: "att", name: "AT&T" },
  { id: "capital-one", name: "Capital One" },
  { id: "stellantis", name: "Stellantis" },
  { id: "datassential", name: "Datassential" },
  { id: "66-degrees", name: "66 Degrees" },
];
