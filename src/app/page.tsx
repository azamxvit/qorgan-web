import {
  ArrowUpRight,
  FileSearch,
  Fingerprint,
  LockKeyhole,
  ScanFace,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
    accent: "cyan",
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
    accent: "violet",
    cta: "Открыть криминалистику",
  },
];

export default function Home() {
  return (
    <div className="portal-page">
      <div className="portal-grid" />
      <div className="portal-stars portal-stars--one" />
      <div className="portal-stars portal-stars--two" />
      <div className="portal-glow portal-glow--cyan" />
      <div className="portal-glow portal-glow--violet" />
      <header className="portal-header">
        <a className="portal-brand" href="/">
          <span className="portal-brand-mark">
            <ShieldCheck size={21} />
          </span>
          <span>
            <strong>
              Qor<span>ğan</span>
            </strong>
            <small>AI trust intelligence</small>
          </span>
        </a>
        <div className="portal-header-status">
          <span className="status-pulse" /> TWO SPECIALIZED MODULES <i /> SECURE EXTERNAL ACCESS
        </div>
      </header>
      <main className="portal-main">
        <section className="portal-hero">
          <div className="portal-eyebrow">
            <Sparkles size={14} /> TRUST CONSOLE / SELECT A MODULE
          </div>
          <h1>
            Intelligence for
            <br />
            <em>uncertain signals.</em>
          </h1>
          <p>
            Единый портал доступа к специализированным AI-инструментам для защиты личности и
            цифровой криминалистики. Выберите нужный модуль — он откроется в отдельном защищённом
            сервисе.
          </p>
          <div className="portal-hero-meta">
            <span>
              <LockKeyhole size={14} /> Сервисы работают независимо
            </span>
            <span>
              <Fingerprint size={14} /> Evidence-led analysis
            </span>
          </div>
        </section>
        <section className="service-grid" aria-label="Доступные AI-модули">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                className={`service-card service-card--${service.accent}`}
                href={service.href}
                key={service.href}
              >
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-tag">{service.tag}</span>
                  <span className="service-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <div className="service-icon">
                  <Icon size={27} />
                </div>
                <h2>
                  {service.title.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>
                <p>{service.description}</p>
                <div className="service-points">
                  {service.points.map((point) => (
                    <span key={point}>
                      <i />
                      {point}
                    </span>
                  ))}
                </div>
                <div className="service-cta">
                  {service.cta}
                  <ArrowUpRight size={16} />
                </div>
              </a>
            );
          })}
        </section>
        <section className="portal-footer-note">
          <div className="footer-line" />
          <span>
            <ShieldCheck size={15} /> Каждое решение открывается в своём опубликованном сервисе.
            Ваши модули и их внутренняя логика остаются независимыми.
          </span>
          <div className="footer-line" />
        </section>
      </main>
      <footer className="portal-footer">
        <span>QORĞAN / TRUST INFRASTRUCTURE</span>
        <span>AI · CYBERSECURITY · DIGITAL FORENSICS</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
