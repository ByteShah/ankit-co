// ── Firm Details (sourced from .env.local) ────────────────────────────────────
export const FIRM = {
  name:        process.env.NEXT_PUBLIC_FIRM_NAME        ?? "Ankit S Shah & Company",
  nameShort:   process.env.NEXT_PUBLIC_FIRM_NAME_SHORT  ?? "A S Shah & Co.",
  constitution: process.env.NEXT_PUBLIC_FIRM_CONSTITUTION ?? "Partnership",
  tagline:     process.env.NEXT_PUBLIC_FIRM_TAGLINE     ?? "Chartered Accountants — Audit, Tax & Advisory",
  description: process.env.NEXT_PUBLIC_FIRM_DESCRIPTION ?? "A Chartered Accountancy firm delivering audit, tax, corporate finance, and compliance advisory with precision and integrity.",
  foundedYear: Number(process.env.NEXT_PUBLIC_FIRM_FOUNDED_YEAR ?? "2005"),

  // ── ICAI registration details (placeholders — replace with the firm's real values) ──
  frn:             process.env.NEXT_PUBLIC_FIRM_FRN            ?? "0123456W",          // ICAI Firm Registration No.
  icaiMembership:  process.env.NEXT_PUBLIC_PARTNER_ICAI_MEMBERSHIP ?? "123456",        // Partner's ICAI membership no.

  // ── ICAI-aware disclaimer (CAs in India may not solicit work / advertise) ──
  disclaimer:
    process.env.NEXT_PUBLIC_FIRM_DISCLAIMER ??
    "This website is intended solely to provide general information about Ankit S Shah & Company and does not constitute solicitation, advertisement, or an invitation for professional engagement. The contents do not amount to professional advice. Use of this site is at the visitor's own initiative and in compliance with the Chartered Accountants Act, 1949 and the guidelines of the Institute of Chartered Accountants of India (ICAI).",

  address: {
    line1:   process.env.NEXT_PUBLIC_ADDRESS_LINE1   ?? "123, Financial District",
    line2:   process.env.NEXT_PUBLIC_ADDRESS_LINE2   ?? "Nariman Point",
    city:    process.env.NEXT_PUBLIC_ADDRESS_CITY    ?? "Mumbai",
    state:   process.env.NEXT_PUBLIC_ADDRESS_STATE   ?? "Maharashtra",
    pin:     process.env.NEXT_PUBLIC_ADDRESS_PIN     ?? "400 021",
    country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY ?? "India",
  },

  phone:           process.env.NEXT_PUBLIC_PHONE       ?? "+91 98765 43210",
  email:           process.env.NEXT_PUBLIC_EMAIL        ?? "hello@ankitshahco.com",
  whatsapp:        process.env.NEXT_PUBLIC_WHATSAPP     ?? "919876543210",
  officeHours:     process.env.NEXT_PUBLIC_OFFICE_HOURS ?? "Mon – Sat: 10:00 AM – 7:00 PM",
  calcom:          process.env.NEXT_PUBLIC_CALCOM_URL   ?? "https://cal.com/ankitshah",
  googleMapsEmbed: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED ?? "",
};

// ── Social Media ──────────────────────────────────────────────────────────────
export const SOCIAL = [
  { label: "LinkedIn", icon: "linkedin", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN  ?? "#" },
  { label: "Facebook", icon: "facebook", href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK  ?? "#" },
  { label: "X",        icon: "x",        href: process.env.NEXT_PUBLIC_SOCIAL_X         ?? "#" },
  { label: "Instagram",icon: "instagram",href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "#" },
  { label: "YouTube",  icon: "youtube",  href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE   ?? "#" },
] as const;

// ── Navigation Links (traditional order, Home first) ──────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Resources",  href: "/resources" },
  { label: "Contact",    href: "/contact" },
] as const;

// ── Important external links (govt / regulatory portals) ──────────────────────
export const IMPORTANT_LINKS = [
  { label: "Income Tax e-Filing", href: "https://www.incometax.gov.in/iec/foportal/" },
  { label: "GST Portal",          href: "https://www.gst.gov.in/" },
  { label: "MCA21 Portal",        href: "https://www.mca.gov.in/" },
  { label: "ICAI",                href: "https://www.icai.org/" },
  { label: "TRACES (TDS)",        href: "https://www.tdscpc.gov.in/" },
  { label: "EPFO",                href: "https://www.epfindia.gov.in/" },
  { label: "DGFT",                href: "https://www.dgft.gov.in/" },
  { label: "RBI",                 href: "https://www.rbi.org.in/" },
] as const;

// ── Latest Updates (ticker / notices — replace with real, dated notices) ──────
export const UPDATES = [
  { date: "10 Jun 2026", text: "CBDT notifies ITR forms for AY 2026–27; e-filing utilities released." },
  { date: "01 Jun 2026", text: "GSTR-1 / IFF due dates for May 2026 — file before the 11th." },
  { date: "25 May 2026", text: "MCA extends timeline for certain ROC annual filings — check applicability." },
  { date: "15 May 2026", text: "Advance tax — first instalment for FY 2026–27 due by 15 June." },
] as const;

// ── Services ──────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "audit",
    icon: "fact_check",
    title: "Audit & Assurance",
    shortDesc: "Statutory, internal, and due-diligence audits conducted with forensic-level rigour.",
    desc: "Our audit and assurance practice delivers statutory audits, internal audits, due diligence reviews, and risk-based audits for public and private entities. We combine deep regulatory knowledge with modern analytics to provide assurance that stakeholders can trust.",
    tags: ["Statutory Audit", "Internal Audit", "Due Diligence", "Stock Audit"],
  },
  {
    id: "tax",
    icon: "receipt_long",
    title: "Tax Advisory",
    shortDesc: "Strategic tax planning across income tax, GST, and international taxation.",
    desc: "From corporate tax planning and GST compliance to transfer pricing and international tax structuring, our tax advisory team ensures you remain compliant while optimising your tax position across all jurisdictions.",
    tags: ["Income Tax", "GST", "Transfer Pricing", "International Tax"],
  },
  {
    id: "corporate-finance",
    icon: "trending_up",
    title: "Corporate Finance",
    shortDesc: "Business valuations, M&A advisory, and fundraising for growth-stage companies.",
    desc: "We provide end-to-end corporate finance advisory including business valuations, mergers & acquisitions, private equity structuring, debt syndication, and financial modelling for companies at every stage of growth.",
    tags: ["Valuations", "M&A Advisory", "Fundraising", "Financial Modelling"],
  },
  {
    id: "risk",
    icon: "verified_user",
    title: "Risk & Compliance",
    shortDesc: "Regulatory compliance, FEMA/RBI matters, and enterprise risk management.",
    desc: "Navigate complex regulatory landscapes with confidence. Our risk and compliance team handles FEMA/RBI advisory, SEBI compliance, internal control frameworks, SOX compliance, and enterprise risk management programmes.",
    tags: ["FEMA / RBI", "SEBI Compliance", "SOX", "Enterprise Risk"],
  },
] as const;

// ── Industries ────────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: "factory",            title: "Manufacturing & Trading",    desc: "End-to-end compliance, cost audits, and transfer pricing for MSME and large manufacturing units." },
  { icon: "apartment",          title: "Real Estate & Construction", desc: "Project finance, RERA compliance, GST advisory, and tax structuring for builders and developers." },
  { icon: "local_hospital",     title: "Healthcare & Pharma",        desc: "Regulatory compliance, tax advisory, and financial structuring for hospitals, clinics, and pharma companies." },
  { icon: "rocket_launch",      title: "Startups & Technology",      desc: "Funding readiness, ESOP structuring, R&D tax credits, and compliance for VC-backed and bootstrapped startups." },
  { icon: "account_balance",    title: "BFSI",                       desc: "Regulatory reporting, internal audits, and risk management for banks, NBFCs, and insurance companies." },
  { icon: "shopping_bag",       title: "E-Commerce & Retail",        desc: "GST compliance, marketplace reconciliation, and multi-state tax planning for online and offline retailers." },
  { icon: "volunteer_activism", title: "NGOs & Trusts",              desc: "80G / 12A registrations, FCRA compliance, utilisation certificates, and donor reporting for non-profits." },
  { icon: "business_center",    title: "Professional Services",      desc: "Practice structuring, partnership agreements, and compliance for law firms, consultancies, and advisory practices." },
] as const;

// ── Regulatory Frameworks (honest trust signal — what we work under) ──────────
export const FRAMEWORKS = [
  { short: "Income Tax Act, 1961",        label: "Direct Tax" },
  { short: "CGST / SGST / IGST Acts",     label: "Goods & Services Tax" },
  { short: "Companies Act, 2013",         label: "Corporate Law" },
  { short: "FEMA, 1999",                  label: "Foreign Exchange" },
  { short: "ICAI Standards on Auditing",  label: "Audit & Assurance" },
  { short: "Ind AS / Accounting Standards", label: "Financial Reporting" },
] as const;

// ── Compliance Calendar (representative recurring Indian filing due-dates) ─────
// Static, factual reference content — characteristic of a working CA practice.
export const COMPLIANCE_DEADLINES = [
  { day: "07", title: "TDS / TCS Deposit",      detail: "Monthly deposit of tax deducted/collected at source." },
  { day: "11", title: "GSTR-1",                 detail: "Monthly statement of outward supplies (turnover-based)." },
  { day: "20", title: "GSTR-3B",                detail: "Monthly summary GST return and tax payment." },
  { day: "15", title: "PF & ESI",               detail: "Monthly Provident Fund and ESI contributions." },
  { day: "31", title: "ITR Filing",             detail: "Annual income-tax return (due dates vary by category)." },
  { day: "30", title: "ROC Annual Filing",      detail: "MCA annual return / financial statements (AOC-4, MGT-7)." },
] as const;

// ── Analytics ─────────────────────────────────────────────────────────────────
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-XXXXXXXXXX";

// ── Forms ──────────────────────────────────────────────────────────────────────
export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/YOUR_FORM_ID";
