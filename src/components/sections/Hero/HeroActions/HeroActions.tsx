"use client";

import { ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import {
  ApplicationDialog,
  APPLICATION_DIALOG_ID,
  Button,
  CustomLink,
} from "@/components/ui";
import styles from "./HeroActions.module.css";

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
    <>
      <div className={styles.row}>
        <Button
          type="button"
          variant="primary"
          fullWidthNarrow
          popoverTarget={APPLICATION_DIALOG_ID}
          popoverTargetAction="show"
          className="hero-anim-left hero-delay-320"
        >
          Подать заявку
          <ArrowRight aria-hidden />
        </Button>
        <CustomLink
          variant="secondary"
          fullWidthNarrow
          href="#departments"
          onClick={(e) => handleAnchorClick(e, "#departments")}
          className="hero-anim-right hero-delay-360"
        >
          Специальности
        </CustomLink>
      </div>
      <ApplicationDialog />
    </>
  );
}
