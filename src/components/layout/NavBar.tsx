"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FIRM, NAV_LINKS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import TopUtilityBar from "@/components/layout/TopUtilityBar";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Top utility bar (contact + social) ── */}
      <TopUtilityBar />

      {/* ── Brand header ── */}
      <div className="bg-white border-b border-[#E4EAF3]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 h-20 md:h-24 flex items-center justify-between gap-4">
          {/* Logo + firm name */}
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <Image
              src="/ca-india-logo.png"
              alt="CA India — Chartered Accountant"
              width={108}
              height={80}
              priority
              className="h-9 md:h-11 w-auto shrink-0"
            />
            <span className="border-l border-[#D9E1EC] pl-3 leading-tight min-w-0">
              <span className="block font-display text-base md:text-2xl font-bold text-[#1B3C6E] tracking-tight truncate">
                {FIRM.name}
              </span>
              <span className="block text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563B0]">
                Chartered Accountants
              </span>
            </span>
          </Link>

          {/* FRN + CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right leading-tight">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#5B6676]/70">
                ICAI Firm Reg. No.
              </span>
              <span className="block text-sm font-bold text-[#1B3C6E] tabular-nums">
                {FIRM.frn}
              </span>
            </div>
            <Link
              href="/contact"
              onClick={() => trackEvent("click_cta", "Navigation", "Book Consultation")}
              className="bg-[#2563B0] text-white px-5 py-2.5 rounded-md text-sm font-bold shadow-sm hover:bg-[#1E5099] transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 -mr-2 text-[#1B3C6E]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* ── Menu bar (solid blue, sticky on scroll) ── */}
      <nav className="hidden lg:block bg-[#1B3C6E] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex items-stretch">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide border-b-[3px] transition-colors ${
                  active
                    ? "bg-[#14305A] border-[#9DC0E8] text-white"
                    : "border-transparent text-white/85 hover:bg-[#21477F] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`https://wa.me/${FIRM.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 px-5 text-[13px] font-bold text-[#9DC0E8] hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            WhatsApp Enquiry
          </a>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1B3C6E] text-white">
          <nav className="px-4 py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-3 text-sm font-bold uppercase tracking-wide border-b border-white/10 ${
                  isActive(link.href) ? "text-[#9DC0E8]" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4">
            <Link
              href="/contact"
              className="block w-full text-center bg-[#2563B0] text-white px-6 py-3 rounded-md text-sm font-bold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
