export const companyInfo = {
  name: "EaseOrigin LLC",
  shortName: "EaseOrigin",
  url: "https://easeorigin.com",
  domain: "easeorigin.com",

  /**
   * One entity, two registrations. EaseOrigin LLC was formed in Oklahoma in
   * 2019 and registered in Texas as a foreign entity in 2023 (Texas SOS file
   * 0804879363). The 2023-01-13 date on the Texas Comptroller record is the
   * Texas registration date, not a formation date, which is why a Certificate
   * of Account Status reads 2023 while the company dates to 2019.
   *
   * Both are published so a contracting officer sees the explanation on the
   * page instead of finding an apparent discrepancy. Principal place of
   * business is Midlothian, Texas, which is a factual test about where the
   * business is actually run from, not about the state of formation. That
   * distinction matters for Texas Education Code 44.031(b) scoring.
   */
  founded: "2019",
  formationState: "OK",
  formationStateName: "Oklahoma",
  texasRegisteredSince: "2023",

  address: {
    street: "211 E Avenue G, Ste 306",
    city: "Midlothian",
    state: "TX",
    zip: "76065",
    full: "211 E Avenue G, Ste 306, Midlothian, TX 76065",
  },

  phone: "(470) 464-5199",
  email: "info@easeorigin.com",

  hours: {
    days: "Monday - Friday",
    time: "8:00 AM - 6:00 PM CT",
  },

  social: {
    linkedin: "https://linkedin.com/company/easeorigin",
  },

  identifiers: {
    uei: "GTWUARASDLN5",
    cage: "8DUE2",
    naics: "541512",
    naicsAll: ["541511", "541512", "541513", "541519", "518210", "541611"],
    businessType: "Small Business",
  },
} as const;

/**
 * Single source of truth for how program experience is attributed.
 *
 * Every page that describes work on a named program renders this notice at the
 * top of that section. EaseOrigin LLC has never been the contracting entity on
 * any federal program described on this site; that work was performed by the
 * people who now make up the firm, as employees of the organizations named.
 *
 * The wording keys on who held the contract, not on when the firm was formed.
 * That stays accurate no matter how the founding date and the program dates
 * line up, and it is the question a contracting officer is actually asking.
 * Keeping it in one place keeps the site, the capability statement, and any
 * proposal saying the same thing.
 */
export const attributionNotice =
  "Program experience below reflects work performed by EaseOrigin personnel as employees of the organizations named. EaseOrigin LLC was not the contracting entity on these programs and does not claim them as corporate past performance.";

/**
 * Clearance is held by a person, not by the company. EaseOrigin holds no
 * facility clearance, so every mention of clearance on the site is singular
 * and personal.
 */
export const clearanceStatement =
  "Our principal holds an active DoD security clearance.";

/**
 * Named organizations appear for identification only. Nothing on this site is
 * an endorsement by, or a partnership with, any of them.
 */
export const trademarkNotice =
  "Agency, contractor, and company names are used for identification purposes only. Their use does not imply endorsement, sponsorship, partnership, or any current contractual relationship with EaseOrigin LLC.";
