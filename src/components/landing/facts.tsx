import { factsContent } from "./content";
import styles from "./facts.module.css";
export function Facts() {
  return (
    <section aria-label={factsContent.label} className="border-y border-white/10">
      <div className={`${styles.statsBand} relative mx-auto max-w-[1160px] overflow-hidden`}>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/3 size-80 rounded-full bg-mint/20 blur-[80px]"
        />
        <dl className="relative grid grid-cols-2 divide-white/15 px-4 py-8 md:grid-cols-4 md:divide-x md:py-10">
          {factsContent.items.map((fact) => (
            <div key={fact.label} className="px-3 py-4 text-center">
              <dt className="text-[clamp(34px,4vw,46px)] leading-none font-medium tracking-[-0.05em]">
                {fact.value}
              </dt>
              <dd className="mt-3 text-xs text-white/70">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
