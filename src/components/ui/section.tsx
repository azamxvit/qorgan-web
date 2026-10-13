import type { ReactNode } from "react";

export function Section({ id, label, children }: { id?: string; label: string; children: ReactNode }) {
  return (
    <section id={id} aria-label={label} className="scroll-mt-8 border-t border-white/10">
      <div className="relative mx-auto max-w-[1160px] border-x border-white/[0.07] px-5 py-16 md:px-10 md:py-24">
        <span aria-hidden className="absolute -top-[3px] left-0 size-[5px] md:-left-[3px] border border-white/25 bg-canvas" />
        <span aria-hidden className="absolute -top-[3px] right-0 size-[5px] md:-right-[3px] border border-white/25 bg-canvas" />
        {children}
      </div>
    </section>
  );
}
