import type { CSSProperties, ReactNode } from "react";
import styles from "./SectionIntro.module.css";

export type SectionIntroVariant = "burgundy" | "amber" | "hero";

export type SectionIntroAccent = {
  badgeBackground?: string;
  badgeColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  badgeBorder?: string;
};

type SectionIntroProps = {
  badge: ReactNode;
  title: ReactNode;
  description: ReactNode;
  headingId: string;
  variant?: SectionIntroVariant;
  accent?: SectionIntroAccent;
  className?: string;
};

function accentToStyle(accent?: SectionIntroAccent): CSSProperties | undefined {
  if (!accent) return undefined;
  const s: Record<string, string> = {};
  if (accent.badgeBackground) s["--si-badge-bg"] = accent.badgeBackground;
  if (accent.badgeColor) s["--si-badge-color"] = accent.badgeColor;
  if (accent.titleColor) s["--si-title-color"] = accent.titleColor;
  if (accent.descriptionColor) s["--si-desc-color"] = accent.descriptionColor;
  if (accent.badgeBorder) s["--si-badge-border"] = accent.badgeBorder;
  return s as CSSProperties;
}

const variantClass: Record<SectionIntroVariant, string> = {
  burgundy: styles.burgundy,
  amber: styles.amber,
  hero: styles.hero,
};

export function SectionIntro({
  badge,
  title,
  description,
  headingId,
  variant = "burgundy",
  accent,
  className,
}: SectionIntroProps) {
  const rootClass = [styles.root, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} style={accentToStyle(accent)}>
      <span className={`${styles.badge} anim-title anim-delay-1`}>{badge}</span>
      <h2
        id={headingId}
        className={`${styles.title} anim-title anim-delay-2`}
      >
        {title}
      </h2>
      <div className={`${styles.description} anim-stagger anim-delay-3`}>
        {description}
      </div>
    </div>
  );
}
