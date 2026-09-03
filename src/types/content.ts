import type { IconName } from "tech-stack-icons";

export type PanelTone =
  | "paper" | "sun" | "rose" | "mint" | "lilac" | "sky"
  | "peach" | "aqua" | "sage";

export type NavLink = { label: string; target: string };

export type SiteMeta = {
  name: string;
  initials: string;
  role: string;
  description: string;
  email: string;
  phone: string;
  resumeHref: string;
  year: string;
  /** portrait shown in the hero */
  photo: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  lead: string;
  support: string;
  /** decorative floating chips; `depth` drives parallax + pointer sway */
  shapes: HeroShape[];
};

export type HeroShape =
  | { kind: "circle"; depth: number; tone: PanelTone; size: string; pos: string; hideSm?: boolean }
  | { kind: "ring"; depth: number; tone: PanelTone; size: string; pos: string; hideSm?: boolean }
  | { kind: "square"; depth: number; tone: PanelTone; size: string; pos: string }
  | { kind: "glyph"; depth: number; text: string; pos: string; size: string; hideSm?: boolean }
  | { kind: "code"; depth: number; pos: string; rotate: number; dark: boolean; parts: CodePart[]; topSm?: string; hideSm?: boolean }
  | { kind: "pill"; depth: number; tone: PanelTone; pos: string; rotate: number; text: string; topSm?: string; hideSm?: boolean };

export type CodePart = { text: string; color?: string };

/** phone-only `top` override for a hero shape, e.g. "26vh" */
export type SmTop = { topSm?: string };

export type AboutContent = {
  label: string;
  statement: string;
  stats: { value: number; suffix: string; label: string }[];
};

export type ChapterMotif = {
  /** all four read as development furniture, not abstract decoration */
  kind: "glyph" | "snippet" | "dots" | "tag";
  /** parallax factor — the scroll layer reads this off `data-shape` */
  depth: number;
  /** css shorthand, e.g. "left:4vw;bottom:8vh" */
  pos: string;
  size: string;
  tone?: PanelTone;
  text?: string;
};

export type Chapter = {
  index: string;
  kind: string;
  title: string;
  blurb: string;
  tags: { label: string; tone: PanelTone }[];
  /** where it runs — outlined chip beside the tags; omit to hide it */
  hosting?: string;
  href: string;
  tone: PanelTone;
  /** path under /public, or null to render the placeholder plate */
  image: string | null;
  /** render a laptop mockup in the media slot instead of the placeholder plate */
  device?: { kind: "laptop"; screen: string };
  /** decorative shapes themed to the section; picked up by the parallax layer */
  motifs?: ChapterMotif[];
};

export type StackItem = {
  label: string;
  /** an icon from tech-stack-icons; null when the set has no mark for it */
  icon: IconName | null;
  /** project-specific mark drawn in-house, used when `icon` is null */
  custom?: "erp";
  /** dropped on phones to keep the grid short */
  hideSm?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** e.g. "NetArt AI · Website" — shown under the name */
  projectLabel: string;
  tone: PanelTone;
};

export type ContactContent = {
  label: string;
  heading: string;
  links: { label: string; href: string; solid: boolean; download?: string }[];
};
