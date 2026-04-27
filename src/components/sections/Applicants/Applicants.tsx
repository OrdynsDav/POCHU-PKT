import {
  APPLICATION_DIALOG_ID,
  Button,
  Container,
  CustomLink,
  Section,
  SectionIntro,
  Skeleton,
  SkeletonLine,
} from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./Applicants.module.css";

const GRADUATION_IMG = "/images/applicants.webp";

const benefits = [
  { value: "Бесплатно", label: "Бюджетные места" },
  { value: "Общежитие", label: "Для иногородних" },
  { value: "Стипендия", label: "Для отличников" },
];

const benefitDelayClass = (index: number) =>
  index === 0 ? "anim-delay-6" : index === 1 ? "anim-delay-7" : "anim-delay-8";

export function Applicants() {
  return (
    <Section
      id="applicants"
      aria-labelledby="applicants-heading"
      className={styles.applicants}
      fallbackClassName={styles.skeletonSection}
      fallback={
          <Container>
            <div className={styles.content}>
              <div style={{ maxWidth: "48rem", width: "100%", display: "flex", flexDirection: "column", gap: "0.75rem", margin: "0 auto 2.5rem", alignItems: "center" }}>
                <SkeletonLine width="10rem" className={styles.skeletonBadge} backgroundColor={`var(--skeleton-line-bc)`}/>
                <SkeletonLine width="26rem" height="1.6rem" className={styles.skeletonTitle} backgroundColor={`var(--skeleton-line-bc)`}/>
                <div className={styles.skeletonDescriptionWrapper}>
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <Skeleton key={idx} height="1.25rem" width="100%" backgroundColor={`var(--skeleton-line-bc)`}/>
                  ))}
                </div>
              </div>
              <div className={styles.skeletonActions}>
                <Skeleton height="3rem" width="100%" backgroundColor={`var(--skeleton-line-bc)`}/>
                <Skeleton height="3rem" width="100%" backgroundColor={`var(--skeleton-line-bc)`}/>
              </div>
              <div className={styles.skeletonBenefits}>
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Skeleton key={idx} height="5.5rem" backgroundColor={`var(--skeleton-line-bc)`}/>
                ))}
              </div>
            </div>
          </Container>
      }
    >
      <Container>
        <div className={styles.mediaLayer}>
          <Image
            src={GRADUATION_IMG}
            alt="Выпускники"
            className={styles.mediaImage}
            quality={90}
            fill
            sizes="100vw"
            placeholder="empty"
          />
          <div className={styles.overlay} />
        </div>

        <div className={styles.content}>
          <SectionIntro
            variant="hero"
            headingId="applicants-heading"
            badge="Приём 2026/2027"
            title="Начни свой путь к успешной карьере"
            description="Подай заявку на поступление в Псковский кооперативный техникум. Мы поможем тебе получить востребованную профессию и построить успешное будущее."
          />
          <div className={styles.actions}>
            <Button
              type="button"
              variant="light"
              fullWidth
              popoverTarget={APPLICATION_DIALOG_ID}
              popoverTargetAction="show"
            >
              Подать заявку
              <ArrowRight aria-hidden />
            </Button>
            <CustomLink
              href="tel:+78112753882"
              variant="secondary"
              className={styles.applicantsLink}
            >
              Позвонить нам
            </CustomLink>
          </div>

          <ul className={styles.benefitsList}>
            {benefits.map((item, index) => (
              <li
                key={item.label}
                className={`${styles.benefitCard} anim-stagger ${benefitDelayClass(index)}`}
              >
                <h3 className={styles.benefitValue}>{item.value}</h3>
                <span className={styles.benefitLabel}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
