"use client";

import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import { siteConfig } from "@/config/site";
import { Container, Logo } from "@/components/ui";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Header() {
  const { cta, logo } = siteConfig;

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cta.href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(cta.href);
    }
  };

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
          <Link
            className="bg-linear-to-br from-[#7B2D26] to-[#DC2626] bg-blend-difference text-white px-5 py-2.5 rounded-lg transition-all duration-400 hover:bg-linear-to-br hover:from-[#DC2626] hover:to-[#7B2D26] max-[1100px]:hidden"
            href={cta.href}
            onClick={handleCtaClick}
            aria-label={`${cta.label} — перейти к форме поступления`}
          >
            {cta.label}
          </Link>
        </div>
      </Container>
    </header>
  );
}
