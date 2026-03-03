"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function HeaderNav() {
  const { navLinks, contacts } = siteConfig;
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    smoothScrollTo(href);
  };

  return (
    <div className="flex items-center gap-4 max-[1100px]:block">
      {/* Desktop nav */}
      <nav
        aria-label="Основное меню"
        className="flex items-center max-[1100px]:hidden"
      >
        <ul className="flex gap-4" role="menubar">
          {navLinks.map((link) => (
            <li key={link.id} role="none">
              <Link
                role="menuitem"
                className="whitespace-nowrap text-[#3D1518] transition-all duration-200 hover:bg-linear-to-br hover:from-[#ff1904] hover:to-[#ff8787] hover:bg-clip-text hover:text-transparent"
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Burger toggle for <=1100px */}
      <button
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="hidden max-[1100px]:inline-flex items-center h-15 w-15 justify-center rounded-lg border border-[#E8D5C4] bg-white/80 px-2.5 py-2 text-[#3D1518] shadow-sm hover:bg-white transition-colors"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Menu className="w-7 h-7" aria-hidden="true" />
      </button>

      {/* Mobile menu */}
      <div className="max-[1100px]:block hidden">
        <div
          role="presentation"
          aria-hidden="true"
          className={`fixed inset-0 z-1000 min-h-screen transition-opacity duration-300 ease-out ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню навигации"
          className={`fixed right-0 top-0 h-full rounded-bl-sm min-h-115 w-[min(320px,85vw)] z-1001 bg-[#FFF8F0] border-l border-[#E8D5C4] shadow-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4 pt-6">
            <button
              type="button"
              aria-label="Закрыть меню"
              className="p-2 rounded-lg text-[#3D1518] hover:bg-red-50 hover:text-[#DC2626] transition-colors"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Мобильное меню"
            className="flex flex-col gap-1 px-6 py-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="px-4 py-3 text-left text-sm font-semibold text-[#3D1518] hover:text-[#DC2626] rounded-lg hover:bg-red-50 active:text-[#DC2626] active:bg-red-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <address className="pt-4 mt-2 border-t border-[#E8D5C4] space-y-2 text-sm text-[#6B4C3B] not-italic">
              <Link
                className="flex items-center gap-2"
                href={`tel:${contacts.phone}`}
                aria-label={`Позвонить: ${contacts.phone}`}
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />{" "}
                {contacts.phone}
              </Link>
              <Link
                className="flex items-center gap-2"
                href={`mailto:${contacts.email}`}
                aria-label={`Написать на почту: ${contacts.email}`}
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />{" "}
                {contacts.email}
              </Link>
            </address>
          </nav>
        </div>
      </div>
    </div>
  );
}
