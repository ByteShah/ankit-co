import Link from "next/link";
import Image from "next/image";
import {
  FIRM,
  SERVICES,
  IMPORTANT_LINKS,
  UPDATES,
  COMPLIANCE_DEADLINES,
} from "@/lib/constants";
import CredentialsPlate from "@/components/ui/CredentialsPlate";
import QuickEnquiry from "@/components/ui/QuickEnquiry";

// ── Small section heading (blue rule + serif title) ───────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1B3C6E] pb-3 mb-6 border-b-2 border-[#E4EAF3] relative">
      <span className="absolute -bottom-[2px] left-0 w-16 h-[2px] bg-[#2563B0]" />
      {children}
    </h2>
  );
}

// ── Sidebar box (blue header + body) ──────────────────────────────────────────
function SidebarBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#D9E1EC] rounded-lg overflow-hidden shadow-sm">
      <div className="bg-[#1B3C6E] px-4 py-3">
        <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DC0E8]" />
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          WELCOME BANNER
      ════════════════════════════════════════════════════════════ */}
      <section className="blue-gradient text-white relative overflow-hidden">
        <Image
          src="/images/office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14305A]/95 via-[#1B3C6E]/92 to-[#1B3C6E]/80" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 48px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 48px)",
          }}
        />
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-12 md:py-16 relative z-10">
          <p className="text-[#9DC0E8] text-xs font-bold uppercase tracking-[0.25em] mb-3">
            Chartered Accountants · {FIRM.address.city}, {FIRM.address.country}
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            {FIRM.name}
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-2xl leading-relaxed mb-7">
            Audit &amp; assurance, taxation, corporate finance and regulatory
            compliance — delivered with diligence and integrity by a partner-led
            practice registered with the ICAI.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-white text-[#1B3C6E] px-6 py-3 rounded-md font-bold text-sm hover:bg-[#E8EEF6] transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="border border-white/35 text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          LATEST UPDATES TICKER
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#E8EEF6] border-y border-[#D9E1EC]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex items-stretch">
          <div className="flex items-center gap-2 bg-[#2563B0] text-white px-4 py-2.5 shrink-0">
            <span className="material-symbols-outlined text-base">campaign</span>
            <span className="text-xs font-bold uppercase tracking-wide hidden sm:inline">Latest Updates</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="marquee py-2.5">
              {[...UPDATES, ...UPDATES].map((u, i) => (
                <span key={i} className="inline-flex items-center text-sm text-[#1B3C6E] mx-6">
                  <span className="text-[#2563B0] font-bold mr-2 tabular-nums">{u.date}</span>
                  {u.text}
                  <span className="text-[#2563B0] ml-6">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MAIN — sidebar + content
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F7F9FC] py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {/* Important links */}
            <SidebarBox title="Important Links">
              <ul className="divide-y divide-[#EEF2F8]">
                {IMPORTANT_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-[#1B3C6E] hover:bg-[#E8EEF6] transition-colors group"
                    >
                      <span className="font-medium">{l.label}</span>
                      <span className="material-symbols-outlined text-[#2563B0] text-base group-hover:translate-x-0.5 transition-transform">
                        open_in_new
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </SidebarBox>

            {/* Quick enquiry */}
            <SidebarBox title="Quick Enquiry">
              <QuickEnquiry />
            </SidebarBox>

            {/* Reach us */}
            <SidebarBox title="Reach Us">
              <div className="p-4 space-y-3 text-sm text-[#5B6676]">
                <p className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#2563B0] text-lg mt-0.5">location_on</span>
                  <span>
                    {FIRM.address.line1}, {FIRM.address.line2}
                    <br />
                    {FIRM.address.city}, {FIRM.address.state} – {FIRM.address.pin}
                  </span>
                </p>
                <a href={`tel:${FIRM.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-[#2563B0] transition-colors">
                  <span className="material-symbols-outlined text-[#2563B0] text-lg">call</span>
                  <span className="tabular-nums">{FIRM.phone}</span>
                </a>
                <a href={`mailto:${FIRM.email}`} className="flex items-center gap-2.5 hover:text-[#2563B0] transition-colors break-all">
                  <span className="material-symbols-outlined text-[#2563B0] text-lg">mail</span>
                  {FIRM.email}
                </a>
                <p className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#2563B0] text-lg">schedule</span>
                  {FIRM.officeHours}
                </p>
              </div>
            </SidebarBox>
          </aside>

          {/* ── Content ── */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {/* Welcome note */}
            <SectionTitle>Welcome to {FIRM.name}</SectionTitle>
            <div className="space-y-4 text-[#41506b] leading-relaxed text-[15px]">
              <p>
                {FIRM.name} is a firm of Chartered Accountants based in{" "}
                {FIRM.address.city}, providing audit, taxation, corporate finance
                and regulatory-compliance services to businesses, startups and
                individuals across India. Established in {FIRM.foundedYear}, the
                firm is registered with the Institute of Chartered Accountants of
                India (ICAI).
              </p>
              <p>
                Our practice is partner-led — every assignment receives the direct
                attention of a senior Chartered Accountant. We focus on accuracy,
                timely statutory compliance and clear, practical advice that helps
                our clients meet their obligations and make informed financial
                decisions.
              </p>
              <p>
                Whether you require a statutory or internal audit, income-tax and
                GST compliance, a business valuation, or ongoing advisory support,
                our team is equipped to assist you with diligence and integrity.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 mt-4 text-[#2563B0] font-bold text-sm hover:gap-2.5 transition-all"
            >
              Read more about the firm
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>

            {/* Services */}
            <div className="mt-12">
              <SectionTitle>Our Services</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services#${s.id}`}
                    className="group flex gap-4 bg-white border border-[#D9E1EC] rounded-lg p-5 hover:border-[#2563B0] hover:shadow-md transition-all"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-md bg-[#E8EEF6] flex items-center justify-center text-[#1B3C6E] group-hover:bg-[#1B3C6E] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">{s.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1B3C6E] mb-1 group-hover:text-[#2563B0] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#5B6676] leading-relaxed">{s.shortDesc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          COMPLIANCE CALENDAR (due-date table)
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-16 border-t border-[#E4EAF3]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1B3C6E]">
                Compliance Calendar
              </h2>
              <p className="text-[#5B6676] text-sm mt-1">
                Recurring statutory due-dates under Indian tax &amp; corporate law.
              </p>
            </div>
            <span className="text-xs text-[#8A96A8]">
              Indicative dates — confirm specifics for your category with us.
            </span>
          </div>

          <div className="overflow-x-auto border border-[#D9E1EC] rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1B3C6E] text-white text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 font-bold w-24">Due Day</th>
                  <th className="px-4 py-3 font-bold">Compliance</th>
                  <th className="px-4 py-3 font-bold hidden sm:table-cell">Details</th>
                </tr>
              </thead>
              <tbody>
                {COMPLIANCE_DEADLINES.map((d, i) => (
                  <tr
                    key={d.title}
                    className={`border-t border-[#E4EAF3] ${i % 2 ? "bg-[#F7F9FC]" : "bg-white"}`}
                  >
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center justify-center min-w-9 h-9 px-2 rounded-md bg-[#E8EEF6] text-[#1B3C6E] font-extrabold text-sm tabular-nums">
                        {d.day}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-[#1B3C6E] text-sm">{d.title}</td>
                    <td className="px-4 py-3 text-sm text-[#5B6676] hidden sm:table-cell">{d.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CREDENTIALS PLATE (verifiable legitimacy)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-[#1B3C6E]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10">
          <CredentialsPlate />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA STRIP
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#E8EEF6] py-12 border-t border-[#D9E1EC]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1B3C6E]">
              Need professional assistance?
            </h2>
            <p className="text-[#5B6676] text-sm mt-1">
              Speak with a Chartered Accountant about your audit, tax or compliance requirements.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-[#2563B0] text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-[#1E5099] transition-colors"
            >
              Book a Consultation
            </Link>
            <a
              href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 border border-[#1B3C6E]/25 text-[#1B3C6E] px-6 py-3 rounded-md font-bold text-sm hover:bg-white transition-colors"
            >
              <span className="material-symbols-outlined text-base">call</span>
              {FIRM.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
