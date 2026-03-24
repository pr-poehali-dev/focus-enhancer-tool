import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">GRAPHIC DESIGN</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Дизайн, который <br />
          <i className="font-light">говорит</i> за тебя
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Визуальные решения для брендов, которые хотят быть замеченными
        </p>

        <a className="contents max-sm:hidden" href="#works">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Смотреть работы]
          </Button>
        </a>
        <a className="contents sm:hidden" href="#works">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Смотреть работы]
          </Button>
        </a>
      </div>
    </div>
  );
}