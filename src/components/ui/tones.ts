import type { PanelTone } from "@/types/content";

/** Panel tones resolve to the palette in globals.css. */
export const BG: Record<PanelTone, string> = {
  paper: "bg-paper",
  sun: "bg-sun",
  rose: "bg-rose",
  mint: "bg-mint",
  lilac: "bg-lilac",
  sky: "bg-sky",
  peach: "bg-peach",
  aqua: "bg-aqua",
  sage: "bg-sage",
};

export const HEX: Record<PanelTone, string> = {
  paper: "#F7F6F1",
  sun: "#F6E27F",
  rose: "#F6C6D0",
  mint: "#CFE8D5",
  lilac: "#DCD0F2",
  sky: "#C8D8F4",
  peach: "#F9D5B7",
  aqua: "#BFE3E0",
  sage: "#DFE7C4",
};
