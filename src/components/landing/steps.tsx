import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { StepBlock } from "@/components/ui/step-block";

const blocks = [
  {
    title: "Лицо и голос",
    steps: [
      "Загрузите видео или запись звонка.",
      "Проверка смотрит кадр, движение лица и голос.",
      "Вы получаете короткий вывод без лишних обещаний.",
    ],
  },
  {
    title: "Документ",
    steps: [
      "Загрузите PDF или фотографию.",
      "Проверка смотрит слои, шрифты и следы правки.",
      "Вы видите, что можно сказать по самому файлу.",
    ],
  },
] as const;

export function Steps() {
  return (
    <Section id="how" label="Как устроено">
      <SectionTitle
        eyebrow="Как устроено"
        title="Один материал, один разбор"
        text="Каждая проверка идёт своим путём и открывается отдельно."
      />
      <div className="grid gap-[17px] md:grid-cols-2">
        {blocks.map((block) => (
          <StepBlock key={block.title} title={block.title} steps={block.steps} />
        ))}
      </div>
    </Section>
  );
}
