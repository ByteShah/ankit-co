import { FIRM } from "@/lib/constants";

/**
 * CredentialsPlate — the site's signature trust element.
 * An official-registration-style band showing the firm's ICAI credentials.
 * Replaces fabricated testimonials/stats with verifiable legitimacy markers.
 *
 * `variant="full"`  → standalone section band (home page)
 * `variant="inline"` → compact strip (footer)
 */
export default function CredentialsPlate({
  variant = "full",
}: {
  variant?: "full" | "inline";
}) {
  const items = [
    { label: "ICAI Firm Reg. No.", value: FIRM.frn },
    { label: "Membership No.", value: FIRM.icaiMembership },
    { label: "Established", value: String(FIRM.foundedYear) },
    { label: "Constitution", value: FIRM.constitution },
  ];

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
        {items.map((it) => (
          <span key={it.label} className="flex items-center gap-1.5">
            <span className="uppercase tracking-widest text-[10px] text-white/40">
              {it.label}
            </span>
            <span className="font-semibold tabular-nums text-white/80">{it.value}</span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="credentials-plate rounded-2xl px-6 py-7 md:px-10 md:py-8 text-white">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-3xl text-white/80">
            verified_user
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              Registered with ICAI
            </p>
            <p className="font-display text-xl font-semibold leading-tight">
              {FIRM.name}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 md:gap-x-10">
          {items.map((it) => (
            <div key={it.label}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/45">
                {it.label}
              </p>
              <p className="mt-1 text-base font-bold tabular-nums">{it.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
