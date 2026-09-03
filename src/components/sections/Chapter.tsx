import Image from "next/image";
import type { Chapter as ChapterType } from "@/types/content";
import { BG, HEX } from "@/components/ui/tones";

/** panel ids are used in `[data-panel="…"]` selectors, so they must be slugs */
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function Chapter({ chapter, id }: { chapter: ChapterType; id?: string }) {
  return (
    <article
      data-panel={id ?? slug(chapter.title)}
      id={id}
      className={`sticky top-0 grid h-screen overflow-hidden rounded-t-[48px] text-ink ${BG[chapter.tone]} [grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]`}
    >
      <div className="flex flex-col justify-between gap-8 px-[clamp(20px,3vw,40px)] pb-[clamp(32px,5vh,56px)] pt-[clamp(80px,12vh,140px)]">
        <div data-reveal className="flex justify-between text-[13px] uppercase tracking-[0.14em] opacity-65">
          <span>{chapter.index}</span>
          <span>{chapter.kind}</span>
        </div>

        <div className="flex flex-col gap-5">
          <h2 data-split-reveal className="m-0 text-[clamp(40px,5.8vw,96px)] font-black leading-[0.92] tracking-[-0.05em]">
            {chapter.title}
          </h2>
          <p
            data-split-reveal
            className="m-0 max-w-[44ch] text-[clamp(15px,1.15vw,18px)] leading-[1.5]"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            {chapter.blurb}
          </p>
        </div>

        <div data-reveal className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/20 pt-5">
          <div className="flex flex-wrap gap-2">
            {chapter.tags.map((t) => (
              <span
                key={t.label}
                className="rounded-full px-3 py-2 text-[12px] uppercase tracking-[0.08em]"
                style={{ background: HEX[t.tone] }}
              >
                {t.label}
              </span>
            ))}
            {chapter.hosting && (
              <span className="rounded-full border border-ink/30 px-3 py-2 text-[12px] uppercase tracking-[0.08em] opacity-70">
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
        className="relative min-h-[320px] pb-[clamp(32px,5vh,56px)] pl-0 pr-[clamp(20px,3vw,40px)] pt-[clamp(80px,12vh,140px)]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-paper shadow-[0_30px_80px_rgba(21,23,29,0.15)]">
          {chapter.image ? (
            <Image data-img src={chapter.image} alt={`${chapter.title} — product screenshot`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          ) : (
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
          )}
        </div>
      </div>
    </article>
  );
}
