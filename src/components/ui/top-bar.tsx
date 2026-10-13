import type { ReactNode } from "react";

export function TopBar({ brand, action }: { brand: ReactNode; action: ReactNode }) {
  return (
    <header className="relative z-[2] grid grid-cols-[1fr_auto_1fr] items-center px-4 pt-5 md:px-9 md:pt-7">
      <span />
      <div className="justify-self-center text-[18px] font-semibold tracking-[-0.04em] md:text-[22px]">
        {brand}
      </div>
      <div className="justify-self-end">{action}</div>
    </header>
  );
}
