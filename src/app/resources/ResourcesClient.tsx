"use client";

import { useState } from "react";
import Link from "next/link";
import NewsletterForm from "@/components/ui/NewsletterForm";

// ── Article data ──────────────────────────────────────────────────────────────
const ARTICLES = [
  {
    tag: "Tax Update",
    tagColor: "gold" as const,
    title: "Union Budget 2025: Key Tax Changes Every Business Must Know",
    desc: "A comprehensive analysis of direct and indirect tax amendments — capital gains, income slabs, and GST rate changes impacting Indian businesses.",
    date: "February 2025",
    readTime: "8 min read",
    category: "Tax",
    featured: true,
  },
  {
    tag: "GST Advisory",
    tagColor: "navy" as const,
    title: "GST Amnesty Scheme 2024: Deadline & Eligibility Guide",
    desc: "All you need to know about who qualifies, how to apply, and what penalties are waived under the GST Amnesty Scheme.",
    date: "December 2024",
    readTime: "5 min read",
    category: "GST",
    featured: false,
  },
  {
    tag: "Startup Advisory",
    tagColor: "navy" as const,
    title: "ESOP Structuring for Startups: A Tax-Efficient Framework",
    desc: "How to design an ESOP plan that motivates your team while minimising perquisite tax liability — with real valuation examples.",
    date: "November 2024",
    readTime: "6 min read",
    category: "Startup",
    featured: false,
  },
  {
    tag: "Compliance",
    tagColor: "navy" as const,
    title: "FEMA Compliance Checklist for Companies with Foreign Investment",
    desc: "A step-by-step checklist for companies receiving FDI — reporting requirements, RBI filings, and common pitfalls to avoid.",
    date: "October 2024",
    readTime: "7 min read",
    category: "Compliance",
    featured: false,
  },
  {
    tag: "Tax Update",
    tagColor: "gold" as const,
    title: "Section 43B(h) — MSME Payment Rule: Impact on Buyers & Sellers",
    desc: "The new provision disallowing deductions for delayed MSME payments — practical implications and how to stay compliant.",
    date: "September 2024",
    readTime: "5 min read",
    category: "Tax",
    featured: false,
  },
  {
    tag: "Finance",
    tagColor: "navy" as const,
    title: "Business Valuation Methods: Which One Is Right for Your Deal?",
    desc: "DCF, comparable company analysis, or asset-based valuation — understanding the right method for M&A, fundraising, and ESOP purposes.",
    date: "August 2024",
    readTime: "9 min read",
    category: "Finance",
    featured: false,
  },
  {
    tag: "GST Advisory",
    tagColor: "navy" as const,
    title: "E-Invoicing Under GST: Mandatory Thresholds & Common Errors",
    desc: "The latest e-invoicing mandates, applicable turnover thresholds, and the most frequent errors that trigger scrutiny.",
    date: "July 2024",
    readTime: "4 min read",
    category: "GST",
    featured: false,
  },
  {
    tag: "Compliance",
    tagColor: "navy" as const,
    title: "Annual Compliance Calendar for Indian Companies (FY 2024-25)",
    desc: "A month-by-month compliance calendar covering ROC filings, GST returns, TDS deadlines, and income tax due dates.",
    date: "April 2024",
    readTime: "3 min read",
    category: "Compliance",
    featured: false,
  },
];

const TOOLS = [
  { icon: "calculate",              title: "Income Tax Calculator (FY 2024-25)", desc: "Compare old vs. new tax regime with real-time computation." },
  { icon: "receipt_long",           title: "GST Liability Estimator",            desc: "Instant GST calculation for goods and services supply." },
  { icon: "account_balance_wallet", title: "TDS Rate Finder",                    desc: "Look up applicable TDS rates by section and payee type." },
  { icon: "trending_up",            title: "Business Valuation Tool",            desc: "Rough DCF and EBITDA multiple based valuation estimator." },
];

const DOWNLOADS = [
  { title: "GST Compliance Checklist 2024-25",    size: "PDF · 1.2 MB" },
  { title: "ITR Filing Guide for Businesses",     size: "PDF · 2.4 MB" },
  { title: "AS & Co. Service Brochure",           size: "PDF · 3.8 MB" },
];

const FILTERS = ["All", "Tax", "GST", "Compliance", "Startup", "Finance"] as const;
type Filter = (typeof FILTERS)[number];

const NEWS = [
  { date: "Mar 2025", headline: "CBDT issues clarification on new TDS provisions under Finance Bill 2025" },
  { date: "Feb 2025", headline: "Union Budget 2025 highlights — tax slabs revised, capital gains reformed" },
  { date: "Jan 2025", headline: "GST Council 55th meeting: rate rationalisations and sector exemptions announced" },
  { date: "Dec 2024", headline: "MCA introduces revised LLP amendment rules for compliance simplification" },
];

export default function ResourcesClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeFilter);

  const [featured, ...rest] = filtered.filter(Boolean);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pt-32 pb-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-[130px] pointer-events-none -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-16">
          {/* Copy */}
          <div className="flex-1 space-y-6">
            <span className="inline-block px-3 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] text-[10px] font-bold tracking-widest uppercase rounded-full">
              Resource Centre
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#0A1628] leading-tight tracking-tight">
              Knowledge.
              <br />Precision.
              <br /><span className="text-gold-gradient">Growth.</span>
            </h1>
            <p className="text-[#41474F] text-lg max-w-md leading-relaxed">
              Access our archive of fiscal intelligence, compliance guides, and
              strategic frameworks — built for Indian businesses and professionals.
            </p>
          </div>
          {/* Visual */}
          <div className="flex-1 relative">
            <div className="w-full aspect-[4/5] navy-gradient rounded-2xl overflow-hidden flex items-center justify-center relative shadow-2xl">
              <span className="material-symbols-outlined text-[180px] text-white/8 select-none">auto_stories</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">Updated Regularly</p>
                <p className="text-white text-xl font-bold">Tax insights, GST alerts &amp; compliance guides</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full border-2 border-[#C9A84C]/25" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STICKY FILTER BAR
      ════════════════════════════════════════════════════════════ */}
      <div className="bg-[#F2F1EE] sticky top-20 z-40 border-b border-[rgba(10,22,40,0.06)]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Search (cosmetic for now) */}
          <div className="relative w-full sm:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#41474F] text-lg">search</span>
            <input
              type="text"
              placeholder="Search articles, guides, tools…"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg text-sm text-[#0A1628] placeholder:text-[#41474F]/60 outline-none border border-transparent focus:border-[#C9A84C]/40 transition-colors shadow-sm"
            />
          </div>
          {/* Filter tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg whitespace-nowrap transition-all ${
                  activeFilter === f
                    ? "navy-gradient text-white shadow-sm"
                    : "text-[#41474F] hover:bg-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          FEATURED INSIGHT + GRID
      ════════════════════════════════════════════════════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
        {featured ? (
          <>
            {/* Featured — large card */}
            <div className="navy-gradient rounded-2xl overflow-hidden relative min-h-[380px] flex flex-col justify-end mb-10 group">
              <div className="absolute inset-0 flex items-center justify-center text-white/5 select-none pointer-events-none">
                <span className="material-symbols-outlined text-[260px]">article</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-transparent" />
              <div className="relative p-8 md:p-12 max-w-3xl">
                <span className="inline-block px-3 py-1 bg-[#C9A84C] text-[#1A1200] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                  {featured.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-xl">{featured.desc}</p>
                <div className="flex items-center gap-6">
                  <span className="text-white/50 text-xs">{featured.date} · {featured.readTime}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Read Full Article
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Article grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((article) => (
                  <a
                    key={article.title}
                    href="#"
                    className={`bg-white p-7 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col border-l-4 ${
                      article.tagColor === "gold"
                        ? "border-[#C9A84C]"
                        : "border-[#0A1628]"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#41474F]/60 mb-3">
                      {article.tag}
                    </span>
                    <h3 className="text-base font-bold text-[#0A1628] mb-3 leading-snug flex-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#41474F] leading-relaxed mb-4 line-clamp-2">{article.desc}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(10,22,40,0.06)]">
                      <span className="text-xs text-[#41474F]/60">{article.date} · {article.readTime}</span>
                      <span className="material-symbols-outlined text-[#C9A84C] text-lg">arrow_forward</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24 text-[#41474F]">
            <span className="material-symbols-outlined text-5xl text-[#C9A84C] mb-4 block">search_off</span>
            No articles in this category yet.
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════════════
          LATEST NEWS
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2F1EE] py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">Regulatory Updates</p>
              <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight">Latest News</h2>
            </div>
            <Link href="#" className="text-[#0A1628] font-bold text-sm flex items-center gap-1 hover:text-[#C9A84C] transition-colors">
              View all <span className="material-symbols-outlined text-lg">chevron_right</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NEWS.map(({ date, headline }) => (
              <a
                key={headline}
                href="#"
                className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform group"
              >
                <span className="text-[10px] font-bold text-[#41474F]/50 uppercase tracking-widest">{date}</span>
                <h4 className="text-sm font-bold text-[#0A1628] mt-2 leading-snug group-hover:text-[#C9A84C] transition-colors">
                  {headline}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TOOLS + DOCUMENT VAULT
      ════════════════════════════════════════════════════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 py-24 flex flex-col lg:flex-row gap-10">
        {/* Tools */}
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">Calculators</p>
          <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight mb-8">Digital Tools</h2>
          <div className="space-y-4">
            {TOOLS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-center justify-between p-5 bg-white rounded-xl shadow-sm border border-transparent hover:border-[#C9A84C]/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 bg-[#0A1628]/5 rounded-xl flex items-center justify-center text-[#0A1628]">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1628] text-sm">{title}</h4>
                    <p className="text-xs text-[#41474F] mt-0.5">{desc}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#41474F] group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all">
                  chevron_right
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Document Vault */}
        <div className="flex-1 navy-gradient p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 text-white/5 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[140px]">folder_open</span>
          </div>
          <div className="relative z-10">
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">Free Downloads</p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">Document Vault</h2>
            <ul className="space-y-5">
              {DOWNLOADS.map(({ title, size }) => (
                <li
                  key={title}
                  className="flex items-center justify-between border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#C9A84C]">description</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{title}</p>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">{size}</p>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A84C]/20 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-white text-sm">download</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-3 gold-gradient text-[#1A1200] font-bold text-xs uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity shadow-lg">
              Request Custom Report
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          NEWSLETTER
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2F1EE] py-24 border-y border-[rgba(10,22,40,0.06)]">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <span className="material-symbols-outlined text-5xl text-[#C9A84C] mb-4 block">mark_email_read</span>
          <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight mb-3">The Weekly Ledger</h2>
          <p className="text-[#41474F] text-lg mb-8 max-w-lg mx-auto">
            Tax alerts, GST updates, and compliance reminders — delivered every
            Tuesday to Indian finance professionals.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="light" />
          </div>
          <p className="text-[10px] text-[#41474F]/50 uppercase tracking-widest font-medium mt-4">
            Zero spam. Instant unsubscribe. Data protected.
          </p>
        </div>
      </section>
    </>
  );
}
