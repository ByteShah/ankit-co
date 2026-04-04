"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GA_MEASUREMENT_ID } from "@/lib/constants";

type Consent = "accepted" | "declined" | null;

// Loads GA4 script dynamically after consent
function loadGA(id: string) {
  if (typeof window === "undefined" || !id || id === "G-XXXXXXXXXX") return;
  if (document.getElementById("ga4-script")) return; // already loaded

  const script1 = document.createElement("script");
  script1.id = "ga4-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.id = "ga4-init";
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}', { anonymize_ip: true });
  `;
  document.head.appendChild(script2);
}

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // On mount: check stored consent
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "accepted") {
      setConsent("accepted");
      loadGA(GA_MEASUREMENT_ID);
    } else if (stored === "declined") {
      setConsent("declined");
    } else {
      // No decision yet — show banner after short delay
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
    loadGA(GA_MEASUREMENT_ID);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  // Already decided — render nothing
  if (consent !== null || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[100] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-[#0A1628] rounded-2xl shadow-2xl overflow-hidden border border-[rgba(201,168,76,0.2)]">
        {/* Top gold accent line */}
        <div className="h-0.5 gold-gradient w-full" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl gold-gradient flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#1A1200] text-base">cookie</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">We use cookies</h3>
              <p className="text-white/55 text-xs mt-0.5">
                To improve your experience and understand how you use our site.
              </p>
            </div>
          </div>

          {/* Body */}
          <p className="text-white/65 text-xs leading-relaxed mb-4">
            We use essential cookies to make the site work, and optional analytics
            cookies (Google Analytics) to understand visitor behaviour — helping us
            improve our content and services.{" "}
            <Link href="/privacy-policy" className="text-[#C9A84C] hover:underline">
              Privacy Policy
            </Link>
          </p>

          {/* Expandable details */}
          {showDetails && (
            <div className="mb-4 space-y-2 border border-white/10 rounded-xl p-4">
              {[
                { name: "Essential",  desc: "Required for the site to function. Always active.", always: true },
                { name: "Analytics", desc: "Google Analytics (GA4) — page views & traffic sources. Anonymised IP.", always: false },
              ].map(({ name, desc, always }) => (
                <div key={name} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white text-xs font-bold">{name}</p>
                    <p className="text-white/50 text-[11px] mt-0.5">{desc}</p>
                  </div>
                  <span
                    className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      always
                        ? "bg-white/10 text-white/50"
                        : "bg-[#C9A84C]/20 text-[#C9A84C]"
                    }`}
                  >
                    {always ? "Always on" : "Optional"}
                  </span>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setShowDetails((s) => !s)}
            className="text-[#C9A84C] text-xs font-bold hover:underline mb-5 flex items-center gap-1"
          >
            {showDetails ? "Hide" : "Cookie details"}
            <span className="material-symbols-outlined text-sm">
              {showDetails ? "expand_less" : "expand_more"}
            </span>
          </button>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={accept}
              className="flex-1 gold-gradient text-[#1A1200] py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="flex-1 border border-white/15 text-white/70 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
