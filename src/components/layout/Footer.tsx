import Link from "next/link";
import Image from "next/image";
import { FIRM, NAV_LINKS, SERVICES } from "@/lib/constants";
import NewsletterForm from "@/components/ui/NewsletterForm";
import CredentialsPlate from "@/components/ui/CredentialsPlate";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#1B3C6E] text-white mt-auto">
      {/* ── Main Grid ── */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white rounded-md px-2 py-1.5 inline-flex shrink-0">
                <Image
                  src="/ca-india-logo.png"
                  alt="CA India — Chartered Accountant"
                  width={108}
                  height={80}
                  className="h-8 w-auto"
                />
              </span>
              <span className="text-base font-bold tracking-tight leading-tight">
                {FIRM.nameShort}
                <span className="block text-[10px] font-semibold tracking-widest uppercase text-[#9DC0E8]">
                  Chartered Accountants
                </span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {FIRM.tagline}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: "language", label: "Website", href: "#" },
                { icon: "share",    label: "Share",   href: "#" },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-[#9DC0E8] hover:border-[#9DC0E8]/40 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#9DC0E8] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#9DC0E8] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[...NAV_LINKS,
                { label: "Privacy Policy",      href: "/privacy-policy" },
                { label: "Terms of Engagement", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter + Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#9DC0E8] mb-5">
              Stay Informed
            </h4>
            <p className="text-sm text-white/60 mb-4">
              Tax updates, GST alerts, and compliance insights — delivered to your inbox.
            </p>
            <NewsletterForm variant="dark" />

            <div className="mt-8 space-y-3 text-sm text-white/60">
              <a
                href={`mailto:${FIRM.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[#9DC0E8] text-base">mail</span>
                {FIRM.email}
              </a>
              <a
                href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[#9DC0E8] text-base">call</span>
                {FIRM.phone}
              </a>
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#9DC0E8] text-base mt-0.5">location_on</span>
                <span>
                  {FIRM.address.line1}, {FIRM.address.line2},{" "}
                  {FIRM.address.city} {FIRM.address.pin}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Registration strip ── */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <CredentialsPlate variant="inline" />
        </div>

        {/* ── ICAI-aware disclaimer ── */}
        <p className="mt-6 text-[11px] leading-relaxed text-white/35 max-w-4xl">
          {FIRM.disclaimer}
        </p>

        {/* ── Bottom bar ── */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>
            © {currentYear} {FIRM.name}. All rights reserved.
          </span>
          <span className="tabular-nums">
            ICAI Firm Reg. No. {FIRM.frn} · In practice since {FIRM.foundedYear}
          </span>
        </div>
      </div>
    </footer>
  );
}
