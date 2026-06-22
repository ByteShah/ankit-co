"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        href="/contact"
        onClick={() => trackEvent("click_cta", "Hero", "Get a Free Consultation")}
        className="bg-[#2563B0] text-[#FFFFFF] px-8 py-4 rounded-lg text-base font-bold shadow-md hover:opacity-90 transition-opacity text-center"
      >
        Get a Free Consultation
      </Link>
      <Link
        href="/services"
        className="border border-[rgba(27,60,110,0.2)] text-[#1B3C6E] px-8 py-4 rounded-lg text-base font-bold hover:bg-[#EEF2F8] transition-colors text-center"
      >
        Our Services
      </Link>
    </div>
  );
}
