import { checksContent } from "./content";
import styles from "./checks.module.css";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

const coverTones = {
  mint: `${styles.guideCoverMint} text-mint`,
  cyan: `${styles.guideCoverCyan} text-[#75eaff]`,
  violet: `${styles.guideCoverViolet} text-[#c5afff]`,
};

export function Checks() {
  return (
    <Section id={checksContent.id} label={checksContent.label}>
      <SectionTitle {...checksContent.heading} />
      <div className="grid gap-4 md:grid-cols-3">
        {checksContent.guides.map(({ icon: Icon, ...guide }, index) => (
          <article
            key={guide.title}
            className="flex flex-col border border-white/10 bg-white/[0.015]"
          >
            <div
              className={`relative grid h-44 place-items-center overflow-hidden border-b border-white/10 ${coverTones[guide.tone]}`}
            >
              <div
                aria-hidden
                className="absolute size-32 rounded-full border border-current opacity-10"
              />
              <div
                aria-hidden
                className="absolute size-44 rounded-full border border-current opacity-10"
              />
              <Icon size={58} strokeWidth={0.8} />
              <span className="absolute bottom-3 left-4 font-mono text-[8px] tracking-widest opacity-50">
                {checksContent.cardPrefix}
                {index + 1}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="mb-3 self-start rounded-sm bg-mint/10 px-2 py-1 font-mono text-[8px] tracking-wider text-mint">
                {guide.category}
              </span>
              <h3 className="text-lg leading-snug tracking-[-0.03em]">{guide.title}</h3>
              <p className="mt-3 mb-6 text-xs leading-5 text-muted">{guide.text}</p>
              <details className="group mt-auto">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-medium text-mint focus-visible:outline-2 focus-visible:outline-mint [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">{checksContent.read}</span>
                  <span className="hidden group-open:inline">{checksContent.collapse}</span>
                  <ArrowRight size={14} className="transition-transform group-open:rotate-90" />
                </summary>
                <ol className="mt-5 grid list-decimal gap-3 border-t border-white/10 pt-4 pl-4 text-xs leading-5 text-muted">
                  {guide.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </details>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-9 text-center">
        <a
          href={checksContent.action.href}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs text-muted transition hover:border-mint/40 hover:text-mint focus-visible:outline-2 focus-visible:outline-mint"
        >
          {checksContent.action.label}
          <ArrowDown size={14} />
        </a>
      </div>
    </Section>
  );
}
