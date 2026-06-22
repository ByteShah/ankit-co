"use client";

import { useState } from "react";
import Link from "next/link";
import NewsletterForm from "@/components/ui/NewsletterForm";
import PageBanner from "@/components/ui/PageBanner";
import { ARTICLES } from "@/lib/articles";

const TOOLS = [
  { icon: "calculate",              title: "Income Tax Calculator (FY 2024-25)", desc: "Compare old vs. new tax regime with real-time computation." },
  { icon: "receipt_long",           title: "GST Liability Estimator",            desc: "Instant GST calculation for goods and services supply." },
  { icon: "account_balance_wallet", title: "TDS Rate Finder",                    desc: "Look up applicable TDS rates by section and payee type." },
  { icon: "trending_up",            title: "Business Valuation Tool",            desc: "Rough DCF and EBITDA multiple based valuation estimator." },
];

const DOWNLOADS = [
  { title: "GST Compliance Checklist 2024-25",    size: "PDF · 1.2 MB" },
  { title: "ITR Filing Guide for Businesses",     size: "PDF · 2.4 MB" },
  { title: "A S Shah & Co. Service Brochure",     size: "PDF · 3.8 MB" },
];

const FILTERS = ["All", "Tax", "GST", "Compliance", "Startup", "Finance"] as const;
type Filter = (typeof FILTERS)[number];

const NEWS = [
  { date: "Mar 2025", headline: "CBDT issues clarification on new TDS provisions under Finance Bill 2025", href: "https://www.incometax.gov.in/iec/foportal/help/whats-new" },
  { date: "Feb 2025", headline: "Union Budget 2025 highlights — tax slabs revised, capital gains reformed", href: "https://indiabudget.gov.in" },
  { date: "Jan 2025", headline: "GST Council 55th meeting: rate rationalisations and sector exemptions announced", href: "https://www.gstcouncil.gov.in/gst-council-meetings" },
  { date: "Dec 2024", headline: "MCA introduces revised LLP amendment rules for compliance simplification", href: "https://www.mca.gov.in/content/mca/global/en/mca/llp.html" },
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
      <PageBanner
        breadcrumb="Resources"
        title="Resource Centre"
        subtitle="Tax insights, GST alerts, compliance guides and tools — for Indian businesses and professionals."
        image="/images/resources.jpg"
      />

      {/* ════════════════════════════════════════════════════════════
          STICKY FILTER BAR
      ════════════════════════════════════════════════════════════ */}
      <div className="bg-[#EEF2F8] sticky top-12 z-30 border-b border-[rgba(27,60,110,0.06)]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Search (cosmetic for now) */}
          <div className="relative w-full sm:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#5B6676] text-lg">search</span>
            <input
              type="text"
              placeholder="Search articles, guides, tools…"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg text-sm text-[#1B3C6E] placeholder:text-[#5B6676]/60 outline-none border border-transparent focus:border-[#2563B0]/40 transition-colors shadow-sm"
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
                    ? "blue-gradient text-white shadow-sm"
                    : "text-[#5B6676] hover:bg-white"
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
            <div className="blue-gradient rounded-2xl overflow-hidden relative min-h-[380px] flex flex-col justify-end mb-10 group">
              <div className="absolute inset-0 flex items-center justify-center text-white/5 select-none pointer-events-none">
                <span className="material-symbols-outlined text-[260px]">article</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3C6E]/95 via-[#1B3C6E]/40 to-transparent" />
              <div className="relative p-8 md:p-12 max-w-3xl">
                <span className="inline-block px-3 py-1 bg-[#2563B0] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                  {featured.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-xl">{featured.desc}</p>
                <div className="flex items-center gap-6">
                  <span className="text-white/50 text-xs">{featured.date} · {featured.readTime}</span>
                  <Link
                    href={`/resources/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-[#9DC0E8] font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Read Full Article
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((article) => (
                  <Link
                    key={article.title}
                    href={`/resources/${article.slug}`}
                    className={`bg-white p-7 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col border-l-4 ${
                      article.tagColor === "gold"
                        ? "border-[#2563B0]"
                        : "border-[#1B3C6E]"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B6676]/60 mb-3">
                      {article.tag}
                    </span>
                    <h3 className="text-base font-bold text-[#1B3C6E] mb-3 leading-snug flex-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#5B6676] leading-relaxed mb-4 line-clamp-2">{article.desc}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(27,60,110,0.06)]">
                      <span className="text-xs text-[#5B6676]/60">{article.date} · {article.readTime}</span>
                      <span className="material-symbols-outlined text-[#2563B0] text-lg">arrow_forward</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24 text-[#5B6676]">
            <span className="material-symbols-outlined text-5xl text-[#2563B0] mb-4 block">search_off</span>
            No articles in this category yet.
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════════════
          LATEST NEWS
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEF2F8] py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#2563B0] mb-2">Regulatory Updates</p>
              <h2 className="text-3xl font-extrabold text-[#1B3C6E] tracking-tight">Latest News</h2>
            </div>
            <Link href="#" className="text-[#1B3C6E] font-bold text-sm flex items-center gap-1 hover:text-[#2563B0] transition-colors">
              View all <span className="material-symbols-outlined text-lg">chevron_right</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NEWS.map(({ date, headline, href }) => (
              <a
                key={headline}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform group"
              >
                <span className="text-[10px] font-bold text-[#5B6676]/50 uppercase tracking-widest">{date}</span>
                <h4 className="text-sm font-bold text-[#1B3C6E] mt-2 leading-snug group-hover:text-[#2563B0] transition-colors">
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
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563B0] mb-3">Calculators</p>
          <h2 className="text-3xl font-extrabold text-[#1B3C6E] tracking-tight mb-8">Digital Tools</h2>
          <div className="space-y-4">
            {TOOLS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-center justify-between p-5 bg-white rounded-xl shadow-sm border border-transparent hover:border-[#2563B0]/30 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 bg-[#1B3C6E]/5 rounded-xl flex items-center justify-center text-[#1B3C6E]">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B3C6E] text-sm">{title}</h4>
                    <p className="text-xs text-[#5B6676] mt-0.5">{desc}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#5B6676] group-hover:text-[#2563B0] group-hover:translate-x-1 transition-all">
                  chevron_right
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Document Vault */}
        <div className="flex-1 blue-gradient p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 text-white/5 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[140px]">folder_open</span>
          </div>
          <div className="relative z-10">
            <p className="text-[#9DC0E8] text-xs font-bold uppercase tracking-widest mb-2">Free Downloads</p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">Document Vault</h2>
            <ul className="space-y-5">
              {DOWNLOADS.map(({ title, size }) => (
                <li
                  key={title}
                  className="flex items-center justify-between border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#9DC0E8]">description</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{title}</p>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">{size}</p>
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563B0]/20 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-white text-sm">download</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-3 bg-[#2563B0] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity shadow-lg">
              Request Custom Report
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          NEWSLETTER
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEF2F8] py-24 border-y border-[rgba(27,60,110,0.06)]">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <span className="material-symbols-outlined text-5xl text-[#2563B0] mb-4 block">mark_email_read</span>
          <h2 className="text-4xl font-extrabold text-[#1B3C6E] tracking-tight mb-3">The Weekly Ledger</h2>
          <p className="text-[#5B6676] text-lg mb-8 max-w-lg mx-auto">
            Tax alerts, GST updates, and compliance reminders — delivered every
            Tuesday to Indian finance professionals.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="light" />
          </div>
          <p className="text-[10px] text-[#5B6676]/50 uppercase tracking-widest font-medium mt-4">
            Zero spam. Instant unsubscribe. Data protected.
          </p>
        </div>
      </section>
    </>
  );
}
