import type { ReactNode } from "react";

export function FooterBar({ children }: { children: ReactNode }) {
  return (
    <footer className="mx-auto flex max-w-[1320px] flex-col gap-4 border-t border-white/10 px-5 py-5 font-mono text-[9px] tracking-[0.08em] text-faint md:flex-row md:justify-between md:px-9">
      {children}
    </footer>
  );
}
