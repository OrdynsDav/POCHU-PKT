import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import Image from "next/image";
import pageStyles from "./page.module.css";

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
    <section className={styles.page}>
      <Container>
        <PageTitle title="Расписание занятий" />
        <div className={pageStyles.presentation}>
          <div className={pageStyles.hero}>
            <div className={pageStyles.heroText}>
              <p className={pageStyles.kicker}>Новое мобильное приложение</p>
              <h2 className={pageStyles.title}>Расписание и&nbsp;оценки всегда под рукой</h2>
              <p className={pageStyles.lead}>
                Смотрите пары на&nbsp;сегодня и&nbsp;завтра, быстро находите нужную группу и
                не&nbsp;пропускайте изменения благодаря уведомлениям.
              </p>

              <ul className={pageStyles.features} aria-label="Преимущества приложения">
                <li className={pageStyles.feature}>
                  <span className={pageStyles.featureTitle}>Быстрый доступ</span>
                  <span className={pageStyles.featureDesc}>
                    Открывайте расписание в&nbsp;один тап&nbsp;&mdash; без лишних переходов.
                  </span>
                </li>
                <li className={pageStyles.feature}>
                  <span className={pageStyles.featureTitle}>Актуальные изменения</span>
                  <span className={pageStyles.featureDesc}>
                    Уведомления помогают не&nbsp;пропустить переносы и&nbsp;замены.
                  </span>
                </li>
                <li className={pageStyles.feature}>
                  <span className={pageStyles.featureTitle}>Удобно на&nbsp;телефоне</span>
                  <span className={pageStyles.featureDesc}>
                    Интерфейс адаптирован под маленькие экраны и&nbsp;быстрые сценарии.
                  </span>
                </li>
              </ul>
            </div>

            <div className={pageStyles.phone} aria-label="Скриншот приложения">
              <div className={pageStyles.phoneFrame}>
                <Image
                  src="/images/gradebook/gradebook-shedule-light.jpg"
                  alt="Скриншот: расписание занятий"
                  fill
                  sizes="(max-width: 768px) 80vw, 420px"
                  className={pageStyles.phoneImage}
                  priority
                />
              </div>
            </div>
          </div>

          <div className={pageStyles.galleryBlock}>
            <h3 className={pageStyles.galleryTitle}>Как выглядит приложение</h3>
            <p className={pageStyles.galleryLead}>
              Несколько экранов, чтобы быстро понять функциональность и&nbsp;навигацию.
            </p>
            <div className={pageStyles.gallery} role="list">
              {screenshots.map((img) => (
                <figure key={img.src} className={pageStyles.card} role="listitem">
                  <div className={pageStyles.cardMedia}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 70vw, (max-width: 1200px) 33vw, 280px"
                      className={pageStyles.cardImage}
                    />
                  </div>
                  <figcaption className={pageStyles.caption}>{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
