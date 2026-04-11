import Link from "next/link";
import { SPECIALTIES } from "./specialties";
import styles from "./SpecialtiesList.module.css";

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


export function SpecialtiesList() {

  return (
    <ul className={styles.list} role="list" aria-label="Список специальностей">
      {SPECIALTIES.map((dept, index) => {
        const Icon = dept.icon;
        const spanClass = index >= SPECIALTIES.length - 2 ? styles.cardSpan3 : styles.cardSpan2;
        const delayClass = ANIM_DELAYS[index] ?? "anim-delay-4";

        return (
          <li key={dept.id} className={spanClass}>
            <Link
              href={'/'}
              className={`${styles.card} anim-stagger ${delayClass}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.topBar} aria-hidden />
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} aria-hidden />
              </div>
              <h3 className={styles.title}>{dept.title}</h3>
              <div className={styles.meta}>
                <span className={styles.code}>{dept.code}</span>
                <span className={styles.duration}>{dept.duration}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
