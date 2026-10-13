import {
  FileSearch,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  ScanFace,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Circuit } from "@/components/ui/circuit";
import { FooterBar } from "@/components/ui/footer-bar";
import { Heading } from "@/components/ui/heading";
import { IconFrame } from "@/components/ui/icon-frame";
import { ModuleCard } from "@/components/ui/module-card";
import { Screen } from "@/components/ui/screen";
import { SplitNote } from "@/components/ui/split-note";
import { Text } from "@/components/ui/text";
import { TopBar } from "@/components/ui/top-bar";

const services = [
  {
    number: "01",
    href: "https://deepfakeguar-afftngdm.manus.space/",
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
    href: "https://aifraud-eytccebs.manus.space/",
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

const signals = [
  { Icon: Shield, className: "top-[31%] left-[7%]" },
  { Icon: LockKeyhole, className: "top-[47%] left-[14%]" },
  { Icon: Fingerprint, className: "top-[27%] right-[8%]" },
  { Icon: KeyRound, className: "top-[50%] right-[15%]" },
];

export default function Home() {
  return (
    <div className="min-h-svh bg-canvas">
      <Screen>
        <TopBar
          brand={
            <a href="/" className="text-ink no-underline">
              Qorğan
            </a>
          }
          action={
            <Button href="#modules" tone="dark" size="sm">
              К модулям
            </Button>
          }
        />
        <Circuit />
        {signals.map(({ Icon, className }) => (
          <IconFrame className={className} key={className}>
            <Icon size={16} strokeWidth={1.6} />
          </IconFrame>
        ))}
        <Center>
          <Badge>Выберите модуль</Badge>
          <Heading>
            Intelligence for
            <br />
            uncertain signals.
          </Heading>
          <Text>
            Единый портал доступа к специализированным AI-инструментам для защиты личности и
            цифровой криминалистики. Выберите нужный модуль — он откроется в отдельном защищённом
            сервисе.
          </Text>
          <div className="mt-7">
            <Button href="#modules" tone="mint">
              К модулям
            </Button>
          </div>
        </Center>
      </Screen>
      <main className="relative z-[1] mx-auto max-w-[1160px] px-[19px] pt-[54px] pb-7 md:px-[34px] md:pt-[78px] md:pb-9">
        <section id="modules" className="grid grid-cols-1 gap-[17px] md:grid-cols-2" aria-label="Доступные модули">
          {services.map((service) => (
            <ModuleCard key={service.href} {...service} />
          ))}
        </section>
        <SplitNote>
          <ShieldCheck size={15} /> Каждое решение открывается в своём опубликованном сервисе. Ваши
          модули и их внутренняя логика остаются независимыми.
        </SplitNote>
      </main>
      <FooterBar>
        <span>QORĞAN / TRUST INFRASTRUCTURE</span>
        <span>AI · CYBERSECURITY · DIGITAL FORENSICS</span>
        <span>© 2026</span>
      </FooterBar>
    </div>
  );
}
