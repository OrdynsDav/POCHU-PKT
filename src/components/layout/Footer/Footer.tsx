import { Logo, Container } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.css";

interface QuickLink {
  label: string;
  href: string;
  target?: "blank" | "internal";
}

const quickLinks: QuickLink[] = [
  { label: "О техникуме", href: "/about/" },
  { label: "Отделения", href: "/departments/" },
  { label: "Абитуриентам", href: "/applicants/" },
  { label: "Студентам", href: "/students/" },
  { label: "Преподавателям", href: "/teachers/" },
  { label: "Расписание", href: "/schedule/" },
];

const resources: QuickLink[] = [
  { label: "Новости", href: "/life/news/" },
  { label: "Фотогалерея", href: "/life/gallery/" },
  { label: "Видеогалерея", href: "/life/videogallery/" },
  { label: "Мероприятия", href: "/life/events/" },
  { label: "Moodle", href: "http://89.23.6.107/", target: "blank" },
  { label: "Сферум", href: "https://sferum.ru/", target: "blank" },
];

export function Footer() {
  const { logo, contacts, social } = siteConfig;

  return (
    <footer
      id="contacts"
      role="contentinfo"
      aria-label="Контактная информация и навигация"
      className={styles.footer}
    >
      <Container>
        <div className={styles.inner}>
          <div className={styles.grid}>

            {/* Бренд */}
            <div className={styles.brand}>
              <div className={styles.brandHead}>
                <Logo
                  shortName={logo.shortName}
                  href={logo.href}
                  className={styles.brandLogo}
                />
                <div className={styles.brandName}>
                  <div>Псковский</div>
                  <div>Кооперативный</div>
                  <div>Техникум</div>
                </div>
              </div>
              <p className={styles.brandDesc}>
                Профессиональное образовательное частное учреждение &laquo;Псковский кооперативный техникум&raquo;
              </p>

              <div className={styles.socialList}>
                <a
                  href={social.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Наша страница ВКонтакте (открывается в новой вкладке)"
                  className={styles.socialLink}
                >
                  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.644v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.167-3.608 2.167-3.608.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
                  </svg>
                  ВКонтакте
                </a>
                <a
                  href={social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Наш Telegram канал (открывается в новой вкладке)"
                  className={styles.socialLink}
                >
                  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>
              </div>
            </div>

            {/* Разделы */}
            <nav aria-label="Быстрые ссылки">
              <h4 id="quick-links-heading" className={styles.navHeading}>
                Разделы
              </h4>
              <ul className={styles.navList} aria-labelledby="quick-links-heading">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      rel="noopener noreferrer"
                      className={styles.navLink}
                    >
                      {link.label}
                      <ExternalLink className={styles.navLinkIcon} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Ресурсы */}
            <nav aria-label="Полезные ресурсы">
              <h4 id="resources-heading" className={styles.navHeading}>
                Ресурсы
              </h4>
              <ul className={styles.navList} aria-labelledby="resources-heading">
                {resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.target === "blank" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={styles.navLink}
                    >
                      {link.label}
                      <ExternalLink className={styles.navLinkIcon} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Контакты */}
            <address className={styles.address}>
              <h4 id="contacts-heading" className={styles.navHeading}>
                Контакты
              </h4>
              <div className={styles.contactList} aria-labelledby="contacts-heading">
                <a
                  className={styles.contactItem}
                  href="https://yandex.ru/maps/25/pskov/house/ulitsa_kalinina_13/ZkEYdQRkTkUBQFttfXRxeXhqYw==/?ll=28.334671%2C57.808518&z=19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Адрес: ${contacts.address}`}
                >
                  <MapPin className={styles.contactIcon} aria-hidden="true" />
                  <span className={styles.contactText}>{contacts.address}</span>
                </a>
                <a
                  href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                  className={styles.contactItem}
                  aria-label={`Позвонить: ${contacts.phone}`}
                >
                  <Phone className={styles.contactIcon} aria-hidden="true" />
                  <span className={styles.contactText}>{contacts.phone}</span>
                </a>
                <a
                  href={`mailto:${contacts.email}`}
                  className={styles.contactItem}
                  aria-label={`Написать на почту: ${contacts.email}`}
                >
                  <Mail className={styles.contactIcon} aria-hidden="true" />
                  <span className={styles.contactText}>{contacts.email}</span>
                </a>
              </div>
            </address>

          </div>
        </div>

        {/* Нижняя полоса */}
        <div className={styles.bottom}>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy;&nbsp;2026&nbsp;ПОЧУ &laquo;Псковский кооперативный техникум&raquo;. Все права защищены.
            </p>
            <Link
              className={styles.privacyLink}
              href="https://pskovpkt.ru/about/docs/Политика%20в%20отношении%20обработки%20персональных%20данных%20в%20ПОЧУ%20ПКТ.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика в&nbsp;отношении обработки персональных данных
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
