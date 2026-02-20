import { Container, Section } from "@/components/ui";
import { BookOpen, Users, Award, Building2 } from "lucide-react";
import Image from "next/image";

const STUDENTS_IMG = "/images/students.webp";
const CLASSROOM_IMG = "/images/classroom.webp";

const features = [
  {
    icon: BookOpen,
    title: "Качественное образование",
    desc: "Программы обучения, соответствующие современным стандартам и требованиям рынка труда",
  },
  {
    icon: Users,
    title: "Опытные преподаватели",
    desc: "Квалифицированный педагогический состав с многолетним опытом работы",
  },
  {
    icon: Award,
    title: "Признанные дипломы",
    desc: "Выпускники успешно трудоустраиваются и продолжают обучение в вузах",
  },
  {
    icon: Building2,
    title: "Современная база",
    desc: "Оборудованные аудитории, компьютерные классы и библиотека",
  },
];

export function About() {
  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-[#FFF8F0]"
    >
      <Container>
        <div className="max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-100 text-[#7B2D26] text-sm font-semibold rounded-full mb-4 anim-title anim-delay-1">
              О нас
            </span>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3D1518] mb-4 anim-title anim-delay-2"
            >
              О техникуме
            </h2>
            <p className="text-lg text-[#6B4C3B] max-w-2xl mx-auto anim-stagger anim-delay-3">
              Псковский кооперативный техникум — одно из старейших учебных
              заведений Псковской области, готовящее специалистов с 1947 года
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="grid grid-cols-2 gap-4 anim-stagger anim-delay-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/10 anim-stagger anim-delay-5">
                  <Image
                    src={STUDENTS_IMG}
                    alt="Студенты"
                    className="w-full h-48 md:h-56 hover:scale-105 transition-transform duration-500"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="rounded-2xl bg-linear-to-br from-[#7B2D26] to-[#DC2626] p-6 text-white anim-stagger anim-delay-6">
                  <div className="text-4xl font-extrabold">75+</div>
                  <div className="text-white/80 text-sm mt-1">
                    лет успешной работы
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-linear-to-br from-[#D4A574] to-[#B8860B] p-6 text-white anim-stagger anim-delay-6">
                  <div className="text-4xl font-extrabold">1200+</div>
                  <div className="text-white/80 text-sm mt-1">
                    студентов обучаются
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/10 anim-stagger anim-delay-7">
                  <Image
                    src={CLASSROOM_IMG}
                    alt="Аудитория"
                    className="w-full h-48 md:h-56 hover:scale-105 transition-transform duration-500"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 anim-stagger anim-delay-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#3D1518] mb-2 anim-stagger anim-delay-5">
                Почему выбирают нас?
              </h3>
              <p className="text-[#6B4C3B] leading-relaxed mb-6 anim-stagger anim-delay-6">
                Наш техникум сочетает многолетние традиции с современными
                подходами к образованию. Мы готовим востребованных специалистов
                для различных отраслей экономики.
              </p>
              <div className="grid gap-4">
                {features.map((f, index) => (
                  <div
                    key={f.title}
                    className={`group flex gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-lg hover:shadow-red-900/5 border border-[#E8D5C4] hover:border-[#DC2626]/30 transition-all duration-300 anim-stagger ${
                      index === 0
                        ? "anim-delay-6"
                        : index === 1
                          ? "anim-delay-7"
                          : index === 2
                            ? "anim-delay-8"
                            : "anim-delay-9"
                    }`}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-linear-to-br group-hover:from-[#7B2D26] group-hover:to-[#DC2626] transition-all duration-300">
                      <f.icon className="w-6 h-6 text-[#7B2D26] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3D1518] mb-1">
                        {f.title}
                      </h4>
                      <p className="text-sm text-[#6B4C3B]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
