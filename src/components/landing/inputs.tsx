import { ArrowUpRight } from "lucide-react";
import { inputsContent } from "./content";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

export function Inputs() {
  return (
    <Section id={inputsContent.id} label={inputsContent.label}>
      <SectionTitle {...inputsContent.heading} />
      <div className="grid grid-cols-2 border-t border-l border-white/10 md:grid-cols-4">
        {inputsContent.types.map(({ icon: Icon, ...type }) => (
          <a
            key={type.label}
            href={type.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center border-r border-b border-white/10 bg-white/[0.02] px-3 py-8 text-center transition hover:bg-mint/[0.05] focus-visible:outline-2 focus-visible:outline-mint focus-visible:outline-offset-[-2px]"
          >
            <ArrowUpRight
              size={13}
              className="absolute top-3 right-3 text-white/25 transition group-hover:text-mint"
            />
            <span className="mb-5 grid size-14 place-items-center rounded-xl border border-white/10 bg-canvas text-mint">
              <Icon size={25} strokeWidth={1.4} />
            </span>
            <h3 className="text-sm">{type.label}</h3>
            <span className="mt-2 font-mono text-[8px] tracking-wider text-white/40">
              {type.tag}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-5 text-center text-xs leading-5 text-white/40">{inputsContent.note}</p>
    </Section>
  );
}
