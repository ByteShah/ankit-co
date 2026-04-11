import Link from "next/link";
import { FIRM, SERVICES } from "@/lib/constants";
import NewsletterForm from "@/components/ui/NewsletterForm";
import HeroCTA from "@/components/ui/HeroCTA";

// ── Stat pill for hero ────────────────────────────────────────────────────────
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-[#0A1628]">{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-[#41474F] mt-1">{label}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAFAF8]">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#0A1628 0,#0A1628 1px,transparent 0,transparent 50%),repeating-linear-gradient(90deg,#0A1628 0,#0A1628 1px,transparent 0,transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold glow blobs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C9A84C]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A1628]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 py-20">
          {/* Left — copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] rounded-full text-xs font-bold tracking-widest uppercase mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block" />
              ICAI Registered CA Firm
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A1628] leading-[1.05] mb-6">
              Your Strategic
              <br />
              Partner in{" "}
              <span className="text-gold-gradient">Financial</span>
              <br />
              <span className="text-gold-gradient">Success</span>
            </h1>
            <p className="text-lg text-[#41474F] max-w-lg mb-10 leading-relaxed">
              Precision-driven accountancy for growing enterprises and ambitious
              startups. We don&apos;t just balance books — we build financial
              legacies through integrity and insight.
            </p>
            <HeroCTA />

            {/* Trust row */}
            <div className="mt-12 flex items-center gap-6 flex-wrap">
              {[
                { value: `${new Date().getFullYear() - FIRM.foundedYear}+`, label: "Years of Practice" },
                { value: "500+",  label: "Clients Served" },
                { value: "98%",   label: "Client Retention" },
                { value: "4",     label: "Practice Areas" },
              ].map((s) => (
                <StatPill key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Right — image card */}
          <div className="lg:col-span-6 relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] navy-gradient">
                {/* Decorative inner content (no external images) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-white/10 select-none">
                  <span className="material-symbols-outlined text-[180px]">account_balance</span>
                </div>
                {/* Overlay copy */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/30 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Our Commitment</p>
                  <p className="text-white text-xl font-bold leading-snug">
                    Precision. Integrity.<br />Financial Excellence.
                  </p>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-[rgba(201,168,76,0.2)]">
                <div className="text-3xl font-extrabold text-[#0A1628] mb-0.5">
                  {new Date().getFullYear() - FIRM.foundedYear}+
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#41474F]">
                  Years of Excellence
                </div>
                <p className="text-xs text-[#41474F] mt-1 max-w-[120px]">
                  Built on trust &amp; integrity
                </p>
              </div>
              {/* Gold accent ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-[#C9A84C]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          OUR EXPERTISE (Services Grid)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F2F1EE]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
                What We Do
              </p>
              <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight">
                Our Expertise
              </h2>
              <p className="text-[#41474F] mt-3 leading-relaxed">
                Tailored financial frameworks designed to withstand market
                volatility and drive sustainable growth.
              </p>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-2 text-[#C9A84C] font-bold text-sm group shrink-0"
            >
              Explore All Services
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#0A1628]/5 rounded-full flex items-center justify-center text-[#0A1628] mb-6 group-hover:navy-gradient group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-3">{service.title}</h3>
                <p className="text-[#41474F] text-sm leading-relaxed">{service.shortDesc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[#C9A84C] text-xs font-bold">
                  Learn more
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — visual */}
            <div className="relative">
              <div className="aspect-square bg-[#ECEAE6] rounded-3xl overflow-hidden flex items-center justify-center navy-gradient">
                <div className="text-white/10 select-none flex flex-col items-center">
                  <span className="material-symbols-outlined text-[200px]">groups</span>
                </div>
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  {[
                    { v: "500+", l: "Clients Served" },
                    { v: "₹50Cr+", l: "Tax Savings" },
                    { v: "100%", l: "Compliance Rate" },
                    { v: "48hr", l: "Avg. Response" },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
                      <div className="text-xl font-extrabold text-[#C9A84C]">{v}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider opacity-70">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating years badge */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 navy-gradient p-8 rounded-2xl shadow-2xl text-white hidden md:block">
                <div className="text-5xl font-extrabold text-[#C9A84C]">
                  {new Date().getFullYear() - FIRM.foundedYear}+
                </div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mt-1">
                  Years Excellence
                </div>
              </div>
            </div>

            {/* Right — features */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
                Why Choose Us
              </p>
              <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight mb-10">
                Architecting Financial Stability Through Integrity
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: "person_pin",
                    title: "Bespoke, Partner-Led Service",
                    desc: "Every engagement is led by a senior partner — not delegated to juniors. You get direct access to expertise.",
                  },
                  {
                    icon: "verified",
                    title: "Unwavering Integrity",
                    desc: "Ethical standards are the foundation of our practice. We maintain the highest levels of professional conduct and ICAI compliance.",
                  },
                  {
                    icon: "bolt",
                    title: "Proactive & Tech-Driven",
                    desc: "We leverage modern audit technology and data analytics to provide predictive insights — not just historical reports.",
                  },
                  {
                    icon: "support_agent",
                    title: "Year-Round Support",
                    desc: "Tax season or not — we're available throughout the year for advisory, compliance queries, and strategic guidance.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#C9A84C] text-lg">{icon}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0A1628] mb-1">{title}</h4>
                      <p className="text-[#41474F] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          KNOWLEDGE HUB (Bento Grid)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#ECEAE6]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
              Insights & Updates
            </p>
            <h2 className="text-4xl font-extrabold text-[#0A1628] tracking-tight">
              Knowledge Hub
            </h2>
            <p className="text-[#41474F] mt-3">
              Stay ahead of regulatory shifts with insights from our senior partners
              on Indian tax law, GST, and financial trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured article — spans 2 cols */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl navy-gradient min-h-[400px] flex flex-col justify-end">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[300px]">description</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-transparent" />
              <div className="relative p-8 md:p-10 text-white">
                <span className="inline-block px-3 py-1 bg-[#C9A84C] text-[#1A1200] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                  Tax Update
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 max-w-lg leading-tight">
                  Union Budget 2025: Key Tax Changes Every Business Must Know
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md mb-6">
                  A comprehensive analysis of the direct and indirect tax amendments
                  announced in Union Budget 2025 and their impact on businesses.
                </p>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-sm hover:gap-3 transition-all"
                >
                  Read Full Analysis
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block px-3 py-1 bg-[#ECEAE6] text-[#41474F] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-5">
                  GST Advisory
                </span>
                <h3 className="text-lg font-bold text-[#0A1628] mb-3 leading-snug">
                  GST Amnesty Scheme 2024: Deadline & Eligibility Guide
                </h3>
                <p className="text-sm text-[#41474F] leading-relaxed">
                  All you need to know about the GST amnesty scheme — who qualifies,
                  how to apply, and what penalties are waived.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[rgba(10,22,40,0.06)]">
                <span className="text-xs font-bold text-[#41474F]/60">March 2025</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block px-3 py-1 bg-[#ECEAE6] text-[#41474F] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-5">
                  Startup Advisory
                </span>
                <h3 className="text-lg font-bold text-[#0A1628] mb-3 leading-snug">
                  ESOP Structuring for Startups: A Tax-Efficient Framework
                </h3>
                <p className="text-sm text-[#41474F] leading-relaxed">
                  How to design an ESOP plan that motivates your team while
                  minimising perquisite tax liability for employees.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[rgba(10,22,40,0.06)]">
                <span className="text-xs font-bold text-[#41474F]/60">February 2025</span>
              </div>
            </div>

            {/* Newsletter block */}
            <div className="md:col-span-2 navy-gradient p-8 md:p-10 rounded-2xl text-white flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#C9A84C]">mail</span>
                </div>
                <h3 className="text-2xl font-bold">Subscribe to The Ledger</h3>
              </div>
              <p className="text-white/70 mb-6 max-w-md text-sm">
                Bi-weekly regulatory updates, tax alerts, and strategic financial
                insights — directly from our senior partners.
              </p>
              <div className="max-w-md">
                <NewsletterForm variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CREDENTIALS / TRUST BAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#41474F]/50 mb-10">
            Accreditations & Memberships
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {[
              "ICAI Member",
              "DISA Certified",
              "FEMA Specialist",
              "GST Practitioner",
              "Registered Valuer",
              "ISO 9001 Process",
            ].map((cred) => (
              <span
                key={cred}
                className="text-sm font-black uppercase tracking-tight text-[#0A1628]/30 hover:text-[#C9A84C] transition-colors"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 navy-gradient text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left */}
            <div className="lg:w-1/3">
              <span className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs">
                Client Voices
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-4 leading-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="text-white/60 leading-relaxed text-sm">
                Our relationships are built on consistent performance, strategic
                foresight, and complete transparency.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-[#C9A84C]/20 border-2 border-[#0A1628] flex items-center justify-center text-[#C9A84C] text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/60">
                  <span className="text-white font-bold">500+</span> happy clients
                </p>
              </div>
            </div>

            {/* Right — testimonial cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote:
                    "The transition to Ankit Shah & Co. was the most significant positive change in our financial governance history. Their tax structuring saved us over ₹1.2Cr last year.",
                  name: "Rajesh Mehta",
                  role: "CFO, Meridian Constructions",
                },
                {
                  quote:
                    "Highly specialised knowledge combined with a boutique, personalised approach. They act as a true extension of our finance team — not just an external auditor.",
                  name: "Priya Sharma",
                  role: "Founder, TechVault Startup",
                },
              ].map(({ quote, name, role }) => (
                <div
                  key={name}
                  className="bg-[#1A2E4A] p-8 rounded-2xl relative"
                >
                  <span className="material-symbols-outlined text-5xl text-[#C9A84C]/20 absolute top-4 right-4 select-none">
                    format_quote
                  </span>
                  <p className="text-base leading-relaxed italic mb-6 text-white/80">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{name}</h4>
                      <p className="text-xs text-white/50">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="bg-[#F2F1EE] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A84C]/8 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0A1628]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">
                Ready to Begin?
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1628] tracking-tight mb-5">
                Ready to Architect Your Success?
              </h2>
              <p className="text-[#41474F] text-lg max-w-xl mx-auto mb-10">
                Connect with {FIRM.name} today — a senior partner will personally
                respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="navy-gradient text-white px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Book a Consultation
                </Link>
                <a
                  href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 border border-[rgba(10,22,40,0.2)] text-[#0A1628] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#ECEAE6] transition-colors"
                >
                  <span className="material-symbols-outlined text-[#C9A84C]">call</span>
                  {FIRM.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
