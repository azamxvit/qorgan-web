import { FileSearch, ScanFace } from "lucide-react";

export const identityHref = "https://deepfakeguar-afftngdm.manus.space/";
export const documentHref = "https://aifraud-eytccebs.manus.space/";

export const services = [
  {
    number: "01",
    href: identityHref,
    icon: ScanFace,
    tag: "IDENTITY SECURITY",
    title: "Модуль защиты от\nсинтетической личности",
    description:
      "Проверка видео, голоса и визуальных сигналов на возможную синтетическую подмену личности.",
    points: [
      "Анализ визуальных признаков",
      "Проверка живого контекста",
      "Понятный результат без поспешных выводов",
    ],
    tone: "cyan",
    cta: "Открыть модуль защиты",
  },
  {
    number: "02",
    href: documentHref,
    icon: FileSearch,
    tag: "DIGITAL FORENSICS",
    title: "Модуль цифровой\nкриминалистики",
    description:
      "Техническая проверка документов на признаки генерации, редактирования и нарушения целостности.",
    points: [
      "Проверка структуры документа",
      "Анализ AI-артефактов",
      "Прозрачный audit trail результата",
    ],
    tone: "violet",
    cta: "Открыть криминалистику",
  },
] as const;
