import type { Metadata } from "next";
import Link from "next/link";
import { FIRM, SERVICES } from "@/lib/constants";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ankitshahco.com'}/services` },
  title: "Services",
  description:
    `Audit & Assurance, Tax Advisory, Corporate Finance, and Risk & Compliance services by ${FIRM.name}, Chartered Accountants.`,
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

// ── Metric block data (factual — no invented numbers) ─────────────────────────
const METRICS = [
  { value: `${ALL_SERVICES.length}`, label: "Service Lines" },
  { value: "8+",    label: "Industries Served" },
  { value: String(FIRM.foundedYear), label: "Established" },
  { value: "ICAI",  label: "Registered Firm" },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Services"
        title="Our Services"
        subtitle="Audit & assurance, taxation, corporate finance, secretarial and regulatory compliance — delivered by a partner-led practice."
        image="/images/services.jpg"
      />

      {/* Quick service navigation */}
      <div className="bg-[#EEF2F8] border-b border-[#D9E1EC]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-3 flex flex-wrap gap-2">
          {ALL_SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 rounded-md bg-white border border-[#D9E1EC] text-xs font-semibold text-[#1B3C6E] hover:border-[#2563B0] transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          CORE COMPETENCIES GRID
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#EEF2F8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563B0] mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-extrabold text-[#1B3C6E] tracking-tight">
              Core Competencies
            </h2>
            <p className="text-[#5B6676] mt-3 max-w-xl leading-relaxed">
              Our multidisciplinary approach ensures every facet of your financial
              health is structurally sound and optimised for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white p-8 md:p-10 flex flex-col h-full group hover:shadow-2xl transition-all duration-300 rounded-xl border border-[#E4EAF3]"
              >
                <span className="material-symbols-outlined text-4xl text-[#1B3C6E] mb-6">
                  {s.icon}
                </span>
                <h3 className="text-xl font-bold text-[#1B3C6E] mb-3">{s.title}</h3>
                <p className="text-[#5B6676] mb-8 flex-grow leading-relaxed text-sm">
                  {s.shortDesc}
                </p>
                <span className="flex items-center text-[#2563B0] font-bold text-sm tracking-wide group-hover:gap-2 transition-all">
                  LEARN MORE
                  <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SERVICE DEEP-DIVES
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC]">
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
                      isEven ? "blue-gradient" : "bg-[#EEF2F8]"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[140px] ${
                        isEven ? "text-white/10" : "text-[#1B3C6E]/10"
                      }`}
                    >
                      {service.icon}
                    </span>
                    {isEven && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2563B0]/20 to-transparent" />
                    )}
                  </div>
                  {/* Accent */}
                  {isEven ? (
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2 border-[#2563B0]/25" />
                  ) : (
                    <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-[#1B3C6E]/8" />
                  )}
                </div>

                {/* Copy */}
                <div className={isEven ? "" : "lg:order-1"}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563B0]/10 text-[#2563B0] text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                    <span className="material-symbols-outlined text-sm">{service.icon}</span>
                    {service.title}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B3C6E] tracking-tight mb-5 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#5B6676] leading-relaxed mb-8">{service.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-[#E4EAF3] text-[#1B3C6E] text-xs font-bold rounded-full tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#2563B0] text-[#FFFFFF] px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
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
      <section className="py-24 bg-[#EEF2F8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="blue-gradient rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563B0]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
              <div className="md:flex-1 text-center md:text-left">
                <p className="text-[#9DC0E8] text-xs font-bold uppercase tracking-widest mb-3">
                  At a Glance
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  A Full-Service<br />Chartered Accountancy Practice.
                </h3>
                <p className="text-white/60 mt-3 text-sm max-w-xs">
                  The breadth of our practice across services and industries.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:flex-1 w-full">
                {METRICS.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-[#9DC0E8] mb-1">
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
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563B0] mb-4">
            Let&apos;s Build Together
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1B3C6E] tracking-tight mb-6 leading-tight">
            Ready to build your{" "}
            <span className="text-[#2563B0]">financial legacy?</span>
          </h2>
          <p className="text-[#5B6676] text-lg mb-10 max-w-xl mx-auto">
            Contact {FIRM.name} for a tailored consultation. We&apos;ll analyse your current
            financial structure and propose a strategic framework for sustained growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#2563B0] text-[#FFFFFF] px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Request a Consultation
            </Link>
            <Link
              href="/about"
              className="border border-[rgba(27,60,110,0.15)] text-[#1B3C6E] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#EEF2F8] transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
