"use client";

import Link from "next/link";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { siteConfig } from "@/config/site";
import { Container, Logo } from "@/components/ui";

export function Header() {
  const { logo } = siteConfig;

  return (
    <header
      role="banner"
      aria-label="Главная навигация сайта"
      className="fixed w-full z-999 transition-all duration-300 bg-[#FFF8F0]/80 backdrop-blur-md"
    >
      <Container>
        <div className="flex justify-between min-h-30 gap-4 py-7.5 items-center max-[1024px]:py-3">
          <Logo shortName={logo.shortName} href={logo.href} />
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
}
