import { SpecialtiesGrid } from "@/app/applicants/specialties/_components/SpecialtiesGrid";
import { Container, Section, SectionIntro } from "@/components/ui";

export function Departments() {
  return (
    <Section
      id="departments"
      aria-labelledby="departments-heading"
      className="py-24 bg-white"
    >
      <Container>
        <div className="max-w-7xl">
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
          <div className="text-center mt-12 anim-stagger anim-delay-9">
            <a
              href="/applicants/specialties"
              className="inline-flex items-center gap-2 px-6 py-3 text-[#7B2D26] font-semibold border-2 border-[#7B2D26] rounded-xl hover:bg-[#7B2D26] hover:text-white transition-all duration-300"
            >
              Все специальности
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
