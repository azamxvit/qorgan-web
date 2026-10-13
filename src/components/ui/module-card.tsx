import { ArrowUpRight, type LucideIcon } from "lucide-react";

const tones = {
  cyan: {
    card: "border-[rgba(135,163,239,0.2)] bg-[linear-gradient(145deg,rgba(17,44,93,0.72),rgba(17,18,57,0.88))] hover:-translate-y-1.5 hover:border-[rgba(112,229,255,0.58)] hover:shadow-[0_28px_70px_rgba(2,13,48,0.55),0_0_35px_rgba(61,195,255,0.09)]",
    glow: "bg-[rgba(74,219,255,0.13)]",
    number: "text-[#75eaff]",
    icon: "border-[rgba(116,230,255,0.31)] bg-[rgba(64,184,255,0.12)] text-[#79eaff] shadow-[inset_0_0_20px_rgba(57,205,255,0.08)]",
    arrow: "group-hover:border-[#76edff] group-hover:bg-[#76edff] group-hover:text-[#07172d]",
    dot: "bg-[#75eaff] shadow-[0_0_9px_#75eaff]",
    cta: "text-[#c0f7ff]",
  },
  violet: {
    card: "border-[rgba(135,163,239,0.2)] bg-[linear-gradient(145deg,rgba(53,28,107,0.76),rgba(27,17,63,0.9))] hover:-translate-y-1.5 hover:border-[rgba(192,145,255,0.58)] hover:shadow-[0_28px_70px_rgba(2,13,48,0.55),0_0_35px_rgba(61,195,255,0.09)]",
    glow: "bg-[rgba(176,113,255,0.16)]",
    number: "text-[#c29bff]",
    icon: "border-[rgba(190,146,255,0.32)] bg-[rgba(156,90,255,0.13)] text-[#c3a1ff]",
    arrow: "group-hover:border-[#c09bff] group-hover:bg-[#c09bff] group-hover:text-[#07172d]",
    dot: "bg-[#c29bff] shadow-[0_0_9px_#c29bff]",
    cta: "text-[#e1d4ff]",
  },
} as const;

export function ModuleCard({
  href,
  tone,
  number,
  tag,
  title,
  description,
  points,
  cta,
  icon: Icon,
}: {
  href: string;
  tone: keyof typeof tones;
  number: string;
  tag: string;
  title: string;
  description: string;
  points: readonly string[];
  cta: string;
  icon: LucideIcon;
}) {
  const style = tones[tone];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-[19px] p-[22px] no-underline shadow-[0_25px_80px_rgba(2,7,31,0.25)] transition duration-200 md:min-h-[430px] md:p-[26px] ${style.card}`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-20 -right-20 size-44 rounded-full blur-[13px] transition-transform duration-300 group-hover:scale-150 ${style.glow}`}
      />
      <div className="relative z-[1] flex items-center gap-3">
        <span className={`font-mono text-[11px] ${style.number}`}>{number}</span>
        <span className="font-mono text-[9px] tracking-[0.13em] text-[#7e96c6]">{tag}</span>
        <span
          className={`ml-auto grid size-[34px] place-items-center rounded-[10px] border border-[rgba(134,173,239,0.25)] bg-[rgba(89,125,207,0.1)] text-[#91a7d0] transition ${style.arrow}`}
        >
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div
        className={`relative z-[1] mt-[42px] grid size-14 place-items-center rounded-2xl md:mt-[55px] ${style.icon}`}
      >
        <Icon size={27} />
      </div>
      <h2 className="relative z-[1] mt-[17px] mb-[13px] text-[25px] leading-[1.14] font-bold tracking-[-0.055em] text-[#f3f7ff]">
        {title.split("\n").map((line, index) => (
          <span key={line}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
      </h2>
      <p className="relative z-[1] m-0 max-w-[440px] text-[13px] leading-[1.58] text-[#9cadd1]">
        {description}
      </p>
      <div className="relative z-[1] mt-[21px] grid gap-2 font-mono text-[10px] text-[#8196be]">
        {points.map((point) => (
          <span key={point} className="flex items-center gap-2">
            <i className={`size-[5px] rounded-full ${style.dot}`} />
            {point}
          </span>
        ))}
      </div>
      <div className={`relative z-[1] mt-auto flex items-center gap-2 pt-[22px] text-[11px] font-bold ${style.cta}`}>
        {cta}
        <ArrowUpRight size={16} />
      </div>
    </a>
  );
}
