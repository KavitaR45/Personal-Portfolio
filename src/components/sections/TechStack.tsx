import StackIcon from "tech-stack-icons";
import ErpIcon from "@/components/ui/ErpIcon";
import type { StackItem } from "@/types/content";

/**
 * The grid must never overflow its panel. Two things guarantee that:
 *  · 6 across from `md` up gives 3 whole rows for all 18; on phones three
 *    tools drop out and the remaining 15 sit 3 across in 5 whole rows
 *  · the panel is a fixed 100vh only from `md` up, where 3 rows always fit;
 *    below that it grows with its content instead of clipping.
 */
export default function TechStack({ stack, step }: { stack: StackItem[]; step: string }) {
  return (
    <section
      data-panel="stack"
      id="stack"
      className="sticky top-0 flex min-h-svh flex-col overflow-hidden rounded-t-[48px] bg-sky px-[clamp(20px,3vw,40px)] pb-[clamp(32px,5vh,64px)] pt-[clamp(80px,12vh,140px)] text-ink md:h-svh md:min-h-0"
    >
      <div
        data-shape="0.35"
        className="pointer-events-none absolute font-mono font-medium leading-none text-ink/[0.07]"
        style={{ right: "-3vw", top: "4vh", fontSize: "clamp(140px,22vw,320px)" }}
        aria-hidden="true"
      >
        {"</>"}
      </div>

      <div data-inner className="relative flex min-h-0 flex-1 flex-col gap-[clamp(14px,3.5vh,40px)]">
        <div className="flex justify-between text-[13px] uppercase tracking-[0.14em] opacity-65">
          <span>Tech stack</span>
          <span>{step}</span>
        </div>

        <h2
          data-split-reveal
          className="m-0 max-w-[20ch] text-[clamp(38px,5.2vw,84px)] font-black leading-[0.92] tracking-[-0.05em]"
        >
          Tools I reach for
        </h2>

        <div className="grid min-h-0 flex-1 grid-cols-3 gap-2.5 md:grid-cols-6 md:gap-2.5 md:grid-rows-3 [&>*]:min-h-0">
          {stack.map((item) => (
            <div
              key={item.label}
              data-reveal
              className={`flex min-h-0 flex-col items-center justify-center gap-2 rounded-[16px] border border-ink/20 p-2.5 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:border-ink/45 md:gap-3 md:rounded-[20px] md:p-4 ${item.hideSm ? "hidden md:flex" : ""}`}
            >
              {/* the mark carries the tile — label is support */}
              <span className="flex h-[clamp(30px,4.6vw,68px)] w-[clamp(30px,4.6vw,68px)] items-center justify-center">
                {item.custom === "erp" ? (
                  <ErpIcon className="h-full w-full" />
                ) : item.icon ? (
                  <StackIcon name={item.icon} className="h-full w-full" />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-full w-full place-items-center rounded-[22%] bg-ink font-sans text-[clamp(11px,1.4vw,20px)] font-extrabold leading-none tracking-[-0.03em] text-paper"
                  >
                    {item.label.slice(0, 2)}
                  </span>
                )}
              </span>

              <span className="text-[clamp(12px,1vw,16px)] font-semibold leading-tight tracking-[-0.01em] opacity-90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
