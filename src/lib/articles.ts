// ── Article type definitions ──────────────────────────────────────────────────

export type ArticleCategory = "Tax" | "GST" | "Compliance" | "Startup" | "Finance";

export interface ArticleSection {
  heading?: string;
  body: string;
  bullets?: string[];
}

export interface Article {
  slug: string;
  tag: string;
  tagColor: "gold" | "navy";
  title: string;
  desc: string;
  date: string;
  readTime: string;
  category: ArticleCategory;
  featured: boolean;
  sourceUrl: string;
  sourceName: string;
  sections: ArticleSection[];
  relatedSlugs: string[];
}

// ── Article content ───────────────────────────────────────────────────────────

export const ARTICLES: Article[] = [
  {
    slug: "union-budget-2025-tax-changes",
    tag: "Tax Update",
    tagColor: "gold",
    title: "Union Budget 2025: Key Tax Changes Every Business Must Know",
    desc: "A comprehensive analysis of direct and indirect tax amendments — capital gains, income slabs, and GST rate changes impacting Indian businesses.",
    date: "February 2025",
    readTime: "8 min read",
    category: "Tax",
    featured: true,
    sourceUrl: "https://indiabudget.gov.in",
    sourceName: "India Budget (Government of India)",
    sections: [
      {
        heading: "New Income Tax Slabs Under the Default Regime",
        body: "Finance Minister Nirmala Sitharaman revised the new tax regime slabs significantly in Budget 2025. The nil-tax threshold has been raised to ₹4 lakh, with revised rates across slabs up to ₹24 lakh. Taxpayers earning up to ₹12 lakh now effectively pay zero tax after the standard deduction and the revised rebate under Section 87A.",
        bullets: [
          "₹0–₹4 lakh: Nil",
          "₹4–₹8 lakh: 5%",
          "₹8–₹12 lakh: 10%",
          "₹12–₹16 lakh: 15%",
          "₹16–₹20 lakh: 20%",
          "₹20–₹24 lakh: 25%",
          "Above ₹24 lakh: 30%",
        ],
      },
      {
        heading: "Capital Gains Tax Reform",
        body: "Budget 2025 rationalised the short-term and long-term capital gains tax structure. Long-term capital gains (LTCG) on listed equity and equity mutual funds above ₹1.25 lakh are taxed at 12.5% (up from 10%). Short-term capital gains (STCG) on listed equity now attract a flat 20% (up from 15%). The holding period for unlisted assets to qualify as long-term remains 24 months.",
      },
      {
        heading: "TDS Rationalisation",
        body: "Multiple TDS sections have been rationalised. The threshold for TDS on interest income from banks and post offices for senior citizens has been doubled. Section 194-IA (TDS on property purchase) now applies only above ₹75 lakh. Several redundant TDS sections have been merged to reduce compliance burden for smaller businesses.",
        bullets: [
          "Section 194-IA threshold raised to ₹75 lakh from ₹50 lakh",
          "TDS on e-commerce operators reduced from 1% to 0.1%",
          "New Section 194T introduced for payments by firms to partners",
        ],
      },
      {
        heading: "What Business Owners Must Do Now",
        body: "Immediately revisit your advance tax computations for FY 2024-25 Q4 and FY 2025-26. Ensure your payroll system reflects the revised slabs. Review whether switching from old regime to new regime now makes mathematical sense for your employees. For unlisted equity holdings, re-evaluate exit timing based on the revised LTCG rates.",
      },
    ],
    relatedSlugs: ["section-43b-msme-payment-rule", "e-invoicing-gst-thresholds", "annual-compliance-calendar-fy2024-25"],
  },

  {
    slug: "gst-amnesty-scheme-2024",
    tag: "GST Advisory",
    tagColor: "navy",
    title: "GST Amnesty Scheme 2024: Deadline & Eligibility Guide",
    desc: "All you need to know about who qualifies, how to apply, and what penalties are waived under the GST Amnesty Scheme.",
    date: "December 2024",
    readTime: "5 min read",
    category: "GST",
    featured: false,
    sourceUrl: "https://www.cbic.gov.in",
    sourceName: "CBIC (Central Board of Indirect Taxes & Customs)",
    sections: [
      {
        heading: "What Is the GST Amnesty Scheme?",
        body: "The GST Amnesty Scheme, notified by the CBIC under Section 128A of the CGST Act (inserted by Finance Act 2024), provides a one-time waiver of interest and penalties on demand notices for FY 2017-18, FY 2018-19, and FY 2019-20. Businesses that had genuine disputes and outstanding demand orders can now settle without the added burden of interest and penalty.",
      },
      {
        heading: "Who Is Eligible?",
        body: "Eligibility is limited to cases where a demand order has been issued under Section 73 of the CGST Act — i.e., non-fraud cases. Businesses with demand orders under Section 74 (fraud, suppression, misstatement) are explicitly excluded.",
        bullets: [
          "Demand orders under Section 73 only (non-fraud)",
          "Tax periods: FY 2017-18, 2018-19, and 2019-20",
          "Must pay full tax amount by the notified deadline",
          "Interest and penalty waived on full tax payment",
          "Section 74 (fraud/suppression) cases are excluded",
        ],
      },
      {
        heading: "Application Deadline and Process",
        body: "The scheme requires taxpayers to file Form GST SPL-02 on the GST portal and pay the outstanding tax (without interest/penalty) by the deadline notified by the government. Applications must be filed after payment, with proof of payment uploaded. Consult your CA before filing to ensure the correct demand order is being addressed.",
      },
      {
        heading: "Our Recommendation",
        body: "If you have any open demand orders for FY 2017-19, this is a significant opportunity. The interest and penalty on a ₹10 lakh demand can easily exceed ₹5–8 lakh — waiving those amounts represents material savings. We recommend an immediate review of all pending GST demands to assess eligibility.",
      },
    ],
    relatedSlugs: ["e-invoicing-gst-thresholds", "annual-compliance-calendar-fy2024-25", "fema-compliance-foreign-investment"],
  },

  {
    slug: "esop-structuring-startups",
    tag: "Startup Advisory",
    tagColor: "navy",
    title: "ESOP Structuring for Startups: A Tax-Efficient Framework",
    desc: "How to design an ESOP plan that motivates your team while minimising perquisite tax liability — with real valuation examples.",
    date: "November 2024",
    readTime: "6 min read",
    category: "Startup",
    featured: false,
    sourceUrl: "https://www.incometax.gov.in",
    sourceName: "Income Tax India",
    sections: [
      {
        heading: "How ESOPs Are Taxed in India",
        body: "ESOPs in India attract tax at two stages. First, as a perquisite at the time of exercise — the difference between Fair Market Value (FMV) on the exercise date and the exercise price is taxable as salary income. Second, capital gains tax arises on sale of shares — calculated on the difference between the sale price and FMV at exercise.",
        bullets: [
          "Stage 1 (Exercise): FMV minus exercise price taxed as perquisite (salary income)",
          "Stage 2 (Sale): Sale price minus FMV at exercise taxed as capital gains",
          "Unlisted shares held >24 months qualify as LTCG at 12.5%",
          "Listed shares: LTCG at 12.5% above ₹1.25 lakh; STCG at 20%",
        ],
      },
      {
        heading: "DPIIT-Recognised Startups: The Tax Deferral Benefit",
        body: "DPIIT-recognised startups get a critical advantage: perquisite tax on ESOP exercise is deferred to the earlier of (a) sale of shares, (b) end of employment, or (c) 5 years from exercise. This removes the cash flow problem of paying tax on illiquid shares and is one of the strongest reasons to obtain DPIIT recognition before issuing ESOPs.",
      },
      {
        heading: "Valuation: The Core of ESOP Tax",
        body: "FMV for unlisted companies must be determined by a SEBI-registered Category I Merchant Banker using the Discounted Cash Flow (DCF) method. For listed companies, it is the average of the opening and closing price on the exercise date. A poorly structured valuation can significantly inflate the perquisite tax. We recommend annual FMV assessments to plan exercise timing strategically.",
      },
      {
        heading: "Structuring Tips for Founders",
        body: "Set the exercise price at or near FMV at grant date to minimise the perquisite at exercise. Use a 4-year vesting schedule with a 1-year cliff — standard internationally and accepted by Indian VCs. Create the ESOP pool before fundraising (pre-dilution). Ensure the ESOP trust deed and scheme document are drafted by a qualified CA/advocate to avoid ROC filing complications.",
      },
    ],
    relatedSlugs: ["business-valuation-methods", "fema-compliance-foreign-investment", "union-budget-2025-tax-changes"],
  },

  {
    slug: "fema-compliance-foreign-investment",
    tag: "Compliance",
    tagColor: "navy",
    title: "FEMA Compliance Checklist for Companies with Foreign Investment",
    desc: "A step-by-step checklist for companies receiving FDI — reporting requirements, RBI filings, and common pitfalls to avoid.",
    date: "October 2024",
    readTime: "7 min read",
    category: "Compliance",
    featured: false,
    sourceUrl: "https://www.rbi.org.in",
    sourceName: "Reserve Bank of India",
    sections: [
      {
        heading: "Why FEMA Compliance Is Non-Negotiable",
        body: "The Foreign Exchange Management Act (FEMA) governs all cross-border capital flows into India. A single missed filing can result in compounding penalties of up to 3x the investment amount, and in serious cases, prosecution. With FDI into Indian startups reaching record highs, FEMA compliance has become a first-priority task for every funded company.",
      },
      {
        heading: "Immediate Post-Investment Checklist",
        body: "Within 30 days of receiving foreign investment, the Indian company must file Form FC-GPR with the RBI via the FIRMS portal. Failure to do so within 30 days requires prior approval from RBI. The filing must be accompanied by a Chartered Accountant certificate on remittance and use of funds.",
        bullets: [
          "File FC-GPR within 30 days of allotment of securities",
          "Obtain a FIRC (Foreign Inward Remittance Certificate) from your bank",
          "Get a KYC report for the foreign investor from the AD bank",
          "Obtain a valuation certificate from a SEBI-registered merchant banker",
          "Report to RBI via FIRMS portal (Entity Master and FC-GPR modules)",
        ],
      },
      {
        heading: "Annual FEMA Compliance",
        body: "Every Indian company that has received FDI must file the Annual Return on Foreign Liabilities and Assets (FLA Return) by July 15 every year. This filing covers all outstanding FDI, FPI, and ECB as of March 31. Startups often miss this deadline because they are not aware of the obligation beyond the initial FC-GPR filing.",
        bullets: [
          "FLA Return: file by July 15 each year via RBI's FLAIR system",
          "FC-TRS: required within 60 days of share transfer between residents and non-residents",
          "ODI reporting required for any outbound investment by the Indian entity",
        ],
      },
      {
        heading: "Common Pitfalls",
        body: "The most common FEMA violations we see in practice are: (1) missing the 30-day FC-GPR deadline; (2) incorrect valuation methodology used for pricing; (3) failure to report convertible notes as FDI; (4) not distinguishing between automatic route and approval route sectors; (5) missing the FLA Return. Each of these can result in compounding applications to the RBI which are time-consuming and expensive.",
      },
    ],
    relatedSlugs: ["esop-structuring-startups", "annual-compliance-calendar-fy2024-25", "gst-amnesty-scheme-2024"],
  },

  {
    slug: "section-43b-msme-payment-rule",
    tag: "Tax Update",
    tagColor: "gold",
    title: "Section 43B(h) — MSME Payment Rule: Impact on Buyers & Sellers",
    desc: "The new provision disallowing deductions for delayed MSME payments — practical implications and how to stay compliant.",
    date: "September 2024",
    readTime: "5 min read",
    category: "Tax",
    featured: false,
    sourceUrl: "https://www.cbdt.gov.in",
    sourceName: "CBDT (Central Board of Direct Taxes)",
    sections: [
      {
        heading: "What Section 43B(h) Says",
        body: "Effective from FY 2023-24 (AY 2024-25), Section 43B(h) of the Income Tax Act disallows deduction for payments due to Micro and Small Enterprises unless the payment is made within the time limits prescribed under Section 15 of the MSMED Act 2006. The MSMED Act mandates payment within 45 days where there is a written agreement, or 15 days where there is no agreement.",
      },
      {
        heading: "Who Is Affected?",
        body: "Any entity (buyer) that purchases goods or services from a supplier registered as a Micro or Small Enterprise under the MSMED Act and has outstanding payables beyond the MSMED timelines will face a deduction disallowance for the unpaid amount in that financial year. The disallowance reverses only in the year of actual payment.",
        bullets: [
          "Applies to buyers of all sizes — large corporates, SMEs, and even individuals in business",
          "Sellers must be Micro or Small Enterprise (not Medium)",
          "Payment must be within 15 days (no agreement) or 45 days (with written agreement)",
          "Disallowed expense is added back to income; deductible in the year of payment",
        ],
      },
      {
        heading: "Practical Impact",
        body: "For buyers with significant MSME vendor payables — particularly in manufacturing, retail, and construction — this provision can cause a large deduction disallowance at year-end, increasing taxable income and advance tax liability. The fix is systematic: update your vendor master to flag registered MSME suppliers, set payment alerts, and renegotiate credit terms within MSMED limits.",
      },
      {
        heading: "What You Need to Do by March 31",
        body: "Before the financial year ends, reconcile all outstanding payables to MSME vendors. If you cannot make payment, consider whether the payable can be reclassified or whether a written agreement can adjust credit terms within the 45-day window. Your CA should review MSME vendor balances as part of the year-end tax planning exercise.",
      },
    ],
    relatedSlugs: ["union-budget-2025-tax-changes", "annual-compliance-calendar-fy2024-25", "business-valuation-methods"],
  },

  {
    slug: "business-valuation-methods",
    tag: "Finance",
    tagColor: "navy",
    title: "Business Valuation Methods: Which One Is Right for Your Deal?",
    desc: "DCF, comparable company analysis, or asset-based valuation — understanding the right method for M&A, fundraising, and ESOP purposes.",
    date: "August 2024",
    readTime: "9 min read",
    category: "Finance",
    featured: false,
    sourceUrl: "https://economictimes.indiatimes.com/small-biz",
    sourceName: "Economic Times (SME Corner)",
    sections: [
      {
        heading: "Why Valuation Method Matters",
        body: "Choosing the wrong valuation methodology can result in significant over or undervaluation — costing founders equity or deterring investors. Indian regulations (SEBI, FEMA, Income Tax) mandate specific methods for specific purposes. A method appropriate for M&A may be entirely wrong for tax or ESOP purposes.",
      },
      {
        heading: "Discounted Cash Flow (DCF)",
        body: "DCF is the theoretically most rigorous method. It projects free cash flows over a forecast period (typically 5-7 years) and discounts them at the Weighted Average Cost of Capital (WACC). The terminal value captures value beyond the forecast period. DCF is mandated by RBI/FEMA for FDI valuation of unlisted companies and is commonly used in M&A and fundraising contexts.",
        bullets: [
          "Best for: FDI pricing, M&A, companies with predictable cash flows",
          "Risk: highly sensitive to assumptions on growth rate and WACC",
          "Indian law: Merchant Banker (Category I) must certify DCF for FEMA purposes",
        ],
      },
      {
        heading: "Comparable Company / Comparable Transaction",
        body: "Also called the market approach, this method derives value by applying valuation multiples (EV/Revenue, EV/EBITDA, P/E) from comparable listed companies or recent transactions. It is commonly used as a sanity check alongside DCF in M&A and fundraising. Challenges include finding truly comparable companies in India's fragmented market.",
        bullets: [
          "Best for: M&A, secondary transactions, cross-validation",
          "Common multiples: EV/EBITDA, EV/Revenue, P/E, EV/EBIT",
          "Data sources: NSE/BSE listed peers, private deal databases",
        ],
      },
      {
        heading: "Net Asset Value (Asset-Based)",
        body: "The asset-based approach values a company at the fair value of its net assets (total assets minus liabilities). It is most appropriate for holding companies, real estate companies, investment companies, and businesses being wound up. For going concern operating businesses, NAV often undervalues the company significantly because it ignores intangible value and earning potential.",
      },
      {
        heading: "Choosing the Right Method for Your Situation",
        body: "For ESOP valuation of unlisted startups: DCF (SEBI mandate). For FDI/FEMA compliance: DCF by Merchant Banker. For M&A: DCF + comparable transactions. For listed company share transfers: exchange price. For liquidation: NAV. When in doubt, use two methods and take the average or the higher — your CA and legal counsel should align on this before execution.",
      },
    ],
    relatedSlugs: ["esop-structuring-startups", "fema-compliance-foreign-investment", "union-budget-2025-tax-changes"],
  },

  {
    slug: "e-invoicing-gst-thresholds",
    tag: "GST Advisory",
    tagColor: "navy",
    title: "E-Invoicing Under GST: Mandatory Thresholds & Common Errors",
    desc: "The latest e-invoicing mandates, applicable turnover thresholds, and the most frequent errors that trigger scrutiny.",
    date: "July 2024",
    readTime: "4 min read",
    category: "GST",
    featured: false,
    sourceUrl: "https://einvoice1.gst.gov.in",
    sourceName: "GST e-Invoice Portal (NIC)",
    sections: [
      {
        heading: "Current Turnover Threshold",
        body: "As of August 2023, e-invoicing under GST is mandatory for all registered taxpayers whose aggregate turnover exceeds ₹5 crore in any preceding financial year. This threshold has been progressively lowered from ₹500 crore (October 2020) to ₹100 crore, ₹50 crore, ₹20 crore, ₹10 crore, and finally ₹5 crore. Businesses crossing the ₹5 crore threshold must implement e-invoicing from the first of the following month.",
      },
      {
        heading: "Who Is Exempt from E-Invoicing?",
        body: "Certain categories remain exempt regardless of turnover: banking/insurance/financial institutions, GTA (Goods Transport Agency) operations, passenger transport, multiplex cinema operators, and SEZ units issuing invoices to DTA. Exporters are not exempt — e-invoicing applies to exports and SEZ supplies from non-SEZ units.",
        bullets: [
          "Banks, NBFCs, insurance companies",
          "Goods Transport Agency (GTA)",
          "Passenger transport service providers",
          "Cinema tickets under multiplex services",
          "SEZ units (for supplies within SEZ)",
        ],
      },
      {
        heading: "Most Common E-Invoice Errors",
        body: "Based on our experience handling GST audits, these are the errors most likely to trigger scrutiny or mismatch in GSTR-2B reconciliation:",
        bullets: [
          "Wrong GSTIN of buyer — leads to ITC credit mismatch",
          "Incorrect HSN/SAC code — triggers rate-level discrepancy",
          "Invoice number format not matching series declared in GSTR-1",
          "Missing IRN (Invoice Reference Number) on printed invoices",
          "Cancellation of e-invoice after 24 hours without following amendment process",
          "Bulk upload files with wrong JSON structure rejected by IRP",
        ],
      },
      {
        heading: "Consequences of Non-Compliance",
        body: "Failure to generate e-invoices where mandatory results in the invoice being treated as invalid. The buyer cannot claim ITC on such invoices, and the seller is liable to a penalty of ₹10,000 per invoice under Section 122 of the CGST Act. Additionally, GSTR-1 auto-population from IRP only occurs for valid e-invoices, so non-compliance creates cascading reconciliation issues.",
      },
    ],
    relatedSlugs: ["gst-amnesty-scheme-2024", "annual-compliance-calendar-fy2024-25", "union-budget-2025-tax-changes"],
  },

  {
    slug: "annual-compliance-calendar-fy2024-25",
    tag: "Compliance",
    tagColor: "navy",
    title: "Annual Compliance Calendar for Indian Companies (FY 2024-25)",
    desc: "A month-by-month compliance calendar covering ROC filings, GST returns, TDS deadlines, and income tax due dates.",
    date: "April 2024",
    readTime: "3 min read",
    category: "Compliance",
    featured: false,
    sourceUrl: "https://www.mca.gov.in",
    sourceName: "Ministry of Corporate Affairs",
    sections: [
      {
        heading: "Q1: April – June 2024",
        body: "April begins the new financial year. Key obligations include filing GSTR-3B by the 20th of each month, TDS returns for Q4 (Quarter ending March) by May 31, and TDS certificates (Form 16/16A) issuance by June 15. Companies must also ensure Director KYC (DIR-3 KYC) filings are current.",
        bullets: [
          "Apr 30: GSTR-4 for composition dealers (FY 2023-24)",
          "May 15: TDS return Q4 (January–March 2024)",
          "May 31: Issue of TCS certificates Q4",
          "Jun 15: Advance tax Q1 instalment (15% of annual tax liability)",
          "Jun 30: DIR-3 KYC (Directors KYC) deadline (typically extended)",
        ],
      },
      {
        heading: "Q2: July – September 2024",
        body: "This is the most compliance-heavy quarter. Income tax return filing, FEMA annual returns, and AGM obligations all converge. Listed companies face additional SEBI filing requirements.",
        bullets: [
          "Jul 15: FLA Return (Annual Return on Foreign Liabilities & Assets)",
          "Jul 31: ITR filing deadline for individuals/firms not requiring audit",
          "Sep 15: Advance tax Q2 instalment (45% cumulative)",
          "Sep 30: AGM deadline for companies with FY ending March 31",
          "Sep 30: ROC annual filing trigger (post-AGM within 60 days)",
        ],
      },
      {
        heading: "Q3: October – December 2024",
        body: "Post-AGM ROC filings dominate this quarter. MGT-7 (Annual Return) and AOC-4 (Financial Statements) must be filed within 60 days of AGM. TDS returns for Q2 are also due in October.",
        bullets: [
          "Oct 15: TDS return Q2 (July–September 2024)",
          "Oct 29: MGT-7 filing (Annual Return) — 60 days from Sep 30 AGM",
          "Oct 29: AOC-4 filing (Financial Statements)",
          "Dec 15: Advance tax Q3 instalment (75% cumulative)",
        ],
      },
      {
        heading: "Q4: January – March 2025",
        body: "Year-end planning quarter. Advance tax Q4 (the largest instalment), statutory audit commencement, and assessment-related responses are the priority. March 31 is the last date for tax-saving investments and MSME vendor payment clearance (Section 43B(h)).",
        bullets: [
          "Jan 15: TDS return Q3 (October–December 2024)",
          "Jan 31: GSTR-9/9C audit returns for FY 2023-24",
          "Mar 15: Advance tax Q4 instalment (100% of tax liability)",
          "Mar 31: Deadline for Section 43B(h) MSME payments",
          "Mar 31: Tax-saving investments (80C, 80D, NPS)",
        ],
      },
    ],
    relatedSlugs: ["section-43b-msme-payment-rule", "fema-compliance-foreign-investment", "e-invoicing-gst-thresholds"],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedSlugs
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter(Boolean) as Article[];
}

export function getAllSlugs(): { slug: string }[] {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}
