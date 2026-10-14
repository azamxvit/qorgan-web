import {
  AudioLines,
  FileSearch,
  FileText,
  Image,
  ScanFace,
  ShieldCheck,
  Video,
} from "lucide-react";

export const identityHref = "https://deepfakeguar-afftngdm.manus.space/";
export const documentHref = "https://aifraud-eytccebs.manus.space/";

export const sectionIds = {
  modules: "modules",
  how: "how",
  watch: "watch",
  formats: "formats",
} as const;
export const sectionLinks = {
  modules: `#${sectionIds.modules}`,
  how: `#${sectionIds.how}`,
  watch: `#${sectionIds.watch}`,
  formats: `#${sectionIds.formats}`,
} as const;

export const siteContent = {
  name: "Qorğan",
  homeHref: "/",
  homeLabel: "Qorğan — главная",
  tagline: "Intelligence for uncertain signals.",
  copyright: "© 2026 Qorğan",
  description:
    "Инструменты для защиты личности и цифровой криминалистики. Больше контекста для решений в цифровом мире.",
} as const;

export const headerContent = {
  navLabel: "Основная навигация",
  links: [
    { href: sectionLinks.modules, label: "Проверки" },
    { href: sectionLinks.how, label: "Как устроено" },
    { href: sectionLinks.watch, label: "Инструкции" },
  ],
  action: { href: sectionLinks.modules, label: "К модулям", tone: "dark", size: "sm" },
} as const;

export const heroContent = {
  badge: "Выберите модуль",
  title: ["Intelligence for", "uncertain signals."],
  text: "Единый портал доступа к специализированным AI-инструментам для защиты личности и цифровой криминалистики. Выберите нужный модуль — он откроется в отдельном защищённом сервисе.",
  buttons: [
    { href: sectionLinks.modules, tone: "mint", label: "К модулям" },
    { href: sectionLinks.how, tone: "dark", label: "Как устроено" },
  ],
} as const;

export const servicesContent = {
  id: sectionIds.modules,
  label: "Модули и возможности",
  heading: {
    eyebrow: "ВОЗМОЖНОСТИ QORĞAN",
    title: "От сомнения — к пониманию",
    text: "Выберите направление проверки. Специализированные инструменты помогут разобраться в сигналах, которые не видны на первый взгляд.",
  },
  cards: [
    {
      icon: ScanFace,
      label: "01 / IDENTITY",
      title: "Лицо и видео",
      text: "Проверьте визуальные признаки подмены личности и синтетического контента.",
      href: identityHref,
      external: true,
    },
    {
      icon: AudioLines,
      label: "02 / VOICE",
      title: "Голос и аудио",
      text: "Исследуйте запись разговора на признаки искусственно созданного голоса.",
      href: identityHref,
      external: true,
    },
    {
      icon: FileSearch,
      label: "03 / FORENSICS",
      title: "Документы",
      text: "Изучите структуру файла, следы редактирования и возможные AI-артефакты.",
      href: documentHref,
      external: true,
    },
    {
      icon: ShieldCheck,
      label: "04 / KNOWLEDGE",
      title: "Осознанная проверка",
      text: "Узнайте, как подготовить материал и правильно интерпретировать результат.",
      href: sectionLinks.watch,
      external: false,
    },
  ] as const,
  externalAction: "Открыть модуль",
  internalAction: "Узнать больше",
  note: "Два самостоятельных сервиса. Каждый модуль открывается в новой вкладке.",
} as const;

export const previewContent = {
  id: sectionIds.how,
  label: "Как устроена проверка",
  eyebrow: "ВНУТРИ МОДУЛЕЙ",
  workflow: "Материал → анализ → интерпретация",
  modulePrefix: "МОДУЛЬ /",
  stepPrefix: "0",
  demoHeaderSuffix: " / ПРИМЕР ИНТЕРФЕЙСА",
  identityDemo: {
    name: "IDENTITY",
    visualSignal: "VISUAL SIGNAL",
    material: "Материал",
    type: "Видео + голос",
    audioSignal: "AUDIO SIGNAL",
  },
  documentDemo: {
    name: "FORENSICS",
    structure: "DOCUMENT STRUCTURE",
    title: "Структура документа",
    rows: ["Метаданные", "Шрифты и слои", "Следы правки"],
    analysis: "FILE ANALYSIS",
  },
  products: [
    {
      demo: "identity",
      number: "01",
      title: "Проверяйте личность. Замечайте подмену.",
      text: "Видео и голос могут выглядеть убедительно. Модуль помогает исследовать признаки синтетического контента, прежде чем вы примете решение.",
      href: identityHref,
      label: "Проверить лицо и голос",
    },
    {
      demo: "document",
      number: "02",
      title: "Исследуйте файл. Восстанавливайте контекст.",
      text: "Внешний вид документа — только часть истории. Изучите его структуру, слои и следы изменений с помощью цифровой криминалистики.",
      href: documentHref,
      label: "Проверить документ",
    },
  ] as const,
  steps: [
    { title: "Выберите модуль", text: "Лицо и голос или документ." },
    { title: "Подготовьте материал", text: "Сохраните оригинал записи или файла." },
    { title: "Изучите результат", text: "Рассмотрите найденные признаки в контексте." },
  ],
} as const;

export const checksContent = {
  id: sectionIds.watch,
  label: "Полезные материалы",
  heading: {
    eyebrow: "БАЗА ЗНАНИЙ",
    title: "Больше контекста. Точнее решение.",
    text: "Короткие инструкции помогут подготовить материал, понять возможности анализа и сделать следующий шаг.",
  },
  guides: [
    {
      icon: ScanFace,
      category: "ЛИЧНОСТЬ",
      title: "Как подготовить видео к проверке",
      text: "Качество исходного материала влияет на то, какие признаки можно увидеть.",
      steps: [
        "Используйте исходный файл, а не запись экрана или пересланный фрагмент.",
        "Сохраните звук и контекст разговора. Не обрезайте важные моменты.",
        "Сильное сжатие и фильтры могут скрыть детали. Учитывайте это при чтении результата.",
      ],
      tone: "mint",
    },
    {
      icon: AudioLines,
      category: "ГОЛОС",
      title: "Что важно знать о синтетическом голосе",
      text: "Знакомый голос сам по себе ещё не подтверждает личность собеседника.",
      steps: [
        "Сохраните запись в доступном исходном качестве, без шумоподавления и эффектов.",
        "Обращайте внимание на содержание запроса и обстоятельства звонка.",
        "Если вас просят о срочном переводе, подтвердите запрос по другому известному каналу.",
      ],
      tone: "cyan",
    },
    {
      icon: FileSearch,
      category: "ДОКУМЕНТЫ",
      title: "Что может рассказать структура файла",
      text: "Метаданные и слои дополняют то, что видно на странице документа.",
      steps: [
        "Передайте исходный PDF, если он доступен: скриншот не сохраняет структуру файла.",
        "Учитывайте происхождение документа. Пересохранение и сканирование меняют метаданные.",
        "Следы редактирования требуют объяснения в контексте и сами по себе не доказывают подделку.",
      ],
      tone: "violet",
    },
  ] as const,
  cardPrefix: "QORĞAN / FIELD NOTES 0",
  read: "Читать инструкцию",
  collapse: "Свернуть инструкцию",
  action: { href: sectionLinks.formats, label: "Выбрать материал" },
} as const;

export const inputsContent = {
  id: sectionIds.formats,
  label: "Материалы для проверки",
  heading: {
    eyebrow: "МАТЕРИАЛЫ",
    title: "Начните с того, что у вас есть",
    text: "Запись разговора, видео или документ — выберите материал, чтобы перейти к соответствующему инструменту.",
  },
  types: [
    { icon: Video, label: "Видео", tag: "ЛИЦО И ГОЛОС", href: identityHref },
    { icon: AudioLines, label: "Аудиозапись", tag: "ЛИЦО И ГОЛОС", href: identityHref },
    { icon: FileText, label: "PDF-документ", tag: "КРИМИНАЛИСТИКА", href: documentHref },
    { icon: Image, label: "Фото документа", tag: "КРИМИНАЛИСТИКА", href: documentHref },
  ] as const,
  note: "Точные требования к файлам указаны внутри выбранного сервиса.",
} as const;

export const factsContent = {
  label: "Qorğan в цифрах",
  items: [
    { value: "2", label: "Специализированных модуля" },
    { value: "3", label: "Направления анализа" },
    { value: "4", label: "Типа материала" },
    { value: "1", label: "Единая точка входа" },
  ],
} as const;

export const closeContent = {
  label: "Начать проверку",
  title: ["Когда сигнал вызывает сомнение,", "начните с проверки."],
  text: "Нужный инструмент — в одном шаге от вас.",
  primary: { href: sectionLinks.modules, label: "Выбрать модуль" },
  secondary: { href: sectionLinks.how, label: "Как это работает" },
} as const;

export const footerColumns = [
  {
    title: "ВОЗМОЖНОСТИ",
    links: [
      { href: identityHref, label: "Лицо и голос", external: true },
      { href: documentHref, label: "Документы", external: true },
    ],
  },
  {
    title: "ПОРТАЛ",
    links: [
      { href: sectionLinks.modules, label: "Модули" },
      { href: sectionLinks.how, label: "Как это работает" },
      { href: sectionLinks.formats, label: "Материалы для проверки" },
    ],
  },
  {
    title: "РЕСУРСЫ",
    links: [
      { href: sectionLinks.watch, label: "База знаний" },
      { href: sectionLinks.watch, label: "Подготовка к проверке" },
    ],
  },
] as const;
