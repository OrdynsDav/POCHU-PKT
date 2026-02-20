import { Container, Section } from "@/components/ui";
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

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6 border border-white/20 anim-title anim-delay-1">
            Приём 2026/2027
          </span>
          <h2
            id="applicants-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 anim-title anim-delay-2"
          >
            Начни свой путь к успешной карьере
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed anim-stagger anim-delay-3">
            Подай заявку на поступление в Псковский кооперативный техникум. Мы
            поможем тебе получить востребованную профессию и построить успешное
            будущее.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-[600px]:flex-col max-[600px]:max-w-75">
            <a
              href="https://pskovpkt.ru/applicants/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#FFF8F0] text-[#3D1518] font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl text-base anim-stagger anim-delay-4"
            >
              Подать заявку
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+78112753882"
              className="inline-flex items-center gap-2 justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base anim-stagger anim-delay-5"
            >
              Позвонить нам
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            {benefits.map((item, index) => (
              <div
                key={item.label}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 anim-stagger ${
                  index === 0
                    ? "anim-delay-6"
                    : index === 1
                      ? "anim-delay-7"
                      : "anim-delay-8"
                }`}
              >
                <div className="text-xl font-bold text-[#D4A574]">
                  {item.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
