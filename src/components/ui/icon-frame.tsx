import type { ReactNode } from "react";

export function IconFrame({ children, className }: { children: ReactNode; className: string }) {
  return (
    <span
      className={`absolute z-[1] grid size-9 place-items-center rounded-[9px] border border-[rgba(198,214,122,0.55)] bg-black/35 text-[#d7e48a] max-md:hidden ${className}`}
    >
      {children}
    </span>
  );
}
