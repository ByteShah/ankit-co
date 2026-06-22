"use client";

import { useState } from "react";

interface Props {
  variant?: "light" | "dark";
}

export default function NewsletterForm({ variant = "light" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // TODO: Connect to Mailchimp / ConvertKit / your preferred ESP
    await new Promise((r) => setTimeout(r, 800)); // simulate API call
    console.log("Newsletter signup:", email);
    setStatus("success");
    setEmail("");
  };

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <p className={`text-sm font-medium ${isDark ? "text-[#2563B0]" : "text-[#2563B0]"}`}>
        <span className="material-symbols-outlined text-base align-middle mr-1">check_circle</span>
        You're on the list. Thank you!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className={`flex-1 min-w-0 px-3 py-2 rounded-lg text-sm outline-none transition-colors ${
          isDark
            ? "bg-white/10 text-white placeholder:text-white/40 border border-white/15 focus:border-[#2563B0]/50"
            : "bg-[#EEF2F8] text-[#1B3C6E] placeholder:text-[#5B6676] border border-transparent focus:border-[#2563B0]/50"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 bg-[#2563B0] text-[#FFFFFF] px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? "…" : "Subscribe"}
      </button>
    </form>
  );
}
