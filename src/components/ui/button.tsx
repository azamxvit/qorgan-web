import type { ReactNode } from "react";

const tones = {
  dark: "bg-chip text-ink",
  mint: "bg-mint font-semibold text-mint-ink",
} as const;

const sizes = {
  sm: "px-[18px] py-2.5 text-sm font-medium",
  md: "px-[26px] py-3.5 text-[15px]",
} as const;

export function Button({
  href,
  children,
  tone = "dark",
  size = "md",
  external = false,
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full no-underline ${tones[tone]} ${sizes[size]}`}
    >
      {children}
    </a>
  );
}
