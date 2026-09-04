import type { ContactContent, SiteMeta } from "@/types/content";

export default function Contact({ contact, site }: { contact: ContactContent; site: SiteMeta }) {
  return (
    <section
      data-panel="contact"
      id="contact"
      className="relative z-[1] flex min-h-svh flex-col justify-between gap-14 overflow-hidden rounded-t-[48px] bg-rose px-[clamp(20px,3vw,40px)] pb-[clamp(24px,4vh,40px)] pt-[clamp(80px,12vh,140px)] text-ink"
    >
      <div data-shape="0.3" className="pointer-events-none absolute select-none font-mono leading-none text-paper"
        style={{ left: "4vw", top: "10vh", fontSize: "clamp(120px,18vw,280px)" }} aria-hidden="true">@</div>
      <div data-shape="-0.4" className="pointer-events-none absolute rounded-full"
        style={{ right: "8vw", top: "14vh", width: "clamp(56px,7vw,110px)", height: "clamp(56px,7vw,110px)", border: "clamp(10px,1.2vw,16px) solid #F6E27F" }} aria-hidden="true" />
      <div data-shape="0.5" className="pointer-events-none absolute font-black leading-none text-mint"
        style={{ right: "22vw", bottom: "14vh", fontSize: "clamp(60px,8vw,140px)" }} aria-hidden="true">↗</div>
      <div data-shape="-0.25" className="pointer-events-none absolute bg-sky"
        style={{ left: "18vw", bottom: "12vh", width: "clamp(36px,4.5vw,64px)", height: "clamp(36px,4.5vw,64px)", borderRadius: "22%", transform: "rotate(16deg)" }} aria-hidden="true" />
      <div data-shape="0.4" className="pointer-events-none absolute opacity-70"
        style={{ left: "46vw", top: "8vh", fontSize: "clamp(24px,2.6vw,40px)" }} aria-hidden="true">✦</div>

      <div data-inner className="relative flex flex-1 flex-col items-center justify-center gap-[clamp(28px,4vh,48px)] text-center">
        <span data-reveal className="text-[13px] uppercase tracking-[0.14em] opacity-65">{contact.label}</span>

        <h2
          data-split-reveal
          className="m-0 max-w-[14ch] text-[clamp(34px,5vw,80px)] font-black leading-[0.92] tracking-[-0.05em]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {contact.heading}
        </h2>

        <a
          data-reveal
          href={`mailto:${site.email}`}
          className="border-b-2 border-ink pb-1 text-[clamp(18px,2.2vw,34px)] font-bold tracking-[-0.03em] transition-colors duration-300 hover:border-blue hover:text-blue"
        >
          {site.email}
        </a>

        <a data-reveal href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-[clamp(15px,1.2vw,18px)] font-medium opacity-85">
          {site.phone}
        </a>

        <div data-reveal className="flex flex-wrap justify-center gap-2.5">
          {contact.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              download={l.download}
              {...(l.download ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className={`inline-flex gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold transition-transform duration-300 hover:-translate-y-[3px] ${
                l.solid ? "bg-ink text-paper" : "border-[1.5px] border-ink"
              }`}
            >
              {l.label} <span aria-hidden="true">{l.solid ? "↗" : "↓"}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative flex flex-wrap justify-between gap-3 border-t border-ink/25 pt-5 text-[13px] uppercase tracking-[0.08em] opacity-65">
        <span>© {site.year} {site.name}</span>
        <span>{site.role}</span>
      </div>
    </section>
  );
}
