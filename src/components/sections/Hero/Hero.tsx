"use client";

import { GraduationCap } from "lucide-react";
import { Container, Logo } from "@/components/ui";
import Image from "next/image";
import { HeroActions } from "./HeroActions";
import { siteConfig } from "@/config/site";

const HERO_IMG = "/images/hero.webp";

const stats = [
  { value: "80+", label: "лет опыта" },
  { value: "1200+", label: "студентов" },
  { value: "12", label: "специальностей" },
  { value: "95%", label: "трудоустройство" },
];

export function Hero() {
  const { logo } = siteConfig;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-30 min-h-full max-h-250 flex items-center overflow-hidden"
    >
      <Container>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Псковский Кооперативный Техникум"
            priority
            className="w-full h-full"
            quality={100}
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#3D1518]/95 via-[#3D1518]/80 to-[#3D1518]/40" />
          <div className="absolute inset-0 bg-linear-to-t from-[#3D1518]/60 to-transparent" />
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-[#DC2626]/10 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl py-20 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8 hero-anim-left">
              <GraduationCap className="w-4 h-4 text-[#D4A574]" />
              Приём на 2026/2027 учебный год открыт
            </div>

            {/* Logo mark */}
            <div className="hero-anim-right hero-delay-120 w-fit">
              <Logo
                shortName={logo.shortName}
                href={logo.href}
                className="min-w-20 min-h-20 text-2xl"
              />
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
            >
              <span className="block hero-anim-left hero-delay-180">
                Псковский
              </span>
              <span className="block bg-linear-to-r from-[#F87171] to-[#D4A574] bg-clip-text text-transparent hero-anim-right hero-delay-260">
                Кооперативный
              </span>
              <span className="block hero-anim-left hero-delay-320">
                Техникум
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed hero-anim-right hero-delay-260">
              Профессиональное образование с&nbsp;1945&nbsp;года. Современные
              специальности, опытные преподаватели и&nbsp;успешные выпускники.
            </p>

            {/* CTAs */}
            <HeroActions />

            {/* Quick stats */}
            {/* <ul className="flex flex-wrap gap-4 justify-between mt-14 pt-8 border-t border-white/10 hero-anim-up hero-delay-420">
              {stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className={`text-center ${
                    index % 2 === 0 ? "hero-anim-left" : "hero-anim-right"
                  } ${
                    index === 0
                      ? "hero-delay-480"
                      : index === 1
                        ? "hero-delay-560"
                        : index === 2
                          ? "hero-delay-640"
                          : "hero-delay-720"
                  }`}
                >
                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
