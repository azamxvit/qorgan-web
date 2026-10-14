import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { footerColumns, siteContent } from "./content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1160px] border-x border-white/[0.07] px-5 pt-14 pb-7 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link
              href={siteContent.homeHref}
              aria-label={siteContent.homeLabel}
              className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              <Image
                src="/qorgan-logo.svg"
                alt={siteContent.name}
                width={930}
                height={288}
                className="h-auto w-[156px]"
                unoptimized
              />
            </Link>
            <p className="mt-4 max-w-64 text-xs leading-6 text-muted">{siteContent.description}</p>
          </div>
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-mono text-[9px] tracking-widest text-white/40">{column.title}</h3>
              <ul className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link ? "_blank" : undefined}
                      rel={"external" in link ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-xs text-muted hover:text-mint focus-visible:outline-2 focus-visible:outline-mint"
                    >
                      {link.label}
                      {"external" in link && <ArrowUpRight size={12} />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white/40">
          <p>{siteContent.copyright}</p>
          <p>{siteContent.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
