import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { FIRM } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankitshahco.com";

// ── Static params for pre-rendering ──────────────────────────────────────────
export function generateStaticParams() {
  return getAllSlugs();
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.desc,
    alternates: { canonical: `${BASE_URL}/resources/${slug}` },
    openGraph: {
      title: article.title,
      description: article.desc,
      url: `${BASE_URL}/resources/${slug}`,
      type: "article",
      publishedTime: article.date,
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="bg-[#F2F1EE] border-b border-[rgba(10,22,40,0.06)] pt-24 pb-4">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <nav className="flex items-center gap-2 text-xs text-[#41474F]">
            <Link href="/" className="hover:text-[#0A1628] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link href="/resources" className="hover:text-[#0A1628] transition-colors">Resources</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-[#0A1628] font-medium truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-14 flex flex-col lg:flex-row gap-14">
        {/* ── Article body ── */}
        <article className="flex-1 max-w-3xl">
          {/* Header */}
          <header className="mb-10">
            <span
              className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm mb-5 ${
                article.tagColor === "gold"
                  ? "bg-[#C9A84C] text-[#1A1200]"
                  : "bg-[#0A1628] text-white"
              }`}
            >
              {article.tag}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] leading-tight tracking-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-[#41474F] leading-relaxed mb-6">{article.desc}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#41474F]/70 border-t border-[rgba(10,22,40,0.08)] pt-5">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">person</span>
                {FIRM.name}
              </span>
            </div>
          </header>

          {/* Sections */}
          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="text-xl font-bold text-[#0A1628] mb-4 pb-2 border-b-2 border-[#C9A84C]/30">
                    {section.heading}
                  </h2>
                )}
                <p className="text-[#41474F] leading-[1.8] text-base">{section.body}</p>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#41474F] text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Primary source attribution */}
          <div className="mt-12 p-6 bg-[#F2F1EE] rounded-xl border border-[rgba(10,22,40,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#41474F]/60 mb-1">Primary Source</p>
              <p className="text-sm font-semibold text-[#0A1628]">{article.sourceName}</p>
            </div>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(10,22,40,0.15)] rounded-lg text-xs font-bold text-[#0A1628] hover:bg-[#0A1628] hover:text-white transition-all whitespace-nowrap"
            >
              Visit Official Source
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-12 navy-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-white/5 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">handshake</span>
            </div>
            <div className="relative z-10 max-w-lg">
              <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">Need expert help?</p>
              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">
                Let us handle the complexity for you.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Our team of CAs specialises in exactly these areas. Get a free 30-minute consultation — no obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="gold-gradient text-[#1A1200] px-6 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity text-center"
                >
                  Book Free Consultation
                </Link>
                <a
                  href={`https://wa.me/${FIRM.whatsapp}?text=${encodeURIComponent("Hi, I read your article and have a question about " + article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors text-center"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ── Sidebar ── */}
        <aside className="w-full lg:w-72 shrink-0 space-y-8">
          {/* Related articles */}
          {related.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#41474F]/60 mb-5">Related Reads</h3>
              <div className="space-y-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/resources/${rel.slug}`}
                    className="group block bg-white p-5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-[#C9A84C]"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#41474F]/50">
                      {rel.tag}
                    </span>
                    <h4 className="text-sm font-bold text-[#0A1628] mt-1.5 leading-snug group-hover:text-[#C9A84C] transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#41474F]/70 mt-1">{rel.date} · {rel.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick contact card */}
          <div className="bg-[#0A1628] rounded-xl p-6 text-white">
            <span className="material-symbols-outlined text-[#C9A84C] text-2xl mb-3 block">support_agent</span>
            <h4 className="font-bold text-base mb-2">Have a question?</h4>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              Our experts are available Mon–Sat, 9 AM to 7 PM IST.
            </p>
            <Link
              href="/contact"
              className="block text-center gold-gradient text-[#1A1200] text-xs font-bold py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send an Enquiry
            </Link>
          </div>

          {/* Back to resources */}
          <Link
            href="/resources"
            className="flex items-center gap-2 text-sm font-bold text-[#41474F] hover:text-[#0A1628] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Knowledge Hub
          </Link>
        </aside>
      </div>
    </div>
  );
}
