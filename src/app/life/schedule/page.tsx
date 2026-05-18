import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { BellRing, Smartphone, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./page.module.css";
import { ScheduleBackground } from "./ScheduleBackground";
import { ScheduleAppGallery, type ScheduleGallerySlide } from "./ScheduleAppGallery";

const heroFeatures: readonly {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
    {
      icon: Zap,
      title: "Быстрый доступ",
      description: "Открывайте расписание в один тап — без лишних переходов.",
    },
    {
      icon: BellRing,
      title: "Актуальные изменения",
      description: "Уведомления помогают не пропустить переносы и замены.",
    },
    {
      icon: Smartphone,
      title: "Удобно на телефоне",
      description: "Интерфейс адаптирован под маленькие экраны и быстрые сценарии.",
    },
  ];

const appScreens: readonly ScheduleGallerySlide[] = [
  {
    src: "/images/gradebook/gradebook-login-light.jpg",
    alt: "Экран входа в приложение",
    tag: "Старт",
    title: "Вход в аккаунт",
    description: "Авторизация студента за несколько секунд",
  },
  {
    src: "/images/gradebook/gradebook-dashboard-light.jpg",
    alt: "Главный экран с быстрым доступом к разделам",
    tag: "Главная",
    title: "Быстрые разделы",
    description: "Расписание, оценки и уведомления с одного экрана",
  },
  {
    src: "/images/gradebook/gradebook-shedule-light.jpg",
    alt: "Расписание занятий на день",
    tag: "Расписание",
    title: "Пары на день",
    description: "Сегодня и завтра — без лишних переходов",
  },
  {
    src: "/images/gradebook/gradebook-notifications-light.jpg",
    alt: "Уведомления об изменениях и событиях",
    tag: "Уведомления",
    title: "Изменения в паре",
    description: "Переносы, замены и важные объявления",
  },
  {
    src: "/images/gradebook/gradebook-grades-light.jpg",
    alt: "Раздел с оценками и успеваемостью",
    tag: "Успеваемость",
    title: "Сводка оценок",
    description: "Общая картина по предметам и семестру",
  },
  {
    src: "/images/gradebook/gradebook-grades-item-light.jpg",
    alt: "Детальная карточка предмета и оценок",
    tag: "Предмет",
    title: "Детали по дисциплине",
    description: "Оценки, работы и комментарии преподавателя",
  },
  {
    src: "/images/gradebook/gradebook-profile-light.jpg",
    alt: "Профиль пользователя",
    tag: "Профиль",
    title: "Личные данные",
    description: "Группа, контакты и настройки аккаунта",
  },
  {
    src: "/images/gradebook/gradebook-config-light.jpg",
    alt: "Настройки приложения",
    tag: "Настройки",
    title: "Под себя",
    description: "Тема, уведомления и параметры отображения",
  },
  {
    src: "/images/gradebook/gradebook-help-light.jpg",
    alt: "Раздел помощи и подсказок",
    tag: "Помощь",
    title: "Подсказки",
    description: "Ответы на частые вопросы и инструкции",
  },
];

export default function LifeSchedulePage() {
  return (
    <div className="page">
      <PageTitle title="Расписание занятий" />
      <div className={styles.presentation}>
        <section className={styles.hero}>
          <Container>
            
            <div className={styles.heroWrapper}>
              <div className={styles.heroText}>
                <p className={styles.kicker}>Новое мобильное приложение</p>
                <h2 className={styles.title}>Расписание и&nbsp;оценки всегда под рукой</h2>
                <p className={styles.lead}>
                  Смотрите пары на&nbsp;сегодня и&nbsp;завтра, быстро находите нужную группу и
                  не&nbsp;пропускайте изменения благодаря уведомлениям.
                </p>
                <ul className={styles.features} aria-label="Преимущества приложения">
                  {heroFeatures.map(({ icon: Icon, title, description }) => (
                    <li key={title} className={styles.feature}>
                      <span className={styles.featureIcon} aria-hidden="true">
                        <Icon className={styles.featureIconSvg} strokeWidth={2} />
                      </span>
                      <div className={styles.featureContent}>
                        <span className={styles.featureTitle}>{title}</span>
                        <span className={styles.featureDesc}>{description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <ScheduleBackground />
            </div>
          </Container>
        </section>
        <section className="gallery">
          <Container>
            <div className={styles.galleryBlock}>
              <h3 className={styles.galleryTitle}>Как выглядит приложение</h3>
              <p className={styles.galleryLead}>
                Девять ключевых экранов&nbsp;&mdash; от&nbsp;входа до&nbsp;расписания и&nbsp;оценок.
              </p>
              <ScheduleAppGallery
                slides={appScreens}
                galleryTitle="Скриншоты мобильного приложения"
              />
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
