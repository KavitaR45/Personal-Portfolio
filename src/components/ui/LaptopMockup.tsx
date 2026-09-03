"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Laptop frame holding a screenshot of the live site, over a light dressing of
 * development furniture. Drifts gently with the pointer — no idle motion, so it
 * settles the moment the mouse stops.
 */
export default function LaptopMockup({
  src, alt, href, label,
}: {
  src: string;
  alt: string;
  href: string;
  label: string;
}) {
  const box = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // separate axes from the panel's entrance tween, which owns y/rotate
    const rx = gsap.quickTo(el, "rotationX", { duration: 1.1, ease: "power3.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 1.1, ease: "power3.out" });
    const xTo = gsap.quickTo(el, "x", { duration: 1.1, ease: "power3.out" });

    // Measured against the viewport, not the element. With one mockup per
    // project, a getBoundingClientRect here forced seven synchronous layouts
    // on every single mousemove — the main source of scroll jank.
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      ry(nx * 9);
      rx(-ny * 6);
      xTo(nx * 14);
    };

    // Only the mockup on screen listens. Without this every project's laptop
    // reacted to every mousemove — seven listeners driving 21 tweens per event,
    // for six machines nobody can see.
    let attached = false;
    const attach = (on: boolean) => {
      if (on === attached) return;
      attached = on;
      if (on) window.addEventListener("mousemove", onMove, { passive: true });
      else window.removeEventListener("mousemove", onMove);
    };

    const near = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight + 200 && r.bottom > -200;
    };
    attach(near());

    const io = new IntersectionObserver(([e]) => attach(e.isIntersecting), {
      rootMargin: "200px 0px",
    });
    io.observe(el);
    // fallback for environments where the first IO callback never lands
    const onScroll = () => attach(near());
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      attach(false);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // perspective is set inline: neither the arbitrary-property nor the utility
  // form emitted any CSS here, which left the pointer tilt completely flat
  return (
    <div
      data-static-media
      className="relative flex h-full w-full items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* ── development dressing, behind the machine ── */}
      <div
        data-shape="0.35"
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] top-[10%] z-0 h-[38%] w-[34%] opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div
        data-shape="-0.3"
        aria-hidden="true"
        className="pointer-events-none absolute right-[3%] top-[6%] z-0 hidden rounded-lg border border-ink/25 bg-paper/45 px-3 py-2 font-mono text-[11px] leading-none text-ink/70 backdrop-blur-[2px] sm:block"
      >
        <span className="text-blue">$</span> npm run build
      </div>
      <div
        data-shape="0.45"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8%] left-[4%] z-0 flex flex-col gap-[5px]"
      >
        {[64, 40, 52].map((w, i) => (
          <span key={i} style={{ width: w, height: 4, borderRadius: 99 }} className="bg-ink/25" />
        ))}
      </div>
      <div
        data-shape="-0.4"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[5%] z-0 hidden rounded-full border border-ink/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60 sm:block"
      >
        200 OK
      </div>

      {/* ── the machine ── */}
      <a
        ref={box}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — open the live site`}
        className="group relative z-10 block w-full sm:max-w-[340px] md:max-w-[460px] lg:max-w-[560px]"
      >
        <div className="rounded-t-[9px] border-[3px] border-b-0 border-[#1B1D23] bg-[#1B1D23] p-[3px] shadow-[0_18px_44px_rgba(21,23,29,0.26)] transition-shadow duration-300 group-hover:shadow-[0_26px_60px_rgba(21,23,29,0.4)] md:rounded-t-[14px] md:border-[6px] md:p-[5px] md:shadow-[0_30px_70px_rgba(21,23,29,0.28)] md:group-hover:shadow-[0_38px_86px_rgba(21,23,29,0.42)]">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[4px] bg-[#1B1D23] md:rounded-[7px]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 320px, (max-width: 768px) 340px, (max-width: 1024px) 460px, 560px"
              className="object-contain object-top"
            />
          </div>
        </div>
        <div className="relative left-1/2 h-[7px] w-[112%] -translate-x-1/2 rounded-b-[5px] bg-[#1B1D23] md:h-[11px] md:rounded-b-[7px]">
          <span className="absolute left-1/2 top-0 h-[3px] w-[16%] -translate-x-1/2 rounded-b-[3px] bg-white/20" />
        </div>
        <div className="mx-auto h-[4px] w-[46%] rounded-b-[4px] bg-[#1B1D23]/45" />
      </a>
    </div>
  );
}
