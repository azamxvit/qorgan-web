export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-[640px] text-center">
      <p className="mb-3 text-[13px] font-medium text-signal">{eyebrow}</p>
      <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.12] font-semibold tracking-[-0.04em] text-ink">
        {title}
      </h2>
      <p className="mt-4 text-base leading-[1.55] text-muted">{text}</p>
    </div>
  );
}
