"use client";

import { useEffect, useRef, useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

const STORAGE_KEY = "lead_magnet_shown";

export default function LeadMagnetPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const triggered = useRef(false);

  useEffect(() => {
    // Don't show if already shown before
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) return;

    // Desktop: trigger on mouse leaving the viewport (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered.current) {
        triggered.current = true;
        setVisible(true);
        localStorage.setItem(STORAGE_KEY, "1");
      }
    };

    // Mobile: trigger when user scrolls back up quickly (back-scroll intent)
    let lastScrollY = window.scrollY;
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const scrolledDown = currentY > 400; // must have scrolled down first
        const scrollingUp = currentY < lastScrollY - 80;
        if (scrolledDown && scrollingUp && !triggered.current) {
          triggered.current = true;
          setVisible(true);
          localStorage.setItem(STORAGE_KEY, "1");
        }
        lastScrollY = currentY;
        ticking = false;
      });
    };

    // Delay attaching listeners so it doesn't fire on fresh page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const close = () => setVisible(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "Lead Magnet — GST Compliance Checklist Request",
          source: "exit_intent_popup",
          request: "GST Compliance Checklist 2024-25",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Free GST Checklist offer"
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1B3C6E]/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Gold top bar */}
        <div className="h-1 bg-[#2563B0] w-full" />

        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#EEF2F8] flex items-center justify-center text-[#5B6676] hover:bg-[#1B3C6E] hover:text-white transition-colors z-10"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="p-8">
          {status === "success" ? (
            <div className="text-center py-6">
              <span className="material-symbols-outlined text-5xl text-[#2563B0] mb-4 block">check_circle</span>
              <h3 className="text-xl font-extrabold text-[#1B3C6E] mb-2">You&apos;re all set!</h3>
              <p className="text-[#5B6676] text-sm leading-relaxed">
                We&apos;ll send the GST Compliance Checklist to <strong>{email}</strong> within a few minutes.
              </p>
              <button
                onClick={close}
                className="mt-6 px-6 py-2.5 blue-gradient text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Icon + headline */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 blue-gradient rounded-2xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#2563B0] text-2xl">download</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563B0] mb-0.5">Free Download</p>
                  <h3 className="text-lg font-extrabold text-[#1B3C6E] leading-snug">
                    Before you go — grab our free checklist
                  </h3>
                </div>
              </div>

              <p className="text-[#5B6676] text-sm leading-relaxed mb-5">
                <strong className="text-[#1B3C6E]">GST Compliance Checklist 2024–25</strong> — a practical,
                step-by-step checklist to help your business stay audit-ready through the year. Free.
                No strings attached.
              </p>

              {/* Bullet highlights */}
              <ul className="space-y-2 mb-7">
                {[
                  "Monthly GSTR filing checklist",
                  "Annual reconciliation steps",
                  "Common audit triggers to avoid",
                  "MSME & e-invoicing compliance points",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-[#5B6676]">
                    <span className="w-4 h-4 rounded-full bg-[#2563B0] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[10px] text-[#FFFFFF]">check</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-[rgba(27,60,110,0.15)] text-sm text-[#1B3C6E] placeholder:text-[#5B6676]/50 outline-none focus:border-[#2563B0] transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#2563B0] text-[#FFFFFF] px-6 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? "Sending…" : "Send Me the Checklist"}
                </button>
              </form>

              {status === "error" && (
                <p className="text-red-500 text-xs mt-3">Something went wrong. Please try again or email us directly.</p>
              )}

              <p className="text-[10px] text-[#5B6676]/50 mt-4 text-center">
                Zero spam. Unsubscribe anytime. Your data is protected.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
