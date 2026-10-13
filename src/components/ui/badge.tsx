import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <p className="mb-[22px] rounded-full border border-[rgba(80,214,150,0.45)] px-3 py-1.5 text-[13px] font-medium text-signal">
      {children}
    </p>
  );
}
