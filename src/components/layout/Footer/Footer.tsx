import { Logo, Container } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "О техникуме", href: "https://pskovpkt.ru/about/" },
  { label: "Отделения", href: "https://pskovpkt.ru/departments/" },
  { label: "Абитуриентам", href: "https://pskovpkt.ru/applicants/" },
  { label: "Студентам", href: "https://pskovpkt.ru/students/" },
  { label: "Преподавателям", href: "https://pskovpkt.ru/teachers/" },
  { label: "Расписание", href: "https://pskovpkt.ru/schedule/" },
];

const resources = [
  { label: "Новости", href: "https://pskovpkt.ru/life/news/" },
  { label: "Фотогалерея", href: "https://pskovpkt.ru/life/gallery/" },
  { label: "Видеогалерея", href: "https://pskovpkt.ru/life/videogallery/" },
  { label: "Мероприятия", href: "https://pskovpkt.ru/life/events/" },
  { label: "Moodle", href: "http://89.23.6.107/" },
  { label: "Сферум", href: "https://sferum.ru/" },
];

export function Footer() {
  const { logo, contacts, social } = siteConfig;

  return (
    <footer
      id="contacts"
      role="contentinfo"
      aria-label="Контактная информация и навигация"
      className="bg-[#3D1518] text-white scroll-mt-28"
    >
      <Container>
        <div className="max-w-7xl mx-auto py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Logo
                  shortName={logo.shortName}
                  href={logo.href}
                  className="min-w-15 h-15"
                />
                <div>
                  <div className="font-bold text-sm leading-tight">
                    Псковский
                  </div>
                  <div className="font-bold text-sm leading-tight">
                    Кооперативный Техникум
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Профессиональное образовательное частное учреждение &laquo;Псковский кооперативный техникум&raquo;
              </p>
              {/* Social Links */}
              <div className="flex flex-col gap-3 max-w-45">
                <a
                  href={social.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Наша страница ВКонтакте (открывается в новой вкладке)"
                  className="flex items-center gap-2 px-4 py-2 w-full bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm border border-white/5"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.644v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.167-3.608 2.167-3.608.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z" />
                  </svg>
                  ВКонтакте
                </a>
                <a
                  href={social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Наш Telegram канал (открывается в новой вкладке)"
                  className="flex items-center gap-2 px-4 py-2 w-full bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm border border-white/5"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>
              </div>
            </div>

            {/* Quick links */}
            <nav aria-label="Быстрые ссылки">
              <h4
                id="quick-links-heading"
                className="font-bold text-sm uppercase tracking-wider text-[#D4A574] mb-6"
              >
                Разделы
              </h4>
              <ul className="space-y-3" aria-labelledby="quick-links-heading">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ExternalLink
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resources */}
            <nav aria-label="Полезные ресурсы">
              <h4
                id="resources-heading"
                className="font-bold text-sm uppercase tracking-wider text-[#D4A574] mb-6"
              >
                Ресурсы
              </h4>
              <ul className="space-y-3" aria-labelledby="resources-heading">
                {resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ExternalLink
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contacts */}
            <address className="not-italic">
              <h4
                id="contacts-heading"
                className="font-bold text-sm uppercase tracking-wider text-[#D4A574] mb-6"
              >
                Контакты
              </h4>
              <div className="space-y-4" aria-labelledby="contacts-heading">
                <a className="flex gap-3 group" href="https://yandex.ru/maps/25/pskov/house/ulitsa_kalinina_13/ZkEYdQRkTkUBQFttfXRxeXhqYw==/?ll=28.334671%2C57.808518&z=19" target="_blank">
                  <MapPin
                    className="w-5 h-5 text-[#DC2626] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                    {contacts.address}
                  </span>
                </a>
                <a
                  href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                  className="flex gap-3 group"
                  aria-label={`Позвонить: ${contacts.phone}`}
                >
                  <Phone
                    className="w-5 h-5 text-[#DC2626] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                    {contacts.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${contacts.email}`}
                  className="flex gap-3 group"
                  aria-label={`Написать на почту: ${contacts.email}`}
                >
                  <Mail
                    className="w-5 h-5 text-[#DC2626] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                    {contacts.email}
                  </span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto py-6 flex flex-col flex-wrap sm:flex-row justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy;&nbsp;2026&nbsp;ПОЧУ &laquo;Псковский кооперативный техникум&raquo;. Все права защищены.
            </p>
            <Link
              className="text-white/40 text-sm"
              href={"https://pskovpkt.ru/about/docs/Политика%20в%20отношении%20обработки%20персональных%20данных%20в%20ПОЧУ%20ПКТ.pdf"}
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
