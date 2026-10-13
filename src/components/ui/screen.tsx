import type { ReactNode } from "react";

export function Screen({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-[radial-gradient(ellipse_at_50%_125%,rgba(255,255,255,0.06),transparent_46%)] bg-canvas text-ink">
      {children}
    </section>
  );
}
