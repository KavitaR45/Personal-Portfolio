/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF CONTENT
 *  Everything on the page is authored here and passed down as
 *  props from app/page.tsx. Edit copy, projects, stack, quotes
 *  and links in this file only — no component holds its own text.
 * ─────────────────────────────────────────────────────────────
 */
import type {
  AboutContent, Chapter, ContactContent, HeroContent,
  NavLink, SiteMeta, StackItem, Testimonial,
} from "@/types/content";

export const SITE: SiteMeta = {
  name: "Kavita Rawat",
  initials: "KR",
  role: "Front-End Developer",
  description:
    "Front-end developer with 6+ years building fast, expressive interfaces in Next.js, React and motion.",
  email: "kavitarawat1214@gmail.com",
  phone: "+91 7721804979",
  resumeHref: "#",
  year: "2026",
  photo: "/portfolio.png",
};

export const NAV: NavLink[] = [
  { label: "About", target: "about" },
  { label: "Work", target: "work" },
  { label: "Stack", target: "stack" },
  { label: "Words", target: "words" },
  { label: "Contact", target: "contact" },
];

export const LOADER = { kicker: "Portfolio", year: SITE.year };

export const HERO: HeroContent = {
  eyebrow: `${SITE.role} · 6+ years`,
  title: SITE.name,
  lead: "Interfaces that feel as good as they work.",
  support:
    "Next.js, React and motion — building fast, expressive products for teams and brands.",
  shapes: [
    { kind: "circle", depth: 0.3, tone: "rose", size: "clamp(70px,9vw,140px)", pos: "left:8vw;top:18vh" },
    {
      kind: "code", depth: 0.5, pos: "left:6vw;top:44vh", rotate: -6, dark: true, hideSm: true,
      parts: [{ text: "const", color: "#C8D8F4" }, { text: " craft = " }, { text: "'pixel-perfect'", color: "#F6E27F" }, { text: ";" }],
    },
    { kind: "pill", depth: 0.25, tone: "mint", pos: "left:44vw;top:30vh", rotate: -3, text: " shipping-code", hideSm: true },
    { kind: "glyph", depth: -0.45, text: "{ }", pos: "right:34vw;top:8vh", size: "clamp(28px,3.4vw,52px)" },
    { kind: "ring", depth: -0.5, tone: "sky", size: "clamp(60px,7vw,110px)", pos: "left:34vw;top:12vh", hideSm: true },
  ],
};

export const ABOUT: AboutContent = {
  label: "About",
  statement:
    "Six-plus years turning product ideas into fast, expressive interfaces — with motion that means something.",
  stats: [
    { value: 6, suffix: "+", label: "Years of experience" },
    { value: 30, suffix: "+", label: "Projects delivered" },
    { value: 15, suffix: "+", label: "Clients worked with" },
  ],
};

/**
 * Panel tones run lilac → rose → mint → sky → sun → aqua → sage:
 * seven distinct pastels, and no two neighbours repeat — including across
 * the boundaries with About (sun) before and Tech stack (sky) after.
 * Tag chips always take a tone other than the panel they sit on.
 * Images are placeholders until real screenshots land in /public.
 */
export const CHAPTERS: Chapter[] = [
  {
    index: "Chapter 01", kind: "AI / Technology", title: "NetArt AI",
    motifs: [
      { kind: "glyph",   depth: 0.3,  pos: "left:2vw;bottom:4vh",    size: "clamp(64px,15vw,240px)", tone: "sky", text: "</>" },
      { kind: "snippet", depth: -0.4, pos: "left:30vw;top:12vh",   size: "clamp(56px,7vw,120px)", tone: "mint" },
      { kind: "tag",     depth: 0.5,  pos: "left:6vw;top:30vh",      size: "clamp(9px,0.9vw,13px)", tone: "lilac", text: "<node>" },
    ],
    tone: "lilac", hosting: "Netlify", href: "https://netartx-ai.netlify.app/", image: null,
    device: { kind: "laptop", screen: "/images/projects/netart.png" },
    blurb: "An interactive AI experience exploring roles, departments and opportunities across the organization.",
    tags: [{ label: "Next.js", tone: "mint" }, { label: "React", tone: "sky" }, { label: "Claude Code", tone: "rose" }],
  },
  {
    index: "Chapter 02", kind: "Martech / Media", title: "SYNC",
    device: { kind: "laptop", screen: "/images/projects/sync.png" },
    motifs: [
      { kind: "glyph",   depth: 0.3,  pos: "left:2vw;bottom:4vh",    size: "clamp(64px,15vw,240px)", tone: "sky", text: "{ }" },
      { kind: "dots",    depth: -0.4, pos: "left:30vw;top:13vh",   size: "clamp(9px,1.1vw,18px)", tone: "lilac" },
      { kind: "tag",     depth: 0.5,  pos: "left:6vw;top:30vh",      size: "clamp(9px,0.9vw,13px)", tone: "mint", text: "<stream>" },
    ],
    tone: "rose", hosting: "Netlify", href: "https://sync-main.netlify.app/", image: null,
    blurb: "A data-driven media experience connecting audience insights, advertising and digital video.",
    tags: [{ label: "Next.js", tone: "sky" }, { label: "React", tone: "mint" }, { label: "Three.js", tone: "lilac" }],
  },
  {
    index: "Chapter 03", kind: "Growth / Martech", title: "Growth Scraper",
    device: { kind: "laptop", screen: "/images/projects/growth-scraper.png" },
    motifs: [
      { kind: "glyph",   depth: 0.3,  pos: "left:2vw;bottom:4vh",    size: "clamp(64px,15vw,240px)", tone: "rose", text: "=>" },
      { kind: "snippet", depth: -0.4, pos: "left:30vw;top:12vh",   size: "clamp(56px,7vw,120px)", tone: "lilac" },
      { kind: "tag",     depth: 0.5,  pos: "left:6vw;top:30vh",      size: "clamp(9px,0.9vw,13px)", tone: "sky", text: "<metrics>" },
    ],
    tone: "mint", hosting: "Vercel", href: "https://www.growthscraper.com/", image: null,
    blurb: "A growth-focused digital presence bringing strategy, technology and marketing together.",
    tags: [{ label: "Plasmic", tone: "lilac" }, { label: "Next.js", tone: "rose" }, { label: "React", tone: "sky" }],
  },
  {
    index: "Chapter 04", kind: "Healthcare / Events", title: "CiNOPSE",
    device: { kind: "laptop", screen: "/images/projects/cinopse.png" },
    motifs: [
      { kind: "glyph",   depth: 0.3,  pos: "left:2vw;bottom:4vh",    size: "clamp(64px,15vw,240px)", tone: "rose", text: "[ ]" },
      { kind: "dots",    depth: -0.4, pos: "left:30vw;top:13vh",   size: "clamp(9px,1.1vw,18px)", tone: "mint" },
      { kind: "tag",     depth: 0.5,  pos: "left:6vw;top:30vh",      size: "clamp(9px,0.9vw,13px)", tone: "sun", text: "<schema>" },
    ],
    tone: "sky", href: "https://cinopse.in/", image: null,
    blurb: "An event experience connecting medical professionals with sessions, speakers and registration.",
    tags: [{ label: "Next.js", tone: "rose" }, { label: "Firebase", tone: "mint" }, { label: "ERP Integration", tone: "sun" }, { label: "Claude Code", tone: "lilac" }],
  },
  {
    index: "Chapter 05", kind: "Creative / Advertising", title: "3 Monks",
    device: { kind: "laptop", screen: "/images/projects/3monks.png" },
    motifs: [
      { kind: "glyph",   depth: 0.3,  pos: "left:2vw;bottom:4vh",    size: "clamp(64px,15vw,240px)", tone: "sky", text: "#" },
      { kind: "snippet", depth: -0.4, pos: "left:30vw;top:12vh",   size: "clamp(56px,7vw,120px)", tone: "lilac" },
      { kind: "tag",     depth: 0.5,  pos: "left:6vw;top:30vh",      size: "clamp(9px,0.9vw,13px)", tone: "rose", text: "<brand>" },
    ],
    tone: "sun", hosting: "Netlify", href: "https://www.3monks.digital/", image: null,
    blurb: "A bold digital experience showcasing creative, advertising, branding and AI capabilities.",
    tags: [{ label: "Wix", tone: "sky" }],
  },
  {
    index: "Chapter 06", kind: "Fintech / Trading", title: "XTR Edge",
    device: { kind: "laptop", screen: "/images/projects/xtr-edge.png" },
    motifs: [
      { kind: "glyph",   depth: 0.3,  pos: "left:2vw;bottom:4vh",    size: "clamp(64px,15vw,240px)", tone: "rose", text: "( )" },
      { kind: "dots",    depth: -0.4, pos: "left:30vw;top:13vh",   size: "clamp(9px,1.1vw,18px)", tone: "sun" },
      { kind: "tag",     depth: 0.5,  pos: "left:6vw;top:30vh",      size: "clamp(9px,0.9vw,13px)", tone: "lilac", text: "<ticker>" },
    ],
    tone: "aqua", hosting: "Netlify", href: "https://xtr-edge.netlify.app/", image: null,
    blurb: "A modern digital experience presenting financial products and global trading solutions.",
    tags: [{ label: "Plasmic", tone: "rose" }, { label: "Next.js", tone: "lilac" }, { label: "React", tone: "sun" }],
  },
  {
    index: "Chapter 07", kind: "Industrial / Engineering", title: "REMAQ",
    device: { kind: "laptop", screen: "/images/projects/remaq.png" },
    motifs: [
      { kind: "glyph",   depth: 0.3,  pos: "left:2vw;bottom:4vh",    size: "clamp(64px,15vw,240px)", tone: "sky", text: "$_" },
      { kind: "snippet", depth: -0.4, pos: "left:30vw;top:12vh",   size: "clamp(56px,7vw,120px)", tone: "rose" },
      { kind: "tag",     depth: 0.5,  pos: "left:6vw;top:30vh",      size: "clamp(9px,0.9vw,13px)", tone: "lilac", text: "<spec>" },
    ],
    tone: "sage", hosting: "Netlify", href: "https://www.remaq.in/", image: null,
    blurb: "A clean B2B experience showcasing industrial coating solutions and applications.",
    tags: [{ label: "Next.js", tone: "sky" }, { label: "Plasmic", tone: "rose" }, { label: "React", tone: "lilac" }],
  },
];

/**
 * 18 tiles → 6×3 from md up, 3×6 below. Both counts divide exactly, so no
 * row is ever left ragged. Every tile carries a real mark: anything
 * tech-stack-icons has no icon for is left off the wall entirely.
 *
 * Row order is deliberate — row 1 front-end + AI, row 2 tooling and data,
 * row 3 the supporting cast.
 */
export const STACK: StackItem[] = [
  // ── row 1 · front end + AI ─────────────────────────────────
  { label: "Next.js",     icon: "nextjs" },
  { label: "React",       icon: "react" },
  { label: "TypeScript",  icon: "typescript" },
  { hideSm: true, label: "JavaScript",  icon: "js" },
  { label: "Claude",      icon: "claude" },
  { label: "Codex",       icon: "openai" },

  // ── row 2 · tooling, source control, data ──────────────────
  { label: "Postman",     icon: "postman" },
  { label: "GitHub",      icon: "github" },
  { hideSm: true, label: "Git",         icon: "git" },
  { label: "Netlify",     icon: "netlify" },
  { label: "ERP",         icon: null, custom: "erp" },
  { label: "Supabase",    icon: "supabase" },

  // ── row 3 · data, 3D, CMS, hosting ─────────────────────────
  { label: "Firebase",    icon: "firebase" },
  { label: "GraphQL",     icon: "graphql" },
  { label: "Three.js",    icon: "threejs" },
  { label: "WordPress",   icon: "wordpress" },
  { label: "WooCommerce", icon: "woocommerce" },
  { hideSm: true, label: "Vercel",      icon: "vercel" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Kavita took a complex AI concept and turned it into an experience that feels simple, interactive and genuinely engaging.",
    name: "Sanjay S P", role: "Founder", projectLabel: "NetArt AI · Website", tone: "sky",
  },
  {
    quote: "Kavita brought a complex media product to life with a digital experience that feels visual, intuitive and easy to explore.",
    name: "Prakhar Gupta", role: "Chief Product Officer", projectLabel: "SYNC · Corporate Website", tone: "rose",
  },
  {
    quote: "Kavita understood what we wanted to communicate and turned it into a digital experience that feels sharp, flexible and true to the brand.",
    name: "Ramkumar P", role: "Founder", projectLabel: "Growth Scraper · Website", tone: "mint",
  },
  {
    quote: "Kavita built more than an event website — she brought registration, integrations and automation together into one seamless experience.",
    name: "Vishnu", role: "Project Lead", projectLabel: "CiNOPSE · Event Website", tone: "peach",
  },
  {
    quote: "Kavita understood the creative direction quickly and turned it into a bold digital experience that feels like the 3 Monks brand.",
    name: "Charlie", role: "Founder", projectLabel: "3 Monks · Website", tone: "lilac",
  },
];

export const CONTACT: ContactContent = {
  label: "Get in touch",
  heading: "Let's build something people remember.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kavita-rawat-6492a92a3/", solid: true },
    { label: "GitHub", href: "https://github.com/KavitaR45", solid: true },
    { label: "Resume", href: SITE.resumeHref, solid: false },
  ],
};

export const SECTION_LABELS = {
  work: "Selected work",
  stack: "Tech stack",
  words: "Kind words",
} as const;
