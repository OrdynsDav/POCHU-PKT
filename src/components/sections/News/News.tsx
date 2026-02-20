import { Container, Section } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { NewsCard } from "./NewsCard";

const news = [
  {
    title: "В гости в техникум!",
    date: "13 февраля 2026",
    excerpt:
      "С профориентационным визитом в техникум приезжали учащиеся 8 класса МОУ «Сланцевская СОШ №2» (Ленинградская область).",
    image:
      "https://pskovpkt.ru/upload/resize_cache/iblock/e62/600_400_2/c3nup5760s6lsvgt5delnzn2nrkk2x88.jpg",
    link: "https://pskovpkt.ru/news/for-students/v-gosti-v-tekhnikum/",
  },
  {
    title: "Д2. Техник-криминалист. 2026",
    date: "12 февраля 2026",
    excerpt:
      "Продолжаются конкурсные испытания Чемпионата «Профессионалы» на площадке компетенции «Техник-криминалист».",
    image:
      "https://pskovpkt.ru/upload/resize_cache/iblock/880/720_463_2/t1frz853gk0ktayx061pih5g4u6d2qf2.jpg",
    link: "https://pskovpkt.ru/news/for-students/d2-tekhnik-kriminalist-2026/",
  },
  {
    title: "Документационное обеспечение управления",
    date: "12 февраля 2026",
    excerpt:
      "Продолжаются испытательные соревнования на чемпионатной площадке по компетенции «Документационное обеспечение управления и архивоведение».",
    image:
      "https://pskovpkt.ru/upload/resize_cache/iblock/478/720_463_2/2la1vobo7krhy4pc5ennuu0liitu7zxp.jpg",
    link: "https://pskovpkt.ru/news/for-students/d2-dokumentatsionnoe-obespechenie-upravleniya-i-arkhivovedenie-2026/",
  },
];

export function News() {
  return (
    <Section
      id="news"
      aria-labelledby="news-heading"
      className="py-24 bg-[#FFF8F0]"
    >
      <Container>
        <div className="max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-red-100 text-[#7B2D26] text-sm font-semibold rounded-full mb-4 anim-title anim-delay-1">
              Актуальное
            </span>
            <h2
              id="news-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3D1518] mb-4 anim-title anim-delay-2"
            >
              Последние новости
            </h2>
            <p className="text-lg text-[#6B4C3B] max-w-2xl mx-auto anim-stagger anim-delay-3">
              Узнайте о последних событиях и мероприятиях техникума
            </p>
          </div>

          <ul
            className="grid gap-8 grid-cols-2 min-[850px]:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
            role="list"
            aria-label="Список новостей"
          >
            {news.map(({ title, link, image, date, excerpt }, index) => (
              <li
                key={title}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-900/5 border border-[#E8D5C4] hover:-translate-y-1 transition-all duration-300 anim-stagger ${
                  index === 0
                    ? "anim-delay-4"
                    : index === 1
                      ? "anim-delay-5"
                      : "anim-delay-6"
                } max-[850px]:col-span-2${index === news.length - 1 ? " min-[850px]:col-span-2 lg:col-span-1" : ""}`}
              >
                <NewsCard
                  title={title}
                  link={link}
                  image={image}
                  date={date}
                  excerpt={excerpt}
                />
              </li>
            ))}
          </ul>

          <div className="text-center mt-12 anim-stagger anim-delay-7">
            <a
              href="https://pskovpkt.ru/life/news/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7B2D26] font-semibold hover:gap-3 transition-all"
            >
              Все новости <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
