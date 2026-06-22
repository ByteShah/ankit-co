import { COMPLIANCE_DEADLINES } from "@/lib/constants";

/**
 * ComplianceDeadlines — a CA-specific utility section.
 * A compliance calendar of recurring Indian statutory due-dates. Highly
 * characteristic of a working CA practice and useful to visitors — building
 * authenticity through real, factual content rather than marketing claims.
 */
export default function ComplianceDeadlines() {
  return (
    <section className="py-24 bg-[#EEF2F8]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563B0] mb-3">
            Stay Compliant
          </p>
          <h2 className="font-display text-4xl font-bold text-[#1B3C6E] tracking-tight">
            Key Compliance Due Dates
          </h2>
          <p className="text-[#5B6676] mt-3 leading-relaxed">
            A quick reference to recurring statutory deadlines under Indian tax
            and corporate law. Exact dates can vary by category and
            notification — speak with us for filings specific to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMPLIANCE_DEADLINES.map((d) => (
            <div
              key={d.title}
              className="flex gap-5 bg-white rounded-xl p-6 border border-[#D9E1EC] hover:border-[#2563B0]/40 hover:shadow-md transition-all"
            >
              <div className="shrink-0 w-14 h-14 rounded-lg bg-[#E8EEF6] flex flex-col items-center justify-center text-[#1B3C6E]">
                <span className="text-lg font-extrabold tabular-nums leading-none">
                  {d.day}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-[#2563B0] mt-0.5">
                  Day
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[#1B3C6E] mb-1">{d.title}</h3>
                <p className="text-sm text-[#5B6676] leading-relaxed">{d.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#8A96A8] mt-8">
          Indicative monthly/annual due dates for general guidance only — not a
          substitute for professional advice.
        </p>
      </div>
    </section>
  );
}
