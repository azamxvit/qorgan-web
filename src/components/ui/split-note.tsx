import type { ReactNode } from "react";

export function SplitNote({ children }: { children: ReactNode }) {
  return (
    <div className="my-12 flex flex-col items-stretch gap-3 text-center font-mono text-[9px] leading-[1.6] text-[#6f82aa] md:mt-[54px] md:mb-[30px] md:flex-row md:items-center md:gap-[18px]">
      <span className="h-px w-full bg-[rgba(145,169,238,0.14)] md:flex-1" />
      <span className="inline-flex items-center justify-center gap-[7px] [&_svg]:text-[#74eaff]">
        {children}
      </span>
      <span className="h-px w-full bg-[rgba(145,169,238,0.14)] md:flex-1" />
    </div>
  );
}
