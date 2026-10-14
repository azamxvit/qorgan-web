import styles from "./preview.module.css";
import { ArrowUpRight, AudioLines, Check, FileText, Fingerprint, ScanFace } from "lucide-react";
import { previewContent } from "./content";
import { Section } from "@/components/ui/section";

function DemoHeader({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
      <span className="size-1.5 rounded-full bg-white/25" />
      <span className="size-1.5 rounded-full bg-white/15" />
      <span className="size-1.5 rounded-full bg-white/10" />
      <span className="ml-auto font-mono text-[8px] tracking-wider text-white/40">
        {name}
        {previewContent.demoHeaderSuffix}
      </span>
    </div>
  );
}

function IdentityDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1210] shadow-2xl">
      <DemoHeader name={previewContent.identityDemo.name} />
      <div className="grid grid-cols-[1fr_0.85fr] gap-3 p-4 sm:p-5">
        <div
          className={`${styles.demoIdentityStage} relative flex min-h-44 items-center justify-center overflow-hidden rounded-lg border border-mint/15`}
        >
          <div
            aria-hidden
            className={`${styles.demoScanGrid} absolute inset-0 bg-size-[18px_18px]`}
          />
          <div className="relative grid size-24 place-items-center rounded-xl border border-mint/50">
            <ScanFace className="text-mint/70" size={65} strokeWidth={0.7} />
            <span className="absolute inset-x-[-12px] top-1/2 h-px bg-mint/60 shadow-[0_0_12px_#3ad99a]" />
          </div>
          <span className="absolute bottom-3 left-3 flex items-center gap-1.5 font-mono text-[8px] text-mint/70">
            <span className="size-1 rounded-full bg-mint" />
            {previewContent.identityDemo.visualSignal}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
            <Fingerprint size={17} className="mb-3 text-mint" />
            <p className="text-[10px] text-muted">{previewContent.identityDemo.material}</p>
            <p className="mt-1 text-xs">{previewContent.identityDemo.type}</p>
          </div>
          <div className="flex-1 rounded-lg border border-white/10 p-3">
            <AudioLines size={16} className="text-mint" />
            <div aria-hidden className="mt-3 flex h-9 items-center gap-[3px]">
              {[12, 24, 16, 32, 23, 36, 17, 29, 35, 18, 26, 13, 30, 20, 10].map((height, i) => (
                <span key={i} style={{ height }} className="w-1 flex-1 rounded-full bg-mint/50" />
              ))}
            </div>
            <p className="mt-2 font-mono text-[8px] text-white/40">
              {previewContent.identityDemo.audioSignal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111019] shadow-2xl">
      <DemoHeader name={previewContent.documentDemo.name} />
      <div className="grid grid-cols-[0.85fr_1fr] gap-3 p-4 sm:p-5">
        <div
          className={`${styles.demoDocumentStage} relative flex min-h-44 items-center justify-center rounded-lg border border-[#c5afff]/15`}
        >
          <div className="w-24 rounded border border-white/25 bg-white/[0.05] p-3">
            <FileText size={19} strokeWidth={1} className="mb-4 text-[#c5afff]" />
            <div aria-hidden className="grid gap-2">
              <span className="h-1 w-12 bg-white/25" />
              <span className="h-1 w-full bg-white/15" />
              <span className="h-1 w-full bg-white/15" />
              <span className="-mx-1 h-4 border border-[#c5afff]/60 bg-[#c5afff]/10" />
              <span className="h-1 w-10 bg-white/15" />
            </div>
          </div>
          <span className="absolute bottom-3 left-3 font-mono text-[8px] text-[#c5afff]/70">
            {previewContent.documentDemo.structure}
          </span>
        </div>
        <div className="rounded-lg border border-white/10 p-3">
          <p className="mb-4 text-xs text-white/80">{previewContent.documentDemo.title}</p>
          {previewContent.documentDemo.rows.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 border-t border-white/10 py-3 text-[10px] text-muted"
            >
              <Check size={12} className="shrink-0 text-[#c5afff]" />
              {label}
            </div>
          ))}
          <span className="mt-1 inline-block rounded bg-[#c5afff]/10 px-2 py-1 font-mono text-[8px] text-[#c5afff]">
            {previewContent.documentDemo.analysis}
          </span>
        </div>
      </div>
    </div>
  );
}

const demos = { identity: IdentityDemo, document: DocumentDemo };
const products = previewContent.products.map((product) => ({
  ...product,
  demo: demos[product.demo],
}));

export function Preview() {
  return (
    <Section id={previewContent.id} label={previewContent.label}>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs tracking-widest text-signal">{previewContent.eyebrow}</p>
        <p className="text-xs text-white/40">{previewContent.workflow}</p>
      </div>
      <div className="grid border-t border-l border-white/10 md:grid-cols-2">
        {products.map(({ demo: Demo, ...product }) => (
          <article key={product.number} className="flex flex-col border-r border-b border-white/10">
            <div className="bg-white/[0.025] p-5 sm:p-8">
              <Demo />
            </div>
            <div className="flex flex-1 flex-col border-t border-white/10 p-6 sm:p-8">
              <p className="mb-4 font-mono text-[10px] text-mint">
                {previewContent.modulePrefix} {product.number}
              </p>
              <h2 className="max-w-96 text-[clamp(24px,2.5vw,30px)] leading-tight tracking-[-0.04em]">
                {product.title}
              </h2>
              <p className="mt-4 mb-7 text-sm leading-6 text-muted">{product.text}</p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-xs font-medium text-mint hover:underline focus-visible:outline-2 focus-visible:outline-mint"
              >
                {product.label}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <ol className="mt-8 grid gap-6 sm:grid-cols-3">
        {previewContent.steps.map((step, i) => (
          <li key={step.title} className="flex gap-3">
            <span className="mt-0.5 font-mono text-xs text-mint">
              {previewContent.stepPrefix}
              {i + 1}
            </span>
            <div>
              <h3 className="text-sm font-medium">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-white/45">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
