import type { ReactNode } from "react";

export function Screen({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-canvas text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_44%,rgba(255,255,255,0.085),transparent_60%),radial-gradient(ellipse_at_50%_100%,rgba(255,255,255,0.055),transparent_50%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute top-[26%] left-1/2 h-[7%] w-[48%] -translate-x-1/2 -rotate-45 rounded-full bg-white/15 blur-[80px]" />
        <span className="absolute top-[78%] left-1/2 h-[7%] w-[48%] -translate-x-1/2 -rotate-45 rounded-full bg-white/15 blur-[80px]" />
      </div>
      {children}
    </section>
  );
}
