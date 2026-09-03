import type { AboutContent } from "@/types/content";

export default function About({ about, step }: { about: AboutContent; step: string }) {
  return (
    <section
      data-panel="about"
      id="about"
      className="sticky top-0 flex h-screen flex-col overflow-hidden rounded-t-[48px] bg-sun px-[clamp(20px,3vw,40px)] pb-[clamp(32px,5vh,64px)] pt-[clamp(80px,12vh,140px)] text-ink"
    >
      <div
        data-shape="0.4"
        className="pointer-events-none absolute font-mono font-medium leading-none text-ink/[0.09]"
        style={{ right: "4vw", top: "6vh", fontSize: "clamp(160px,28vw,420px)" }}
        aria-hidden="true"
      >
        {"{ }"}
      </div>

      <div data-inner className="relative flex flex-1 flex-col justify-between gap-8">
        <div className="flex justify-between text-[13px] uppercase tracking-[0.14em] opacity-65">
          <span>{about.label}</span>
          <span>{step}</span>
        </div>

        <p
          data-kinetic
          className="m-0 max-w-[20ch] text-[clamp(26px,3.6vw,60px)] font-bold leading-[1.05] tracking-[-0.035em]"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          {about.statement}
        </p>

        <div className="grid gap-6 border-t border-ink/20 pt-7 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {about.stats.map((s) => (
            <div key={s.label} data-reveal className="flex flex-col gap-2">
              <span className="text-[clamp(36px,4.5vw,64px)] font-black leading-none tracking-[-0.05em] tabular-nums">
                <span data-count={s.value}>0</span>
                {s.suffix}
              </span>
              <span className="text-[13px] uppercase tracking-[0.1em] opacity-65">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
