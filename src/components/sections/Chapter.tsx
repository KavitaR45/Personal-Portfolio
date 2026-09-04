import type { Chapter as ChapterType } from "@/types/content";
import { BG, HEX } from "@/components/ui/tones";
import LaptopMockup from "@/components/ui/LaptopMockup";
import Motif from "@/components/ui/Motif";

/** panel ids are used in `[data-panel="…"]` selectors, so they must be slugs */
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function Chapter({ chapter, id }: { chapter: ChapterType; id?: string }) {
  return (
    <article
      data-panel={id ?? slug(chapter.title)}
      id={id}
      className={`sticky top-0 grid h-svh overflow-hidden rounded-t-[48px] text-ink ${BG[chapter.tone]} [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))] [grid-template-rows:auto_minmax(0,1fr)] [&>*]:min-h-0 md:[grid-template-rows:minmax(0,1fr)]`}
    >
      {/* behind everything */}
      {chapter.motifs?.map((m, i) => <Motif key={i} m={m} />)}

      <div className="relative z-10 flex flex-col justify-between gap-6 px-[clamp(20px,3vw,40px)] pb-6 pt-[clamp(64px,11vh,140px)] md:gap-8 md:pb-[clamp(32px,5vh,56px)]">
        <div data-reveal className="flex justify-between text-[13px] uppercase tracking-[0.14em] opacity-65">
          <span>{chapter.index}</span>
          <span>{chapter.kind}</span>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          <h2 data-split-reveal className="m-0 text-[clamp(34px,5.8vw,96px)] font-black leading-[0.92] tracking-[-0.05em]">
            {chapter.title}
          </h2>
          <p
            data-split-reveal
            className="m-0 max-w-[44ch] text-[clamp(14px,1.15vw,18px)] leading-[1.5]"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            {chapter.blurb}
          </p>
        </div>

        <div data-reveal className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/20 pt-4 md:gap-4 md:pt-5">
          <div className="flex flex-wrap gap-2">
            {chapter.tags.map((t) => (
              <span
                key={t.label}
                className="rounded-full px-2.5 py-1.5 text-[11px] uppercase tracking-[0.08em] md:px-3 md:py-2 md:text-[12px]"
                style={{ background: HEX[t.tone] }}
              >
                {t.label}
              </span>
            ))}
            {chapter.hosting && (
              <span className="rounded-full border border-ink/30 px-2.5 py-1.5 text-[11px] uppercase tracking-[0.08em] opacity-70 md:px-3 md:py-2 md:text-[12px]">
                {chapter.hosting}
              </span>
            )}
          </div>
          <a
            href={chapter.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold transition-colors duration-200 hover:text-blue"
          >
            View project
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <div
        data-media
        className="relative z-10 h-full min-h-0 overflow-hidden px-[10%] pb-[clamp(20px,4vh,56px)] pt-0 md:px-[clamp(20px,3vw,40px)] md:pl-0 md:pt-[clamp(80px,12vh,140px)]"
      >
        {chapter.device?.kind === "laptop" ? (
          <LaptopMockup
            src={chapter.device.screen}
            alt={`${chapter.title} — live site`}
            href={chapter.href}
            label={chapter.title}
          />
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-paper shadow-[0_30px_80px_rgba(21,23,29,0.15)]">
            <div
              data-img
              className="absolute inset-0 flex items-center justify-center font-mono text-[13px] text-ink/60"
              style={{
                background:
                  "repeating-linear-gradient(135deg,rgba(21,23,29,0.06) 0 14px,transparent 14px 28px),#F7F6F1",
              }}
            >
              product screenshot — {chapter.title}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
