import { SpecialtiesGrid } from "@/app/applicants/specialties/_components/SpecialtiesGrid";
import { Container, Section } from "@/components/ui";

export function Departments() {
  return (
    <Section
      id="departments"
      aria-labelledby="departments-heading"
      className="py-24 bg-white"
    >
      <Container>
        <div className="max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#FDE8D0] text-[#8B4513] text-sm font-semibold rounded-full mb-4 anim-title anim-delay-1">
              Образование
            </span>
            <h2
              id="departments-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3D1518] mb-4 anim-title anim-delay-2"
            >
              Отделения и&nbsp;специальности
            </h2>
            <p className="text-lg text-[#6B4C3B] max-w-2xl mx-auto anim-stagger anim-delay-3">
              Выберите направление, которое станет основой вашей успешной
              карьеры
            </p>
          </div>
          <SpecialtiesGrid />
          <div className="text-center mt-12 anim-stagger anim-delay-9">
            <a
              href="https://pskovpkt.ru/departments/"
              target="_blank"
              rel="noopener noreferrer"
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
