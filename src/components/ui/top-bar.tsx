import type { ReactNode } from "react";

export function TopBar({
  brand,
  nav,
  action,
}: {
  brand: ReactNode;
  nav: ReactNode;
  action: ReactNode;
}) {
  return (
    <header className="relative z-[2] px-4 pt-5 md:pt-7">
      <div className="mx-auto max-w-[1000px] rounded-[20px] border border-white/10 bg-white/[0.025] px-4 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between gap-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">
          <div className="shrink-0">{brand}</div>
          <nav aria-label="Основная навигация" className="hidden items-center justify-center gap-6 lg:flex">
            {nav}
          </nav>
          <div className="shrink-0 [&>a]:min-h-11 [&>a]:text-[15px] [&>a]:transition-colors [&>a]:hover:bg-white/20 [&>a]:focus-visible:outline-2 [&>a]:focus-visible:outline-offset-4 [&>a]:focus-visible:outline-mint">
            {action}
          </div>
        </div>
        <nav aria-label="Основная навигация" className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 border-t border-white/10 pt-4 sm:gap-x-5 lg:hidden">
          {nav}
        </nav>
      </div>
    </header>
  );
}
