import { ArrowRight, Fingerprint } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SiteFooter } from "@/components/ui/site-footer";

export function Close() {
  return (
    <>
      <Section label="Начать проверку">
        <div className="relative py-4 text-center"><div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(58,217,154,0.07),transparent_65%)]" /><span className="relative mx-auto mb-7 grid size-14 place-items-center rounded-2xl border border-mint/30 bg-mint/10 text-mint shadow-[0_0_40px_rgba(58,217,154,0.08)]"><Fingerprint size={28} strokeWidth={1.3} /></span><h2 className="relative text-[clamp(28px,4vw,42px)] leading-tight tracking-[-0.04em]">Когда сигнал вызывает сомнение,<br /><span className="text-white/45">начните с проверки.</span></h2><p className="relative mt-5 text-sm text-muted">Нужный инструмент — в одном шаге от вас.</p><div className="relative mt-8 flex flex-wrap justify-center gap-3"><a href="#modules" className="inline-flex items-center gap-3 rounded-full bg-mint px-6 py-3.5 text-sm font-semibold text-mint-ink transition hover:bg-[#67e8b1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint">Выбрать модуль<ArrowRight size={16} /></a><a href="#how" className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-muted transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-mint">Как это работает</a></div></div>
      </Section>
      <SiteFooter />
    </>
  );
}
