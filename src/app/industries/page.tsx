import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES, FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ankitshahco.com'}/industries` },
  title: "Industries",
  description: `${FIRM.name} serves clients across Manufacturing, Real Estate, Healthcare, Startups, BFSI, E-Commerce, NGOs, and Professional Services.`,
};

// Success story snippets per industry
const SUCCESS: Record<string, { stat: string; story: string }> = {
  "Manufacturing & Trading":   { stat: "18%",   story: "Reduced tax liability by 18% for an MSME manufacturer through strategic GST restructuring and export incentive utilisation." },
  "Real Estate & Construction": { stat: "₹45L+", story: "Unlocked ₹45L in immediate tax savings for a developer via optimised project completion accounting under RERA." },
  "Healthcare & Pharma":        { stat: "14%",   story: "Improved net operating income by 14% for a multi-specialty clinic through revenue cycle restructuring." },
  "Startups & Technology":      { stat: "₹80L",  story: "Guided a Series A SaaS startup through ESOP structuring and R&D tax credits worth ₹80L in first year." },
  "BFSI":                       { stat: "100%",  story: "Achieved 100% on-time RBI regulatory filing compliance for an NBFC across 3 consecutive fiscal years." },
  "E-Commerce & Retail":        { stat: "22%",   story: "Reduced GST compliance cost by 22% for a D2C brand through marketplace reconciliation automation." },
  "NGOs & Trusts":              { stat: "3 Wks", story: "Obtained 12A and 80G registrations for a charitable trust within 3 weeks, enabling donor tax benefits." },
  "Professional Services":      { stat: "₹30L",  story: "Restructured LLP profit-sharing for a law firm, saving ₹30L annually through optimised partner remuneration." },
};

// Which cards get navy highlight treatment
const NAVY_CARDS = new Set(["Startups & Technology", "BFSI"]);

export default function IndustriesPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-16 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            {/* Left copy */}
            <div className="md:col-span-8">
              <span className="inline-block text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-5">
                Our Verticals
              </span>
              <h1
                className="font-extrabold text-[#0A1628] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Specialised Expertise
                <br />
                Across <span className="text-gold-gradient">Indian Sectors.</span>
              </h1>
              <p className="text-[#41474F] text-xl max-w-2xl leading-relaxed">
                We don&apos;t just balance books — we architect financial frameworks
                tailored to the unique complexities of your industry.
                Precision-led advisory for high-growth Indian markets.
              </p>
            </div>
            {/* Right — gold orb */}
            <div className="md:col-span-4 flex justify-end">
              <div className="w-20 h-20 md:w-24 md:h-24 gold-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[#1A1200] text-4xl">account_balance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BENTO GRID
      ════════════════════════════════════════════════════════════ */}
      <section className="pb-24 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/*
            Layout pattern (12-col):
            Row 1: Manufacturing(4) | Startups★(4) | Real Estate(4)
            Row 2: Healthcare(6)    | BFSI★(6)
            Row 3: E-Commerce(4)    | NGOs(4)      | Professional(4)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* ── Regular cards (rows 1 & 3) ── */}
            {[
              INDUSTRIES[0], // Manufacturing
              INDUSTRIES[3], // Startups & Technology  ← navy
              INDUSTRIES[1], // Real Estate
              INDUSTRIES[5], // E-Commerce
              INDUSTRIES[6], // NGOs
              INDUSTRIES[7], // Professional Services
            ].map((ind) => {
              const isNavy = NAVY_CARDS.has(ind.title);
              const s = SUCCESS[ind.title];
              return (
                <div
                  key={ind.title}
                  className={`p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                    isNavy
                      ? "navy-gradient text-white shadow-xl"
                      : "bg-white shadow-sm hover:shadow-xl"
                  }`}
                >
                  {/* Decorative icon watermark for navy cards */}
                  {isNavy && (
                    <div className="absolute -right-6 -bottom-6 opacity-10 select-none pointer-events-none">
                      <span className="material-symbols-outlined text-[9rem]">{ind.icon}</span>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                        isNavy ? "bg-white/10" : "bg-[#0A1628]/5"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-2xl ${
                          isNavy ? "text-[#C9A84C]" : "text-[#0A1628]"
                        }`}
                      >
                        {ind.icon}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 ${
                        isNavy ? "text-white" : "text-[#0A1628]"
                      }`}
                    >
                      {ind.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        isNavy ? "text-white/75" : "text-[#41474F]"
                      }`}
                    >
                      {ind.desc}
                    </p>
                    <div
                      className={`pt-5 border-t ${
                        isNavy ? "border-white/15" : "border-[rgba(10,22,40,0.07)]"
                      }`}
                    >
                      <p
                        className={`text-[10px] font-bold tracking-widest uppercase mb-1.5 ${
                          isNavy ? "text-[#C9A84C]" : "text-[#C9A84C]"
                        }`}
                      >
                        Success Highlight
                      </p>
                      <p
                        className={`text-xs italic leading-relaxed ${
                          isNavy ? "text-white/70" : "text-[#41474F]"
                        }`}
                      >
                        {s.story}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ── Wide cards (row 2 — span 2 on desktop) ── */}
            {[INDUSTRIES[2], INDUSTRIES[4]].map((ind) => {
              const s = SUCCESS[ind.title];
              return (
                <div
                  key={ind.title}
                  className="lg:col-span-2 bg-[#F2F1EE] p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-start hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Main content */}
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-[#0A1628]/5 rounded-xl flex items-center justify-center mb-6 text-[#0A1628]">
                      <span className="material-symbols-outlined text-2xl">{ind.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1628] mb-3">{ind.title}</h3>
                    <p className="text-[#41474F] text-sm leading-relaxed mb-6">{ind.desc}</p>
                    <div className="pt-5 border-t border-[rgba(10,22,40,0.08)]">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[#C9A84C] mb-1.5">
                        Success Highlight
                      </p>
                      <p className="text-xs italic text-[#41474F] leading-relaxed">{s.story}</p>
                    </div>
                  </div>
                  {/* Stat panel */}
                  <div className="shrink-0 navy-gradient rounded-xl p-6 text-center min-w-[120px] self-stretch flex flex-col items-center justify-center">
                    <div className="text-3xl font-extrabold text-[#C9A84C] mb-1">{s.stat}</div>
                    <div className="text-[9px] font-bold text-white/60 uppercase tracking-widest">
                      Key Result
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          INDUSTRIES COUNT STRIP
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F2F1EE]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "8+",    label: "Industries Served" },
              { value: "500+",  label: "Active Clients" },
              { value: "₹50Cr+",label: "Tax Savings Delivered" },
              { value: `${new Date().getFullYear() - FIRM.foundedYear}+`, label: "Years of Expertise" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-extrabold text-[#C9A84C] mb-1">{value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#41474F]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">
            Your Industry. Our Expertise.
          </p>
          <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight mb-5">
            Ready to Scale Your Industry Impact?
          </h2>
          <p className="text-[#41474F] text-lg max-w-xl mx-auto mb-10">
            Connect with a specialist who speaks your language and understands
            your unique market pressures — no generic advice, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gold-gradient text-[#1A1200] px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Speak to a Specialist
            </Link>
            <Link
              href="/services"
              className="border border-[rgba(10,22,40,0.15)] text-[#0A1628] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#F2F1EE] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
