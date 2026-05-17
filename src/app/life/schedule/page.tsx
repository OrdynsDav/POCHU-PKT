import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import Image from "next/image";
import styles from "./page.module.css";
import { ScheduleAppGallery } from "./ScheduleAppGallery";

const screenshots = [
  {
    src: "/images/gradebook/gradebook-login-light.jpg",
    alt: "Экран входа в приложение",
  },
  {
    src: "/images/gradebook/gradebook-dashboard-light.jpg",
    alt: "Главный экран с быстрым доступом к разделам",
  },
  {
    src: "/images/gradebook/gradebook-shedule-light.jpg",
    alt: "Расписание занятий на день",
  },
  {
    src: "/images/gradebook/gradebook-notifications-light.jpg",
    alt: "Уведомления об изменениях и событиях",
  },
  {
    src: "/images/gradebook/gradebook-grades-light.jpg",
    alt: "Раздел с оценками и успеваемостью",
  },
  {
    src: "/images/gradebook/gradebook-grades-item-light.jpg",
    alt: "Детальная карточка предмета и оценок",
  },
  {
    src: "/images/gradebook/gradebook-profile-light.jpg",
    alt: "Профиль пользователя",
  },
  {
    src: "/images/gradebook/gradebook-config-light.jpg",
    alt: "Настройки приложения",
  },
  {
    src: "/images/gradebook/gradebook-help-light.jpg",
    alt: "Раздел помощи и подсказок",
  },
  {
    src: "/images/gradebook/gradebook-about-light.jpg",
    alt: "Информация о приложении",
  },
] as const;

export default function LifeSchedulePage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Расписание занятий" />
        <div className={styles.presentation}>
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <p className={styles.kicker}>Новое мобильное приложение</p>
              <h2 className={styles.title}>Расписание и&nbsp;оценки всегда под рукой</h2>
              <p className={styles.lead}>
                Смотрите пары на&nbsp;сегодня и&nbsp;завтра, быстро находите нужную группу и
                не&nbsp;пропускайте изменения благодаря уведомлениям.
              </p>

              <ul className={styles.features} aria-label="Преимущества приложения">
                <li className={styles.feature}>
                  <span className={styles.featureTitle}>Быстрый доступ</span>
                  <span className={styles.featureDesc}>
                    Открывайте расписание в&nbsp;один тап&nbsp;&mdash; без лишних переходов.
                  </span>
                </li>
                <li className={styles.feature}>
                  <span className={styles.featureTitle}>Актуальные изменения</span>
                  <span className={styles.featureDesc}>
                    Уведомления помогают не&nbsp;пропустить переносы и&nbsp;замены.
                  </span>
                </li>
                <li className={styles.feature}>
                  <span className={styles.featureTitle}>Удобно на&nbsp;телефоне</span>
                  <span className={styles.featureDesc}>
                    Интерфейс адаптирован под маленькие экраны и&nbsp;быстрые сценарии.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.phone} aria-label="Скриншот приложения">
              <div className={styles.phoneFrame}>
                <Image
                  src="/images/gradebook/gradebook-shedule-light.jpg"
                  alt="Скриншот: расписание занятий"
                  fill
                  sizes="(max-width: 768px) 80vw, 420px"
                  className={styles.phoneImage}
                  priority
                />
              </div>
            </div>
          </div>

          <div className={styles.galleryBlock}>
            <h3 className={styles.galleryTitle}>Как выглядит приложение</h3>
            <p className={styles.galleryLead}>
              Несколько экранов, чтобы быстро понять функциональность и&nbsp;навигацию.
            </p>
            <ScheduleAppGallery
              slides={screenshots}
              galleryTitle="Скриншоты мобильного приложения"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
