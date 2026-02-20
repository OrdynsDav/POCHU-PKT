"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function HeroActions() {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <div className="flex gap-4 max-[600px]:flex-col">
      <Link
        href={"#applicants"}
        onClick={(e) => handleAnchorClick(e, "#applicants")}
        className="group flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-[#DC2626] to-[#B91C1C] text-white font-bold rounded-xl hover:bg-[#ffffff] active:scale-[0.98] transition-all shadow-xl shadow-red-900/30 text-base hero-anim-left hero-delay-320"
      >
        Подать заявку
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link
        href={"#departments"}
        onClick={(e) => handleAnchorClick(e, "#departments")}
        className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base hero-anim-right hero-delay-360"
      >
        Специальности
      </Link>
    </div>
  );
}
