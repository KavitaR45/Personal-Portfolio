import type { Testimonial } from "@/types/content";
import { HEX } from "@/components/ui/tones";

/** "Sanjay S P" → SS · "Vishnu" → VI */
const initialsOf = (name: string) => {
  const parts = name.trim().split(/\s+/);
  return (parts.length > 1 ? parts[0][0] + parts[1][0] : name.slice(0, 2)).toUpperCase();
};

export default function Testimonials({
  testimonials, label, heading,
}: { testimonials: Testimonial[]; label: string; heading: string }) {
  return (
    <section
      data-panel="words"
      id="words"
      className="sticky top-0 grid h-svh items-center overflow-hidden rounded-t-[48px] bg-paper text-ink"
    >
      <div data-shape="0.3" className="pointer-events-none absolute select-none font-black leading-[0.8] text-sun"
        style={{ left: "6vw", top: "6vh", fontSize: "clamp(220px,34vw,520px)" }} aria-hidden="true">&ldquo;</div>
      <div data-shape="-0.4" className="pointer-events-none absolute rounded-full"
        style={{ right: "10vw", top: "12vh", width: "clamp(48px,6vw,90px)", height: "clamp(48px,6vw,90px)", border: "clamp(8px,1vw,14px) solid #C8D8F4" }} aria-hidden="true" />
      <div data-shape="0.5" className="pointer-events-none absolute bg-mint"
        style={{ right: "28vw", bottom: "10vh", width: "clamp(40px,5vw,72px)", height: "clamp(40px,5vw,72px)", borderRadius: "22%", transform: "rotate(20deg)" }} aria-hidden="true" />
      <div data-shape="-0.2" className="pointer-events-none absolute text-rose"
        style={{ left: "40vw", bottom: "8vh", fontSize: "clamp(28px,3vw,48px)" }} aria-hidden="true">✦</div>

      <div
        data-track
        className="relative flex items-center gap-[clamp(24px,4vw,64px)] px-[clamp(20px,3vw,40px)] will-change-transform"
      >
        <div className="flex w-[min(80vw,520px)] flex-none flex-col gap-5">
          <span className="text-[13px] uppercase tracking-[0.14em] opacity-60">{label}</span>
          <h2 data-split-reveal className="m-0 text-[clamp(34px,4.6vw,72px)] font-black leading-[0.92] tracking-[-0.05em]">
            {heading}
          </h2>
          <span className="text-[13px] uppercase tracking-[0.14em] opacity-60">Scroll →</span>
        </div>

        {testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="m-0 flex min-h-[340px] w-[min(84vw,640px)] flex-none flex-col justify-between gap-10 rounded-[28px] p-[clamp(28px,3vw,48px)]"
            style={{ background: HEX[t.tone] }}
          >
            <span className="text-5xl font-black leading-[0.6] opacity-35" aria-hidden="true">&ldquo;</span>
            <p className="m-0 text-[clamp(18px,1.6vw,26px)] font-semibold leading-[1.3] tracking-[-0.02em]"
              style={{ textWrap: "pretty" } as React.CSSProperties}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-[13px] font-bold">
                  {initialsOf(t.name)}
                </span>
                <span className="flex flex-col gap-0.5 text-[13px]">
                  <span className="font-semibold">{t.name}</span>
                  <span className="opacity-60">{t.role} · {t.projectLabel}</span>
                </span>
              </div>
              <span className="text-[12px] tracking-[2px]" aria-label="5 out of 5">★★★★★</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
