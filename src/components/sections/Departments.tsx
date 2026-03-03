import { Container, Section } from "@/components/ui";
import {
  Scale,
  FileText,
  ShieldCheck,
  Briefcase,
  Calculator,
  Monitor,
  Utensils,
  BookOpen,
} from "lucide-react";

const departments = [
  {
    icon: Scale,
    title: "Право и судебное администрирование",
    code: "40.02.03",
    duration: "2 г. 10 мес.",
    color: "from-[#7B2D26] to-[#A03030]",
  },
  {
    icon: ShieldCheck,
    title: "Правоохранительная деятельность",
    code: "40.02.02",
    duration: "3 г. 6 мес.",
    color: "from-[#8B4513] to-[#A0522D]",
  },
  {
    icon: FileText,
    title: "Документационное обеспечение управления",
    code: "46.02.01",
    duration: "2 г. 10 мес.",
    color: "from-[#D4A574] to-[#B8860B]",
  },
  {
    icon: Calculator,
    title: "Экономика и бухгалтерский учёт",
    code: "38.02.01",
    duration: "2 г. 10 мес.",
    color: "from-[#DC2626] to-[#B91C1C]",
  },
  {
    icon: Briefcase,
    title: "Коммерция",
    code: "38.02.04",
    duration: "2 г. 10 мес.",
    color: "from-[#9B2C2C] to-[#742A2A]",
  },
  {
    icon: Monitor,
    title: "Информационные системы и программирование",
    code: "09.02.07",
    duration: "3 г. 10 мес.",
    color: "from-[#7B2D26] to-[#DC2626]",
  },
  {
    icon: Utensils,
    title: "Поварское и кондитерское дело",
    code: "43.02.15",
    duration: "3 г. 10 мес.",
    color: "from-[#C05621] to-[#9C4221]",
  },
  {
    icon: BookOpen,
    title: "Банковское дело",
    code: "38.02.07",
    duration: "2 г. 10 мес.",
    color: "from-[#6B4C3B] to-[#8B4513]",
  },
];

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

          <ul
            className="grid sm:grid-cols-2 lg:grid-cols-4 min-[1024px]:max-[1300px]:grid-cols-6! gap-6"
            role="list"
            aria-label="Список специальностей"
          >
            {departments.map((dept, index) => (
              <li
                key={dept.code}
                className={`group relative flex flex-col gap-5 bg-white rounded-2xl border border-[#E8D5C4] p-6 hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden anim-stagger ${
                  index === 0
                    ? "anim-delay-4"
                    : index === 1
                      ? "anim-delay-5"
                      : index === 2
                        ? "anim-delay-6"
                        : index === 3
                          ? "anim-delay-7"
                          : index === 4
                            ? "anim-delay-8"
                            : "anim-delay-9"
                } ${
                  index >= departments.length - 2
                    ? "min-[1024px]:max-[1300px]:col-span-3!"
                    : "min-[1024px]:max-[1300px]:col-span-2!"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${dept.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <dept.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-bold text-[#3D1518] leading-snug group-hover:text-[#DC2626] transition-colors">
                  {dept.title}
                </h3>

                <div className="flex items-center gap-3 text-xs mt-auto">
                  <span className="px-2.5 py-1 bg-[#FFF8F0] text-[#6B4C3B] rounded-md font-medium border border-[#E8D5C4]">
                    {dept.code}
                  </span>
                  <span className="text-[#6B4C3B]">{dept.duration}</span>
                </div>
              </li>
            ))}
          </ul>

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
