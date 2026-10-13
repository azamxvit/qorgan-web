import type { ReactNode } from "react";

export function Center({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-[2] flex w-full min-w-0 flex-1 flex-col items-center justify-center px-6 pt-12 pb-[12vh] text-center">
      {children}
    </div>
  );
}
