import { Container, Section, SectionIntro } from "@/components/ui";
import {
  BookOpen,
  Users,
  Award,
  Building2,
  GraduationCap,
  Star,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./About.module.css";

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
] as const;


const stats: Array<{
  icon: LucideIcon;
  value: string;
  label: string;
  sublabel: string;
}> = [
    {
      icon: Clock,
      value: "80+",
      label: "лет успешной работы",
      sublabel: "с 1945 года",
    },
    {
      icon: Users,
      value: "1 200+",
      label: "студентов обучаются",
      sublabel: "ежегодно",
    },
    {
      icon: GraduationCap,
      value: "95%",
      label: "трудоустройство",
      sublabel: "выпускников",
    },
    {
      icon: Star,
      value: "8",
      label: "специальностей",
      sublabel: "на выбор",
    },
  ];

const featureAnimClass = [
  "anim-delay-6",
  "anim-delay-7",
  "anim-delay-8",
  "anim-delay-9",
] as const;

export function About() {
  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      className={styles.about}
    >
      <Container>
        <div className={styles.aboutWrapper}>
          <SectionIntro
            variant="burgundy"
            headingId="about-heading"
            badge="О нас"
            title="О техникуме"
            description={
              <>
                Псковский кооперативный техникум{"\u00a0"}—{"\u00a0"}одно из{"\u00a0"}
                старейших учебных заведений Псковской области, готовящее
                специалистов с{"\u00a0"}1945 года
              </>
            }
          />
          <div className={`${styles.aboutInner} anim-stagger anim-delay-4`}>
            <div className={`${styles.column} anim-stagger anim-delay-4`}>
              <ul className={styles.aboutStats}>
                {stats.map((stat) => (
                  <li key={stat.label} className={styles.aboutStatsItem}>
                    <article className={styles.statCard}>
                      <div
                        className={styles.statGradient}
                        aria-hidden
                      />
                      <div className={styles.statInner}>
                        <div
                          className={styles.statIconWrap}
                        >
                          <stat.icon
                            className={styles.statIcon}
                            aria-hidden
                          />
                        </div>
                        <div className={styles.statContent}>
                          <p className={styles.statValue}>{stat.value}</p>
                          <p className={styles.statLabel}>{stat.label}</p>
                          <p className={styles.statSublabel}>{stat.sublabel}</p>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>

              <blockquote className={styles.missionQuote}>
                <span className={styles.missionQuoteMark} aria-hidden>
                  &ldquo;
                </span>
                <p className={styles.missionQuoteText}>
                  Наша задача&nbsp;&mdash; дать каждому студенту не&nbsp;только профессию, но&nbsp;и&nbsp;уверенность в&nbsp;своём будущем.
                </p>
                <span className={styles.missionQuoteAttribution}>
                  &mdash;&nbsp;Псковский Кооперативный техникум
                </span>
              </blockquote>

            </div>
            <div className={`${styles.column} anim-stagger anim-delay-4`}>
              <h3
                className={`${styles.sideTitle} anim-stagger anim-delay-5`}
              >
                Почему выбирают нас?
              </h3>
              <p
                className={`${styles.sideLead} anim-stagger anim-delay-6`}
              >
                Наш техникум сочетает многолетние традиции с&nbsp;современными
                подходами к&nbsp;образованию. Мы&nbsp;готовим востребованных
                специалистов для различных отраслей экономики.
              </p>
              <ul className={styles.featuresList}>
                {features.map((f, index) => (
                  <li
                    key={f.title}
                    className={`${styles.featureItem} anim-stagger ${featureAnimClass[index] ?? "anim-delay-9"}`}
                  >
                    <div className={styles.featureIconWrap}>
                      <f.icon className={styles.featureIcon} aria-hidden />
                    </div>
                    <div className={styles.featureBody}>
                      <h4 className={styles.featureTitle}>{f.title}</h4>
                      <p className={styles.featureDesc}>{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}