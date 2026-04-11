"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        href="/contact"
        onClick={() => trackEvent("click_cta", "Hero", "Get a Free Consultation")}
        className="gold-gradient text-[#1A1200] px-8 py-4 rounded-lg text-base font-bold shadow-md hover:opacity-90 transition-opacity text-center"
      >
        Get a Free Consultation
      </Link>
      <Link
        href="/services"
        className="border border-[rgba(10,22,40,0.2)] text-[#0A1628] px-8 py-4 rounded-lg text-base font-bold hover:bg-[#F2F1EE] transition-colors text-center"
      >
        Our Services
      </Link>
    </div>
  );
}
