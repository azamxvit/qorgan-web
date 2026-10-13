import { ArrowDown, ArrowRight, AudioLines, FileSearch, ScanFace } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

const guides = [
  { icon: ScanFace, category: "ЛИЧНОСТЬ", title: "Как подготовить видео к проверке", text: "Качество исходного материала влияет на то, какие признаки можно увидеть.", steps: ["Используйте исходный файл, а не запись экрана или пересланный фрагмент.", "Сохраните звук и контекст разговора. Не обрезайте важные моменты.", "Сильное сжатие и фильтры могут скрыть детали. Учитывайте это при чтении результата."], tone: "mint" },
  { icon: AudioLines, category: "ГОЛОС", title: "Что важно знать о синтетическом голосе", text: "Знакомый голос сам по себе ещё не подтверждает личность собеседника.", steps: ["Сохраните запись в доступном исходном качестве, без шумоподавления и эффектов.", "Обращайте внимание на содержание запроса и обстоятельства звонка.", "Если вас просят о срочном переводе, подтвердите запрос по другому известному каналу."], tone: "cyan" },
  { icon: FileSearch, category: "ДОКУМЕНТЫ", title: "Что может рассказать структура файла", text: "Метаданные и слои дополняют то, что видно на странице документа.", steps: ["Передайте исходный PDF, если он доступен: скриншот не сохраняет структуру файла.", "Учитывайте происхождение документа. Пересохранение и сканирование меняют метаданные.", "Следы редактирования требуют объяснения в контексте и сами по себе не доказывают подделку."], tone: "violet" },
];

export function Checks() {
  return (
    <Section id="watch" label="Полезные материалы">
      <SectionTitle eyebrow="БАЗА ЗНАНИЙ" title="Больше контекста. Точнее решение." text="Короткие инструкции помогут подготовить материал, понять возможности анализа и сделать следующий шаг." />
      <div className="grid gap-4 md:grid-cols-3">
        {guides.map(({ icon: Icon, ...guide }, index) => <article key={guide.title} className="flex flex-col border border-white/10 bg-white/[0.015]"><div className={`relative grid h-44 place-items-center overflow-hidden border-b border-white/10 ${guide.tone === "mint" ? "bg-[radial-gradient(ellipse_at_center,#163c2c,#090e0b)] text-mint" : guide.tone === "cyan" ? "bg-[radial-gradient(ellipse_at_center,#12323b,#080d10)] text-[#75eaff]" : "bg-[radial-gradient(ellipse_at_center,#31213f,#0e0a12)] text-[#c5afff]"}`}><div aria-hidden className="absolute size-32 rounded-full border border-current opacity-10" /><div aria-hidden className="absolute size-44 rounded-full border border-current opacity-10" /><Icon size={58} strokeWidth={0.8} /><span className="absolute bottom-3 left-4 font-mono text-[8px] tracking-widest opacity-50">QORĞAN / FIELD NOTES 0{index + 1}</span></div><div className="flex flex-1 flex-col p-5"><span className="mb-3 self-start rounded-sm bg-mint/10 px-2 py-1 font-mono text-[8px] tracking-wider text-mint">{guide.category}</span><h3 className="text-lg leading-snug tracking-[-0.03em]">{guide.title}</h3><p className="mt-3 mb-6 text-xs leading-5 text-muted">{guide.text}</p><details className="group mt-auto"><summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-medium text-mint focus-visible:outline-2 focus-visible:outline-mint [&::-webkit-details-marker]:hidden"><span className="group-open:hidden">Читать инструкцию</span><span className="hidden group-open:inline">Свернуть инструкцию</span><ArrowRight size={14} className="transition-transform group-open:rotate-90" /></summary><ol className="mt-5 grid list-decimal gap-3 border-t border-white/10 pt-4 pl-4 text-xs leading-5 text-muted">{guide.steps.map(step => <li key={step}>{step}</li>)}</ol></details></div></article>)}
      </div>
      <div className="mt-9 text-center"><a href="#formats" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs text-muted transition hover:border-mint/40 hover:text-mint focus-visible:outline-2 focus-visible:outline-mint">Выбрать материал<ArrowDown size={14} /></a></div>
    </Section>
  );
}
