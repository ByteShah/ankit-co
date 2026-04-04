import type { Metadata } from "next";
import Link from "next/link";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ankitshahco.com'}/about` },
  title: "About Us",
  description: `Learn about ${FIRM.name} — our story, values, founding partner, and the philosophy behind our CA practice.`,
};

const VALUES = [
  { icon: "account_balance", title: "Integrity",  desc: "The cornerstone of every client relationship we build. ICAI ethics are not a checkbox — they are our identity." },
  { icon: "architecture",    title: "Precision",  desc: "Technical excellence in every calculated detail. We treat each engagement with forensic rigour." },
  { icon: "insights",        title: "Growth",     desc: "Strategising for long-term financial vitality. Your success is our success." },
  { icon: "verified",        title: "Clarity",    desc: "Translating complex regulatory data into plain-language insights you can act on immediately." },
];

const CREDENTIALS = [
  { icon: "verified_user",      label: "ICAI Member" },
  { icon: "workspace_premium",  label: "DISA Certified" },
  { icon: "security",           label: "FEMA Specialist" },
  { icon: "gavel",              label: "GST Practitioner" },
  { icon: "manage_accounts",    label: "Registered Valuer" },
  { icon: "shield_check",       label: "SEBI Compliance" },
];

export default function AboutPage() {
  const yearsExp = new Date().getFullYear() - FIRM.foundedYear;

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAFAF8] pt-32 pb-24 overflow-hidden">
        {/* Gold glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/4" />

        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left copy */}
            <div className="w-full md:w-3/5">
              <span className="inline-block px-3 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
                Established {FIRM.foundedYear}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-[#0A1628] mb-8">
                Precision In Every
                <br />
                <span className="text-gold-gradient">Financial</span> Ledger.
              </h1>
              <p className="text-lg text-[#41474F] max-w-xl leading-relaxed">
                {FIRM.name} was founded on the belief that every business
                deserves a financial partner — not just a service provider.
                We don&apos;t just balance books; we architect futures.
              </p>
            </div>

            {/* Right — visual card */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 navy-gradient aspect-[4/5] flex items-center justify-center">
                <div className="text-white/5 select-none">
                  <span className="material-symbols-outlined text-[200px]">domain</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent flex flex-col justify-end p-8">
                  <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">Our Foundation</p>
                  <p className="text-white text-lg font-bold leading-snug">
                    Integrity. Precision. Partnership.
                  </p>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-[rgba(201,168,76,0.2)]">
                <p className="text-[#0A1628] font-extrabold text-4xl mb-0.5">{yearsExp}+</p>
                <p className="text-[#41474F] text-xs font-medium max-w-[130px]">
                  Years of fiscal excellence across Indian markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          OUR STORY + VALUES
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F2F1EE] py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">Our Story</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] mb-8">
                The Philosophy Behind the Practice
              </h2>
              <div className="space-y-5 text-[#41474F] leading-relaxed">
                <p>
                  {FIRM.name} was built on a single conviction: financial advisory
                  should empower, not overwhelm. When CA Ankit Shah founded the firm
                  in {FIRM.foundedYear}, his vision was to create a practice that
                  treated every client engagement as a long-term partnership, not a
                  transactional service.
                </p>
                <p>
                  Over the years, our practice has grown from a boutique tax advisory
                  office to a full-service CA firm — covering audit, corporate finance,
                  risk management, and compliance. Through every phase of growth, we
                  have maintained one constant: partner-led service for every client.
                </p>
                <p>
                  We view every client portfolio as a blueprint — requiring meticulous
                  planning, structural strength, and room for expansion. That
                  architectural mindset defines how we approach every mandate.
                </p>
              </div>
            </div>

            {/* Value cards — staggered grid */}
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className={`p-7 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                    i % 2 === 1 ? "mt-6" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-[#C9A84C] text-3xl mb-4 block">
                    {v.icon}
                  </span>
                  <h3 className="font-bold text-[#0A1628] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#41474F] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FOUNDING PARTNER
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">Leadership</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0A1628]">
              The Founding Partner
            </h2>
          </div>

          {/* Single partner — prominent layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] navy-gradient flex items-center justify-center relative">
                <span className="material-symbols-outlined text-[160px] text-white/10">person</span>
                {/* Gold ring decoration */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-[#C9A84C]/30" />
                <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full border border-[#C9A84C]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
                {/* Name badge overlaid */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-1">CA Ankit Shah</h3>
                  <p className="text-[#C9A84C] font-semibold text-sm">Founding Partner</p>
                </div>
              </div>
              {/* Floating credential badge */}
              <div className="absolute -right-4 top-10 bg-white p-4 rounded-xl shadow-xl border border-[rgba(201,168,76,0.15)]">
                <span className="material-symbols-outlined text-[#C9A84C] text-2xl block mb-1">workspace_premium</span>
                <p className="text-[8px] font-bold uppercase tracking-widest text-[#41474F]">ICAI Member</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
                <span className="material-symbols-outlined text-sm">star</span>
                Founding Partner
              </span>
              <h2 className="text-4xl font-extrabold text-[#0A1628] mb-2">CA Ankit Shah</h2>
              <p className="text-[#C9A84C] font-semibold mb-6">
                B.Com (H) | FCA | DISA | Registered Valuer
              </p>

              <div className="space-y-4 text-[#41474F] leading-relaxed mb-8">
                <p>
                  CA Ankit Shah is the founder and managing partner of{" "}
                  {FIRM.name}. A Fellow Chartered Accountant with over{" "}
                  {yearsExp} years of experience, Ankit has built a reputation
                  for delivering partner-led, outcome-driven advisory across
                  audit, taxation, and corporate finance.
                </p>
                <p>
                  His areas of specialisation include income tax planning,
                  GST advisory, FEMA/RBI compliance, business valuations, and
                  M&amp;A due diligence. He brings a rare combination of
                  technical depth and strategic thinking to every client mandate.
                </p>
                <p>
                  Ankit firmly believes that the best financial advice is
                  personalised — which is why every significant engagement at
                  the firm receives his direct involvement and oversight.
                </p>
              </div>

              {/* Specialisations */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Income Tax", "GST Advisory", "Business Valuation", "M&A Due Diligence", "FEMA / RBI", "Corporate Finance"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#ECEAE6] text-[#0A1628] text-xs font-bold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 gold-gradient text-[#1A1200] px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                Book a Meeting with Ankit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CULTURE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F2F1EE]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Visual */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {/* Tall card */}
                <div className="navy-gradient rounded-2xl flex items-center justify-center h-64 mt-10">
                  <span className="material-symbols-outlined text-[80px] text-white/15">handshake</span>
                </div>
                {/* Short card */}
                <div className="bg-[#ECEAE6] rounded-2xl flex items-center justify-center h-64">
                  <span className="material-symbols-outlined text-[80px] text-[#0A1628]/10">groups</span>
                </div>
                {/* Gold accent card */}
                <div
                  className="col-span-2 rounded-2xl p-6 flex items-center gap-4"
                  style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8D08A 100%)" }}
                >
                  <span className="material-symbols-outlined text-[#1A1200] text-3xl">group</span>
                  <span className="text-[#1A1200] font-bold">
                    A firm built on long-term client relationships
                  </span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">Our Culture</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#0A1628] mb-6 leading-tight">
                A Culture of
                <br />Curious Precision.
              </h2>
              <p className="text-[#41474F] leading-relaxed mb-5">
                At {FIRM.name}, we cultivate an environment where intellectual
                curiosity meets rigorous professional discipline. Our team is
                encouraged to look beyond the spreadsheet and find the narrative
                within the numbers.
              </p>
              <p className="text-[#41474F] leading-relaxed mb-8">
                We value transparency, continuous learning, and the relentless
                pursuit of technical excellence. Every team member is supported to
                grow their own expertise — making the whole firm stronger.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "school",        label: "Continuous Learning" },
                  { icon: "handshake",     label: "Client First" },
                  { icon: "balance",       label: "Ethical Practice" },
                  { icon: "speed",         label: "Responsive Service" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#C9A84C] text-sm">{icon}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#0A1628]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CREDENTIALS BAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#41474F]/50 mb-10">
            Accreditations &amp; Memberships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {CREDENTIALS.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-[#0A1628]/30 hover:text-[#C9A84C] transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">{icon}</span>
                <span className="font-bold text-sm tracking-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA — Full Navy
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/8 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center relative z-10">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-4">Let&apos;s Connect</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to architect your financial future?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Schedule a private consultation with CA Ankit Shah and experience
            truly partner-led financial advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gold-gradient text-[#1A1200] px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Book Consultation Now
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
