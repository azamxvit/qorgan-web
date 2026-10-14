import type { ReactNode } from "react";

export function Actions({ children }: { children: ReactNode }) {
  return (
    <div className="mt-7 flex w-full min-w-0 max-w-[560px] flex-wrap items-center justify-center gap-3">
      {children}
    </div>
  );
}
