import type { Metadata } from "next";
import { FIRM } from "@/lib/constants";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ankitshahco.com'}/contact` },
  title: "Contact Us",
  description: `Get in touch with ${FIRM.name}. Book a consultation, send an enquiry, or reach us via WhatsApp or email.`,
};

const FAQS = [
  {
    q: "What services do you offer?",
    a: "We provide Audit & Assurance, Tax Advisory (income tax, GST, international taxation), Corporate Finance (valuations, M&A), Risk & Compliance (FEMA, SEBI, SOX), and Secretarial services.",
  },
  {
    q: "How do I schedule a consultation?",
    a: "Use the enquiry form, click 'Schedule a Call' to book via cal.com, or WhatsApp us directly. CA Ankit Shah or a team member will respond within 24 hours.",
  },
  {
    q: "Do you work with startups and MSMEs?",
    a: "Absolutely. We work with businesses at every stage — from newly incorporated startups needing compliance setup to large MSMEs requiring statutory audits and tax structuring.",
  },
  {
    q: "What should I prepare for the first meeting?",
    a: "A brief overview of your business, the specific challenge or service needed, and your most recent financial statements (if applicable). We'll handle the rest.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-12 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1.5 bg-[#C9A84C]/10 text-[#A07C28] text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
              Connect With Us
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0A1628] leading-[1.05] mb-5">
              Precision Meets
              <br />
              <span className="text-gold-gradient">Partnership.</span>
            </h1>
            <p className="text-[#41474F] text-lg max-w-lg leading-relaxed">
              Reach out to discuss your requirements. A senior advisor will
              personally respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MAIN SPLIT LAYOUT
      ════════════════════════════════════════════════════════════ */}
      <section className="pb-24 bg-[#FAFAF8]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* ── LEFT: Firm details + Action buttons ── */}
            <div className="lg:col-span-5 space-y-8">

              {/* Firm info card */}
              <div className="navy-gradient rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#C9A84C]/10 blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-5">
                    Ankit Shah & Co. LLP
                  </p>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#C9A84C] text-lg">location_on</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-0.5">Office Address</p>
                        <p className="text-white/65 text-sm leading-relaxed">
                          {FIRM.address.line1}, {FIRM.address.line2}
                          <br />{FIRM.address.city}, {FIRM.address.state} – {FIRM.address.pin}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#C9A84C] text-lg">call</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-0.5">Phone</p>
                        <a href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                          className="text-white/65 text-sm hover:text-white transition-colors">
                          {FIRM.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#C9A84C] text-lg">mail</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-0.5">Email</p>
                        <a href={`mailto:${FIRM.email}`}
                          className="text-white/65 text-sm hover:text-white transition-colors">
                          {FIRM.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#C9A84C] text-lg">schedule</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-0.5">Office Hours</p>
                        <p className="text-white/65 text-sm">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 action buttons */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#41474F]/60 mb-4">
                  Quick Connect
                </p>

                {/* Schedule a Call — cal.com */}
                <a
                  href={FIRM.calcom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-5 bg-[#0A1628] text-white rounded-xl hover:bg-[#1A2E4A] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#C9A84C] text-xl">calendar_month</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">Schedule a Call</p>
                    <p className="text-white/55 text-xs">Book a slot directly on cal.com</p>
                  </div>
                  <span className="material-symbols-outlined text-white/40 group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all">
                    open_in_new
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${FIRM.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-5 bg-[#F2F1EE] rounded-xl hover:bg-[#ECEAE6] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-[#0A1628]">Chat on WhatsApp</p>
                    <p className="text-[#41474F]/60 text-xs">Usually replies within the hour</p>
                  </div>
                  <span className="material-symbols-outlined text-[#41474F]/40 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all">
                    open_in_new
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${FIRM.email}?subject=Enquiry from Website`}
                  className="flex items-center gap-4 w-full p-5 bg-[#F2F1EE] rounded-xl hover:bg-[#ECEAE6] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#C9A84C] text-xl">mail</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-[#0A1628]">Send an Email</p>
                    <p className="text-[#41474F]/60 text-xs">{FIRM.email}</p>
                  </div>
                  <span className="material-symbols-outlined text-[#41474F]/40 group-hover:text-[#C9A84C] group-hover:translate-x-0.5 transition-all">
                    open_in_new
                  </span>
                </a>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-[#ECEAE6] h-48 flex items-center justify-center relative">
                <div className="text-center text-[#41474F]/40">
                  <span className="material-symbols-outlined text-4xl mb-2 block">map</span>
                  <p className="text-xs font-medium">
                    {/* Replace with real Google Maps embed once address is confirmed */}
                    Google Maps — {FIRM.address.city}
                  </p>
                </div>
                {/* Pulse dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full gold-gradient shadow-lg animate-pulse" />
                </div>
              </div>
            </div>

            {/* ── RIGHT: Inquiry form ── */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1628] mb-2">
                  Send an Enquiry
                </h2>
                <p className="text-[#41474F] text-sm">
                  Fill in the form and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F2F1EE]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="bg-white rounded-2xl p-10 md:p-16">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">FAQ</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#0A1628]">
                Common Questions
              </h2>
              <p className="text-[#41474F] mt-3">Everything you need to know before reaching out.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {FAQS.map(({ q, a }) => (
                <div key={q}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[#1A1200] text-xs">question_mark</span>
                    </span>
                    <h3 className="font-bold text-lg text-[#0A1628] leading-snug">{q}</h3>
                  </div>
                  <p className="text-[#41474F] text-sm leading-relaxed pl-9">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
