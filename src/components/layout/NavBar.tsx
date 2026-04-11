"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FIRM, NAV_LINKS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 h-20 max-w-screen-xl mx-auto">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-md navy-gradient flex items-center justify-center text-white font-bold text-sm shrink-0">
            AS
          </span>
          <span className="text-lg font-bold tracking-tight text-[#0A1628] leading-tight hidden sm:block">
            {FIRM.nameShort}
            <span className="block text-[10px] font-semibold tracking-widest uppercase text-[#C9A84C]">
              Chartered Accountants
            </span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  active
                    ? "text-[#0A1628]"
                    : "text-[#41474F] hover:text-[#0A1628]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#C9A84C] transition-all duration-200 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            onClick={() => trackEvent("click_cta", "Navigation", "Book Consultation")}
            className="gold-gradient text-[#1A1200] px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
          >
            Book Consultation
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 text-[#0A1628]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[rgba(201,168,76,0.15)] px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-base font-medium py-2 ${
                pathname === link.href
                  ? "text-[#0A1628] font-semibold"
                  : "text-[#41474F]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full text-center gold-gradient text-[#1A1200] px-6 py-3 rounded-lg text-sm font-bold mt-2"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
