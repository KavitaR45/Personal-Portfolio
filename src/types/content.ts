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
  | { kind: "circle"; depth: number; tone: PanelTone; size: string; pos: string }
  | { kind: "ring"; depth: number; tone: PanelTone; size: string; pos: string }
  | { kind: "square"; depth: number; tone: PanelTone; size: string; pos: string }
  | { kind: "glyph"; depth: number; text: string; pos: string; size: string }
  | { kind: "code"; depth: number; pos: string; rotate: number; dark: boolean; parts: CodePart[] }
  | { kind: "pill"; depth: number; tone: PanelTone; pos: string; rotate: number; text: string };

export type CodePart = { text: string; color?: string };

export type AboutContent = {
  label: string;
  statement: string;
  stats: { value: number; suffix: string; label: string }[];
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
};

export type StackItem = {
  label: string;
  /** an icon from tech-stack-icons; null when the set has no mark for it */
  icon: IconName | null;
  /** project-specific mark drawn in-house, used when `icon` is null */
  custom?: "erp";
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
  links: { label: string; href: string; solid: boolean }[];
};
