import type { ReactNode } from "react";

const tones = {
  mint: {
    frame: "bg-[linear-gradient(110deg,rgba(76,205,153,0.55),rgba(76,205,153,0.12))] shadow-[0_0_18px_rgba(76,205,153,0.04)]",
    icon: "text-[#4ccd99]/80",
  },
  yellow: {
    frame: "bg-[linear-gradient(110deg,rgba(255,244,85,0.5),rgba(255,244,85,0.1))] shadow-[0_0_18px_rgba(255,244,85,0.03)]",
    icon: "text-[#fff455]/75",
  },
};

export function IconFrame({
  children,
  className,
  tone = "mint",
}: {
  children: ReactNode;
  className: string;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-[1] size-11 -translate-x-1/2 -translate-y-1/2 rounded-[11px] p-px max-md:hidden ${tones[tone].frame} ${className}`}
    >
      <span className={`grid size-full place-items-center rounded-[10px] bg-[#0a0c0b] ${tones[tone].icon}`}>
        {children}
      </span>
    </span>
  );
}
