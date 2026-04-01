import Link from "next/link";
import styles from "./SpecialtiesGrid.module.css";
import { SPECIALTIES, type SpecialtyPalette } from "./specialties";
import { officialEducationSiteUrl } from "@/config/site";

const ICON_WRAP: Record<SpecialtyPalette, string> = {
  trade: styles.iconWrap_trade,
  bank: styles.iconWrap_bank,
  cook: styles.iconWrap_cook,
  lawEnforcement: styles.iconWrap_lawEnforcement,
  software: styles.iconWrap_software,
  insurance: styles.iconWrap_insurance,
  economy: styles.iconWrap_economy,
  jurisprudence: styles.iconWrap_jurisprudence,
};

const ANIM_DELAYS = [
  "anim-delay-4",
  "anim-delay-5",
  "anim-delay-6",
  "anim-delay-7",
  "anim-delay-8",
  "anim-delay-9",
  "anim-delay-9",
  "anim-delay-9",
] as const;


export function SpecialtiesGrid() {
  const total = SPECIALTIES.length;

  return (
    <ul className={styles.list} role="list" aria-label="Список специальностей">
      {SPECIALTIES.map((dept, index) => {
        const Icon = dept.icon;
        const spanClass =
          index >= total - 2 ? styles.cardSpan3 : styles.cardSpan2;
        const delayClass = ANIM_DELAYS[index] ?? "anim-delay-4";

        return (
          <li key={dept.id} className={spanClass}>
            <div className={`${styles.cardEnter} anim-stagger ${delayClass}`}>
              <Link
                href={'/'}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.topBar} aria-hidden />
                <div className={`${styles.iconWrap} ${ICON_WRAP[dept.palette]}`}>
                  <Icon className={styles.icon} aria-hidden />
                </div>
                <h3 className={styles.title}>{dept.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.code}>{dept.code}</span>
                  <span className={styles.duration}>{dept.duration}</span>
                </div>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
