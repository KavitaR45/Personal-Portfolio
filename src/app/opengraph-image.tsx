import { ImageResponse } from "next/og";
import { SITE } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.role}`;

/**
 * Rendered at request time via next/og — no static asset to keep in sync.
 * Colors match the live palette (globals.css): paper / ink / sun / rose.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#F7F6F1",
          color: "#15171D",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#15171D",
              color: "#F7F6F1",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {SITE.initials}
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", opacity: 0.65 }}>
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            {SITE.name}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 999,
                background: "#F6E27F",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              {SITE.role}
            </div>
            <div style={{ display: "flex", fontSize: 26, opacity: 0.7 }}>6+ years</div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, opacity: 0.55 }}>{SITE.description}</div>
      </div>
    ),
    { ...size },
  );
}
