import { SpecialtiesGrid } from "@/app/applicants/specialties/_components/SpecialtiesGrid";
import { Container, CustomLink, Section, SectionIntro } from "@/components/ui";
import styles from "./Departments.module.css";

export function Departments() {
  return (
    <Section
      id="departments"
      aria-labelledby="departments-heading"
      className={styles.departments}
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
          <SpecialtiesGrid />
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
