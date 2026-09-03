"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import type { NavLink, SiteMeta } from "@/types/content";

export default function Nav({ links, site }: { links: NavLink[]; site: SiteMeta }) {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const m = menu.current;
    if (!m) return;
    m.style.pointerEvents = open ? "auto" : "none";
    gsap.to(m, {
      yPercent: open ? 0 : -100,
      duration: 0.8,
      ease: open ? "power4.out" : "power4.in",
    });
    if (open) {
      gsap.fromTo(
        m.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: "power3.out", delay: 0.25 },
      );
    }
  }, [open]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(16px,3vw,40px)] py-[clamp(14px,2.5vw,32px)] text-[14px] font-semibold">
        <a
          data-to="hero"
          href="#top"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[13px] text-paper"
        >
          {site.initials}
        </a>

        <div className="flex items-center gap-2.5">
          <div className="hidden gap-1.5 rounded-full border border-ink/10 bg-paper/75 p-1.5 backdrop-blur-md md:flex">
            {links.map((l) => (
              <a
                key={l.target}
                data-to={l.target}
                href={`#${l.target}`}
                className="rounded-full px-3.5 py-2 transition-colors duration-200 hover:bg-ink hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={site.resumeHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-[18px] py-[11px] text-[13px] text-paper transition-transform duration-300 hover:-translate-y-0.5"
          >
            Resume <span aria-hidden="true">↓</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/15 bg-paper/85 backdrop-blur-md md:hidden"
          >
            <span className="block h-0.5 w-[18px] bg-ink" />
            <span className="block h-0.5 w-[18px] bg-ink" />
          </button>
        </div>
      </nav>

      <div
        ref={menu}
        className="fixed inset-0 z-[49] flex -translate-y-full flex-col justify-center gap-2 bg-sun p-[clamp(20px,6vw,40px)]"
        style={{ pointerEvents: "none" }}
      >
        {links.map((l) => (
          <a
            key={l.target}
            data-to={l.target}
            href={`#${l.target}`}
            onClick={() => setOpen(false)}
            className="text-[clamp(36px,10vw,56px)] font-black leading-[1.1] tracking-[-0.04em]"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
