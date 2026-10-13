import type { ReactNode } from "react";

export function Band({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section aria-label={label} className="border-y border-white/10">
      <div className="mx-auto grid max-w-[1160px] md:grid-cols-3 md:divide-x md:divide-white/10">
        {children}
      </div>
    </section>
  );
}

export function Fact({ title, text }: { title: string; text: string }) {
  return (
    <div className="px-6 py-8 md:px-8">
      <p className="text-lg font-semibold tracking-[-0.03em] text-ink">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
