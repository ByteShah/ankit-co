"use client";

import { useState } from "react";
import { SERVICES, FORMSPREE_ENDPOINT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        trackEvent("form_submit", "Contact", "Enquiry Form");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#F2F1EE] border border-transparent rounded-lg px-4 py-3.5 text-sm text-[#0A1628] placeholder:text-[#41474F]/60 outline-none focus:border-[#C9A84C]/50 focus:bg-white transition-all";
  const labelClass = "block text-[10px] font-bold text-[#41474F]/70 uppercase tracking-widest mb-1.5";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-lg">
          <span className="material-symbols-outlined text-[#1A1200] text-3xl">check</span>
        </div>
        <h3 className="text-2xl font-bold text-[#0A1628]">Message Received!</h3>
        <p className="text-[#41474F] max-w-xs">
          Thank you for reaching out. CA Ankit Shah or a team member will respond within 24 hours.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" }); }}
          className="mt-2 text-[#C9A84C] font-bold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input required type="text" placeholder="Raj Mehta" value={form.name}
            onChange={(e) => set("name", e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Company Name</label>
          <input type="text" placeholder="Mehta Industries Pvt Ltd" value={form.company}
            onChange={(e) => set("company", e.target.value)} className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email Address *</label>
          <input required type="email" placeholder="raj@mehtaindustries.com" value={form.email}
            onChange={(e) => set("email", e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="tel" placeholder="+91 98765 43210" value={form.phone}
            onChange={(e) => set("phone", e.target.value)} className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Service Required</label>
        <select value={form.service} onChange={(e) => set("service", e.target.value)}
          className={`${inputClass} appearance-none cursor-pointer`}>
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Secretarial & Compliance">Secretarial &amp; Compliance</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>Message *</label>
        <textarea required rows={5} placeholder="Briefly describe your requirements or the issue you need help with…"
          value={form.message} onChange={(e) => set("message", e.target.value)}
          className={`${inputClass} resize-none`} />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
      )}

      <button type="submit" disabled={status === "loading"}
        className="w-full py-4 gold-gradient text-[#1A1200] rounded-lg font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2 disabled:opacity-60">
        {status === "loading" ? (
          <>
            <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
            Sending…
          </>
        ) : (
          <>
            Send Enquiry
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </>
        )}
      </button>
    </form>
  );
}
