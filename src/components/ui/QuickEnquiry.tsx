"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

/** Compact enquiry form for the homepage sidebar (traditional CA-portal style). */
export default function QuickEnquiry() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, source: "Homepage Quick Enquiry" }),
      });
      if (res.ok) {
        setStatus("success");
        trackEvent("form_submit", "Contact", "Quick Enquiry");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-[#D9E1EC] rounded-md px-3 py-2.5 text-sm text-[#1B3C6E] placeholder:text-[#5B6676]/60 outline-none focus:border-[#2563B0] transition-colors";

  if (status === "success") {
    return (
      <div className="px-4 py-8 text-center">
        <span className="material-symbols-outlined text-[#2563B0] text-4xl mb-2 block">mark_email_read</span>
        <p className="text-sm font-bold text-[#1B3C6E]">Enquiry received</p>
        <p className="text-xs text-[#5B6676] mt-1">We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <input
        required type="text" placeholder="Your name"
        value={form.name} onChange={(e) => set("name", e.target.value)} className={inputClass}
      />
      <input
        required type="tel" placeholder="Phone"
        value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass}
      />
      <input
        required type="email" placeholder="Email"
        value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass}
      />
      <textarea
        required rows={3} placeholder="How can we help?"
        value={form.message} onChange={(e) => set("message", e.target.value)}
        className={`${inputClass} resize-none`}
      />
      {status === "error" && (
        <p className="text-red-600 text-xs">Something went wrong. Please email us directly.</p>
      )}
      <button
        type="submit" disabled={status === "loading"}
        className="w-full py-2.5 bg-[#2563B0] text-white rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#1E5099] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
