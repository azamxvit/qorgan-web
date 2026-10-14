import styles from "./screen.module.css";
import type { ReactNode } from "react";

export function Screen({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-canvas text-ink">
      <div
        aria-hidden="true"
        className={`${styles.heroGlow} pointer-events-none absolute inset-0`}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className={`absolute left-1/2 h-[7%] w-[48%] -translate-x-1/2 -rotate-45 rounded-full bg-white/15 blur-[80px] ${styles.heroLightUpper}`}
        />
        <span
          className={`absolute left-1/2 h-[7%] w-[48%] -translate-x-1/2 -rotate-45 rounded-full bg-white/15 blur-[80px] ${styles.heroLightLower}`}
        />
      </div>
      {children}
      <div aria-hidden="true" className={styles.heroEndFade} />
    </section>
  );
}
