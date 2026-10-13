export function Panel({
  title,
  rows,
}: {
  title: string;
  rows: readonly { label: string; value: string }[];
}) {
  return (
    <div className="rounded-[19px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{title}</h3>
      <dl className="mt-6 grid gap-5">
        {rows.map((row) => (
          <div key={row.label} className="border-t border-white/10 pt-4">
            <dt className="text-xs tracking-[0.08em] text-signal uppercase">{row.label}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
