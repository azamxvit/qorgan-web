import type { ReactNode } from "react";

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-md py-2 text-[13px] font-medium text-muted no-underline transition-colors hover:text-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint sm:text-[15px]"
    >
      {children}
    </a>
  );
}
