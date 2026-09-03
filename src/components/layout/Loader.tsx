export default function Loader({
  name, kicker, year,
}: { name: string; kicker: string; year: string }) {
  return (
    <div
      data-loader
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-sun p-[clamp(20px,3vw,40px)] text-ink"
    >
      <div className="flex justify-between text-[13px] font-medium uppercase tracking-[0.12em] opacity-70">
        <span>{kicker}</span>
        <span>{year}</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div
          data-loader-name
          data-split
          className="text-[clamp(22px,3vw,40px)] font-extrabold leading-none tracking-[-0.03em]"
        >
          {name}
        </div>
        <div className="overflow-hidden">
          <div
            data-counter
            className="font-mono text-[clamp(64px,12vw,160px)] font-black leading-[0.85] tracking-[-0.05em] tabular-nums"
          >
            000
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-ink/15">
        <div data-loader-bar className="h-full origin-left scale-x-0 bg-ink" />
      </div>
    </div>
  );
}
