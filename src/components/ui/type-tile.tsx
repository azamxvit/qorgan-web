import type { ReactNode } from "react";

export function TypeTile({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="grid aspect-square place-items-center gap-3 rounded-2xl border border-white/10 text-sm text-muted">
      <span className="text-signal">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
