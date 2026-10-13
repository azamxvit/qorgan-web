import type { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="max-w-[16ch] text-[clamp(36px,5.4vw,68px)] leading-[1.08] font-semibold tracking-[-0.045em] text-ink">
      {children}
    </h1>
  );
}
