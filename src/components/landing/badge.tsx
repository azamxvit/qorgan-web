import styles from "./badge.module.css";
import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <p
      className={`${styles.heroBadge} mb-[22px] rounded-full border px-3 py-1.5 text-[13px] font-medium text-signal`}
    >
      {children}
    </p>
  );
}
