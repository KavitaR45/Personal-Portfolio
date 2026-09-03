import Image from "next/image";
import type { HeroContent, HeroShape } from "@/types/content";
import { HEX } from "@/components/ui/tones";

function Shape({ s }: { s: HeroShape }) {
  const base = `position:absolute;${s.pos}`;
  const hide = "hideSm" in s && s.hideSm ? "hidden md:block" : "";

  if (s.kind === "circle")
    return <div data-shape={s.depth} className={hide} style={{ ...styleFrom(base), width: s.size, height: s.size, borderRadius: "50%", background: HEX[s.tone] }} />;

  if (s.kind === "ring")
    return <div data-shape={s.depth} className={hide} style={{ ...styleFrom(base), width: s.size, height: s.size, borderRadius: "50%", border: `clamp(10px,1.2vw,18px) solid ${HEX[s.tone]}` }} />;

  if (s.kind === "square")
    return <div data-shape={s.depth} style={{ ...styleFrom(base), width: s.size, height: s.size, borderRadius: "22%", background: HEX[s.tone], transform: "rotate(18deg)" }} />;

  if (s.kind === "glyph")
    return <div data-shape={s.depth} className={`font-mono font-medium ${hide}`} style={{ ...styleFrom(base), fontSize: s.size }}>{s.text}</div>;

  if (s.kind === "pill")
    return (
      <div
        data-shape={s.depth}
        {...(s.topSm ? { "data-sm-top": "" } : {})}
        className={`flex gap-1.5 rounded-full px-3 py-2 font-mono ${hide}`}
        style={{ ...styleFrom(base), background: HEX[s.tone], fontSize: "clamp(11px,0.9vw,13px)", transform: `rotate(${s.rotate}deg)`, ...(s.topSm ? { ["--sm-top" as string]: s.topSm } : {}) }}>
        <span aria-hidden="true">●</span><span>{s.text}</span>
      </div>
    );

  return (
    <div
      data-shape={s.depth}
      {...(s.topSm ? { "data-sm-top": "" } : {})}
      className={`rounded-xl px-4 py-2.5 font-mono ${hide}`}
      style={{
        ...styleFrom(base),
        ...(s.topSm ? { ["--sm-top" as string]: s.topSm } : {}),
        fontSize: "clamp(11px,0.9vw,14px)",
        transform: `rotate(${s.rotate}deg)`,
        background: s.dark ? "#15171D" : "#F7F6F1",
        color: s.dark ? "#F7F6F1" : "#15171D",
        border: s.dark ? "none" : "1px solid rgba(21,23,29,0.12)",
        boxShadow: s.dark ? "0 16px 40px rgba(21,23,29,0.15)" : "0 16px 40px rgba(21,23,29,0.1)",
      }}>
      {s.parts.map((p, i) => <span key={i} style={p.color ? { color: p.color } : undefined}>{p.text}</span>)}
    </div>
  );
}

/** turn the `left:8vw;top:18vh` shorthand from content into a style object */
function styleFrom(css: string): React.CSSProperties {
  const out: Record<string, string> = {};
  css.split(";").filter(Boolean).forEach((decl) => {
    const [k, v] = decl.split(":");
    if (k && v) out[k.trim()] = v.trim();
  });
  return out as React.CSSProperties;
}

function Portrait({ src, name, className }: { src: string; name: string; className: string }) {
  return (
    <div
      data-hero-fade
      data-portrait
      className={`overflow-hidden rounded-full shadow-[0_18px_44px_rgba(21,23,29,0.2)] ${className}`}
    >
      <Image
        src={src}
        alt={name}
        fill
        priority
        sizes="(max-width: 768px) 260px, 350px"
        className="object-cover object-[57%_20%]"
      />
    </div>
  );
}

export default function Hero({ hero, photo, name }: { hero: HeroContent; photo: string; name: string }) {
  return (
    <section
      data-panel="hero"
      data-hero
      id="top"
      className="sticky top-0 flex h-screen flex-col justify-end overflow-hidden bg-paper pb-[clamp(20px,3vw,32px)]"
    >
      <div
        data-blob
        className="absolute bg-sun opacity-95"
        style={{
          width: "34vmax", height: "34vmax", right: "-6vmax", top: "-8vmax",
          borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
        }}
      />
      {hero.shapes.map((s, i) => <Shape key={i} s={s} />)}

      {/* Desktop: parked in measured free space below the blob. The `vh` top is
          stepped per breakpoint because the headline is bottom-anchored, so the
          clear band sits at a different height on each. */}
      <Portrait
        src={photo}
        name={name}
        className="absolute right-[5.5vw] top-[22vh] z-20 hidden h-[clamp(220px,26vw,350px)] w-[clamp(220px,26vw,350px)] md:block"
      />

      <div className="relative flex flex-col gap-[clamp(20px,3.5vh,40px)] px-[clamp(20px,3vw,40px)]">
        <Portrait
          src={photo}
          name={name}
          className="relative z-20 mx-auto h-[min(260px,68vw)] w-[min(260px,68vw)] md:hidden"
        />

        <div data-hero-fade className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em]">
          <span className="inline-block h-2 w-2 rounded-full bg-ink" />
          <span>{hero.eyebrow}</span>
        </div>

        <h1
          data-hero-title
          data-split
          className="m-0 text-[clamp(52px,10.5vw,172px)] font-black leading-[0.88] tracking-[-0.05em]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {hero.title}
        </h1>

        <div className="grid items-end gap-6 border-t border-ink/20 pt-2 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
          <p data-hero-fade className="m-0 max-w-[28ch] text-[clamp(16px,1.3vw,20px)] font-medium leading-[1.35]">
            {hero.lead}
          </p>
          <p data-hero-fade className="m-0 max-w-[36ch] justify-self-end text-right text-[14px] leading-[1.55] opacity-70">
            {hero.support}
          </p>
        </div>
      </div>
    </section>
  );
}
