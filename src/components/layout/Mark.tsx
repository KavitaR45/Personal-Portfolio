/**
 * In-flow scroll anchor for the sticky panel that follows it.
 * Sticky elements make unreliable ScrollTrigger triggers, so every panel
 * gets one of these immediately before it.
 */
export default function Mark() {
  return <div data-mark aria-hidden="true" />;
}

/** In-flow spacer that gives a sticky panel dwell time before the next covers it. */
export function Hold({ vh, testimonials = false }: { vh: number; testimonials?: boolean }) {
  return (
    <div
      data-hold
      {...(testimonials ? { "data-testi-hold": "" } : {})}
      style={{ height: `${vh}vh` }}
      aria-hidden="true"
    />
  );
}
