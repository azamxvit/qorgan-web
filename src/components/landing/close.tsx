import { closeContent } from "./content";
import styles from "./close.module.css";
import { ArrowRight, Fingerprint } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SiteFooter } from "@/components/landing/site-footer";

export function Close() {
  return (
    <>
      <Section label={closeContent.label}>
        <div className="relative py-4 text-center">
          <div
            aria-hidden
            className={`${styles.closingGlow} pointer-events-none absolute inset-0`}
          />
          <span
            className={`${styles.closingIcon} relative mx-auto mb-7 grid size-14 place-items-center rounded-2xl border border-mint/30 bg-mint/10 text-mint`}
          >
            <Fingerprint size={28} strokeWidth={1.3} />
          </span>
          <h2 className="relative text-[clamp(28px,4vw,42px)] leading-tight tracking-[-0.04em]">
            {closeContent.title[0]}
            <br />
            <span className="text-white/45">{closeContent.title[1]}</span>
          </h2>
          <p className="relative mt-5 text-sm text-muted">{closeContent.text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={closeContent.primary.href}
              className={`${styles.buttonPrimary} inline-flex items-center gap-3 rounded-full bg-mint px-6 py-3.5 text-sm font-semibold text-mint-ink transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint`}
            >
              {closeContent.primary.label}
              <ArrowRight size={16} />
            </a>
            <a
              href={closeContent.secondary.href}
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-muted transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-mint"
            >
              {closeContent.secondary.label}
            </a>
          </div>
        </div>
      </Section>
      <SiteFooter />
    </>
  );
}
