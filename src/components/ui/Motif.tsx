import type { ChapterMotif } from "@/types/content";
import { HEX } from "@/components/ui/tones";

/** turn the `left:4vw;bottom:8vh` shorthand from content into a style object */
function styleFrom(css: string): React.CSSProperties {
  const out: Record<string, string> = {};
  css.split(";").filter(Boolean).forEach((d) => {
    const [k, v] = d.split(":");
    if (k && v) out[k.trim()] = v.trim();
  });
  return out as React.CSSProperties;
}

/**
 * Section furniture drawn from the language of code — brackets, a snippet,
 * window chrome, a markup tag. Sits behind the content (z-0) and carries
 * `data-shape`, which opts it into the existing scroll parallax.
 */
export default function Motif({ m }: { m: ChapterMotif }) {
  const base = styleFrom(`position:absolute;${m.pos}`);
  const colour = m.tone ? HEX[m.tone] : "currentColor";
  const shell = "pointer-events-none absolute z-0 select-none";

  if (m.kind === "glyph")
    return (
      <div
        data-shape={m.depth}
        aria-hidden="true"
        className={`${shell} font-mono font-medium leading-none`}
        style={{ ...base, fontSize: m.size, color: colour, opacity: 0.14 }}
      >
        {m.text}
      </div>
    );

  if (m.kind === "snippet")
    return (
      <div
        data-shape={m.depth}
        aria-hidden="true"
        className={`${shell} flex flex-col gap-[0.28em]`}
        style={{ ...base, width: m.size, opacity: 0.4 }}
      >
        {[100, 72, 88, 54].map((w, i) => (
          <span key={i} style={{ width: `${w}%`, height: "0.3em", borderRadius: 99, background: colour }} />
        ))}
      </div>
    );

  if (m.kind === "dots")
    return (
      <div
        data-shape={m.depth}
        aria-hidden="true"
        className={`${shell} flex items-center`}
        style={{ ...base, gap: `calc(${m.size} * 0.45)`, opacity: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: m.size, height: m.size, borderRadius: 99, background: colour }} />
        ))}
      </div>
    );

  return (
    <div
      data-shape={m.depth}
      aria-hidden="true"
      className={`${shell} rounded-md border font-mono leading-none`}
      style={{
        ...base,
        fontSize: m.size,
        color: colour,
        borderColor: colour,
        padding: "0.5em 0.7em",
        opacity: 0.45,
      }}
    >
      {m.text}
    </div>
  );
}
