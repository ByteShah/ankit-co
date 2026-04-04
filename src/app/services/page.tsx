import type { Metadata } from "next";
import Link from "next/link";
import { FIRM, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ankitshahco.com'}/services` },
  title: "Services",
  description:
    "Audit & Assurance, Tax Advisory, Corporate Finance, and Risk & Compliance services by Ankit Shah & Co. LLP — a premier CA firm.",
};

// ── All service cards including secretarial ───────────────────────────────────
const ALL_SERVICES = [
  ...SERVICES,
  {
    id: "secretarial",
    icon: "inventory_2",
    title: "Secretarial & Compliance",
    shortDesc:
      "Company secretarial, MCA filings, ROC compliance, and governance support to keep your entity in perfect standing.",
    desc: "Our secretarial practice handles incorporation, annual filings, board meeting compliance, statutory register maintenance, and ROC/MCA advisory — ensuring your company governance is watertight.",
    tags: ["MCA / ROC Filing", "Incorporation", "Board Compliance", "Statutory Registers"],
  },
] as const;

// ── Metric block data ─────────────────────────────────────────────────────────
const METRICS = [
  { value: "₹50Cr+",  label: "Tax Savings Delivered" },
  { value: "500+",    label: "Clients Served" },
  { value: "200+",    label: "Audits Yearly" },
  { value: "15%",     label: "Avg. Tax Optimisation" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#FAFAF8]">
        {/* Gold glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/6 rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/4" />

        <div className="max-w-screen-xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="md:col-span-7">
            <span className="inline-block px-3 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] text-[10px] font-bold tracking-[0.15em] uppercase mb-6 rounded-full">
              Expertise Framework
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0A1628] leading-[1.05] mb-6">
              Bespoke Financial
              <br />
              <span className="text-gold-gradient italic font-semibold">Architecture.</span>
            </h1>
            <p className="text-[#41474F] text-lg md:text-xl max-w-xl leading-relaxed">
              We provide precise, authoritative financial strategies — from
              complex audits to strategic tax advisory. Our practice is your
              blueprint for sustainable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {ALL_SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 rounded-full border border-[rgba(10,22,40,0.12)] text-sm font-medium text-[#41474F] hover:border-[#C9A84C] hover:text-[#0A1628] transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Right — decorative card */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl navy-gradient relative">
              <div className="absolute inset-0 flex items-center justify-center text-white/5 select-none">
                <span className="material-symbols-outlined text-[220px]">balance</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent flex flex-col justify-end p-8">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">Our Promise</p>
                <p className="text-white text-xl font-bold leading-snug">
                  Every engagement.<br />Partner-led. Outcome-focused.
                </p>
              </div>
            </div>
            {/* Gold ring */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-2 border-[#C9A84C]/25" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border border-[#C9A84C]/15" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CORE COMPETENCIES GRID
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F2F1EE]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight">
              Core Competencies
            </h2>
            <p className="text-[#41474F] mt-3 max-w-xl leading-relaxed">
              Our multidisciplinary approach ensures every facet of your financial
              health is structurally sound and optimised for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First 3 cards — regular */}
            {ALL_SERVICES.slice(0, 3).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white p-8 md:p-10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300 rounded-xl"
              >
                <span className="material-symbols-outlined text-4xl text-[#0A1628] mb-6">
                  {s.icon}
                </span>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">{s.title}</h3>
                <p className="text-[#41474F] mb-8 flex-grow leading-relaxed text-sm">
                  {s.shortDesc}
                </p>
                <span className="flex items-center text-[#C9A84C] font-bold text-sm tracking-wide group-hover:gap-2 transition-all">
                  LEARN MORE
                  <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </a>
            ))}

            {/* Corporate Finance — spans 2 cols */}
            <a
              href={`#${ALL_SERVICES[2].id}`}
              className="hidden"
              aria-hidden
            />
            <a
              href="#corporate-finance"
              className="bg-white p-8 md:p-10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300 rounded-xl lg:col-span-2"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start h-full">
                <div className="flex flex-col h-full">
                  <span className="material-symbols-outlined text-4xl text-[#0A1628] mb-6">
                    {ALL_SERVICES[2].icon}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                    {ALL_SERVICES[2].title}
                  </h3>
                  <p className="text-[#41474F] mb-8 flex-grow leading-relaxed text-sm">
                    {ALL_SERVICES[2].shortDesc}
                  </p>
                  <span className="flex items-center text-[#C9A84C] font-bold text-sm tracking-wide group-hover:gap-2 transition-all">
                    LEARN MORE
                    <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
                {/* Visual panel */}
                <div className="hidden md:flex items-center justify-center h-full navy-gradient rounded-xl p-8 text-white/10">
                  <span className="material-symbols-outlined text-[120px]">trending_up</span>
                </div>
              </div>
            </a>

            {/* Secretarial */}
            <a
              href="#secretarial"
              className="bg-white p-8 md:p-10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300 rounded-xl"
            >
              <span className="material-symbols-outlined text-4xl text-[#0A1628] mb-6">
                {ALL_SERVICES[4].icon}
              </span>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {ALL_SERVICES[4].title}
              </h3>
              <p className="text-[#41474F] mb-8 flex-grow leading-relaxed text-sm">
                {ALL_SERVICES[4].shortDesc}
              </p>
              <span className="flex items-center text-[#C9A84C] font-bold text-sm tracking-wide group-hover:gap-2 transition-all">
                LEARN MORE
                <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SERVICE DEEP-DIVES
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 space-y-24">
          {ALL_SERVICES.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Visual */}
                <div className={`relative ${isEven ? "" : "lg:order-2"}`}>
                  <div
                    className={`rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center ${
                      isEven ? "navy-gradient" : "bg-[#F2F1EE]"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[140px] ${
                        isEven ? "text-white/10" : "text-[#0A1628]/10"
                      }`}
                    >
                      {service.icon}
                    </span>
                    {isEven && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/20 to-transparent" />
                    )}
                  </div>
                  {/* Gold accent */}
                  {isEven ? (
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2 border-[#C9A84C]/25" />
                  ) : (
                    <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-[#0A1628]/8" />
                  )}
                </div>

                {/* Copy */}
                <div className={isEven ? "" : "lg:order-1"}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                    <span className="material-symbols-outlined text-sm">{service.icon}</span>
                    {service.title}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] tracking-tight mb-5 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#41474F] leading-relaxed mb-8">{service.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-[#ECEAE6] text-[#0A1628] text-xs font-bold rounded-full tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 gold-gradient text-[#1A1200] px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    Discuss This Service
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          METRIC BLOCKS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F2F1EE]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="navy-gradient rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
              <div className="md:flex-1 text-center md:text-left">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">
                  Proven Results
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Structural Integrity.<br />Measurable Impact.
                </h3>
                <p className="text-white/60 mt-3 text-sm max-w-xs">
                  Numbers that demonstrate the breadth and depth of our practice.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:flex-1 w-full">
                {METRICS.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-[#C9A84C] mb-1">
                      {value}
                    </div>
                    <div className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">
            Let&apos;s Build Together
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0A1628] tracking-tight mb-6 leading-tight">
            Ready to build your{" "}
            <span className="text-gold-gradient">financial legacy?</span>
          </h2>
          <p className="text-[#41474F] text-lg mb-10 max-w-xl mx-auto">
            Contact {FIRM.name} for a tailored consultation. We&apos;ll analyse your current
            financial structure and propose a strategic framework for sustained growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="gold-gradient text-[#1A1200] px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Request a Consultation
            </Link>
            <Link
              href="/about"
              className="border border-[rgba(10,22,40,0.15)] text-[#0A1628] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#F2F1EE] transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
