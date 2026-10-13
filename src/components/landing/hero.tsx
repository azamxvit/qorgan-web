import Image from "next/image";
import { Fingerprint, KeyRound, LockKeyhole, Shield } from "lucide-react";
import { Actions } from "@/components/ui/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Circuit } from "@/components/ui/circuit";
import { Heading } from "@/components/ui/heading";
import { IconFrame } from "@/components/ui/icon-frame";
import { NavLink } from "@/components/ui/nav-link";
import { Screen } from "@/components/ui/screen";
import { Text } from "@/components/ui/text";
import { TopBar } from "@/components/ui/top-bar";

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
        brand={
          <a
            href="/"
            aria-label="Qorğan — главная"
            className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
          >
            <Image
              src="/qorgan-logo.svg"
              alt="Qorğan"
              width={930}
              height={288}
              className="h-auto w-32 lg:w-[156px]"
              unoptimized
            />
          </a>
        }
        nav={
          <>
            <NavLink href="#modules">Проверки</NavLink>
            <NavLink href="#how">Как устроено</NavLink>
            <NavLink href="#watch">Инструкции</NavLink>
          </>
        }
        action={
          <Button href="#modules" tone="dark" size="sm">
            К модулям
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
        <Badge>Выберите модуль</Badge>
        <Heading>
          Intelligence for
          <br />
          uncertain signals.
        </Heading>
        <Text>
          Единый портал доступа к специализированным AI-инструментам для защиты личности и цифровой
          криминалистики. Выберите нужный модуль — он откроется в отдельном защищённом сервисе.
        </Text>
        <Actions>
          <Button href="#modules" tone="mint">
            К модулям
          </Button>
          <Button href="#how" tone="dark">
            Как устроено
          </Button>
        </Actions>
      </Center>
    </Screen>
  );
}
