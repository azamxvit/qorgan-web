export function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[19px] border border-white/10 bg-white/[0.02] p-6">
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
    </article>
  );
}
