import { Checks } from "@/components/landing/checks";
import { Close } from "@/components/landing/close";
import { Facts } from "@/components/landing/facts";
import { Hero } from "@/components/landing/hero";
import { Inputs } from "@/components/landing/inputs";
import { Preview } from "@/components/landing/preview";
import { Services } from "@/components/landing/services";

export default function Home() {
  return (
    <div className="min-h-svh bg-canvas">
      <Hero />
      <div className="[&_a]:motion-reduce:transition-none [&_svg]:motion-reduce:transition-none">
        <main>
          <Services />
          <Preview />
          <Facts />
          <Checks />
          <Inputs />
        </main>
        <Close />
      </div>
    </div>
  );
}
