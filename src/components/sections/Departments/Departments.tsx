import { Container, CustomLink, Section, SectionIntro, Skeleton, SkeletonLine } from "@/components/ui";
import styles from "./Departments.module.css";
import { SpecialtiesList } from "@/components/lists/SpecialtiesList/SpecialtiesList";

export function Departments() {
  return (
    <Section
      id="departments"
      aria-labelledby="departments-heading"
      className={styles.departments}
      fallback={
        <Container>
          <div className={styles.inner}>
            <div style={{ maxWidth: "48rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", gap: "0.75rem", margin: "0 auto" }}>
              <SkeletonLine width="7rem" />
              <SkeletonLine width="18rem" height="1.6rem" />
              <SkeletonLine width="28rem" />
            </div>
            <div className={styles.skeletonGrid}>
              {Array.from({ length: 8 }).map((_, idx) => (
                <Skeleton key={idx} height="9.25rem" />
              ))}
            </div>
          </div>
        </Container>
      }
    >
      <Container>
        <div className={styles.inner}>
          <SectionIntro
            variant="amber"
            headingId="departments-heading"
            badge="Образование"
            title={
              <>
                Отделения и{"\u00a0"}специальности
              </>
            }
            description="Выберите направление, которое станет основой вашей успешной карьеры"
          />
          <SpecialtiesList />
          <div className={`${styles.linkWrap} anim-stagger anim-delay-9`}>
            <CustomLink href="/applicants/specialties" variant="outline">
              Все специальности
            </CustomLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
