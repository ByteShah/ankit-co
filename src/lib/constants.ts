// ── Firm Details (sourced from .env.local) ────────────────────────────────────
export const FIRM = {
  name:        process.env.NEXT_PUBLIC_FIRM_NAME        ?? "Ankit Shah & Co. LLP",
  nameShort:   process.env.NEXT_PUBLIC_FIRM_NAME_SHORT  ?? "AS & Co.",
  tagline:     process.env.NEXT_PUBLIC_FIRM_TAGLINE     ?? "Precision-Driven Accountancy for Ambitious Businesses",
  description: process.env.NEXT_PUBLIC_FIRM_DESCRIPTION ?? "A premier Chartered Accountancy firm delivering audit, tax, corporate finance, and compliance advisory with precision and integrity.",
  foundedYear: Number(process.env.NEXT_PUBLIC_FIRM_FOUNDED_YEAR ?? "2005"),

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
  calcom:          process.env.NEXT_PUBLIC_CALCOM_URL   ?? "https://cal.com/ankitshah",
  googleMapsEmbed: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED ?? "",
};

// ── Navigation Links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services",   href: "/services" },
  { label: "About",      href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Resources",  href: "/resources" },
  { label: "Contact",    href: "/contact" },
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
    icon: "shield_check",
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

// ── Analytics ─────────────────────────────────────────────────────────────────
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-XXXXXXXXXX";

// ── Forms ──────────────────────────────────────────────────────────────────────
export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/YOUR_FORM_ID";
