import { ArrowRight } from "lucide-react";
import { servicesContent } from "./content";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

export function Services() {
  return (
    <Section id={servicesContent.id} label={servicesContent.label} seamless>
      <SectionTitle {...servicesContent.heading} />
      <div className="grid border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {servicesContent.cards.map(({ icon: Icon, ...item }) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col border-r border-b border-white/10 bg-white/[0.015] p-6 transition-colors hover:bg-mint/[0.05] focus-visible:outline-2 focus-visible:outline-mint focus-visible:outline-offset-[-2px]"
          >
            <div className="mb-7 flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-xl border border-mint/20 bg-mint/[0.06] text-mint">
                <Icon size={21} strokeWidth={1.5} />
              </span>
              <span className="font-mono text-[9px] tracking-wider text-white/40">
                {item.label.split(" / ")[0]}
              </span>
            </div>
            <h3 className="text-lg font-medium tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 mb-8 text-sm leading-6 text-muted">{item.text}</p>
            <span className="mt-auto flex items-center gap-2 text-xs font-medium text-mint">
              {item.external ? servicesContent.externalAction : servicesContent.internalAction}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
      <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-white/40">
        <span className="size-1.5 shrink-0 rounded-full bg-mint" />
        {servicesContent.note}
      </p>
    </Section>
  );
}
