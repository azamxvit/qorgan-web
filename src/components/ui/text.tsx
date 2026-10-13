import type { ReactNode } from "react";

export function Text({ children }: { children: ReactNode }) {
  return (
    <p className="mt-[22px] max-w-[560px] text-base leading-[1.55] text-balance text-muted">{children}</p>
  );
}
