import { Container, Section, SectionIntro } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const GRADUATION_IMG = "/images/applicants.webp";

const benefits = [
  { value: "Бесплатно", label: "Бюджетные места" },
  { value: "Общежитие", label: "Для иногородних" },
  { value: "Стипендия", label: "Для отличников" },
];

export function Applicants() {
  return (
    <Section
      id="applicants"
      aria-labelledby="applicants-heading"
      className="relative py-24 overflow-hidden"
    >
      <Container>
        <div className="absolute inset-0">
          <Image
            src={GRADUATION_IMG}
            alt="Выпускники"
            className="w-full h-full"
            quality={100}
            width={200}
            height={200}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#3D1518]/95 to-[#7B2D26]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionIntro
            variant="hero"
            headingId="applicants-heading"
            badge="Приём 2026/2027"
            title="Начни свой путь к успешной карьере"
            description="Подай заявку на поступление в Псковский кооперативный техникум. Мы поможем тебе получить востребованную профессию и построить успешное будущее."
          />
          <div className="flex justify-center gap-4 max-[600px]:flex-col w-full">
            <button
              type="button"
              popoverTarget="application-dialog"
              popoverTargetAction="show"
              className="group flex cursor-pointer justify-center items-center w-full gap-2 px-8 py-4 bg-[#FFF8F0] text-[#3D1518] font-bold rounded-xl transition-all shadow-xl text-base"
            >
              Подать заявку
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+78112753882"
              className="flex items-center gap-2 justify-center w-full px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base anim-stagger anim-delay-5"
            >
              Позвонить нам
            </a>
          </div>

          <ul className="grid sm:grid-cols-3 gap-6 mt-16">
            {benefits.map((item, index) => (
              <li
                key={item.label}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 anim-stagger ${index === 0
                    ? "anim-delay-6"
                    : index === 1
                      ? "anim-delay-7"
                      : "anim-delay-8"
                  }`}
              >
                <h3 className="text-xl font-bold text-[#D4A574]">
                  {item.value}
                </h3>
                <span className="text-sm text-white/60 mt-1">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
