export function StepBlock({ title, steps }: { title: string; steps: readonly string[] }) {
  return (
    <div className="rounded-[19px] border border-white/10 p-6 md:p-8">
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{title}</h3>
      <ol className="mt-6 grid gap-5">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4 border-t border-white/10 pt-4">
            <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-sm leading-6 text-muted">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
