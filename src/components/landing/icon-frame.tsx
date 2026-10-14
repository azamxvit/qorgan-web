import styles from "./icon-frame.module.css";
import type { ReactNode } from "react";

const tones = {
  mint: {
    frame: styles.signalFrameMint,
    icon: "text-[#4ccd99]/80",
  },
  yellow: {
    frame: styles.signalFrameYellow,
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
      <span
        className={`${styles.signalFrameInner} grid size-full place-items-center rounded-[10px] ${tones[tone].icon}`}
      >
        {children}
      </span>
    </span>
  );
}
