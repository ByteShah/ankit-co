import Link from "next/link";
import Image from "next/image";

/**
 * PageBanner — traditional inner-page title band (blue) with breadcrumb.
 * Optionally accepts a background `image` (rendered under a blue overlay).
 */
export default function PageBanner({
  title,
  subtitle,
  breadcrumb,
  image,
}: {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  image?: string;
}) {
  return (
    <section className="blue-gradient text-white relative overflow-hidden">
      {image && (
        <>
          <Image src={image} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14305A]/95 via-[#1B3C6E]/90 to-[#1B3C6E]/80" />
        </>
      )}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 48px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 48px)",
        }}
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-10 md:py-12 relative z-10">
        <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-3" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-[#9DC0E8] font-semibold">{breadcrumb}</span>
        </nav>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 mt-2 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
