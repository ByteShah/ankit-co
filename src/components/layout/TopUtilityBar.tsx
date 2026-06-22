import { FIRM, SOCIAL } from "@/lib/constants";

// Brand glyphs (Material Symbols has no brand logos) — simple, recognisable paths.
const BRAND: Record<string, React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5v15H.25V8zm7.5 0h4.31v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.49c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V23h-4.5V8z" />
  ),
  facebook: (
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
  ),
  x: (
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38C1.36 2.67.95 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.47-.72 2.13-1.38.66-.66 1.07-1.33 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.12A5.86 5.86 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 005.84 12 6.16 6.16 0 0012 18.16 6.16 6.16 0 0018.16 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  ),
  youtube: (
    <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.27 3.6L9.6 15.6z" />
  ),
};

export default function TopUtilityBar() {
  const tel = FIRM.phone.replace(/\s/g, "");
  return (
    <div className="bg-[#14305A] text-white/85 text-xs">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex items-center justify-between h-10 gap-4">
        {/* Contact details */}
        <div className="flex items-center gap-4 md:gap-6 min-w-0">
          <a href={`tel:${tel}`} className="flex items-center gap-1.5 hover:text-white transition-colors shrink-0">
            <span className="material-symbols-outlined text-[15px] text-[#9DC0E8]">call</span>
            <span className="tabular-nums">{FIRM.phone}</span>
          </a>
          <a href={`mailto:${FIRM.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors min-w-0">
            <span className="material-symbols-outlined text-[15px] text-[#9DC0E8]">mail</span>
            <span className="truncate">{FIRM.email}</span>
          </a>
          <span className="hidden lg:flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-[15px] text-[#9DC0E8]">schedule</span>
            {FIRM.officeHours}
          </span>
        </div>

        {/* Social media */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="hidden md:inline text-white/50 mr-1">Follow us:</span>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                {BRAND[s.icon]}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
