import type { Metadata } from "next";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ankitshahco.com'}/privacy-policy` },
  title: "Privacy Policy",
  description: `Privacy policy for ${FIRM.name} — how we collect, use and protect your data.`,
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      body: `When you fill our contact form or subscribe to our newsletter, we collect your name, email address, phone number, and company name. We also collect standard analytics data (pages visited, time on site) via Google Analytics when you consent to cookies.`,
    },
    {
      title: "How We Use Your Information",
      body: `We use your contact details solely to respond to your enquiry or send you the newsletter you signed up for. We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
    },
    {
      title: "Cookies",
      body: `We use essential cookies to make the website function correctly and optional analytics cookies (Google Analytics 4) to understand how visitors use our site. You can accept or decline analytics cookies via our cookie banner. Essential cookies cannot be disabled as they are required for the site to work.`,
    },
    {
      title: "Data Retention",
      body: `Contact form submissions are retained for up to 24 months for follow-up purposes, after which they are securely deleted. Newsletter subscribers remain on our list until they unsubscribe.`,
    },
    {
      title: "Your Rights",
      body: `You have the right to access, correct, or request deletion of any personal data we hold about you. To exercise these rights, email us at ${FIRM.email} and we will respond within 30 days.`,
    },
    {
      title: "Third-Party Services",
      body: `We use Formspree to process contact form submissions and Google Analytics for site analytics (only with your consent). Both services have their own privacy policies and comply with applicable data protection regulations.`,
    },
    {
      title: "Contact",
      body: `For any privacy-related questions, write to us at ${FIRM.email} or at ${FIRM.address.line1}, ${FIRM.address.line2}, ${FIRM.address.city} ${FIRM.address.pin}.`,
    },
  ];

  return (
    <section className="pt-32 pb-24 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <span className="inline-block px-3 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1628] tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-[#41474F] mb-10">
          Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="space-y-10">
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2 className="text-xl font-bold text-[#0A1628] mb-3">{title}</h2>
              <p className="text-[#41474F] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
