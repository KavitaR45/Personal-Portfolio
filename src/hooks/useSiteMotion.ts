"use client";

import { useEffect, type RefObject } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * The whole scroll choreography, in one place.
 *
 * Panels are `position: sticky` and each covers the one before it. A sticky
 * element is a poor ScrollTrigger trigger, so every panel is preceded by an
 * in-flow `[data-mark]` div — that marker is what triggers fire against, and
 * it is also what nav links scroll to.
 */
export function useSiteMotion(rootRef: RefObject<HTMLDivElement | null>, loaderDuration = 1.8) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = <T extends Element = HTMLElement>(s: string) =>
      Array.from(root.querySelectorAll<T>(s));
    const q1 = <T extends Element = HTMLElement>(s: string) => root.querySelector<T>(s);

    const reduce = prefersReducedMotion();
    let lenis: Lenis | null = null;
    const cleanups: Array<() => void> = [];

    // ── smooth scroll ────────────────────────────────────────────────
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 0.9, syncTouch: true });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (t: number) => lenis!.raf(t * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => {
        gsap.ticker.remove(raf);
        lenis?.destroy();
      });
    }

    const markOf = (el: Element): Element => {
      let m = el.previousElementSibling;
      while (m && !m.hasAttribute("data-mark")) m = m.previousElementSibling;
      return m ?? el;
    };

    // ── anchor navigation ────────────────────────────────────────────
    const scrollTo = (el: Element) => {
      const y = markOf(el).getBoundingClientRect().top + window.scrollY;
      if (lenis) {
        lenis.scrollTo(y, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 5), lock: true });
      } else {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    const onNav = (e: Event) => {
      const a = (e.currentTarget as HTMLElement).dataset.to;
      if (!a) return;
      e.preventDefault();
      const el = q1(`[data-panel="${a}"]`);
      if (el) scrollTo(el);
    };
    q("[data-to]").forEach((a) => a.addEventListener("click", onNav));
    cleanups.push(() => q("[data-to]").forEach((a) => a.removeEventListener("click", onNav)));

    const ctx = gsap.context(() => {
      // ── word splitting ─────────────────────────────────────────────
      /**
       * Wrap each word so it can be animated independently.
       *
       * `masked` adds the overflow clip that hides a word sliding up from
       * below. It is only wanted where the reveal actually travels a full line
       * height. A clip box tall enough to clear a heavy face's ascenders and
       * descenders is TALLER than a tight line advance, so masked words on
       * tight leading overlap their neighbours and shave each other's ink —
       * which is exactly what happened to the About statement at leading 1.05.
       * That statement only fades, so it is split without a mask.
       */
      const split = (el: HTMLElement, masked: boolean) => {
        if (el.dataset.splitDone) return;
        const text = el.textContent ?? "";
        el.textContent = "";
        el.setAttribute("aria-label", text.trim());
        text.split(/(\s+)/).forEach((p) => {
          if (!p.trim()) return void el.appendChild(document.createTextNode(" "));
          const holder = document.createElement("span");
          holder.style.cssText = masked
            ? "display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.1em;margin-bottom:-0.1em"
            : "display:inline-block;vertical-align:top";
          const word = document.createElement("span");
          word.setAttribute("data-word", "");
          word.textContent = p;
          holder.appendChild(word);
          el.appendChild(holder);
        });
        el.dataset.splitDone = "1";
      };
      q("[data-split],[data-split-reveal]").forEach((el) => split(el, true));
      q("[data-kinetic]").forEach((el) => split(el, false));

      const hero = q1("[data-hero]")!;
      const heroTitle = q1("[data-hero-title]")!;
      const heroWords = heroTitle.querySelectorAll("[data-word]");
      const heroFade = q("[data-hero-fade]");
      const heroShapes = Array.from(hero.querySelectorAll<HTMLElement>("[data-shape]"));

      gsap.set(heroWords, { yPercent: 110, opacity: 0 });
      gsap.set(heroFade, { opacity: 0, y: 24 });
      gsap.set(heroShapes, { scale: 0, opacity: 0 });

      // ── loader ─────────────────────────────────────────────────────
      const loader = q1("[data-loader]")!;
      const counter = q1("[data-counter]")!;
      const bar = q1("[data-loader-bar]")!;
      const nameWords = q1("[data-loader-name]")!.querySelectorAll("[data-word]");

      gsap.set(nameWords, { yPercent: 110 });
      gsap.set(loader, { clipPath: "inset(0% 0% 0% 0%)" });
      if (lenis) lenis.stop();
      else document.documentElement.style.overflow = "hidden";

      const dur = reduce ? 0.3 : loaderDuration;
      const n = { v: 0 };
      gsap
        .timeline({
          onComplete: () => {
            loader.style.display = "none";
            document.documentElement.style.overflow = "";
            lenis?.start();
            ScrollTrigger.refresh();
          },
        })
        .to(n, {
          v: 100, duration: dur, ease: "power2.inOut",
          onUpdate: () => {
            counter.textContent = String(Math.round(n.v)).padStart(3, "0");
            bar.style.transform = `scaleX(${n.v / 100})`;
          },
        })
        .to(nameWords, { yPercent: 0, duration: 0.8, ease: "power4.out", stagger: 0.07 }, "-=0.7")
        .to(counter, { yPercent: -120, opacity: 0, duration: 0.5, ease: "power3.in" }, "+=0.15")
        .to(loader, { clipPath: "inset(0% 0% 100% 0%)", duration: 1, ease: "power4.inOut" }, "-=0.15")
        .to(heroWords, { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: "power4.out" }, "-=0.6")
        .to(heroShapes, { scale: 1, opacity: 1, duration: 1.2, stagger: 0.08, ease: "back.out(1.6)" }, "-=1")
        .to(heroFade, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }, "-=0.9");

      if (reduce) {
        gsap.set(q("[data-reveal],[data-word]"), { clearProps: "all", opacity: 1 });
        q("[data-count]").forEach((c) => (c.textContent = c.dataset.count ?? ""));
        return;
      }

      // ── hero ambience ──────────────────────────────────────────────
      const blob = q1("[data-blob]");
      if (blob) {
        gsap.to(blob, {
          borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut",
        });
        gsap.to(blob, { rotation: 360, duration: 60, repeat: -1, ease: "none" });
      }
      heroShapes.forEach((s, i) =>
        gsap.to(s, { y: `+=${14 + i * 6}`, duration: 3 + i * 0.6, repeat: -1, yoyo: true, ease: "sine.inOut" }),
      );

      if (!window.matchMedia("(pointer: coarse)").matches) {
        const onMove = (e: MouseEvent) => {
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;
          if (blob) gsap.to(blob, { x: x * 60, y: y * 60, duration: 1.4, ease: "power2.out", overwrite: "auto" });
          heroShapes.forEach((s) =>
            gsap.to(s, { x: x * 40 * Number(s.dataset.shape) * 2, duration: 1.2, ease: "power2.out", overwrite: "auto" }),
          );
        };
        root.addEventListener("mousemove", onMove);
        cleanups.push(() => root.removeEventListener("mousemove", onMove));
      }

      // ── panel choreography ─────────────────────────────────────────
      const panels = q("[data-panel]");
      // `gsap.to` would record its start values the moment it is built — which
      // is before the loader timeline has faded these in, so it would capture
      // opacity 0 and the eyebrow/lead would never come back on scroll-up.
      // fromTo + immediateRender:false pins the correct resting state instead.
      // No stagger here. With `immediateRender: false` a staggered child that
      // has not started rendering never receives its from-value, so scrolling
      // back up returned only the first element and left the rest invisible.
      gsap.fromTo(
        hero.querySelectorAll("[data-hero-title],[data-hero-fade]"),
        { y: 0, opacity: 1 },
        {
          y: -60, opacity: 0, ease: "power2.in", immediateRender: false,
          scrollTrigger: { trigger: markOf(panels[1]), start: "top 90%", end: "top 20%", scrub: 0.4 },
        },
      );

      panels.forEach((sec, i) => {
        if (i === 0) return;
        const mark = markOf(sec);
        const scrub = { trigger: mark, start: "top bottom", end: "top top", scrub: 0.3 } as const;

        gsap.fromTo(sec, { borderRadius: "56px 56px 0 0" }, {
          borderRadius: "0px 0px 0 0", ease: "none",
          scrollTrigger: { trigger: mark, start: "top 60%", end: "top top", scrub: 0.3 },
        });

        const inner = sec.querySelector("[data-inner]");
        if (inner) gsap.fromTo(inner, { y: 100 }, { y: 0, ease: "none", scrollTrigger: scrub });

        // The media slot deliberately has no scroll tween: the laptop stays put
        // in the panel and reacts to the pointer only.
        const media = sec.querySelector("[data-media]");
        if (media && !media.querySelector("[data-static-media]"))
          gsap.fromTo(media, { y: 120, rotate: 3 }, { y: 0, rotate: 0, ease: "none", scrollTrigger: scrub });

        const img = sec.querySelector("[data-img]");
        if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: scrub });

        const reveals = sec.querySelectorAll("[data-reveal]");
        if (reveals.length)
          gsap.fromTo(reveals, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
            stagger: reveals.length > 6 ? 0.05 : 0.1,
            scrollTrigger: { trigger: mark, start: "top 45%", toggleActions: "play none none reverse" },
          });

        sec.querySelectorAll<HTMLElement>("[data-split-reveal]").forEach((el) => {
          const words = el.querySelectorAll("[data-word]");
          const many = words.length > 12;
          gsap.fromTo(words, { yPercent: 100, opacity: 0, rotate: many ? 0 : 3 }, {
            yPercent: 0, opacity: 1, rotate: 0,
            duration: many ? 0.9 : 1.2, stagger: many ? 0.02 : 0.08, ease: "power4.out",
            scrollTrigger: { trigger: mark, start: "top 55%", toggleActions: "play none none reverse" },
          });
        });

        // as the next panel rises to cover this one, its text lifts away
        const nextMark = panels[i + 1] ? markOf(panels[i + 1]) : null;
        const textEls = sec.querySelectorAll("[data-split-reveal],[data-reveal],[data-kinetic]");
        if (nextMark && textEls.length)
          // stagger omitted for the same reason as the hero exit above
          gsap.fromTo(textEls, { y: 0, opacity: 1 }, {
            y: -60, opacity: 0, ease: "power2.in", immediateRender: false,
            scrollTrigger: { trigger: nextMark, start: "top 90%", end: "top 20%", scrub: 0.4 },
          });

        sec.querySelectorAll<HTMLElement>("[data-shape]").forEach((el) => {
          const d = Number(el.dataset.shape);
          // function values + invalidateOnRefresh so a resize re-measures
          // instead of scrubbing against stale pixel distances
          gsap.fromTo(el, { y: () => window.innerHeight * d * 0.5 }, {
            y: () => -window.innerHeight * d * 0.5, ease: "none",
            scrollTrigger: {
              trigger: mark, start: "top bottom", end: "top -100%",
              scrub: 1, invalidateOnRefresh: true,
            },
          });
        });
      });

      // ── about: kinetic statement + counters ────────────────────────
      const about = q1("[data-panel='about']");
      if (about) {
        const aboutMark = markOf(about);
        const kinetic = q1("[data-kinetic]");
        if (kinetic)
          gsap.fromTo(kinetic.querySelectorAll("[data-word]"), { opacity: 0.15, yPercent: 30 }, {
            opacity: 1, yPercent: 0, stagger: 0.04, ease: "none",
            scrollTrigger: { trigger: aboutMark, start: "top 70%", end: "top 0%", scrub: 0.6 },
          });
        q("[data-count]").forEach((el) => {
          const o = { v: 0 };
          gsap.to(o, {
            v: Number(el.dataset.count), duration: 1.8, ease: "power3.out",
            onUpdate: () => (el.textContent = String(Math.round(o.v))),
            scrollTrigger: { trigger: aboutMark, start: "top 30%", toggleActions: "play none none reverse" },
          });
        });
      }

      // ── testimonials: horizontal scrub, hold spacer sized to the track ──
      const track = q1("[data-track]");
      const hold = q1("[data-testi-hold]");
      if (track && hold) {
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
        const sizeHold = () => void (hold.style.height = `${dist()}px`);
        sizeHold();
        ScrollTrigger.addEventListener("refreshInit", sizeHold);
        cleanups.push(() => ScrollTrigger.removeEventListener("refreshInit", sizeHold));
        gsap.to(track, {
          x: () => -dist(), ease: "none",
          scrollTrigger: { trigger: hold, start: "top bottom", end: "bottom bottom", scrub: 0.8, invalidateOnRefresh: true },
        });
      }
    }, root);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    cleanups.push(() => window.removeEventListener("load", onLoad));

    return () => {
      cleanups.forEach((f) => f());
      ctx.revert();
      document.documentElement.style.overflow = "";
    };
  }, [rootRef, loaderDuration]);
}
