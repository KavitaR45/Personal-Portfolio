"use client";

import { useRef } from "react";
import {
  ABOUT, CHAPTERS, CONTACT, HERO, LOADER, NAV, SECTION_LABELS, SITE, STACK, TESTIMONIALS,
} from "@/data/content";
import { useSiteMotion } from "@/hooks/useSiteMotion";

import Loader from "@/components/layout/Loader";
import Nav from "@/components/layout/Nav";
import Mark, { Hold } from "@/components/layout/Mark";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Chapter from "@/components/sections/Chapter";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  useSiteMotion(root);

  // panel counter shown as "01 — 06" in each section header
  const total = 3 + CHAPTERS.length; // about + stack + words + chapters
  const step = (n: number) => `${String(n).padStart(2, "0")} — ${String(total).padStart(2, "0")}`;

  return (
    <div ref={root} className="relative w-full bg-paper text-ink">
      <Loader name={SITE.name} kicker={LOADER.kicker} year={LOADER.year} />
      <Nav links={NAV} site={SITE} />

      <Mark />
      <Hero hero={HERO} photo={SITE.photo} name={SITE.name} />

      <Mark />
      <About about={ABOUT} step={step(1)} />
      <Hold vh={30} />

      {CHAPTERS.map((c, i) => (
        <div key={c.title} className="contents">
          <Mark />
          <Chapter chapter={c} id={i === 0 ? "work" : undefined} />
          <Hold vh={60} />
        </div>
      ))}

      <Mark />
      <TechStack stack={STACK} step={step(total - 1)} />
      <Hold vh={30} />

      <Mark />
      <Testimonials
        testimonials={TESTIMONIALS}
        label={SECTION_LABELS.words}
        heading="What teams say"
      />
      <Hold vh={100} testimonials />

      <Mark />
      <Contact contact={CONTACT} site={SITE} />
    </div>
  );
}
