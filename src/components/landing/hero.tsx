import { headerContent, heroContent, siteContent } from "./content";
import Link from "next/link";
import Image from "next/image";
import { Fingerprint, KeyRound, LockKeyhole, Shield } from "lucide-react";
import { Actions } from "@/components/landing/actions";
import { Badge } from "@/components/landing/badge";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/landing/center";
import { Circuit } from "@/components/landing/circuit";
import { Heading } from "@/components/landing/heading";
import { IconFrame } from "@/components/landing/icon-frame";
import { NavLink } from "@/components/ui/nav-link";
import { Screen } from "@/components/landing/screen";
import { Text } from "@/components/landing/text";
import { TopBar } from "@/components/ui/top-bar";
import { HeroShield } from "@/components/landing/hero-shield";

const signals = [
  { Icon: Shield, tone: "mint", className: "top-[34%] left-[8%]" },
  { Icon: LockKeyhole, tone: "yellow", className: "top-[52%] left-[14%]" },
  { Icon: Fingerprint, tone: "yellow", className: "top-[30%] left-[92%]" },
  { Icon: KeyRound, tone: "mint", className: "top-[54%] left-[86%]" },
] as const;

export function Hero() {
  return (
    <Screen>
      <TopBar
        navLabel={headerContent.navLabel}
        brand={
          <Link
            href={siteContent.homeHref}
            aria-label={siteContent.homeLabel}
            className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
          >
            <Image
              src="/qorgan-logo.svg"
              alt={siteContent.name}
              width={930}
              height={288}
              className="h-auto w-32 lg:w-[156px]"
              unoptimized
            />
          </Link>
        }
        nav={
          <>
            {headerContent.links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </>
        }
        action={
          <Button
            href={headerContent.action.href}
            tone={headerContent.action.tone}
            size={headerContent.action.size}
          >
            {headerContent.action.label}
          </Button>
        }
      />
      <Circuit />
      {signals.map(({ Icon, tone, className }) => (
        <IconFrame className={className} tone={tone} key={className}>
          <Icon size={20} strokeWidth={1.6} />
        </IconFrame>
      ))}
      <Center>
        <Badge>{heroContent.badge}</Badge>
        <Heading>
          {heroContent.title[0]}
          <br />
          {heroContent.title[1]}
        </Heading>
        <Text>{heroContent.text}</Text>
        <Actions>
          {heroContent.buttons.map((button) => (
            <Button key={button.href} href={button.href} tone={button.tone}>
              {button.label}
            </Button>
          ))}
        </Actions>
      </Center>
      <HeroShield />
    </Screen>
  );
}
